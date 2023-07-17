import { object, string } from 'zod';


export const loginSchema = object({
    email: string().email().min(1, "Email is requested"),
    password: string()
        .min(1, 'Password is requested')
});


