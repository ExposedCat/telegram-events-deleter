import { deleteMessage } from '../../services/handlers/delete.js'


async function handleSystemMessage(ctx) {
    try {
        await deleteMessage(ctx)
    } catch (error) {
        console.error(`Can't delete system event: ${error.message}`)
    }
}


export { handleSystemMessage }