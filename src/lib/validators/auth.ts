import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Digite seu nome"),
    email: z.string().email("Digite um email válido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export const forgotSchema = z.object({
  email: z.string().email("Digite um email válido"),
});
