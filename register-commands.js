require('dotenv').config()
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')

const commands = [
    {
        name: 'hyper',
        description: 'Ну типа запускает метод hyper',
        options: [
            {
                name: 'ссылка',
                description: 'Ну блять, сайт который хочешь заебашить',
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: 'время',
                description: 'Ну типа время В СЕКУНДАХ, сколько длится атака',
                type: ApplicationCommandOptionType.Number,
                required: true
            },
            {
                name: 'кол-во_серверов',
                description: 'Ну блять, какое кол-во серверов хочешь использовать? Больше серверов - сильнее атака',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },
    {
        name: 'инфо',
        description: 'Выводит информацию о серверах'
    },
    {
        name: 'spoof',
        description: 'Ну типа запускает метод spoof',
        options: [
            {
                name: 'ссылка',
                description: 'Ну блять, сайт который хочешь заебашить',
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: 'время',
                description: 'Ну типа время В СЕКУНДАХ, сколько длится атака',
                type: ApplicationCommandOptionType.Number,
                required: true
            },
            {
                name: 'кол-во_серверов',
                description: 'Ну блять, какое кол-во серверов хочешь использовать? Больше серверов - сильнее атака',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Slash commands were registered successfully')
    } catch (error) {
        console.log(`There was an error: ${error}`)
    }
})();