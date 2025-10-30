import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 🔹 Captura os dados do formulário (funciona com multipart/form-data)
    const formData = await req.formData();

    const to = formData.get("email") as string;
    const message = formData.get("message") as string;
    const subject = formData.get("subject") as string;
    const file = formData.get("file") as File;

    const buffer = Buffer.from(await file.arrayBuffer());

    // 🔹 Envia o e-mail com o anexo
    const data = await resend.emails.send({
      from: "support@wdtoitures.be", // pode trocar depois pelo seu domínio verificado
      to,
      subject: subject,
      text: message,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return Response.json({ success: true, data });
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
