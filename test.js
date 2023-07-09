const { VK, Keyboard } = require('vk-io');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const path = require('path')
const fs = require('fs');
const { readFile } = require('fs/promises');
const { setIntervalAsync, clearIntervalAsync } = require('set-interval-async/dynamic');
// const my_secret = 'vk1.a.LCC8fAMToOHshF-A-IC0oP-PE72rbe31_naAtVYAoUS5TVK6A2qWGDYpSjQtZb2fF2udGIn3dYvVZgD5CoOll2t2GrhiycX3qwOGgY-CXwA6habcnM0kAc90nntXhM5VQR4FNOsIiWrAhc6F4XzppONJtcp5qU00ZIs9_0s4pSxKftwlGeO0F_uu-vvltJYselTyAQX--Kfu3LIupzUBLg'
const params1 = { message: '🌊' };
const params2 = { message: '🔥' };
const params3 = { message: '🌀' };
const params4 = { message: '🐲' };
const params5 = { message: '🍃' };
const params6 = { message: '🍂' };
const params7 = { message: '🔥Тренировка🔥' };
const params8 = { message: 'Босс атака' };
const params9 = { message: 'Миссия 12' };
const params10 = { message: 'Бонус' };
let i = 0;
const userToken = `vk1.a.jKSelBylrJAH8s7UL6rJPJUApmxLU8uneIDQZD6pHCkJaTify1dJps0qNeuvQgt3xAFuIltQzFhK209JqwwfLLa8scjZk8Wh3MuRJyv-NiCLXIumqmrPl2m9BotQdXn_O6d_OmmjFtzsH_F-gsjnaVL6HvIMjwa7OS-Q6Bj9YOXAfaCLWIjAGCjt2pZPlg0Fy6JzuWb-4r1yUojMWe7t7Q`;
const botToken = `vk1.a.-o384-B4FMueHhor2B5ifzBASvbbfavAd3FqD3vdZoS5yxQN3Or9D6aKh22N59nfmoKrlCz9AUdZQ_MgQznIU7IK24driIarBckIIe-VeVVUwMcPFOz9pALgImdaFN09O_rpqTIIAKgFvmJwMEnXEkZvc4WRyS6gn3fxsV_Q7ugsQnVfuVvvZMf5e-utuO90Kpq79NFbPAM-JxFDJevJOQ`;
const vk = new VK({
    token: botToken,
    pollingGroupId: 220358890
});
const commands = [];
let usera = new VK({
    token: userToken
});
const { spawn } = require('child_process');



var http = require('http');

const hz = require(`./hz.json`)
const { btoa } = require('buffer');
const { isArray } = require('util');
const { KeyObject } = require('crypto');

function downloadFile(url, path) {
    return fetch(url).then(res => {
      res.body.pipe(fs.createWriteStream(path));
    });
}

async function downloadIBB(pageUrl, folder){
    const res = await fetch(pageUrl);
    const page = await res.text();
    const $ = cheerio.load(page);
    const imgUrl = $('link[rel="image_src"]').attr('href');
    const filename = path.basename(imgUrl);
    const filepath = path.join(folder,filename);
    const imgRes = await fetch(imgUrl);
    return new Promise(res=>{
      filestream = fs.createWriteStream(filepath);
      imgRes.body.pipe(filestream);
      filestream.on('finish',()=>res(filepath));
    });
  }
  

setInterval(async () => {
    await saveHz();
}, 300);

async function saveHz()
{
    require('fs').writeFileSync('./hz.json', JSON.stringify(hz, null, '\t'));
    return true;
}

function isNumber(num) {
	return typeof num === 'number' && !isNaN(num);
}

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Дохера!');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	},
    repl: (arg) => {
        let idk = ''
        idk = arg
        idk = idk.replace(/(\.|\,)/ig, '');
	    idk = idk.replace(/(к|k)/ig, '000');
	    idk = idk.replace(/(м|m)/ig, '000000');
        idk = parseInt(idk)
        return idk
    }
}

const { updates, snippets } = vk;

const send = async (param, token) => {
    let o = 0;
        while (o !== 1) {
            let message = await fetch(`https://api.vk.com/method/messages.send?access_token=${token}&random_id=0&peer_id=-206919766&v=5.131`, { method: 'POST', body: new URLSearchParams({ message: param }) });
            let json2 = await message.json();
            let error = await json2.error;
            if(error === undefined) {
                o = 1;
            }
            else {
                let id = await fetch(`https://api.vk.com/method/users.get?access_token=${token}&v=5.131`)
                id = await id.json()
                try {
                    id = await id.response[0].id
                } catch (e) {
                    continue;
                }
                let user = hz.find(x => x.id === id)
                let popa = await error.captcha_img
                let sid = await error.captcha_sid
                downloadFile(`${popa}`, './popa.png')
                    .catch(err=>console.error(err));
                const child = await spawn(`py`, [
                    'c:/krd/rabi.py',
                    `--sid`,
                    `${sid}`
                ]);

                user.sid = sid
                
                await new Promise((resolve) => setTimeout(resolve, 10000));

                let captcha = await readFile('./popa.json')
                captcha = JSON.parse(captcha?.toString())

                let key_parent = captcha.find(x => x.sid === user.sid)
                let key = key_parent.key

                message = await fetch(`https://api.vk.com/method/messages.send?access_token=${token}&random_id=0&peer_id=-206919766&v=5.131`, { method: 'POST', body: new URLSearchParams({ message: param, captcha_sid: user.sid, captcha_key: key }) });
                json2 = await message.json()
                error = await json2.error;
                if(error === undefined) {
                    o = 1;
                }
            }
    }
};

const hz3 = (bool) => {
    if(bool === true) {
        return "вкл"
    }
    else {
        return "выкл"
    }
}

const btnColor = (bool) => {
    if(bool === true) {
        return Keyboard.POSITIVE_COLOR
    }
    else {
        return Keyboard.NEGATIVE_COLOR
    }
}

updates.startPolling();
updates.on('message', async (msg) => {
    let refValue = null;
    if(Number(msg.senderId) <= 0) return;
    if(msg.isOutbox) return;
    const bot = (text, params) => {
        return msg.send(`${text}`, params);
    }
    
    if(/\[club218252023\|(.*)\]/i.test(msg.text)) msg.text = msg.text.replace(/\[club218252023\|(.*)\]/ig, '').trim();

    const command = commands.find(x => x[0].test(msg.text));

    let user = hz.find(x => x.id === msg.senderId)

    try {
        if(user.status === "mission number") {
        user.status = "commands"
        if(isNumber(parseInt(msg.text)) === false) {
            return bot(`Вы ввели не число!`, {
                keyboard: Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "Настройки",
                            payload: {
                                command: "settings"
                            },
                            color: Keyboard.PRIMARY_COLOR
                        })
                    ]
                ]).inline()
            })
        }
        else if(parseInt(msg.text) > 12 || parseInt(msg.text) < 1) {
            return bot(`Миссии с данным номером нет!`, {
                keyboard: Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "Настройки",
                            payload: {
                                command: "settings"
                            },
                            color: Keyboard.PRIMARY_COLOR
                        })
                    ]
                ]).inline()
            })
        }
        user.settings.mission.number = parseInt(msg.text)
        
        if(user.script == true) {
            await clearIntervalAsync(user.mission)
            user.mission = setIntervalAsync(async () => {
                if (Date.now() - user.timing2 > 3600000) {
                    await send( `Миссия ${user.settings.mission.number}`, user.token);
                    user.timing2 = Date.now();
                }
            }, 1000);
        }

        return bot('Текущие настройки:', {
            keyboard: Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: `Номер миссии: ${user.settings.mission.number}`,
                        payload: {
                            command: 'mission number'
                        },
                        color: Keyboard.PRIMARY_COLOR
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Атака босса: ${hz3(user.settings.boss)}`,
                        payload: {
                            command: 'boss'
                        },
                        color: btnColor(user.settings.boss)
                    }),
                    Keyboard.callbackButton({
                        label: `Миссии: ${hz3(user.settings.mission.toggle)}`,
                        payload: {
                            command: 'mission toggle'
                        },
                        color: btnColor(user.settings.mission.toggle)
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Тренировки: ${hz3(user.settings.train)}`,
                        payload: {
                            command: 'train'
                        },
                        color: btnColor(user.settings.train)
                    }),
                    Keyboard.callbackButton({
                        label: `Бонус: ${hz3(user.settings.bonus)}`,
                        payload: {
                            command: 'bonus'
                        },
                        color: btnColor(user.settings.bonus)
                    }),
                ]
            ]).inline()
            })
        }
    } catch (e) {

    }
    
    if(!command && !msg.eventPayload && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);

    if(command){
        msg.args = msg.text.match(command[0]);
        await command[1](msg, bot);
    }
});

updates.on('message_event', async (context, bot) => {
    if(!context.eventPayload) return;
    let user = hz.find(x => x.id === context.userId)
    let my_secret = user.token
    let messageId = await vk.api.messages.getByConversationMessageId({
        peer_id: context.peerId,
        conversation_message_ids: context.conversationMessageId
    });
    if(context.eventPayload.command == "boss") {
        user.settings.boss = !user.settings.boss
        await vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": 'Текущие настройки:',
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: `Номер миссии: ${user.settings.mission.number}`,
                        payload: {
                            command: 'mission number'
                        },
                        color: Keyboard.PRIMARY_COLOR
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Атака босса: ${hz3(user.settings.boss)}`,
                        payload: {
                            command: 'boss'
                        },
                        color: btnColor(user.settings.boss)
                    }),
                    Keyboard.callbackButton({
                        label: `Миссии: ${hz3(user.settings.mission.toggle)}`,
                        payload: {
                            command: 'mission toggle'
                        },
                        color: btnColor(user.settings.mission.toggle)
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Тренировки: ${hz3(user.settings.train)}`,
                        payload: {
                            command: 'train'
                        },
                        color: btnColor(user.settings.train)
                    }),
                    Keyboard.callbackButton({
                        label: `Бонус: ${hz3(user.settings.bonus)}`,
                        payload: {
                            command: 'bonus'
                        },
                        color: btnColor(user.settings.bonus)
                    }),
                ]
            ]).inline()
        })
        if(user.script == true) {
            if(user.settings.boss) {
                user.boss = setIntervalAsync(async () => {
                    if (Date.now() - user.timing > 1800000) {
                        await send('Босс атака', my_secret);
                        user.timing = Date.now();
                    }
                }, 1000); 
                return
            }
            await clearIntervalAsync(user.boss)
        }
    }
    else if(context.eventPayload.command == "mission toggle") {
        user.settings.mission.toggle = !user.settings.mission.toggle
        await vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": 'Текущие настройки:',
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: `Номер миссии: ${user.settings.mission.number}`,
                        payload: {
                            command: 'mission number'
                        },
                        color: Keyboard.PRIMARY_COLOR
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Атака босса: ${hz3(user.settings.boss)}`,
                        payload: {
                            command: 'boss'
                        },
                        color: btnColor(user.settings.boss)
                    }),
                    Keyboard.callbackButton({
                        label: `Миссии: ${hz3(user.settings.mission.toggle)}`,
                        payload: {
                            command: 'mission toggle'
                        },
                        color: btnColor(user.settings.mission.toggle)
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Тренировки: ${hz3(user.settings.train)}`,
                        payload: {
                            command: 'train'
                        },
                        color: btnColor(user.settings.train)
                    }),
                    Keyboard.callbackButton({
                        label: `Бонус: ${hz3(user.settings.bonus)}`,
                        payload: {
                            command: 'bonus'
                        },
                        color: btnColor(user.settings.bonus)
                    }),
                ]
            ]).inline()
        })
        if(user.script == true) {
            if(user.settings.mission.toggle) {
                user.mission = setIntervalAsync(async () => {
                    if (Date.now() - user.timing2 > 3600000) {
                        await send({ message: `Миссия ${user.settings.mission.number}` }, my_secret);
                        user.timing2 = Date.now();
                    }
                }, 1000);
                return
            }
            await clearIntervalAsync(user.mission)
        }
    }
    else if(context.eventPayload.command == "train") {
        user.settings.train = !user.settings.train
        await vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": 'Текущие настройки:',
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: `Номер миссии: ${user.settings.mission.number}`,
                        payload: {
                            command: 'mission number'
                        },
                        color: Keyboard.PRIMARY_COLOR
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Атака босса: ${hz3(user.settings.boss)}`,
                        payload: {
                            command: 'boss'
                        },
                        color: btnColor(user.settings.boss)
                    }),
                    Keyboard.callbackButton({
                        label: `Миссии: ${hz3(user.settings.mission.toggle)}`,
                        payload: {
                            command: 'mission toggle'
                        },
                        color: btnColor(user.settings.mission.toggle)
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Тренировки: ${hz3(user.settings.train)}`,
                        payload: {
                            command: 'train'
                        },
                        color: btnColor(user.settings.train)
                    }),
                    Keyboard.callbackButton({
                        label: `Бонус: ${hz3(user.settings.bonus)}`,
                        payload: {
                            command: 'bonus'
                        },
                        color: btnColor(user.settings.bonus)
                    }),
                ]
            ]).inline()
        })
        if(user.script == true) {
            if(user.settings.train) {
                user.train = setIntervalAsync(async () => {
                    let r = await fetch(`https://api.vk.com/method/messages.getHistory?access_token=${my_secret}&offset=-1&count=1&peer_id=-206919766&start_message_id=-1&v=5.131`);
                    let json = await r.json();
                    let text = await json.response.items
                    let offset = `-1`
                    if(text.lenght > 0) {
                        text = await json.response.items[0].text
                    }
                    else {
                        offset = `0`
                        r = await fetch(`https://api.vk.com/method/messages.getHistory?access_token=${my_secret}&offset=0&count=1&peer_id=-206919766&start_message_id=-1&v=5.131`);
                        json = await r.json()
                        text = await json.response.items[0].text
                    }
                    if(text === "🔥Тренировка🔥" && offset === `0`) {
                        offset = `-1`
                        r = await fetch(`https://api.vk.com/method/messages.getHistory?access_token=${my_secret}&offset=-1&count=1&peer_id=-206919766&start_message_id=-1&v=5.131`);
                        json = await r.json()
                        try {
                            text = await json.response.items[0].text
                        } catch (e) {
                            return;
                        }
                    }
                    else if(text === "🔥Тренировка🔥" && offset === `-1`) {
                        offset = `0`
                        r = await fetch(`https://api.vk.com/method/messages.getHistory?access_token=${my_secret}&offset=0&count=1&peer_id=-206919766&start_message_id=-1&v=5.131`);
                        json = await r.json()
                        text = await json.response.items[0].text
                    }
                    if (text === "• Тренировка началась...") {
                        const image = json.response.items[0].attachments[0].photo.id;
                        if (image === 457584088) {
                            await send('🌊', my_secret);
                            await new Promise((resolve) => setTimeout(resolve, 10100));
                            await send('🔥Тренировка🔥', my_secret);
                        } else if (image === 457584084) {
                            await send('🔥', my_secret);
                            await new Promise((resolve) => setTimeout(resolve, 10100));
                            await send('🔥Тренировка🔥', my_secret);
                        } else if (image === 457584085) {
                            await send('🌀', my_secret);
                            await new Promise((resolve) => setTimeout(resolve, 10100));
                            await send('🔥Тренировка🔥', my_secret);
                        } else if (image === 457584087) {
                            await send('🐲', my_secret);
                            await new Promise((resolve) => setTimeout(resolve, 10100));
                            await send('🔥Тренировка🔥', my_secret);
                        } else if (image === 457584089) {
                            await send('🍃' ,my_secret);
                            await new Promise((resolve) => setTimeout(resolve, 10100));
                            await send('🔥Тренировка🔥', my_secret);
                        } else if (image === 457584086) {
                            await send('🍂', my_secret);
                            await new Promise((resolve) => setTimeout(resolve, 10100));
                            await send('🔥Тренировка🔥', my_secret);
                        }
                    }
                    else if(text.indexOf("У вас бан аккаунта") != -1) {
                        bot(`У вас бан аккаунта!`)
                        user.script = false;
                        await clearIntervalAsync(user.boss)
                        await clearIntervalAsync(user.mission)
                        await clearIntervalAsync(user.train)
                        await clearIntervalAsync(user.bonus)
                    }
                    else {
                        await send('🔥Тренировка🔥', my_secret);
                    }
                }, 390)
                return
            }
            await clearIntervalAsync(user.train)
        }
    }
    else if(context.eventPayload.command == "bonus") {
        user.settings.bonus = !user.settings.bonus
        await vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": 'Текущие настройки:',
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: `Номер миссии: ${user.settings.mission.number}`,
                        payload: {
                            command: 'mission number'
                        },
                        color: Keyboard.PRIMARY_COLOR
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Атака босса: ${hz3(user.settings.boss)}`,
                        payload: {
                            command: 'boss'
                        },
                        color: btnColor(user.settings.boss)
                    }),
                    Keyboard.callbackButton({
                        label: `Миссии: ${hz3(user.settings.mission.toggle)}`,
                        payload: {
                            command: 'mission toggle'
                        },
                        color: btnColor(user.settings.mission.toggle)
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Тренировки: ${hz3(user.settings.train)}`,
                        payload: {
                            command: 'train'
                        },
                        color: btnColor(user.settings.train)
                    }),
                    Keyboard.callbackButton({
                        label: `Бонус: ${hz3(user.settings.bonus)}`,
                        payload: {
                            command: 'bonus'
                        },
                        color: btnColor(user.settings.bonus)
                    }),
                ]
            ]).inline()
        })
        if(user.script == true) {
            if(user.settings.bonus) {
                user.bonus = setIntervalAsync(async () => {
                    if (Date.now() - user.timing3 > 86400000) {
                        await send('Бонус', my_secret);
                        user.timing3 = Date.now();
                    }
                }, 1000);
                return
            }
            await clearIntervalAsync(user.bonus)
        }
    }
    else if(context.eventPayload.command == "mission number") {
        user.status = "mission number"
        await vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": 'Напишите номер миссии'
        })
    }
    else if(context.eventPayload.command == "settings") {
        await vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": 'Текущие настройки:',
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: `Номер миссии: ${user.settings.mission.number}`,
                        payload: {
                            command: 'mission number'
                        },
                        color: Keyboard.PRIMARY_COLOR
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Атака босса: ${hz3(user.settings.boss)}`,
                        payload: {
                            command: 'boss'
                        },
                        color: btnColor(user.settings.boss)
                    }),
                    Keyboard.callbackButton({
                        label: `Миссии: ${hz3(user.settings.mission.toggle)}`,
                        payload: {
                            command: 'mission toggle'
                        },
                        color: btnColor(user.settings.mission.toggle)
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: `Тренировки: ${hz3(user.settings.train)}`,
                        payload: {
                            command: 'train'
                        },
                        color: btnColor(user.settings.train)
                    }),
                    Keyboard.callbackButton({
                        label: `Бонус: ${hz3(user.settings.bonus)}`,
                        payload: {
                            command: 'bonus'
                        },
                        color: btnColor(user.settings.bonus)
                    }),
                ]
            ]).inline()
        })
    }
})

const cmd = {
    hear: (p, f) => {
        commands.push([p, f]);
    }
};

cmd.hear(/^(?:хуй)$/i, async (msg, bot) => {
    let hz2 = hz.find(x => x.id === msg.senderId)
    if(!hz2) return bot(`Вы не зарегистрированы!`)
    if(hz2.script === true) return bot(`Скрипт уже включен!`)
    let my_secret = hz2.token;
    if(hz2.settings.boss)
    {
        hz2.boss = setIntervalAsync(async () => {
            if (Date.now() - hz2.timing > 1800000) {
                await send('Босс атака', my_secret);
                hz2.timing = Date.now();
            }
        }, 1000);
    }
    if(hz2.settings.mission.toggle)
    {
        hz2.mission = setIntervalAsync(async () => {
            if (Date.now() - hz2.timing2 > 3600000) {
                await send(`Миссия ${hz2.settings.mission.number}`, my_secret);
                hz2.timing2 = Date.now();
            }
        }, 1000);
    }
    if(hz2.settings.train) 
    {
        hz2.train = setIntervalAsync(async () => {
            let r = await fetch(`https://api.vk.com/method/messages.getHistory?access_token=${my_secret}&offset=-1&count=1&peer_id=-206919766&start_message_id=-1&v=5.131`);
            let json = await r.json();
            let text = await json.response.items
            let offset = `-1`
            if(text.lenght > 0) {
                text = await json.response.items[0].text
            }
            else {
                offset = `0`
                r = await fetch(`https://api.vk.com/method/messages.getHistory?access_token=${my_secret}&offset=0&count=1&peer_id=-206919766&start_message_id=-1&v=5.131`);
                json = await r.json()
                text = await json.response.items[0].text
            }
            if(text === "🔥Тренировка🔥" && offset === `0`) {
                offset = `-1`
                r = await fetch(`https://api.vk.com/method/messages.getHistory?access_token=${my_secret}&offset=-1&count=1&peer_id=-206919766&start_message_id=-1&v=5.131`);
                json = await r.json()
                try {
                    text = await json.response.items[0].text
                } catch (e) {
                    return;
                }
            }
            else if(text === "🔥Тренировка🔥" && offset === `-1`) {
                offset = `0`
                r = await fetch(`https://api.vk.com/method/messages.getHistory?access_token=${my_secret}&offset=0&count=1&peer_id=-206919766&start_message_id=-1&v=5.131`);
                json = await r.json()
                text = await json.response.items[0].text
            }
            if (text === "• Тренировка началась...") {
                const image = json.response.items[0].attachments[0].photo.id;
                if (image === 457584088) {
                    await send('🌊', my_secret);
                    await new Promise((resolve) => setTimeout(resolve, 10100));
                    await send('🔥Тренировка🔥', my_secret);
                } else if (image === 457584084) {
                    await send('🔥', my_secret);
                    await new Promise((resolve) => setTimeout(resolve, 10100));
                    await send('🔥Тренировка🔥', my_secret);
                } else if (image === 457584085) {
                    await send('🌀', my_secret);
                    await new Promise((resolve) => setTimeout(resolve, 10100));
                    await send('🔥Тренировка🔥', my_secret);
                } else if (image === 457584087) {
                    await send('🐲', my_secret);
                    await new Promise((resolve) => setTimeout(resolve, 10100));
                    await send('🔥Тренировка🔥', my_secret);
                } else if (image === 457584089) {
                    await send('🍃' ,my_secret);
                    await new Promise((resolve) => setTimeout(resolve, 10100));
                    await send('🔥Тренировка🔥', my_secret);
                } else if (image === 457584086) {
                    await send('🍂', my_secret);
                    await new Promise((resolve) => setTimeout(resolve, 10100));
                    await send('🔥Тренировка🔥', my_secret);
                }
            }
            else if(text.indexOf("У вас бан аккаунта") != -1) {
                bot(`У вас бан аккаунта!`)
                let hz2 = hz.find(x => x.token === my_secret)
                hz2.script = false;
                bot(`Идёт выключение скрипта...`)
                await bot(`Ну тип выкл`)
                await clearIntervalAsync(hz2.boss)
                await clearIntervalAsync(hz2.mission)
                await clearIntervalAsync(hz2.train)
                await clearIntervalAsync(hz2.bonus)
            }
            else {
                await send('🔥Тренировка🔥', my_secret);
            }
        }, 390)
    }
    if(hz2.settings.bonus)
    {
        hz2.bonus = setIntervalAsync(async () => {
            if (Date.now() - hz2.timing3 > 86400000) {
                await send('Бонус', my_secret);
                hz2.timing3 = Date.now();
            }
        }, 1000)
    }
    hz2.script = true
    return bot(`Ну тип вкл`)
})

cmd.hear(/^(?:рег)\s(.*)$/i, async (msg, bot) => {
    let my_secret = msg.args[1]
    if(my_secret.indexOf(`https://oauth.vk.com/blank.html#access_token=`) !== -1) {
        my_secret = my_secret.match(/(?<=access_token=)(.*)(?=&expires_in=)/ig)
    }
    let hz2 = hz.find(x => x.id === msg.senderId)
    if(hz2) return bot(`Вы уже зарегистрированы!`)
    let id = await fetch(`https://api.vk.com/method/users.get?access_token=${my_secret}&v=5.131`)
    id = await id.json()
    id = await id.response[0].id
    if(id !== msg.senderId) return bot(`Вы написали не свой access token !!!`)
    hz.push({
        token: my_secret,
        id: id,
        boss: null,
        mission: null,
        train: null,
        bonus: null,
        settings: {
            mission: {
                number: 1,
                toggle: true
            },
            boss: true,
            train: true,
            bonus: true
        },
        status: "commands",
        script: false,
        timing: Date.now(),
        timing2: Date.now(),
        timing3: Date.now(),
		sid: null
    })    
    return bot(`Вы успешно зарегистрированы!`)
})

cmd.hear(/^(?:выкл)$/i, async (msg, bot) => {
    let hz2 = hz.find(x => x.id === msg.senderId)
    if(!hz2) return bot(`Вы не зарегистрированы!`)
    if(hz2.script === false) return bot(`Скрипт уже выключен!`)
    let my_secret = hz2.token;
    let id = await fetch(`https://api.vk.com/method/users.get?access_token=${my_secret}&v=5.131`)
    id = await id.json()
    id = await id.response[0].id
    if(id !== msg.senderId) return bot(`Вы написали не свой access token !!!`)
    bot(`Идёт выключение скрипта...`)
    hz2.script = false
    if(hz2.settings.boss) 
    {
        await clearIntervalAsync(hz2.boss)
    }
    if(hz2.settings.mission)
    {
        await clearIntervalAsync(hz2.mission)
    }
    if(hz2.settings.train)
    {
        await clearIntervalAsync(hz2.train)
    }
    if(hz2.settings.bonus)
    {
        await clearIntervalAsync(hz2.bonus)
    }
    return bot(`Ну тип выкл`)
})

cmd.hear(/^(?:помощь)$/i, async (msg, bot) => {
    return bot(`рег (токен от вк) - регистрация\nхуй - включение скрипта\nвыкл - выключение скрипта\nнастройки - настройки для скрипта`)
})

cmd.hear(/^(?:настройки)$/i, async (msg, bot) => {
    let hz2 = hz.find(x => x.id === msg.senderId)
    if(!hz2) return bot(`Вы не зарегистрированы!`)

    let text = 'Текущие настройки:'

    let missionButton = `Номер миссии: ${hz2.settings.mission.number}`

    return bot(text, {
        keyboard: Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                    label: `Номер миссии: ${hz2.settings.mission.number}`,
                    payload: {
                        command: 'mission number'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ],
            [
                Keyboard.callbackButton({
                    label: `Атака босса: ${hz3(hz2.settings.boss)}`,
                    payload: {
                        command: 'boss'
                    },
                    color: btnColor(hz2.settings.boss)
                }),
                Keyboard.callbackButton({
                    label: `Миссии: ${hz3(hz2.settings.mission.toggle)}`,
                    payload: {
                        command: 'mission toggle'
                    },
                    color: btnColor(hz2.settings.mission.toggle)
                })
            ],
            [
                Keyboard.callbackButton({
                    label: `Тренировки: ${hz3(hz2.settings.train)}`,
                    payload: {
                        command: 'train'
                    },
                    color: btnColor(hz2.settings.train)
                }),
                Keyboard.callbackButton({
                    label: `Бонус: ${hz3(hz2.settings.bonus)}`,
                    payload: {
                        command: 'bonus'
                    },
                    color: btnColor(hz2.settings.bonus)
                }),
            ]
        ]).inline()
    })
})