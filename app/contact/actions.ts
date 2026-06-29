"use server";

export interface ContactState {
  success: boolean;
  error: string;
}

export async function sendMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  // To enable email delivery:
  // 1. npm install resend
  // 2. Add RESEND_API_KEY to your Vercel environment variables
  // 3. Uncomment the block below and update the `from` address
  //
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Portfolio <portfolio@yourdomain.com>",
  //   to: "oli@coltart.org",
  //   replyTo: email,
  //   subject: `Portfolio contact from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  // });

  console.log("[contact]", { name, email, message });

  return { success: true, error: "" };
}
