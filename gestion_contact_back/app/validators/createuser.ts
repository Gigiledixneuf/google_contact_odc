import vine from '@vinejs/vine'

export const  createUserValidator = vine.compile(
	vine.object({
		fullName: vine.string().trim(),
        email: vine.string().trim().email(),
		password: vine.string().trim().minLength(5)	
	})
)


export const updateUserValidator = vine.compile(
    vine.object({
        fullName: vine.string().trim(),
        email: vine.string().trim().email(),
        password: vine.string().trim().minLength(5)
    })
)

