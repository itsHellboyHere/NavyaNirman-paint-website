"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const PHONE_REGEX = /^\+?[0-9]{7,15}$/;

export async function sendLead(formData) {
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const product = formData.get("product")?.toString().trim();
  const company = formData.get("company");

  // Honeypot (bot protection)
  if (company) return;

  if (!name || !phone) {
    throw new Error("Missing required fields");
  }
  if (!PHONE_REGEX.test(phone)) {
    throw new Error("Invalid phone number format");
  }
  await resend.emails.send({
    from: "Navyya Nirman <onboarding@resend.dev>",
    to: [process.env.LEADS_EMAIL],
    subject: `New Enquiry – ${product || "General"}`,
    html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Inter,Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table width="100%" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
                <h2 style="margin:0;font-size:20px;color:#0f172a;">
                  New Website Enquiry
                </h2>
                <p style="margin:6px 0 0;font-size:13px;color:#6b7280;">
                  Navvya Nirman Company
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:28px 32px;color:#111827;">
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                  <tr>
                    <td style="padding-bottom:10px;"><strong>Product / Service</strong></td>
                    <td style="padding-bottom:10px;">${product || "General Enquiry"}</td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:10px;"><strong>Name</strong></td>
                    <td style="padding-bottom:10px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:10px;"><strong>Phone</strong></td>
                    <td style="padding-bottom:10px;">${phone}</td>
                  </tr>
                </table>

                <div style="margin-top:16px;">
                  <strong>Message</strong>
                  <div style="margin-top:6px;padding:12px;border:1px solid #e5e7eb;border-radius:8px;color:#374151;">
                    ${message || "—"}
                  </div>
                </div>

                <a
                  href="tel:${phone}"
                  style="
                    display:inline-block;
                    margin-top:24px;
                    padding:12px 18px;
                    background:#0f172a;
                    color:#ffffff;
                    text-decoration:none;
                    border-radius:8px;
                    font-size:14px;
                  "
                >
                  Call Customer
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px 32px;background:#f9fafb;font-size:12px;color:#6b7280;">
                Website lead received via Navvya Nirman contact form.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
    `,
  });
}