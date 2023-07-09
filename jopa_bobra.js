const { VK } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
const { setIntervalAsync, clearIntervalAsync } = require('set-interval-async/dynamic');
const token = 'ТОКЕН';
 
const vk = new VK({
    token: token
});
const bot = new HearManager();
 
vk.updates.on('message_new', bot.middleware);

let interval = null;
let interval2 = null; 
let interval3 = null;
let interval4 = null; 
let interval5 = null;
 
bot.hear(/^start$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval !== null) {
        return msg.editMessage({
            message: '[Pocket Bot] Не удалось включить скрипт на автобах⛔'
        })
    }
    interval = setIntervalAsync(async () => {
        vk.api.messages.send({
            message: 'Бах [Боги Расстрелов]',
            peer_id: msg.peerId,
            random_id: 0
        });
        console.log('[Боги Расстрелов] [Pocket Bot] Расстреляли кого-то');
    }, 15500);
    await msg.editMessage({
        message: '[Pocket Bot] Скрипт на автобах успешно запущен✅'
    })
})

bot.hear(/^off$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval === null) {
        return msg.editMessage({
            message: '[Pocket Bot] Не удалось выключить скрипт на автобах⛔'
        })
    }
    await clearIntervalAsync(interval)
    interval = null;
    await msg.editMessage({
        message: '[Pocket Bot] Скрипт на автобах успешно выключен✅'
    })
})

bot.hear(/реши:/, async msg => {
    if(msg.isOutbox) return;
    let userId = await vk.api.users.get()
    userId = userId[0].id
    let text = msg.text
    if(text.indexOf(`${userId}`) === -1) return
    text = text.match(/(?<=, реши: )(.*)/ig)
    text = text[0]
    text = eval(text)
    vk.api.messages.send({
        message: `Бах ${text}`,
        peer_id: msg.peerId,
        random_id: 0
    });
})

bot.hear(/^хуй$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval2 !== null) {
        return msg.editMessage({
            message: '[Бот Пискамер] Скрипт на хуй не был запущен⛔'
        })
    }
    interval2 = setIntervalAsync(async () => {
        vk.api.messages.send({
            message: 'Хуй',
            peer_id: msg.peerId,
            random_id: 0
        });
        console.log('[Бот Пискамер] У тя хуй вырос, поздравляю!');
    }, 86400000);
    await msg.editMessage({
        message: '[Бот Пискамер] Хуй растет автоматически✅'
    })
})

bot.hear(/^вырубить хуй$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval2 === null) {
        return msg.editMessage({
            message: '[Бот Пискамер] Хуй не вырублен⛔'
        })
    }
    await clearIntervalAsync(interval2)
    interval2 = null;
    await msg.editMessage({
        message: '[Бот Пискамер] Хуй вырублен✅'
    })
})


bot.hear(/^бонус старт$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval3 !== null) {
        return msg.editMessage({
            message: '[Pocket Bot] Скрипт на автосбор бонуса не был запущен⛔'
        })
    }
    interval3 = setIntervalAsync(async () => {
        vk.api.messages.send({
            message: 'бонус',
            peer_id: msg.peerId,
            random_id: 0
        });
        console.log('[Pocket Bot] Бонус был успешно собран');
    }, 86400000);
    await msg.editMessage({
        message: '[Pocket Bot] Скрипт на автосбор бонуса успешно запущен✅'
    })
})

bot.hear(/^бонус стоп$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval3 === null) {
        return msg.editMessage({
            message: '[Pocket Bot] Не получилось выключить автосбор бонуса⛔'
        })
    }
    await clearIntervalAsync(interval3)
    interval3 = null;
    await msg.editMessage({
        message: '[Pocket Bot] Автосбор бонуса успешно выключен✅'
    })
})


bot.hear(/^работа старт$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval4 !== null) {
        return msg.editMessage({
            message: '[Pocket Bot] Скрипт на автоработу не был запущен⛔'
        })
    }
    interval4 = setIntervalAsync(async () => {
        vk.api.messages.send({
            message: 'работа',
            peer_id: msg.peerId,
            random_id: 0
        });
        console.log('[Pocket Bot] Вы успешно поработали!');
    }, 180000);
    await msg.editMessage({
        message: '[Pocket Bot] Скрипт на автоработу успешно включен✅'
    })
})



bot.hear(/^работа стоп$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval4 === null) {
        return msg.editMessage({
            message: '[Pocket Bot] Не получилось выключить автоработу⛔'
        })
    }
    await clearIntervalAsync(interval4)
    interval4 = null;
    await msg.editMessage({
        message: '[Pocket Bot] Авторабота успешно выключена✅'
    })
})

bot.hear(/^налоги старт$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval5 !== null) {
        return msg.editMessage({
            message: "[Pocket Bot] Скрипт на автооплату налогов не был запущен⛔"
        })
    }
    interval5 = setIntervalAsync(async () => {
        vk.api.messages.send({
            message: '💵 Оплатить налоги',
            peer_id: msg.peerId,
            random_id: 0,
            payload: '{"command":"business_tax"}'
        });
        console.log(`[Pocket Bot] Вы успешно оплатили налоги!`)
    }, 3600000);
    await msg.editMessage({
        message: '[Pocket Bot] Скрипт на автооплату налогов успешно включен✅'
    })
})

bot.hear(/^налоги стоп$/i, async msg => {
    if(!msg.isOutbox) return;
    if(interval5 === null) {
        return msg.editMessage({
            message: '[Pocket Bot] Не получилось выключить автооплату налогов⛔'
        })
    }
    await clearIntervalAsync(interval5)
    interval5 = null;
    await msg.editMessage({
        message: '[Pocket Bot] Автооплата налогов успешно выключена✅'
    })
})




 
console.log('Script is started!');
vk.updates.start().catch(console.error); 