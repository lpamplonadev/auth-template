import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Separator } from "@/components/ui/separator";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: Props) {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          auth-template
        </Link>
        <ThemeToggle />
      </header>

      <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 pb-10 pt-4 md:grid-cols-2 md:pt-10">
        <section className="hidden md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? (
            <p className="mt-2 max-w-md text-sm text-muted-foreground">{subtitle}</p>
          ) : null}

          <div className="mt-6 rounded-2xl border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium">O que esse template entrega</p>
            <Separator className="my-3" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fluxo completo de auth UI (login/cadastro/esqueci)</li>
              <li>• Zod + RHF + shadcn/ui (padrão “produtivo”)</li>
              <li>• Dark mode + layout responsivo</li>
              <li>• Server actions mock pra você plugar auth real</li>
            </ul>
          </div>
        </section>

        <section className="flex items-center justify-center">
          <div className="w-full max-w-md">{children}</div>
        </section>

        {footer ? (
          <div className="md:col-span-2">
            <Separator className="my-6" />
            <div className="text-center text-xs text-muted-foreground">{footer}</div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
