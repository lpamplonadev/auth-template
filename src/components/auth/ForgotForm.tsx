"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { z } from "zod";

import { forgotSchema } from "@/lib/validators/auth";
import { forgotPasswordAction } from "@/app/actions/auth";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormValues = z.infer<typeof forgotSchema>;

export function ForgotForm() {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await forgotPasswordAction(values);
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
        <CardTitle>Recuperar senha</CardTitle>
        <CardDescription>Vamos te enviar um link (mock) para redefinir.</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="voce@exemplo.com" autoComplete="email" {...register("email")} />
            {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
          </div>

          <Button disabled={loading} className="w-full">
            {loading ? "Enviando..." : "Enviar link"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Lembrou?{" "}
            <Link href="/login" className="font-medium text-foreground underline-offset-4 hover:underline">
              Voltar para login
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
