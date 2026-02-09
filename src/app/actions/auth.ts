"use server";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function signInAction(input: { email: string; password: string }) {
  await sleep(600);

  // MOCK: aceita qualquer senha >= 6
  if (!input.email.includes("@")) {
    return { ok: false, message: "Email inválido." };
  }

  return { ok: true, message: "Login efetuado (mock)." };
}

export async function signUpAction(input: {
  name: string;
  email: string;
  password: string;
}) {
  await sleep(800);

  if (input.email.endsWith("@test.com")) {
    return { ok: false, message: "Esse domínio está bloqueado (mock)." };
  }

  return { ok: true, message: "Conta criada (mock)." };
}

export async function forgotPasswordAction(input: { email: string }) {
  await sleep(700);
  return { ok: true, message: "Se esse email existir, enviamos um link (mock)." };
}
