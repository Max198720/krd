const { VK, Keyboard } = require('vk-io');
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

const Canvas = require('canvas')
const canvas = Canvas.createCanvas(1920, 768)
const ctx = canvas.getContext('2d')
const fs = require('fs')

const Image = Canvas.Image
const img = new Image()
img.src = 'popa.png'

ctx.font = '122pt WILD WORLD'

ctx.textBaseline = "middle"
ctx.strokeStyle = "black"
ctx.fillStyle = '#440000'
ctx.textAlign = "center"

var http = require('http');

const boss = require(`./boss.json`)

const shop = require(`./shop.json`)

const users = require(`./users.json`)

const clans = require(`./clans.json`);

const promos = require(`./promos.json`)

function getMaxOfArray(nummArray) {
    return Math.max.apply(null, nummArray)
}

function getMinOfArray(nummArray) {
    return Math.min.apply(null, nummArray)
}

const { btoa, kMaxLength } = require('buffer');
const { isArray } = require('util');
const { KeyObject } = require('crypto');

setInterval(async () => {
    await saveUsers();
}, 300);

setInterval(async () => {
    await saveBoss();
}, 300);

setInterval(async () => {
    await saveClans();
}, 300);

setInterval(async () => {
    await savePromos();
}, 300);

async function saveUsers()
{
    require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
    return true;
}

async function saveBoss()
{
    require('fs').writeFileSync('./boss.json', JSON.stringify(boss, null, '\t'));
    return true;
}

async function saveClans()
{
    require('fs').writeFileSync('./clans.json', JSON.stringify(clans, null, '\t'));
    return true;
}

async function savePromos()
{
    require('fs').writeFileSync('./promos.json', JSON.stringify(promos, null, '\t'));
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


let teacherTraining = [`Гию Томиока`, `Саконджи Урокодаки`, `Мицури Канроджи`, `Кёджуро Ренгоку`, `Обанай Игуро`, `Санеми Шинадзугава`, `Муичиро Токито`, `Гёмей Химеджима`, `Шинобу Кочо`, `Тенген Узуй`]

function mixarr(arr) {
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
}

let attachments = [
    {
        attachment: `photo-218252023_457239025`,
        teacher: `Гию Томиока`
    },
    {
        attachment: `photo-218252023_457239026`,
        teacher: `Саконджи Урокодаки`
    },
    {
        attachment: `photo-218252023_457239027`,
        teacher: `Мицури Канроджи`
    },
    {
        attachment: `photo-218252023_457239028`,
        teacher: `Кёджуро Ренгоку`
    },
    {
        attachment: `photo-218252023_457239029`,
        teacher: `Обанай Игуро`
    },
    {
        attachment: `photo-218252023_457239030`,
        teacher: `Санеми Шинадзугава`
    },
    {
        attachment: `photo-218252023_457239031`,
        teacher: `Муичиро Токито`
    },
    {
        attachment: `photo-218252023_457239427`,
        teacher: `Гёмей Химеджима`
    },
    {
        attachment: `photo-218252023_457239033`,
        teacher: `Шинобу Кочо`
    },
    {
        attachment: `photo-218252023_457239034`,
        teacher: `Тенген Узуй`
    }
]

const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (msg) => {
    let refValue = null;
    if(Number(msg.senderId) <= 0) return;
    if(msg.isOutbox) return;
    const bot = (text, params) => {
        return msg.send(`${text}`, params);
    }

    if(msg.referralValue)
    {
        if(atob(msg.referralValue).indexOf('cid') !== -1)
        {
            refValue = atob(msg.referralValue)
            refValue = refValue.replace('cid', '')
        }
    }
    else {
        refValue = null
    }
    
    if(/\[public214188938\|(.*)\]/i.test(msg.text)) msg.text = msg.text.replace(/\[public214188938\|(.*)\]/ig, '').trim();
    if(!users.find(x => x.id === msg.senderId))
    {
        const [user_info] = await vk.api.users.get({ user_id: msg.senderId });
        const date = new Date();
        users.push({
            uid: users.length,
            id: msg.senderId,
            teacher: null,
            nickname: `${user_info.first_name} ${user_info.last_name}`,
            money: 0,
            timers: {
                bonus: 0,
                training: 0,
                boss: 0,
                cboss: 0
            },
            lvl: 1,
            exp: 0,
            nextExp: 100,
            needCall: null,
            strenght: 0,
            ban_info: {
                ban: false,
                reason: "",
                adm: null
            },
            boss_damage: 0,
            clan: null,
            adm: false
        });
        if(!msg.isChat) {
            return bot(`Поздравляем, вы зарегистрировались в боте!✅
            Выберите себе наставника и продвиньте его в топе!🔍
            За каждую тренировку с вашим наставником, ему прибавляются баллы.➕
            Каждый месяц баллы будут обнуляться и каждому ученику наставника, находящегося в топе с 1-3 места, будут давать некий бонус🙂`, {
                keyboard: Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: 'Гию Томиока',
                            payload: {
                                command: "confirm",
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Гию Томиока`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239025`,
                                ref_value: refValue
                            }
                        }),
                        Keyboard.callbackButton({
                            label: 'Саконджи Урокодаки',
                            payload: {
                                command: "confirm",
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Саконджи Урокодаки`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239026`,
                                ref_value: refValue
                            }
                        }),
                    ],
                    [
                        Keyboard.callbackButton({
                            label: 'Мицури Канроджи',
                            payload: {
                                command: "confirm",
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Мицури Канроджи`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239027`,
                                ref_value: refValue
                            }
                        }),
                        Keyboard.callbackButton({
                            label: 'Кёджуро Ренгоку',
                            payload: {
                                command: "confirm",
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Кёджуро Ренгоку`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239028`,
                                ref_value: refValue
                            }
                        })
                    ],
                    [
                        Keyboard.callbackButton({
                            label: "Обанай Игуро",
                            payload: {
                                command: "confirm",
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Обанай Игуро`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239029`,
                                ref_value: refValue
                            }
                        }),
                        Keyboard.callbackButton({
                            label: "Санеми Шинадзугава",
                            payload: {
                                command: 'confirm',
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Санеми Шинадзугава`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239030`,
                                ref_value: refValue
                            }
                        })
                    ],
                    [
                        Keyboard.callbackButton({
                            label: "Муичиро Токито",
                            payload: {
                                command: 'confirm',
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Муичиро Токито`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239031`,
                                ref_value: refValue
                            }
                        }),
                        Keyboard.callbackButton({
                            label: "Гёмей Химеджима",
                            payload: {
                                command: 'confirm',
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Гёмей Химеджима`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239427`,
                                ref_value: refValue
                            }
                        })
                    ],
                    [
                        Keyboard.callbackButton({
                            label: "Шинобу Кочо",
                            payload: {
                                command: 'confirm',
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Шинобу Кочо`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239033`,
                                ref_value: refValue
                            }
                        }),
                        Keyboard.callbackButton({
                            label: "Тенген Узуй",
                            payload: {
                                command: 'confirm',
                                commandYes: "setTeacherY",
                                commandNo: "backTeacher",
                                name: `Тенген Узуй`,
                                text: `Вы выбрали - [hz].\nВы уверены?`,
                                attachment: `photo-218252023_457239034`,
                                ref_value: refValue
                            }
                        })
                    ]
                ]).inline()
            })
        }
    }

    const command = commands.find(x => x[0].test(msg.text));

    msg.user = users.find(x => x.id === msg.senderId);

    if(msg.user.ban_info.ban === true && msg.isChat) {
        return
    }

    if(msg.user.ban_info.ban === true && !msg.isChat) {
        let adm = users.find(x => x.id === msg.user.ban_info.adm)
        return bot(`🚫Вы были забанены администратором [id${adm.id}|${adm.nickname}]🚫\nПричина: ${msg.user.ban_info.reason}`)
    }

    if(!msg.user.teacher && !msg.isChat) return bot(`Для продолжения необходимо выбрать наставника!`, {keyboard: Keyboard.keyboard([
        [
            Keyboard.callbackButton({
                label: 'Гию Томиока',
                payload: {
                    command: "confirm",
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Гию Томиока`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239025`,
                    ref_value: refValue
                }
            }),
            Keyboard.callbackButton({
                label: 'Саконджи Урокодаки',
                payload: {
                    command: "confirm",
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Саконджи Урокодаки`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239026`,
                    ref_value: refValue
                }
            }),
        ],
        [
            Keyboard.callbackButton({
                label: 'Мицури Канроджи',
                payload: {
                    command: "confirm",
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Мицури Канроджи`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239027`,
                    ref_value: refValue
                }
            }),
            Keyboard.callbackButton({
                label: 'Кёджуро Ренгоку',
                payload: {
                    command: "confirm",
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Кёджуро Ренгоку`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239028`,
                    ref_value: refValue
                }
            })
        ],
        [
            Keyboard.callbackButton({
                label: "Обанай Игуро",
                payload: {
                    command: "confirm",
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Обанай Игуро`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239029`,
                    ref_value: refValue
                }
            }),
            Keyboard.callbackButton({
                label: "Санеми Шинадзугава",
                payload: {
                    command: 'confirm',
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Санеми Шинадзугава`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239030`,
                    ref_value: refValue
                }
            })
        ],
        [
            Keyboard.callbackButton({
                label: "Муичиро Токито",
                payload: {
                    command: 'confirm',
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Муичиро Токито`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239031`,
                    ref_value: refValue
                }
            }),
            Keyboard.callbackButton({
                label: "Гёмей Химеджима",
                payload: {
                    command: 'confirm',
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Гёмей Химеджима`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239427`,
                    ref_value: refValue
                }
            })
        ],
        [
            Keyboard.callbackButton({
                label: "Шинобу Кочо",
                payload: {
                    command: 'confirm',
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Шинобу Кочо`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239033`,
                    ref_value: refValue
                }
            }),
            Keyboard.callbackButton({
                label: "Тенген Узуй",
                payload: {
                    command: 'confirm',
                    commandYes: "setTeacherY",
                    commandNo: "backTeacher",
                    name: `Тенген Узуй`,
                    text: `Вы выбрали - [hz].\nВы уверены?`,
                    attachment: `photo-218252023_457239034`,
                    ref_value: refValue
                }
            })
        ]
    ]).inline()});

    if(!msg.user.teacher && command && msg.isChat) {
        bot(`Для дальнейшей игры перейдите в ЛС с ботом.`)
        return vk.api.messages.send({
            user_id: msg.senderId,
            peer_id: msg.senderId,
            random_id: 0,
            message: `Для продолжения необходимо выбрать наставника!`,
            keyboard: Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: 'Гию Томиока',
                        payload: {
                            command: "confirm",
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Гию Томиока`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239025`,
                            ref_value: refValue
                        }
                    }),
                    Keyboard.callbackButton({
                        label: 'Саконджи Урокодаки',
                        payload: {
                            command: "confirm",
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Саконджи Урокодаки`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239026`,
                            ref_value: refValue
                        }
                    }),
                ],
                [
                    Keyboard.callbackButton({
                        label: 'Мицури Канроджи',
                        payload: {
                            command: "confirm",
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Мицури Канроджи`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239027`,
                            ref_value: refValue
                        }
                    }),
                    Keyboard.callbackButton({
                        label: 'Кёджуро Ренгоку',
                        payload: {
                            command: "confirm",
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Кёджуро Ренгоку`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239028`,
                            ref_value: refValue
                        }
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: "Обанай Игуро",
                        payload: {
                            command: "confirm",
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Обанай Игуро`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239029`,
                            ref_value: refValue
                        }
                    }),
                    Keyboard.callbackButton({
                        label: "Санеми Шинадзугава",
                        payload: {
                            command: 'confirm',
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Санеми Шинадзугава`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239030`,
                            ref_value: refValue
                        }
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: "Муичиро Токито",
                        payload: {
                            command: 'confirm',
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Муичиро Токито`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239031`,
                            ref_value: refValue
                        }
                    }),
                    Keyboard.callbackButton({
                        label: "Гёмей Химеджима",
                        payload: {
                            command: 'confirm',
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Гёмей Химеджима`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239427`,
                            ref_value: refValue
                        }
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: "Шинобу Кочо",
                        payload: {
                            command: 'confirm',
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Шинобу Кочо`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239033`,
                            ref_value: refValue
                        }
                    }),
                    Keyboard.callbackButton({
                        label: "Тенген Узуй",
                        payload: {
                            command: 'confirm',
                            commandYes: "setTeacherY",
                            commandNo: "backTeacher",
                            name: `Тенген Узуй`,
                            text: `Вы выбрали - [hz].\nВы уверены?`,
                            attachment: `photo-218252023_457239034`,
                            ref_value: refValue
                        }
                    })
                ]
            ]).inline()
        })
    }

    if(msg.referralValue)
    {
        if(atob(msg.referralValue).indexOf('cid') !== -1)
        {
            refValue = atob(msg.referralValue)
            refValue = refValue.replace('cid', '')
    
            if(msg.user.clan === null) {
                let clan = clans.find(x => x.cid === Number(refValue))
                if(clan.delete === true || !clan) return bot(`Клан не найден или был распущен!`)
                msg.user.clan = clan.cid
                clan.members.push(msg.user.uid)
    
                return bot(`Вы перешли по ссылке, которая автоматически добавляет вас в клан. Теперь вы состоите в клане ${clan.name}`, {
                    attachment: clan.icon
                })
            }
        }
    }

    
    if(!command && !msg.eventPayload && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);

    if(command){
        msg.args = msg.text.match(command[0]);
        await command[1](msg, bot);
    }
});
updates.on('message_event', async (context, bot) => {
    if(!context.eventPayload) return;
    context.user = users.find(x => x.id === context.userId)
    let text1;
    let text;
    let messageId = await vk.api.messages.getByConversationMessageId({
        peer_id: context.peerId,
        conversation_message_ids: context.conversationMessageId
    });
    if(context.eventPayload.command === 'confirm')
    {
        let refValue;
        text1 = context.eventPayload.name;
        text = context.eventPayload.text.replace(/\[hz\]/ig, `${text1}`)
        if(context.eventPayload.ref_value !== null)
        {
            refValue = context.eventPayload.ref_value
        }
        else {
            refValue = null
        }

        if(!context.eventPayload.clan) await vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `${text}`,
            "attachment": `${context.eventPayload.attachment}`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Да",
                        payload: {
                            command: `${context.eventPayload.commandYes}`,
                            value: `${context.eventPayload.name}`,
                            attachment: `${context.eventPayload.attachment}`,
                            ref_value: refValue
                        },
                        color: Keyboard.POSITIVE_COLOR
                    }),

                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: `${context.eventPayload.commandNo}`
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline()
        })
        else {
            await vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `${text}`,
                "attachment": `${context.eventPayload.attachment}`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "Да",
                            payload: {
                                command: `${context.eventPayload.commandYes}`,
                                value: `${context.eventPayload.name}`,
                                attachment: `${context.eventPayload.attachment}`,
                                ref_value: refValue,
                                clan: context.eventPayload.clan
                            },
                            color: Keyboard.POSITIVE_COLOR
                        }),
    
                        Keyboard.callbackButton({
                            label: "Назад",
                            payload: {
                                command: `${context.eventPayload.commandNo}`,
                                clan: context.eventPayload.clan
                            },
                            color: Keyboard.NEGATIVE_COLOR
                        })
                    ]
                ]).inline()
            })
        }
    }
    else if(context.eventPayload.command === `setTeacherY`)
    {
        text1 = context.eventPayload.value;
        context.user.teacher = `${text1}`
        vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "attachment": `${context.eventPayload.attachment}`,
            "message": `Успешно! Ваш наставник - ${text1}. Не разочаруйте его. Для дальнейшей игры рекомендуется прописать "Помощь"`
        })
        if(context.eventPayload.ref_value !== null)
        {
            let clan = clans.find(x => x.cid === Number(context.eventPayload.ref_value))
            clan.members.push(context.user.uid)
            context.user.clan = clan.cid

            vk.api.messages.send({
                "peer_id": context.peerId,
                "user_id": context.userId,
                "attachment": clan.icon,
                "message": `Вы перешли по ссылке, которая автоматически добавляет вас в клан. Теперь вы состоите в клане ${clan.name}`,
                "random_id": 0
            })
        }
        return
    }
    else if(context.eventPayload.command === `backTeacher`)
    {
        return vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Для продолжения необходимо выбрать наставника!`,
            "keyboard": kbTeachers
        })
    }
    else if(context.eventPayload.command === `confirmInvite`)
    {
        let clan = clans.find(x => x.cid === context.eventPayload.clan)
        context.user.clan = clan.cid

        clan.members.push(context.user.uid)
        return vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Вы успешно вступили в клан ${clan.name}`,
            "attachment": clan.icon
        })

    }
    else if(context.eventPayload.command === `denyInvite`)
    {
        let clan = clans.find(x => x.cid === context.eventPayload.clan)
        return vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Вы отклонили заявку на вступление в клан ${clan.name}`
        })
    }
    else if(context.eventPayload.command === `train`)
    {
        if(context.user.id !== context.eventPayload.user) return;
        if(context.user.timers.training > getUnix()) return vk.api.messages.send({
            user_id: context.userId,
            peer_id: context.peerId,
            message: `Для следующей тренировки подождите ${unixStampLeft(context.user.timers.training - Date.now())}`
        })

        if(context.eventPayload.isChat) {
            context.user.timers.training = getUnix() + 60000
        }
        else {
            context.user.timers.training = getUnix() + 10000
        }

        if(context.eventPayload.teacher === context.user.needCall)
        {
            let random_strenght = utils.random(1, 50)
            context.user.strenght += random_strenght
            context.user.exp += 1
            if(context.user.exp >= context.user.nextExp) {
                context.user.lvl += 1;
                context.user.exp = 0
                context.user.nextExp += 50
            }
            if(context.eventPayload.isChat) {
                return vk.api.messages.edit({
                    "attachment": attachments.find(x => x.teacher === `${context.eventPayload.teacher}`)['attachment'],
                    "peer_id": context.peerId,
                    "conversation_message_id": messageId['items'][0].conversation_message_id,
                    "message": `Вы успешно прошли тренировку!🔥\nВы получили:\n\n•${random_strenght} очков владения клинком⚔.\nПродолжайте в том же духе!✅\nОжидание за тренировки в беседе увеличено до 1 минуты!`,
                    "keyboard": Keyboard.keyboard([
                        [
                            Keyboard.textButton({
                                label: `Тренировка💪`,
                                color: Keyboard.NEGATIVE_COLOR
                            })
                        ]
                    ]).inline()
                });
            }

            return vk.api.messages.edit({
                "attachment": attachments.find(x => x.teacher === `${context.eventPayload.teacher}`)['attachment'],
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `Вы успешно прошли тренировку!🔥\nВы получили:\n\n•${random_strenght} очков владения клинком⚔.\nПродолжайте в том же духе!✅`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.textButton({
                            label: `Тренировка💪`,
                            color: Keyboard.NEGATIVE_COLOR
                        })
                    ]
                ]).inline()
            });
        }
        else {
            let random_strenght = utils.random(0, 5)

            if(context.eventPayload.isChat) {
                if(random_strenght > context.user.strenght || random_strenght === 0) return vk.api.messages.edit({
                    "peer_id": context.peerId,
                    "conversation_message_id": messageId['items'][0].conversation_message_id,
                    "message": `Вы нажали не на ту кнопку! Попробуйте ещё раз через 1 минуту(ожидание увеличино из-за тренировок в беседе). С вас не было взято владение. `
                });
                else {
                   context.user.strenght -= random_strenght
                   return vk.api.messages.edit({
                    "peer_id": context.peerId,
                    "conversation_message_id": messageId['items'][0].conversation_message_id,
                    "message": `Вы нажали не на ту кнопку! Попробуйте ещё раз через 1 минуту(ожидание увеличино из-за тренировок в беседе). С вас была взята плата в виде ${random_strenght} владения. Ваше владение - ${utils.sp(context.user.strenght)}`
                   });
                }
            }

            if(random_strenght > context.user.strenght || random_strenght === 0) return vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `Вы нажали не на ту кнопку! Попробуйте ещё раз через 10 секунд. С вас не было взято владение. `
            });
            else {
               context.user.strenght -= random_strenght
               return vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `Вы нажали не на ту кнопку! Попробуйте ещё раз через 10 секунд. С вас была взята плата в виде ${random_strenght} владения. Ваше владение - ${utils.sp(context.user.strenght)}`
               });
            }
        }
    }
    else if(context.eventPayload.command === `members`)
    {
        let clan = clans.find(x => x.cid === context.eventPayload.clan)

        let text = `Участники клана ${clan.name}:\n\n`

        let text2 = ''

        for(let i = 0; i in clan.members; i++)
        {
            let member = users.find(x => x.uid === clan.members[i])
            if(text2 === '')
            {
                text2 = text2 + `[id${member.id}|${member.nickname}]`
            }
            else
            {
                text2 = text2 + `, [id${member.id}|${member.nickname}]`
            }

        }
        text += text2
        return vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `${text}`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: `backClan`,
                            clan: clan.cid
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline()
        });
    }
    else if(context.eventPayload.command === `backClan`)
    {
        let clan = clans.find(x => x.cid === context.eventPayload.clan)
        let clan_keyboard1 = Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                    label: "Участники",
                    payload: {
                        command: `members`,
                        clan: clan.cid
                    },
                    color: Keyboard.POSITIVE_COLOR
                }),
        
                Keyboard.callbackButton({
                    label: "Босс",
                    payload: {
                        command: `showClanBoss`,
                        clan: clan.cid
                    },
                    color: Keyboard.NEGATIVE_COLOR
                })
            ]
        ]).inline()

        let clan_keyboard2 = Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                    label: "Участники",
                    payload: {
                        command: `members`,
                        clan: clan.cid
                    },
                    color: Keyboard.POSITIVE_COLOR
                }),
        
                Keyboard.callbackButton({
                    label: "Босс",
                    payload: {
                        command: `showClanBoss`,
                        clan: clan.cid
                    },
                    color: Keyboard.NEGATIVE_COLOR
                })
            ],
            [
                Keyboard.callbackButton({
                    label: "⚙️Управление",
                    payload: {
                        command: `clanSettings`,
                        clan: clan.cid
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ]).inline()

        let owner = users.find(x => x.uid === clan.owner)

        if(owner.uid === context.user.uid) {
            return vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `Название клана: ${clan.name}\n\nГлава клана: [id${owner.id}|${owner.nickname}]\nКол-во участников: ${clan.members.length}\nРепутация: ${utils.sp(clan.reputation)}\nСсылка для приглашения: ${clan.link.short_url}`,
                "keyboard": clan_keyboard2,
                "attachment": clan.icon
            })    
        }

        else{
            return vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `Название клана: ${clan.name}\n\nГлава клана: [id${owner.id}|${owner.nickname}]\nКол-во участников: ${clan.members.length}\nРепутация: ${utils.sp(clan.reputation)}\nСсылка для приглашения: ${clan.link.short_url}`,
                "keyboard": clan_keyboard1,
                "attachment": clan.icon
            })    
        }
        
        
    }
    else if(context.eventPayload.command === 'createClanBoss')
    {
    	if(context.user.uid !== context.eventPayload.user) return
    	let clan = clans.find(x => x.cid === context.eventPayload.clan)
    	let boss = context.eventPayload.boss
    	    
    	let icon = boss.icon
    	    
    	clan.boss.name = `${boss.name}`
    	clan.boss.hp = boss.hp
    	clan.boss.icon = icon
        clan.boss.maxHp = boss.hp
    	    
    	return vk.api.messages.edit({
    	    "peer_id": context.peerId,
    	    "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Клановый босс для клана ${clan.name} создан!\n\nИмя: ${boss.name}\nХП: ${utils.sp(boss.hp)}`,
            "attachment": icon
    	})
    }
    else if(context.eventPayload.command === `showClanBoss`)
    {
        let clan = clans.find(x => x.cid === context.eventPayload.clan)
        let boss = clan.boss
        if(boss.name === null)
        {
            return vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `У клана ${clan.name} не установлен клановый босс!`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "Назад",
                            payload: {
                                command: 'backClan',
                                clan: clan.cid,
                            },
                            color: Keyboard.NEGATIVE_COLOR
                        })
                    ]
                ]).inline()
            })
        }

        return vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Клановый босс клана ${clan.name}:\n\nИмя: ${boss.name}\nХП: ${utils.sp(boss.hp)}`,
            "attachment": `${boss.icon}`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: 'backClan',
                            clan: clan.cid
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline()
        })
    }
    else if(context.eventPayload.command === `setNick`) {
        let nick = context.eventPayload.nick
        context.user.nickname = nick

        return vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Ник успешно установлен! Ваш ник: ${nick}`
        })
    }
    else if(context.eventPayload.command === `destroyClan`) {
        let clan = clans.find(x => x.cid === context.eventPayload.clan)
        let owner = users.find(x => x.uid === clan.owner)
        if(context.userId !== owner.id) return;
        for(let i = 0; i in clan.members; i++) {
            let user = users.find(x => x.uid === clan.members[i])
            user.clan = null;
            if(clan.members[i] === owner.uid) continue;
            vk.api.messages.send({
                "peer_id": user.id,
                "user_id": user.id,
                "message": `Глава [id${owner.id}|${owner.nickname}] распустил клан ${clan.name}!`,
                "attachment": `${clan.icon}`,
                "random_id": 0
            })
        }
        vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Вы успешно распустили клан ${clan.name}`,
            "attachment": `${clan.icon}`     
        })
        clan.delete = true;
        clan.name = ""

    }
    else if(context.eventPayload.command === `clanSettings`) {
        let clan = clans.find(x => x.cid === context.eventPayload.clan)
        let owner = users.find(x => x.uid === clan.owner)
        if(context.userId !== owner.id) return;
        vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Управление кланом:`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Распустить клан",
                        payload: {
                            command: `confirm`,
                            commandYes: `destroyClan`,
                            commandNo: `backClan`,
                            name: `${clan.name}`,
                            text: `Вы хотите распустить клан [hz]?`,
                            clan: clan.cid,
                            attachment: clan.icon
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    }),
                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: 'backClan',
                            clan: clan.cid
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline()
        })
    }
    else if(context.eventPayload.command === `addPromo`) {
        if(context.userId !== context.eventPayload.user) return;

        ctx.clearRect(0, 0, 1920, 768)
        ctx.drawImage(img, 0, 0, 1920, 768)
        ctx.fillText(`${context.eventPayload.promo}`, 960, 384)
        ctx.lineWidth = 4
        ctx.strokeText(`${context.eventPayload.promo}`, 960, 384)

        const loh = canvas.toBuffer()

        const loh2 = await usera.upload.wallPhoto({
            source: {
                value: loh
            }
        })

        const loh3 = await vk.upload.messagePhoto({
            source: {
                value: loh
            }
        })

        const post = await usera.api.wall.post({
            "message": `Новый промокод!!!\n\n${context.eventPayload.strenght} владения\n${context.eventPayload.money} йен\n${context.eventPayload.activations} активаций\n\nДля активации: "промо ${context.eventPayload.promo}"`,
            "attachments": loh2.toString(),
            "owner_id": -218252023
        })

        promos.push({
            strenght: context.eventPayload.strenght,
            money: context.eventPayload.money,
            promo: context.eventPayload.promo,
            activations: context.eventPayload.activations,
            users: [],
            post_id: post.post_id
        })

        await vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Промокод "${context.eventPayload.promo}" успешно создан!\n\nВладение: ${context.eventPayload.strenght}\n${context.eventPayload.money} йен\nАктиваций: ${context.eventPayload.activations}`,
            "attachment": loh3.toString()
        })
    }
    else if(context.eventPayload.command === `topStrenght`) {
        let top = [];
        let userp = users.find(x => x.id === context.userId)

        users.map(x => {
            top.push({ strenght: x.strenght, nick: x.nickname, id: x.id })
        })

        top.sort((a, b) => {
            return b.strenght - a.strenght
        })

        let text = ``;

        const find = () => {
            let pos = 10000;

            for (let i = 0; i < top.length; i++) {
                if(top[i].id === context.userId) return pos = i;
            }

            return pos;
        }

        if(users.length >= 10) {
            for (let i = 0; i < 10; i++) {
                if(!top[i]) return;
                const user = top[i]
                text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.nick}) — ${utils.sp(user.strenght)}\n`
            }
        } else {
            for (let i = 0; i < users.length; i++) {
                if(!top[i]) return;
                const user = top[i]
                text += `${i === users.length - 1 ? `${users.length}&#8419;` : `${i + 1}&#8419;`} @id${user.id} (${user.nick}) — ${utils.sp(user.strenght)}\n`
            }
        }

        vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `топ:
            ${text}
    —————————————————
    ${utils.gi(find() + 1)} ${userp.nickname} — ${utils.sp(userp.strenght)}`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: 'backTop'
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline()
        })
    }
    else if(context.eventPayload.command === `topMoney`) {
        let top = [];
        let userp = users.find(x => x.id === context.userId)

        users.map(x => {
            top.push({ money: x.money, nick: x.nickname, id: x.id })
        })

        top.sort((a, b) => {
            return b.money - a.money
        })

        let text = ``;

        const find = () => {
            let pos = 10000;

            for (let i = 0; i < top.length; i++) {
                if(top[i].id === context.userId) return pos = i;
            }

            return pos;
        }

        if(users.length >= 10) {
            for (let i = 0; i < 10; i++) {
                if(!top[i]) return;
                const user = top[i]
                text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.nick}) — ${utils.sp(user.money)}\n`
            }
        } else {
            for (let i = 0; i < users.length; i++) {
                if(!top[i]) return;
                const user = top[i]
                text += `${i === users.length - 1 ? `${users.length}&#8419;` : `${i + 1}&#8419;`} @id${user.id} (${user.nick}) — ${utils.sp(user.money)}\n`
            }
        }

        vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `топ:
            ${text}
    —————————————————
    ${utils.gi(find() + 1)} ${userp.nickname} — ${utils.sp(userp.money)}`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: 'backTop'
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline()
        })
    }
    else if(context.eventPayload.command === `topClans`) {
        let top = [];
        let userp = users.find(x => x.id === context.userId)
        let clanp = clans.find(x => x.cid === userp.clan);

        clans.map(x => {
            top.push({ reputation: x.reputation, name: x.name, cid: x.cid })
        })

        top.sort((a, b) => {
            return b.reputation - a.reputation
        })

        let text = ``;

        const find = () => {
            let pos = 10000;

            for (let i = 0; i < top.length; i++) {
                if(top[i].cid === clanp.cid) return pos = i;
            }

            return pos;
        }

        if(clans.length >= 10) {
            for (let i = 0; i < 10; i++) {
                if(!top[i]) return;
                const clan = top[i]
                text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${clan.name} — ${utils.sp(clan.reputation)}\n`
            }
        } else {
            for (let i = 0; i < clans.length; i++) {
                if(!top[i]) return;
                const clan = top[i]
                text += `${i === clans.length - 1 ? `${clans.length}&#8419;` : `${i + 1}&#8419;`} ${clan.name} — ${utils.sp(clan.reputation)}\n`
            }
        }

        if(clanp === undefined) vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `топ:
            ${text}`
        })
        else {
            vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `топ:
                ${text}
        —————————————————
        ${utils.gi(find() + 1)} ${clanp.name} — ${utils.sp(clanp.reputation)}`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "Назад",
                            payload: {
                                command: 'backTop'
                            },
                            color: Keyboard.NEGATIVE_COLOR
                        })
                    ]
                ]).inline()
            })
        }
    }
    else if(context.eventPayload.command === `topLvl`) {
        let top = [];
        let userp = users.find(x => x.id === context.userId)

        users.map(x => {
            top.push({ lvl: x.lvl, nick: x.nickname, id: x.id })
        })

        top.sort((a, b) => {
            return b.lvl - a.lvl
        })

        let text = ``;

        const find = () => {
            let pos = 10000;

            for (let i = 0; i < top.length; i++) {
                if(top[i].id === context.userId) return pos = i;
            }

            return pos;
        }

        if(users.length >= 10) {
            for (let i = 0; i < 10; i++) {
                if(!top[i]) return;
                const user = top[i]
                text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.nick}) — ${utils.sp(user.lvl)}\n`
            }
        } else {
            for (let i = 0; i < users.length; i++) {
                if(!top[i]) return;
                const user = top[i]
                text += `${i === users.length - 1 ? `${users.length}&#8419;` : `${i + 1}&#8419;`} @id${user.id} (${user.nick}) — ${utils.sp(user.lvl)}\n`
            }
        }

        vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `топ:
            ${text}
    —————————————————
    ${utils.gi(find() + 1)} ${userp.nickname} — ${utils.sp(userp.lvl)}`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: 'backTop'
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline()
        })
    }
    else if(context.eventPayload.command === 'backTop') {
        vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": "Выберите топ:",
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Топ по владению",
                        payload: {
                            command: 'topStrenght'
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: "Топ по йенам",
                        payload: {
                            command: 'topMoney'
                        },
                        color: Keyboard.POSITIVE_COLOR
                    }),
                    Keyboard.callbackButton({
                        label: "Топ по уровню",
                        payload: {
                            command: 'topLvl'
                        },
                        color: Keyboard.POSITIVE_COLOR
                    })
                ],
                [
                    Keyboard.callbackButton({
                        label: "Топ кланов",
                        payload: {
                            command: 'topClans'
                        },
                        color: Keyboard.SECONDARY_COLOR
                    })
                ]
            ]).inline()
        })
    }
    else if(context.eventPayload.command === 'shopForward') {
        const pages = []
        for(let i = 0; i in shop; i++) {
            pages.push(shop[i].page)
        }
        const nextPage = context.eventPayload.page += 1
        const item = shop.find(x => x.page === nextPage)
        let bool;
        if(item.name === context.user.weapon) bool = true;
        else if(item.name !== context.user.weapon) bool = false;
        if(nextPage === getMaxOfArray(pages)) {
            vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `${item.name}\n\nСтоимость: ${utils.sp(item.cost)}¥`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "&#11013;",
                            payload: {
                                command: "shopBack",
                                page: item.page
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }),
                        Keyboard.callbackButton({
                            label: checkBtnShop(bool).text,
                            payload: {
                                command: "buyNichirin",
                                item: item,
                                user: context.userId
                            },
                            color: checkBtnShop(bool).color
                        })
                    ]
                ]).inline(),
                "attachment": item.attachment
            })
        } else {
            vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `${item.name}\n\nСтоимость: ${utils.sp(item.cost)}¥`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "&#11013;",
                            payload: {
                                command: "shopBack",
                                page: item.page
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }),
                        Keyboard.callbackButton({
                            label: checkBtnShop(bool).text,
                            payload: {
                                command: "buyNichirin",
                                item: item,
                                user: context.userId
                            },
                            color: checkBtnShop(bool).color
                        }),
                        Keyboard.callbackButton({
                            label: "&#10145;",
                            payload: {
                                command: "shopForward",
                                page: item.page
                            },
                            color: Keyboard.PRIMARY_COLOR
                        })
                    ]
                ]).inline(),
                "attachment": item.attachment
            })
        }
    }
    else if(context.eventPayload.command === 'shopBack') {
        const pages = []
        for(let i = 0; i in shop; i++) {
            pages.push(shop[i].page)
        }
        const previousPage = context.eventPayload.page -= 1
        const item = shop.find(x => x.page === previousPage)
        let bool;
        if(item.name === context.user.weapon) bool = true;
        else if(item.name !== context.user.weapon) bool = false;
        if(previousPage === getMinOfArray(pages)) {
            vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `${item.name}\n\nСтоимость: ${utils.sp(item.cost)}¥`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: checkBtnShop(bool).text,
                            payload: {
                                command: "buyNichirin",
                                item: item,
                                user: context.userId
                            },
                            color: checkBtnShop(bool).color
                        }),
                        Keyboard.callbackButton({
                            label: "&#10145;",
                            payload: {
                                command: "shopForward",
                                page: item.page
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }),
                    ]
                ]).inline(),
                "attachment": item.attachment
            })
        } else {
            vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `${item.name}\n\nСтоимость: ${utils.sp(item.cost)}¥`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "&#11013;",
                            payload: {
                                command: "shopBack",
                                page: item.page
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }),
                        Keyboard.callbackButton({
                            label: checkBtnShop(bool).text,
                            payload: {
                                command: "buyNichirin",
                                item: item,
                                user: context.userId
                            },
                            color: checkBtnShop(bool).color
                        }),
                        Keyboard.callbackButton({
                            label: "&#10145;",
                            payload: {
                                command: "shopForward",
                                page: item.page
                            },
                            color: Keyboard.PRIMARY_COLOR
                        })
                    ]
                ]).inline(),
                "attachment": item.attachment
            })
        }
    }
    else if(context.eventPayload.command === 'buyNichirin') {
        if(context.userId !== context.eventPayload.user) return;
        const item = shop.find(x => x.name === context.user.weapon)
        if(context.user.weapon !== null) return vk.api.messages.edit({
            "peer_id": context.peerId,
            "attachment": context.eventPayload.item.attachment,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `У вас уже есть клинок!`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: "shop",
                            item: context.eventPayload.item
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline(),
            "attachment": item.attachment
        })
        if(context.user.money < context.eventPayload.item.cost) return vk.api.messages.edit({
            "peer_id": context.peerId,
            "attachment": context.eventPayload.item.attachment,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Не хватает йен!\n\nБаланс: ${context.user.money}¥`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Назад",
                        payload: {
                            command: "shop",
                            item: context.eventPayload.item
                        },
                        color: Keyboard.NEGATIVE_COLOR
                    })
                ]
            ]).inline()
        })


        vk.api.messages.edit({
            "peer_id": context.peerId,
            "attachment": context.eventPayload.item.attachment,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Вы уверены что хотите купить данный клинок за ${utils.sp(context.eventPayload.item.cost)}¥`,
            "keyboard": Keyboard.keyboard([
                [
                    Keyboard.callbackButton({
                        label: "Да",
                        payload: {
                            command: "buyNichirinYes",
                            user: context.userId,
                            item: context.eventPayload.item
                        },
                        color: Keyboard.POSITIVE_COLOR
                    })
                ]
            ]).inline()
        })
    }
    else if(context.eventPayload.command === 'shop') {
        const pages = []
        for(let i = 0; i in shop; i++) {
            pages.push(shop[i].page)
        }
        const item = context.eventPayload.item
        let bool;
        if(item.name === context.user.weapon) bool = true;
        else if(item.name !== context.user.weapon) bool = false;
        if(item.page === getMinOfArray(pages)) {
            vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `${item.name}\n\nСтоимость: ${utils.sp(item.cost)}¥`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: checkBtnShop(bool).text,
                            payload: {
                                command: "buyNichirin",
                                item: item,
                                user: context.userId
                            },
                            color: checkBtnShop(bool).color
                        }),
                        Keyboard.callbackButton({
                            label: "&#10145;",
                            payload: {
                                command: "shopForward",
                                page: item.page
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }),
                    ]
                ]).inline(),
                "attachment": item.attachment
            })
        } else if(item.page === getMaxOfArray(pages)) {
            vk.api.messages.edit({
                "peer_id": context.peerId,
                "conversation_message_id": messageId['items'][0].conversation_message_id,
                "message": `${item.name}\n\nСтоимость: ${utils.sp(item.cost)}¥`,
                "keyboard": Keyboard.keyboard([
                    [
                        Keyboard.callbackButton({
                            label: "&#11013;",
                            payload: {
                                command: "shopBack",
                                page: item.page
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }),
                        Keyboard.callbackButton({
                            label: checkBtnShop(bool).text,
                            payload: {
                                command: "buyNichirin",
                                item: item,
                                user: context.userId
                            },
                            color: checkBtnShop(bool).text
                        })
                    ]
                ]).inline(),
                "attachment": item.attachment
            })
        }
    }
    else if(context.eventPayload.command === 'buyNichirinYes') {
        if(context.userId !== context.eventPayload.user) return;
        const item = context.eventPayload.item
        context.user.weapon = item.name
        if(item.name === 'Клинок охотника') {
            let item_secondName = item.name.toLowerCase()
        } else {
            let item_secondName = item.name.match(/(?<=\()(.*)(?=\))/ig)
            item_secondName = item_secondName[0].toLowerCase()
        }
        context.user.money -= item.cost
        vk.api.messages.edit({
            "peer_id": context.peerId,
            "conversation_message_id": messageId['items'][0].conversation_message_id,
            "message": `Вы успешно купили ${item_secondName}`,
        })
    }
})

const cmd = {
    hear: (p, f) => {
        commands.push([p, f]);
    }
};

cmd.hear(/^(?:тест77)\s(.*)$/i, async (msg, bot) => {
    msg.args[1] = utils.repl(msg.args[1])
    return bot(msg.args[1])
})

cmd.hear(/^(?:помощь)$/i, async (msg, bot) => {
    return bot(`Инфо - выводит ваш профиль\nБонус - ежедневный бонус\nТреша - ну тип хз\nБосс - атаковать босса\nБосс инфо - ну ты же не тупой?\nКлан помощь - команды для клана\nНик (желанный ник до 30 символов) - установка ника`);
});

cmd.hear(/^(?:инфо)$/i, async (msg, bot) => {
    let clan = clans.find(x => x.cid === msg.user.clan)
    let text = `Ваш UID: ${utils.sp(msg.user.uid)}\nВаш ник: ${msg.user.nickname}\nВаш наставник: ${msg.user.teacher}\nБаланс: ${utils.sp(msg.user.money)}\nВладение: ${utils.sp(msg.user.strenght)}\nExp: ${utils.sp(msg.user.exp)}|${utils.sp(msg.user.nextExp)}\nУровень: ${utils.sp(msg.user.lvl)}`
    if(msg.user.clan !== null) text += `\nКлан: ${clan.name}`
    if(msg.user.weapon !== null) text += `\nКлинок: ${msg.user.weapon}`
    return bot(text);
});

cmd.hear(/^(?:бонус)$/i, async (msg, bot) => {
    if(msg.user.timers.bonus > getUnix()) return bot(`Вы уже брали бонус, подождите ${unixStampLeft(msg.user.timers.bonus - Date.now())}`);

    getUnix() + 86400000

    let bonus_money = utils.random(1000, 10000)
    msg.user.money += bonus_money;
    msg.user.timers.bonus = getUnix() + 86400000;
    return bot(`Вы получили ${utils.sp(bonus_money)}¥. До следующего бонуса - 24 часа.`);
});

cmd.hear(/^(?:треша|тренировка|Тренировка💪)$/i, async (msg, bot) => {
    if(msg.user.timers.training > getUnix()) return bot(`Для следующей тренировки подождите ${unixStampLeft(msg.user.timers.training - Date.now())}`
    )
    function mixarr(arr) {
        return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
    }
    let teacherTraining2 = mixarr(teacherTraining);
    let hz = utils.pick(attachments)

    msg.user.needCall = hz.teacher;

    return bot(`🔥Вы начали тренировку с вашим наставником. Чтобы закончить её, определите, кто на фото🔥`, {
        attachment: hz.attachment,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                    label: `${teacherTraining2[0]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[0]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                }),
                Keyboard.callbackButton({
                    label: `${teacherTraining2[1]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[1]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                })
            ],
            [
                Keyboard.callbackButton({
                    label: `${teacherTraining2[2]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[2]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                }),
                Keyboard.callbackButton({
                    label: `${teacherTraining2[3]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[3]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                })
            ],
            [
                Keyboard.callbackButton({
                    label: `${teacherTraining2[4]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[4]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                }),
                Keyboard.callbackButton({
                    label: `${teacherTraining2[5]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[5]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                })
            ],
            [
                Keyboard.callbackButton({
                    label: `${teacherTraining2[6]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[6]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                }),
                Keyboard.callbackButton({
                    label: `${teacherTraining2[7]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[7]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                })
            ],
            [
                Keyboard.callbackButton({
                    label: `${teacherTraining2[8]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[8]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                }),
                Keyboard.callbackButton({
                    label: `${teacherTraining2[9]}`,
                    payload: {
                        command: `train`,
                        teacher: `${teacherTraining2[9]}`,
                        user: msg.user.id,
                        isChat: msg.isChat
                    }
                })
            ]
        ]).inline()
    })
})

cmd.hear(/^(?:update)$/i, async (msg, bot) => {
    if(msg.user.id !== 657796581 && msg.user.id !== 361263304 && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`)
    else if(msg.user.id !== 657796581 && msg.user.id !== 361263304 && msg.isChat) return;

    for(i in users) {
        users[i].weapon = null
    }
    await bot(`Успешно!`)
})

cmd.hear(/^(?:тест)$/i, async (msg, bot) => {
    let a = [
        {
            name: "Ветер",
            int: 60
        }, 
        {
            name: "Вода",
            int: 60
        }, 
        {
            name: "Гром",
            int: 60
        },
        {
            name: "Зверь",
            int: 35
        },
        {
            name: "звук",
            int: 15
        },
        {
            name: "змея",
            int: 15
        },
        {
            name: "камень",
            int: 60
        },
        {
            name: "любовь",
            int: 15
        },
        {
            name: "насекомое",
            int: 15
        },
        {
            name: "пламя",
            int: 60
        },
        {
            name: "туман",
            int: 15
        },
        {
            name: "цветок",
            int: 20
        },
        {
            name: "луна",
            int: 8
        },
        {
            name: "солнце",
            int: 3
        },
    ];

    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i].int;
    }
    
    let rand = Math.floor(Math.random() * sum);
    
    let i = 0;
    for (let s = a[0].int; s <= rand; s += a[i].int) {
      i++;
    }
    
    bot(a[i].name);
});

cmd.hear(/^(?:\+владение|\+str)\s([0-9А-Я]+)\s(.*)$/i, async (msg, bot) => {
    if(!msg.user.adm && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);
    else if(!msg.user.adm && msg.isChat) return;
    let user = msg.args[2]
    msg.args[1] = utils.repl(msg.args[1])
    if(user.indexOf('@') != -1) {
        user = user.replace(/\[id(.*)\|/ig, '')
        user = user.replace(']', '')
        user_id = user.replace('@', '')
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else if(user.indexOf('https://vk.com/') != -1 || user.indexOf('https://m.vk.com/') != -1) {
        if(user.indexOf('https://vk.com/') != -1) {
            user_id = user.replace('https://vk.com/', '')  
        }
        else {
            user_id = user.replace('https://m.vk.com/', '')
        }
        
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else {
        user = users.find(x => x.uid === Number(user))
        user = user.id
    }
    let user_bot = users.find(x => x.id === user)
    if(!user_bot) return bot(`Данный игрок не зарегистрирован в боте!`)
    user_bot.strenght += Number(msg.args[1])
    return bot(`Вы успешно выдали [id${user_bot.id}|${user_bot.nickname}] владение, в размере ${utils.sp(Number(msg.args[1]))}`, {
        disable_mentions: 1
    })
})

cmd.hear(/^(?:-владение|-str)\s([0-9А-Я]+)\s(.*)$/i, async (msg, bot) => {
    if(!msg.user.adm && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);
    else if(!msg.user.adm && msg.isChat) return;
    let user = msg.args[2]
    msg.args[1] = utils.repl(msg.args[1])
    if(user.indexOf('@') != -1) {
        user = user.replace(/\[id(.*)\|/ig, '')
        user = user.replace(']', '')
        user_id = user.replace('@', '')
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else if(user.indexOf('https://vk.com/') != -1 || user.indexOf('https://m.vk.com/') != -1) {
        if(user.indexOf('https://vk.com/') != -1) {
            user_id = user.replace('https://vk.com/', '')  
        }
        else {
            user_id = user.replace('https://m.vk.com/', '')
        }
        
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else {
        user = users.find(x => x.uid === Number(user))
        user = user.id
    }
    let user_bot = users.find(x => x.id === user)
    if(!user_bot) return bot(`Данный игрок не зарегистрирован в боте!`)
    user_bot.strenght -= Number(msg.args[1])
    return bot(`Вы успешно сняли [id${user_bot.id}|${user_bot.nickname}] владение, в размере ${utils.sp(Number(msg.args[1]))}`, {
        disable_mentions: 1
    })
})

cmd.hear(/^(?:\+йены|\+money)\s([0-9А-Я]+)\s(.*)$/i, async (msg, bot) => {
    if(!msg.user.adm && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);
    else if(!msg.user.adm && msg.isChat) return;
    let user = msg.args[2]
    msg.args[1] = utils.repl(msg.args[1])
    if(user.indexOf('@') != -1) {
        user = user.replace(/\[id(.*)\|/ig, '')
        user = user.replace(']', '')
        user_id = user.replace('@', '')
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else if(user.indexOf('https://vk.com/') != -1 || user.indexOf('https://m.vk.com/') != -1) {
        if(user.indexOf('https://vk.com/') != -1) {
            user_id = user.replace('https://vk.com/', '')  
        }
        else {
            user_id = user.replace('https://m.vk.com/', '')
        }
        
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else {
        user = users.find(x => x.uid === Number(user))
        user = user.id
    }
    let user_bot = users.find(x => x.id === user)
    if(!user_bot) return bot(`Данный игрок не зарегистрирован в боте!`)
    user_bot.money += Number(msg.args[1])
    return bot(`Вы успешно выдали [id${user_bot.id}|${user_bot.nickname}] йены, в размере ${utils.sp(Number(msg.args[1]))}`, {
        disable_mentions: 1
    })
})

cmd.hear(/^(?:-йены|-money)\s([0-9А-Я]+)\s(.*)$/i, async (msg, bot) => {
    if(!msg.user.adm && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);
    else if(!msg.user.adm && msg.isChat) return;
    let user = msg.args[2]
    msg.args[1] = utils.repl(msg.args[1])
    if(user.indexOf('@') != -1) {
        user = user.replace(/\[id(.*)\|/ig, '')
        user = user.replace(']', '')
        user_id = user.replace('@', '')
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else if(user.indexOf('https://vk.com/') != -1 || user.indexOf('https://m.vk.com/') != -1) {
        if(user.indexOf('https://vk.com/') != -1) {
            user_id = user.replace('https://vk.com/', '')  
        }
        else {
            user_id = user.replace('https://m.vk.com/', '')
        }
        
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else {
        user = users.find(x => x.uid === Number(user))
        user = user.id
    }
    let user_bot = users.find(x => x.id === user)
    if(!user_bot) return bot(`Данный игрок не зарегистрирован в боте!`)
    user_bot.money -= Number(msg.args[1])
    return bot(`Вы успешно забрали [id${user_bot.id}|${user_bot.nickname}] йен, в размере ${utils.sp(Number(msg.args[1]))}¥`, {
        disable_mentions: 1
    })
})

cmd.hear(/^(?:\+promo|\+промо)\s([0-9А-Я]+)\s([0-9А-Я]+)\s([0-9А-Я]+)\s(.*)$/i, async (msg, bot) => {
    if(!msg.user.adm && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);
    else if(!msg.user.adm && msg.isChat) return;
    let strenght = utils.repl(msg.args[1]);
    let money = utils.repl(msg.args[2]);
    let activations = utils.repl(msg.args[3])
    let promo = msg.args[4];
    let promo_search = promos.find(x => x.promo === promo)
    if(promo_search) return bot(`Промокод с таким названием уже создан!`)
    bot(`Название для активации: ${promo}\nВладение: ${strenght}\nЙен: ${money}\nАктиваций: ${activations}\n\nСоздать промокод?`, {
        keyboard: Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                    label: "Да",
                    payload: {
                        command: `addPromo`,
                        strenght: strenght,
                        money: money,
                        promo: promo,
                        activations: activations,
                        user: msg.senderId
                    },
                    color: Keyboard.POSITIVE_COLOR
                })
            ]
        ]).inline()
    })
})

cmd.hear(/^(?:промо)\s(.*)$/i, async (msg, bot) => {
    let promo = promos.find(x => x.promo === msg.args[1])
    let user = users.find(x => x.id === msg.senderId)
    if(!promo) return bot(`Промокод не найден!`)
    if(promo.users.length >= promo.activations) return bot(`Активации данного промокода закончились!`)
    let search = promo.users.find(x => x === user.uid)
    if(search) return bot(`Вы уже использовали данный промокод!`)
    promo.users.push(user.uid)
    user.strenght += promo.strenght
    user.money += promo.money
    if(promo.users.length >= promo.activations) usera.api.wall.delete({
        "owner_id": -218252023,
        "post_id": promo.post_id
    })
    return bot(`Вы успешно активировали промокод!`)
})

cmd.hear(/^(?:бан|ban)\s([0-9]+)\s(.*)$/i, async (msg, bot) => {
    if(!msg.user.adm && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);
    else if(!msg.user.adm && msg.isChat) return;

    let user = users.find(x => x.uid === Number(msg.args[1]));

    if(!user) return bot(`Игрок с данным uid не найден!`)

    let adm = users.find(x => x.id === Number(user.ban_info.adm))

    

    if(user.ban_info.ban === true) {
        return bot(`Игрок уже забанен администратором [id${adm.id}|${adm.nickname}]`, {
            disable_mentions: 1
        });
    }

    user.ban_info.ban = true;
    user.ban_info.adm = msg.user.id;
    user.ban_info.reason = msg.args[2];

    vk.api.messages.send({
        "peer_id": user.id,
        "user_id": user.id,
        "message": `🚫Вы были забанены администратором [id${msg.user.id}|${msg.user.nickname}]🚫\nПричина: ${msg.args[2]}`,
        "random_id": 0
    })

    if(msg.senderId !== 361263304) {
        vk.api.messages.send({
            "peer_id": 361263304,
            "user_id": 361263304,
            "message": `⚠️Игрок [id${user.id}|${user.nickname}] был забанен администратором [id${msg.user.id}|${msg.user.nickname}]⚠️`,
            "random_id": 0
        })
    }

    return bot(`Игрок [id${user.id}|${user.nickname}] был успешно забанен по причине: ${user.ban_info.reason}`, {
        disable_mentions: 1
    })
})

cmd.hear(/^(?:разбан|unban)\s([0-9]+)$/i, async (msg, bot) => {
    if(!msg.user.adm && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);
    else if(!msg.user.adm && msg.isChat) return;

    let user = users.find(x => x.uid === Number(msg.args[1]));

    if(!user) return bot(`Игрок с данным uid не найден!`)

    if(!user.ban_info.ban) return bot(`У [id${user.id}|${user.nickname}] отсутствует бан!`, {
        disable_mentions: 1
    })

    user.ban_info.ban = false;
    user.ban_info.adm = null;
    user.ban_info.reason = "";

    vk.api.messages.send({
        "peer_id": user.id,
        "user_id": user.id,
        "message": `✅Вы были разбанены администратором [id${msg.user.id}|${msg.user.nickname}]✅`,
        "random_id": 0
    })

    if(msg.senderId !== 361263304) {
        vk.api.messages.send({
            "peer_id": 361263304,
            "user_id": 361263304,
            "message": `⚠️Игрок [id${user.id}|${user.nickname}] был разбанен администратором [id${msg.user.id}|${msg.user.nickname}]⚠️`,
            "random_id": 0
        })
    }

    return bot(`Игрок [id${user.id}|${user.nickname}] был успешно разбанен!`, {
        disable_mentions: 1
    })

})

cmd.hear(/^(?:setadm|\+adm)\s([0-9]+)$/i, async (msg, bot) => {
    if(msg.user.id !== 657796581 && msg.user.id !== 361263304 && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`)
    else if(msg.user.id !== 657796581 && msg.user.id !== 361263304 && msg.isChat) return;

    let user = users.find(x => x.uid === Number(msg.args[1]))
    if(!user) return bot(`Данный игрок не найден!`)

    user.adm = true
    return bot(`Вы успешно назначили [id${user.id}|${user.nickname}] роль администратора!`, {
        disable_mentions: 1
    })
})

cmd.hear(/^(?:unadm|-adm)\s([0-9]+)$/i, async (msg, bot) => {
    if(msg.user.id !== 657796581 && msg.user.id !== 361263304 && !msg.isChat) return bot(`Я не знаю такой команды. Чтобы узнать команды, пишите "помощь".`);
    else if(msg.user.id !== 657796581 && msg.user.id !== 361263304 && msg.isChat) return;

    let user = users.find(x => x.uid === Number(msg.args[1]))
    if(!user) return bot(`Данный игрок не найден!`)

    user.adm = false
    return bot(`Вы успешно сняли [id${user.id}|${user.nickname}] с роли администратора!`, {
        disable_mentions: 1
    })
})

cmd.hear(/^(?:босс|Атака босса)$/i, async (msg, bot) => {
    let money;
    let item = shop.find(x => x.name === msg.user.weapon)
    if(msg.user.timers.boss > getUnix()) return bot(`Для следующей атаки подождите ${unixStampLeft(msg.user.timers.boss - Date.now())}`
    )

    getUnix() + 1800000

    msg.user.boss_damage += msg.user.strenght;
    let damage;

    if(msg.user.strenght > boss[0].hp) {
        damage = boss[0].hp
    }
    else {
        damage = msg.user.strenght
    }

    if(msg.user.weapon !== null) damage += damage * item.bonus

    boss[0].hp -= Math.round(damage);

    money = damage
    msg.user.money += Math.round(money)

    bot(`Вы нанесли боссу ${Math.round(damage)} урона и получили ${utils.sp(Math.round(money))}¥. До следующей атаки босса - 30 минут.`);

    if(boss[0].hp <= 0) {
        for(let i = 0; i in users; i++) {
            if(users[i].boss_damage > 0) {
                users[i].money += users[i].boss_damage
                vk.api.messages.send({
                    peer_id: users[i].id,
                    user_id: users[i].id,
                    message: `Босс ${boss[0].name}, в битве с которым вы принимали участие, был побеждён и вы получаете ${utils.sp(users[i].boss_damage)}¥!`,
                    random_id: 0
                })
                users[i].boss_damage = 0
                boss[0].hp = 10000000000;
            }
        }
    }

    return msg.user.timers.boss = getUnix() + 1800000;

})

cmd.hear(/^(?:босс инфо)$/i, async (msg, bot) => {
    return bot(`Имя босса: ${boss[0].name}\nХП босса: ${utils.sp(boss[0].hp)}`)
})

cmd.hear(/^(?:ник)\s(.*)$/i, async (msg, bot) => {
    let nick = msg.args[1]

    let test = users.find(x => x.nickname.toLowerCase() === msg.args[1].toLowerCase())

    if(test) return bot(`Данный ник уже занят!`)

    if(nick.length >= 30) return bot(`Ник должен состоять меньше чем из 30 символов!`)

    bot(`Вы выбрали ник "${nick}".\nПродолжить?`, {
        keyboard: Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                        label: "Да",
                        payload: {
                                command: 'setNick',
                                nick: `${nick}`
                            },
                            color: Keyboard.POSITIVE_COLOR
                    })
            ]
        ]).inline()
    })
})

function unixStampLeft(stamp) {
	stamp = stamp / 1000;

	let s = stamp % 60;
	stamp = ( stamp - s ) / 60;

	let m = stamp % 60;
	stamp = ( stamp - m ) / 60;

	let	h = ( stamp ) % 24;
	let	d = ( stamp - h ) / 24;

	let text = ``;

	if(d > 0) text += Math.floor(d) + " д. ";
	if(h > 0) text += Math.floor(h) + " ч. ";
	if(m > 0) text += Math.floor(m) + " мин. ";
	if(s > 0) text += Math.floor(s) + " с.";

	return text;
}

cmd.hear(/^(?:клан создать)\s(.*)$/i, async (msg, bot) => {
    if(msg.user.clan !== null) return bot(`Вы уже состоите в клане!`)
    let name = `${msg.args[1]}`

    let test = clans.find(x => x.name.toLowerCase() === msg.args[1].toLowerCase())

    if(test) return bot(`Клан с таким названием уже существует!`)

    clans.push({
        cid: clans.length,
        name: `${name}`,
        owner: msg.user.uid,
        members: [
            msg.user.uid
        ],
        description: null,
        hello: null,
        chat: '',
        icon: null,
        link: null,
        boss: {
        	name: null,
        	hp: null,
            maxHp: null,
        	icon: ''
        },
        reputation: 0,
        delete: false
    })

    let clan = clans.find(x => x.name === name)

    let link = await vk.api.utils.getShortLink({
        url: `https://vk.me/demon_slayerbot?ref=${btoa(`${clan.cid}cid`)}`
    })

    clan.link = link

    msg.user.clan = clan.cid

    return bot(`Клан ${clan.name} успешно создан!`)
})

cmd.hear(/^(?:клан вступить)\s([0-9]+)$/i, async (msg, bot) => {
    if(msg.user.clan !== null) return bot(`Вы уже состоите в клане!`)

    let clan = clans.find(x => x.cid === Number(msg.args[1]))

    if(!clan) return bot(`Клан с таким айди не найден!`)

    clan.members.push(msg.user.uid)

    msg.user.clan = clan.cid

    return bot(`Вы успешно вступили в клан ${clan.name}`)
})

cmd.hear(/^(?:клан пригласить)\s(.*)$/i, async (msg, bot) => {
    let user = msg.args[1]
    let user_id;

    if(msg.user.clan === null) return bot(`Вы не состоите в клане!`)

    let clan = clans.find(x => x.cid === msg.user.clan)

    if(user.indexOf('@') != -1) {
        user = user.replace(/\[id(.*)\|/ig, '')
        user = user.replace(']', '')
        user_id = user.replace('@', '')
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }
    else if(user.indexOf('https://vk.com/') != -1 || user.indexOf('https://m.vk.com/') != -1) {
        if(user.indexOf('https://vk.com/') != -1) {
            user_id = user.replace('https://vk.com/', '')  
        }
        else {
            user_id = user.replace('https://m.vk.com/', '')
        }
        
        user = await vk.api.users.get({
            user_ids: user_id
        })
        user = user[0].id
    }

    let user_bot = users.find(x => x.id === user)

    if(!user_bot) return bot(`Данный игрок ещё не зарегистрирован в боте!`)

    if(user_bot.clan !== null) return bot(`Игрок [id${user_bot.id}|${user_bot.nickname}] уже состоит в клане!`, {
        disable_mentions: 1
    })
    
    vk.api.messages.send({
        peer_id: user,
        user_id: user,
        message: `Игрок [id${msg.user.id}|${msg.user.nickname}] пригласил вас в клан ${clan.name}. Вы хотите присоединиться?`,
        random_id: 0,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                    label: "Да",
                    payload: {
                        command: `confirmInvite`,
                        clan: clan.cid,
                    },
                    color: Keyboard.POSITIVE_COLOR
                }),
        
                Keyboard.callbackButton({
                    label: "Нет",
                    payload: {
                        command: `denyInvite`,
                        clan: clan.cid
                    },
                    color: Keyboard.NEGATIVE_COLOR
                })
            ]
        ]).inline(),
        attachment: clan.icon
    })
    return bot(`Заявка на вступление в клан ${clan.name} была успешно отправлена игроку [id${user}|${user_bot.nickname}]`, {
        disable_mentions: 1
    })
})

cmd.hear(/^(?:клан покинуть)$/i, async (msg, bot) => {
    if(msg.user.clan === null) return bot(`Вы не состоите в клане!`)
    let clan = clans.find(x => x.cid === msg.user.clan)
    if(clan.owner === msg.user.uid) return bot(`Вы создатель клана и не можете его покинуть!`)
    msg.user.clan = null
    const index = clan.members.indexOf(msg.user.uid)
    clan.members.splice(index, 1)

    return bot(`Успешно!`)
})

cmd.hear(/^(?:тест2)\s(.*)/i, async (msg, bot) => {
    let text = msg.text.replace(`\n`, ' ')
    text = text.replace(/^(?:тест2)/i, '')
    return bot(text)
})

cmd.hear(/^(?:тест3)/i, async (msg, bot) => {
    let clan = clans.find(x => x.cid === msg.user.clan)
    return bot('', {
        attachment: `photo${clan.icon.ownerId}_${clan.icon.id}_${clan.icon.accessKey}`
    })
})

cmd.hear(/^(?:клан)$/i, async (msg, bot) => {
    if(msg.user.clan === null) return bot(`Вы не состоите в клане!`) 
    let clan = clans.find(x => x.cid === msg.user.clan)
    let owner = users.find(x => x.uid === clan.owner)
    let clan_keyboard1 = Keyboard.keyboard([
        [
            Keyboard.callbackButton({
                label: "Участники",
                payload: {
                    command: `members`,
                    clan: clan.cid
                },
                color: Keyboard.POSITIVE_COLOR
            }),
    
            Keyboard.callbackButton({
                label: "Босс",
                payload: {
                    command: `showClanBoss`,
                    clan: clan.cid
                },
                color: Keyboard.NEGATIVE_COLOR
            })
        ]
    ]).inline()

    let clan_keyboard2 = Keyboard.keyboard([
        [
            Keyboard.callbackButton({
                label: "Участники",
                payload: {
                    command: `members`,
                    clan: clan.cid
                },
                color: Keyboard.POSITIVE_COLOR
            }),
    
            Keyboard.callbackButton({
                label: "Босс",
                payload: {
                    command: `showClanBoss`,
                    clan: clan.cid
                },
                color: Keyboard.NEGATIVE_COLOR
            })
        ],
        [
            Keyboard.callbackButton({
                label: "⚙️Управление",
                payload: {
                    command: `clanSettings`,
                    clan: clan.cid
                },
                color: Keyboard.PRIMARY_COLOR
            })
        ]
    ]).inline()

    if(msg.user.uid === clan.owner) {
        return bot(`Название клана: ${clan.name}\n\nГлава клана: [id${owner.id}|${owner.nickname}]\nКол-во участников: ${clan.members.length}\nРепутация: ${utils.sp(clan.reputation)}\nСсылка для приглашения: ${clan.link.short_url}`, {
            keyboard: clan_keyboard2,
            attachment: clan.icon
        })
    }
    else {
        return bot(`Название клана: ${clan.name}\n\nГлава клана: [id${owner.id}|${owner.nickname}]\nКол-во участников: ${clan.members.length}\nРепутация: ${utils.sp(clan.reputation)}\nСсылка для приглашения: ${clan.link.short_url}`, {
            keyboard: clan_keyboard1,
            attachment: clan.icon
        })
    }
})

cmd.hear(/^(?:клан ава)$/i, async (msg, bot) => {
    let clan = clans.find(x => x.cid === msg.user.clan)

    if(msg.user.clan === null) return bot(`Вы не состоите в клане!`)

    if(clan.owner !== msg.user.uid) return bot(`У вас нет прав!`)

    if(msg.attachments.length === 0) return bot(`Вы должны прикрепить вложение!`)

    if(msg.attachments.length > 1) return bot(`Вы должны прикрепить одно вложение!`)

    clan.icon = msg.attachments[0]

    clan.icon = `photo${clan.icon.ownerId}_${clan.icon.id}_${clan.icon.accessKey}`

    return bot(`Ава клана ${clan.name} успешно установлена!`, {
        attachment: clan.icon
    })
})

cmd.hear(/^(?:кбосс создать)\s([0-9А-Я]+)\s(.*)$/i, async (msg, bot) => {
    msg.args[1] = utils.repl(msg.args[1])
    if(msg.user.clan === null) return bot(`Вы не состоите в клане!`)
    let clan = clans.find(x => x.cid === msg.user.clan)
    if(clan.owner !== msg.user.uid) return bot(`Вы не глава клана!`)

    if(clan.boss.name !== null) return bot(`У клана ${clan.name} уже есть босс!`)

    if(msg.attachments.length === 0) return bot(`Вы должны прикрепить вложение!`)

    if(msg.attachments.length > 1) return bot(`Вы должны прикрепить одно вложение!`)
    
    if(Number(msg.args[1]) < 10000000) return bot(`Хп босса должно быть не меньше 10 миллионов!`)
    
    let attachment = `photo${msg.attachments[0].ownerId}_${msg.attachments[0].id}_${msg.attachments[0].accessKey}`
    
    
    
    return bot(`Клановый босс клана ${clan.name}:\n\nИмя: ${msg.args[2]}\nХП: ${utils.sp(msg.args[1])}\n\nСоздать кланового босса?`, {
    	    attachment: attachment,
    	    keyboard: Keyboard.keyboard([
    	    	    [
    	    	        Keyboard.callbackButton({
    	    	        	    label: "Да",
    	    	        	    payload: {
    	    	        	    	    command: 'createClanBoss',
    	    	        	    	    clan: clan.cid,
    	    	        	    	    boss: {
    	    	        	    	    	    name: `${msg.args[2]}`,
    	    	        	    	    	    hp: Number(msg.args[1]),
    	    	        	    	    	    icon: attachment
    	    	        	    	    	},
    	    	        	    	    	user: msg.user.uid
    	    	        	    	},
    	    	        	    	color: Keyboard.POSITIVE_COLOR
    	    	        	})
    	    	    ]
    	    	]).inline()
    	})
})

cmd.hear(/^(?:кбосс|кбосс атака)$/i, async (msg, bot) => {
    let clan = clans.find(x => x.cid === msg.user.clan)
    let item = shop.find(x => x.name === msg.user.weapon)
    if(!clan) return bot(`Вы не состоите в клане!`)
    if(clan.boss.name === null) return bot(`В клане отсутствует клановый босс!`)
    if(msg.user.timers.cboss > getUnix()) return bot(`Для следующей атаки подождите ${unixStampLeft(msg.user.timers.cboss - Date.now())}`
    )

    let damage;

    damage = msg.user.strenght
    if(msg.user.weapon !== null) damage += damage * item.bonus

    clan.boss.hp -= Math.round(damage)


    msg.user.exp += 5
    clan.reputation += 1
    if(msg.user.exp >= msg.user.nextExp) {
        msg.user.lvl += 1;
        msg.user.exp = 0;
        msg.user.nextExp += 25
    }
    if(clan.boss.hp <= 0) {
        let user;
        for(let i = 0; i in clan.members; i++) {
            user = users.find(x => x.uid === clan.members[i])

            vk.api.messages.send({
                "peer_id": user.id,
                "user_id": user.id,
                "random_id": 0,
                "attachment": clan.boss.icon,
                "message": `Клановый босс ${clan.boss.name} был  убит! Клан ${clan.name} заработал ${utils.sp(Math.round(clan.boss.maxHp / 2000000))} репутации!`
            })
        }

        clan.reputation += Math.round(clan.boss.maxHp / 2000000)
        clan.boss.name = null
        clan.boss.icon = ""
        clan.boss.hp = null
        clan.boss.maxHp = null
    }

    getUnix() + 1800000

    if(clan.boss.name === null) return msg.user.timers.cboss = getUnix() + 1800000;

    bot(`Вы успешно атаковали кланового босса ${clan.boss.name} и нанесли ему ${utils.sp(Math.round(damage))} урона. Вы получили 5 опыта. Клан получил 1 репутацию.`, {
        attachment: clan.boss.icon
    })
    return msg.user.timers.cboss = getUnix() + 1800000;

})

cmd.hear(/^(?:кбосс инфо)$/i, async (msg, bot) => {
    let clan = clans.find(x => x.cid === msg.user.clan)
    if(!clan) return bot(`Вы не состоите в клане!`)
    let boss = clan.boss
    if(clan.boss.name === null) return bot(`В клане отсутствует клановый босс!`)
    return bot(`Клановый босс клана ${clan.name}:\n\nИмя: ${boss.name}\nХП: ${utils.sp(boss.hp)}`, {
        attachment: boss.icon
    })
})

cmd.hear(/^(?:клан помощь)$/i, async (msg, bot) => {
    return bot(`Клан - инфо о твоём клане\nКлан создать (название клана) - ну тут всё понятно\nКлан пригласить (ссылка на игрока, можно через @) - тоже всё понятно\nКлан ава (необходимо прикрепить вложение) - хз зачем это :D\nКбосс создать (кол-во хп от 10млн) (имя босса) - сами разберётесь, мне лень\nКбосс атака - да...\nКбосс инфо - я не буду вам больше ничего объяснять`)
})

cmd.hear(/^(?:клан распустить)$/i, async (msg, bot) => {
    if(msg.user.clan === null) return bot(`Вы не состоите в клане!`)
    let clan = clans.find(x => x.cid === msg.user.clan)
    if(clan.owner !== msg.user.uid) return bot(`Вы не глава клана!`)
    bot(`Вы действительно ходите распустить клан ${clan.name}?`, {
        keyboard: Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                        label: "Да",
                        payload: {
                                command: 'destroyClan',
                                clan: clan.cid,
                                user: msg.user.id
                            },
                            color: Keyboard.POSITIVE_COLOR
                    })
            ]
        ]).inline()
    })
})

cmd.hear(/^(?:топ)$/i, async (msg, bot) => {
    return bot(`Выберите топ:`, {
        keyboard: Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                    label: "Топ по владению",
                    payload: {
                        command: 'topStrenght'
                    },
                    color: Keyboard.NEGATIVE_COLOR
                })
            ],
            [
                Keyboard.callbackButton({
                    label: "Топ по йенам",
                    payload: {
                        command: 'topMoney'
                    },
                    color: Keyboard.POSITIVE_COLOR
                }),
                Keyboard.callbackButton({
                    label: "Топ по уровню",
                    payload: {
                        command: 'topLvl'
                    },
                    color: Keyboard.POSITIVE_COLOR
                })
            ],
            [
                Keyboard.callbackButton({
                    label: "Топ кланов",
                    payload: {
                        command: 'topClans'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ]).inline()
    })
})

const checkBtnShop = (bool) => {
    let popa = {}
    if(bool) {
        popa.color = Keyboard.NEGATIVE_COLOR
        popa.text = `Куплено`
    } else {
        popa.color = Keyboard.POSITIVE_COLOR
        popa.text = `Купить`
    }
    return popa
}

cmd.hear(/^(?:магаз|магазин)$/i, async (msg, bot) => {
    let page = 1
    let item = shop.find(x => x.page === page)
    let bool;

    if(item.name === msg.user.weapon) bool = true;
    else if(item.name !== msg.user.weapon) bool = false;

    return bot(`${item.name}\n\nСтоимость: ${utils.sp(item.cost)}¥`, {
        keyboard: Keyboard.keyboard([
            [
                Keyboard.callbackButton({
                    label: checkBtnShop(bool).text,
                    payload: {
                        command: "buyNichirin",
                        item: item,
                        user: msg.senderId
                    },
                    color: checkBtnShop(bool).color
                }),
                Keyboard.callbackButton({
                    label: "&#10145;",
                    payload: {
                        command: "shopForward",
                        page: page
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ]).inline(),
        attachment: item.attachment
    })
})

function getUnix() {
    return Date.now();
}
