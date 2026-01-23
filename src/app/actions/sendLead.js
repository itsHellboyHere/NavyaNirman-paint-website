"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLead(formData) {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const product = formData.get("product");
    const company = formData.get("company");
    if (company) {
        return; // bot detected, silently ignore.
    }
    await resend.emails.send({
        from: "Navvya Nirman Company <onboarding@resend.dev>",
        to: [process.env.LEADS_EMAIL],
        subject: `New Product Enquiry – ${product}`,
        html: `
      <div style="font-family: Inter, Arial; padding:24px; background:#f9fafb">
        <div style="max-width:600px;margin:auto;background:#fff;padding:32px;border-radius:12px">
          
          <img src="http://localhost:3000/brand/logo-icon.png" height="40" />

          <h2 style="margin-top:20px">New Enquiry</h2>

          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <p style="margin-top:16px">
            <strong>Message:</strong><br/>
            ${message || "—"}
          </p>

          <a
            href="tel:${phone}"
            style="
              display:inline-block;
              margin-top:20px;
              padding:12px 16px;
              background:#000;
              color:#fff;
              text-decoration:none;
              border-radius:8px;
            "
          >
            Call Customer
          </a>

          <p style="margin-top:24px;font-size:12px;color:#777">
            Website Lead • Navvya Nirman
          </p>
        </div>
      </div>
    `,
    });
}