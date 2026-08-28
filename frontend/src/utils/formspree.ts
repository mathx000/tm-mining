export type FormspreeResult =
  | { ok: true }
  | { ok: false; error: string };

// Sends form data to a Formspree endpoint via fetch, keeping the user on the same page.
export async function submitToFormspree(
  endpoint: string,
  data: Record<string, string | string[]>,
): Promise<FormspreeResult> {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, value);
    }
  });

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      return { ok: true };
    }

    const payload = await response.json().catch(() => null);
    const message =
      payload?.errors?.map((item: { message: string }) => item.message).join(", ") ||
      "Erro ao enviar o formulário.";

    return { ok: false, error: message };
  } catch {
    return { ok: false, error: "Falha de conexão. Verifique sua internet." };
  }
}
