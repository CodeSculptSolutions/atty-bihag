import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const matterTypes = [
  "Civil Litigation",
  "Family Law",
  "Criminal Defense",
  "Corporate & Contracts",
  "Local Government & Administrative Law",
  "Legal Aid & Pro Bono",
] as const;

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  matterType: z.enum(matterTypes),
  description: z.string().min(20).max(1000),
  consent: z.literal(true),
});

// Brand tokens (from globals.css)
const C = {
  bg: "#F5EFE6",
  card: "#FDFAF6",
  primary: "#6D2C12",
  fg: "#1A1A1A",
  muted: "#6B5E52",
  border: "#DAD0C5",
  secondary: "#EDE5D6",
};

function notificationHtml(data: z.infer<typeof schema>) {
  const { fullName, email, phone, matterType, description } = data;
  const date = new Date().toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const safe = (s: string) => s.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:${C.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${C.bg};padding:48px 24px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${C.card};border-radius:6px;overflow:hidden;border:1px solid ${C.border};">

        <!-- Primary accent bar -->
        <tr><td style="background:${C.primary};height:4px;"></td></tr>

        <!-- Header -->
        <tr><td style="padding:40px 48px 28px;">
          <p style="margin:0 0 6px;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${C.muted};font-family:monospace;">New inquiry</p>
          <h1 style="margin:0;font-size:22px;font-weight:400;letter-spacing:-0.01em;color:${C.fg};font-style:italic;">Krystyll Ann Bihag, Atty.</h1>
        </td></tr>

        <!-- Divider -->
        <tr><td style="padding:0 48px;"><div style="height:1px;background:${C.border};"></div></td></tr>

        <!-- Matter type badge -->
        <tr><td style="padding:24px 48px 0;">
          <span style="display:inline-block;background:${C.secondary};color:${C.primary};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;font-family:monospace;padding:6px 12px;border-radius:3px;">${matterType}</span>
        </td></tr>

        <!-- Sender info -->
        <tr><td style="padding:20px 48px 0;">
          <table cellpadding="0" cellspacing="0">
            <tr><td style="padding-bottom:8px;">
              <span style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};font-family:monospace;">From</span>
            </td></tr>
            <tr><td style="padding-bottom:4px;">
              <span style="font-size:18px;font-weight:400;color:${C.fg};font-style:italic;">${safe(fullName)}</span>
            </td></tr>
            <tr><td style="padding-bottom:${phone ? "2px" : "0"};">
              <a href="mailto:${email}" style="font-size:14px;color:${C.primary};text-decoration:none;">${email}</a>
            </td></tr>
            ${phone ? `<tr><td><span style="font-size:13px;color:${C.muted};">${safe(phone)}</span></td></tr>` : ""}
          </table>
        </td></tr>

        <!-- Message -->
        <tr><td style="padding:24px 48px 0;">
          <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};font-family:monospace;">Their situation</p>
          <div style="background:${C.secondary};border-radius:4px;padding:20px 24px;border-left:2px solid ${C.primary};">
            <p style="margin:0;font-size:15px;line-height:1.75;color:${C.fg};white-space:pre-wrap;">${safe(description)}</p>
          </div>
        </td></tr>

        <!-- Reply CTA -->
        <tr><td style="padding:28px 48px;">
          <a href="mailto:${email}" style="display:inline-block;background:${C.primary};color:${C.card};font-size:13px;font-weight:500;letter-spacing:0.02em;padding:12px 24px;border-radius:4px;text-decoration:none;">Reply to ${safe(fullName)} →</a>
        </td></tr>

        <!-- Divider -->
        <tr><td style="padding:0 48px;"><div style="height:1px;background:${C.border};"></div></td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 48px 32px;">
          <p style="margin:0;font-size:11px;color:${C.muted};font-family:monospace;letter-spacing:0.06em;">via krystyllannbihag.com · ${date}</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function autoReplyHtml(fullName: string, email: string, matterType: string, description: string) {
  const safe = (s: string) => s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const firstName = fullName.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:${C.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${C.bg};padding:48px 24px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${C.card};border-radius:6px;overflow:hidden;border:1px solid ${C.border};">

        <tr><td style="background:${C.primary};height:4px;"></td></tr>

        <tr><td style="padding:40px 48px 28px;">
          <p style="margin:0 0 6px;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${C.muted};font-family:monospace;">Received.</p>
          <h1 style="margin:0;font-size:22px;font-weight:400;letter-spacing:-0.01em;color:${C.fg};font-style:italic;">Krystyll Ann Bihag, Atty.</h1>
        </td></tr>

        <tr><td style="padding:0 48px;"><div style="height:1px;background:${C.border};"></div></td></tr>

        <tr><td style="padding:32px 48px 0;">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:${C.fg};">Dear ${safe(firstName)},</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.75;color:${C.muted};">Thank you for reaching out. Your inquiry regarding <strong style="color:${C.fg};">${matterType}</strong> has been received. I read every message personally and will get back to you within two business days.</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.75;color:${C.muted};">In the meantime, please do not hesitate to call or text me directly if your matter is urgent.</p>
          <p style="margin:0;font-size:15px;line-height:1.75;color:${C.muted};">Warm regards,</p>
          <p style="margin:6px 0 0;font-size:15px;font-weight:400;font-style:italic;color:${C.fg};">Krystyll Ann Bihag, Atty.</p>
          <p style="margin:2px 0 0;font-size:12px;color:${C.muted};">IBP Cebu Chapter · Philippine Bar 2025</p>
        </td></tr>

        <!-- Message echo -->
        <tr><td style="padding:28px 48px 0;">
          <div style="background:${C.secondary};border-radius:4px;padding:16px 20px;border-left:2px solid ${C.border};">
            <p style="margin:0 0 6px;font-size:10px;letter-spacing:0.10em;text-transform:uppercase;color:${C.muted};font-family:monospace;">Your message</p>
            <p style="margin:0;font-size:13px;line-height:1.7;color:${C.muted};white-space:pre-wrap;">${safe(description)}</p>
          </div>
        </td></tr>

        <tr><td style="padding:0 48px;margin-top:28px;"><div style="height:1px;background:${C.border};margin-top:28px;"></div></td></tr>

        <tr><td style="padding:20px 48px 32px;">
          <p style="margin:0;font-size:11px;color:${C.muted};font-family:monospace;letter-spacing:0.06em;">Cambaro, Mandaue City · Cebu 6014 · 0992 524 3474</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const { fullName, email, phone, matterType, description } = parsed.data;

    // Notification to Atty. Bihag — must succeed
    await resend.emails.send({
      from: "KAB Law <onboarding@resend.dev>", // TODO: update to verified domain
      to: ["krystyllannbihag@gmail.com"],
      replyTo: email,
      subject: `New Inquiry — ${matterType} from ${fullName}`,
      html: notificationHtml(parsed.data),
      text: `From: ${fullName} <${email}>${phone ? `\nPhone: ${phone}` : ""}\nMatter: ${matterType}\n\n${description}`,
    });

    // Auto-reply to sender — best effort, never blocks response
    resend.emails.send({
      from: "Atty. Krystyll Ann Bihag <onboarding@resend.dev>", // TODO: update to verified domain
      to: [email],
      replyTo: "krystyllannbihag@gmail.com",
      subject: "Your inquiry has been received — Atty. Krystyll Ann Bihag",
      html: autoReplyHtml(fullName, email, matterType, description),
      text: `Dear ${fullName.split(" ")[0]},\n\nThank you for reaching out. Your inquiry regarding ${matterType} has been received. I read every message personally and will get back to you within two business days.\n\nWarm regards,\nKrystyll Ann Bihag, Atty.\nIBP Cebu Chapter · Philippine Bar 2025\n0992 524 3474`,
    }).catch((err: unknown) => console.error("Auto-reply failed:", err));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
