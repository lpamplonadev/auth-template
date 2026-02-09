import { AuthShell } from "@/components/auth/AuthShell";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthShell
      title="Entrar e começar rápido"
      subtitle="Template mobile-first com shadcn/ui, Zod e react-hook-form. Pronto pra você plugar autenticação real depois."
      footer={<>Feito para virar produto: demo, docs e UI consistente.</>}
    >
      {children}
    </AuthShell>
  );
}
