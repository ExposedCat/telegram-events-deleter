import { setupBot } from './config/bot.js'
import { token, eventsToDelete } from './config/manifest.js'

import { handleSystemMessage } from './controllers/handlers/system-message.js'


const bot = await setupBot(token)

bot.on(eventsToDelete, handleSystemMessage)
bot.launch()

console.info('__________')
console.info('App started')
console.info('__________')