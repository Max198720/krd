const { VK, Keyboard } = require('vk-io');
const botToken = `vk1.a.WRrKnDI3sFHQ4PTUMzN6ZZjW5r746I2oYgPSGXn1TgCS9XaY-o4mbQI2Di-fz5u0erBR4pUvxzEXHiN6ZEvFpMOaJ4DXTuO0zHkjS8uzYeKsqRqI3AxR2rq8IRQxzselcLvurLaDj35DQg7h5nxVJmnW9mpQT9IchpAPJiVxvKe7bhBYy_ZTx4h07vMgts61F79zJR3XLPPuol1TFeBhvg`;
const vk = new VK({
token: botToken,
pollingGroupId: 220472407
})

const users = require(`./users.json`)

const commands = [];


setInterval(async () => {
await saveUsers();
}, 300);

async function saveUsers()
{
require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
return true;
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
text += `${int[i]}⃣`;
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

updates.startPolling();
updates.on('message', async (msg) => {
if(Number(msg.senderId) <= 0) return;
if(msg.isOutbox) return;
const bot = (text, params) => {
return msg.send(`${text}`, params);
}

const user = users.find(x => x.id === msg.senderId)
if(!user)
{
const [user_info] = await vk.api.users.get({
user_ids: msg.senderId,
fields: "sex"
})

users.push({
id: msg.senderId,
first_name: user_info.first_name,
last_name: user_info.last_name,
gender: user_info.sex,
adm: 0,
balance: 0,
rep_balance: 0,
ban: false,
vip: 0
})
}

const command = commands.find(x => x[0].test(msg.text));

msg.user = users.find(x => x.id === msg.senderId);

if(!command && !msg.eventPayload && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);

if(command){
msg.args = msg.text.match(command[0]);
await command[1](msg, bot);
}

if(msg.user.ban) return bot(`Вы забанены!`)
})

const cmd = {
hear: (p, f) => {
commands.push([p, f]);
}
};

cmd.hear(/^(?:начать)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
bot(`Здарова, ${user.first_name}\n\nБаланс: ${utils.sp(user.balance)}`)
})

cmd.hear(/^(?:клик)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
if(user.vip === 1) {
user.balance += 2
bot(`Ты сделал клик и получил +2 монетки к балансу за счет VIP!\n Баланс: ${utils.sp(user.balance)}`)
}
else if(user.vip != 1) {
user.balance += 1
bot(`Ты сделал клик и получил +1 монетку к балансу\n Баланс: ${utils.sp(user.balance)}`)
}
});

cmd.hear(/^(?:баланс)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
bot(`Твой баланс составляет ${utils.sp(user.balance)} монет!`)
})

cmd.hear(/^(?:помощь)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
bot(`Вот все команды бота: \n 🔱помощь \n 🔥клик \n 🎲баланс \n 👤акк \n 🎃бот \n 👑помощь вип \n 🎉репутация \n 🤝репутация обмен \n\n
Чтобы преобрести VIP - пишите @firstmember`, {
attachments: "photo675195902_457242435"
})
})

cmd.hear(/^(?:акк)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
bot(`📕Твой игровой аккаунт: \n🔮Имя: ${user.first_name} ${user.last_name}\n💰Баланс: ${utils.sp(user.balance)}\n🎉Репутация: ${utils.sp(user.rep_balance)} \n 🆔id: ${user.id}`, {
attachments: "photo675195902_457242435"
})
})

cmd.hear(/^(?:бот)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
bot(`Сам бот😡`, {
attachments: "photo675195902_457242435"
})
})

cmd.hear(/^(?:помощь вип)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
bot(`👑С VIP вы получаете в 2 раза больше монет за клик!👑\n Чтобы купить вип - пишите @firstmember`, {
attachments: "photo675195902_457242435"
})
})

cmd.hear(/^(?:репутация)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
bot(`Вы можете обменять монетки на репутацию, чтобы это сделать, напишите: \nРепутация обмен`, {
attachments: "photo675195902_457242435"
})
})

cmd.hear(/^(?:репутация обмен)$/i, async (msg, bot) => {
const user = users.find(x => x.id === msg.senderId)
if(!user) return;
if(user.balance >= 100) {
user.balance -= 100
user.rep_balance += 1
bot(`Вы успешно обменяли 100 монет на 1 репутацию`)
}
else if(user.balance < 100) {
bot(`У вас не хватает монет для обмена, вы можете купить их у @firstmember`)
}
})