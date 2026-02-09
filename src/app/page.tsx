import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <div className="w-full max-w-md space-y-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Auth Template</h1>
        <p className="text-sm text-muted-foreground">
          Um starter de autenticação bonito e pronto pra vender.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/register">Cadastro</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
