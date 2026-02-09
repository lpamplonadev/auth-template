"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { z } from "zod";

import { registerSchema } from "@/lib/validators/auth";
import { signUpAction } from "@/app/actions/auth";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await signUpAction({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (!res.ok) {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>Leva menos de um minuto.</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome" autoComplete="name" {...register("name")} />
            {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="voce@exemplo.com" autoComplete="email" {...register("email")} />
            {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" autoComplete="new-password" {...register("password")} />
            {errors.password ? <p className="text-xs text-destructive">{errors.password.message}</p> : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirmar senha</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword ? (
              <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>
            ) : null}
          </div>

          <Button disabled={loading} className="w-full">
            {loading ? "Criando..." : "Criar conta"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Já tem conta?{" "}
            <Link href="/login" className="font-medium text-foreground underline-offset-4 hover:underline">
              Entrar
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
