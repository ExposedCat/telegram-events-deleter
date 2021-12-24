import { Telegraf } from 'telegraf'


async function setupBot(token) {
    console.info(`Setting up bot..`)
    const bot = new Telegraf(token)
    bot.catch(error => console.error(error.message))
    console.info(`Done`)
    return bot
}


export { setupBot }