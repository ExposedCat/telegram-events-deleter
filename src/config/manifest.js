const token = process.env.TOKEN
const eventsToDelete = [
    'new_chat_members', 'left_chat_member',
    'new_chat_title', 'new_chat_photo', 'delete_chat_photo',
    'pinned_message'
]


export {
    token,
    eventsToDelete
}