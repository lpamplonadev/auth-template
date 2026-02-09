"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { z } from "zod";

import { loginSchema } from "@/lib/validators/auth";
import { signInAction } from "@/app/actions/auth";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await signInAction(values);
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
        <CardTitle>Entrar</CardTitle>
        <CardDescription>Use seu email e senha para acessar.</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="voce@exemplo.com" autoComplete="email" {...register("email")} />
            {errors.email ? (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <Link href="/forgot" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
                Esqueceu?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              {...register("password")}
            />
            {errors.password ? (
              <p className="text-xs text-destructive">{errors.password.message}</p>
            ) : null}
          </div>

          <Button disabled={loading} className="w-full">
            {loading ? "Entrando..." : "Entrar"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Não tem conta?{" "}
            <Link href="/register" className="font-medium text-foreground underline-offset-4 hover:underline">
              Criar agora
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
