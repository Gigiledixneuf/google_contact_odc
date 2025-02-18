import vine from '@vinejs/vine'

export const createcontactValidator = vine.compile(
    vine.object({
        name: vine.string().trim(),
        lastname: vine.string().trim(),
        email: vine.string().trim(),
        numero: vine.string(),
        anniv : vine.date(),
        notes : vine.string().trim().escape().nullable()
    })
)