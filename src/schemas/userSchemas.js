import {z} from "zod"

export const createUserSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 chars"),
    email: z.string().email("Email Inválido"),
    password: z.string()
        .min(6, "A senha deve ter pelo menos 6 chars")
        .regex(/[A-Z]/, 
            "A senha deve ter pelo menos uma letra maíscula")
})

export const updateUserSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 chars").optional(),
    email: z.string().email("Email Inválido").optional(),
    password: z.string()
        .min(6, "A senha deve ter pelo menos 6 chars")
        .regex(/[A-Z]/, 
            "A senha deve ter pelo menos uma letra maíscula").optional()

})

export const loginSchema = z.object({
    email: z.string().email('Email inválido!'),
    password: z.string().min(1, 'Senha é obrigatória!')
})