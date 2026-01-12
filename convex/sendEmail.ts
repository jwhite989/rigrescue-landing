import { action } from "./_generated/server";
import { v } from "convex/values";

export const sendContactEmail = action({
  args: {
    email: v.string(),
    name: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "RigRescue Contact <onboarding@resend.dev>",
        to: ["rigrescue.help@gmail.com"],
        reply_to: args.email,
        subject: `New Contact Form Submission from ${args.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${args.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${args.email}">${args.email}</a></p>
          <p><strong>Message:</strong></p>
          <p>${args.message.replace(/\n/g, "<br>")}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">To reply, click "Reply" in your email client or send directly to: <a href="mailto:${args.email}">${args.email}</a></p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Resend API error: ${response.status} ${errorData}`);
    }

    const result = await response.json();
    return { success: true, result };
  },
});

