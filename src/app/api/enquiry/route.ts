import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Enquiry } from "@/lib/models/Enquiry";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { childName, childAge, parentName, phone, email, program, message } = body;
    if (!childName || !childAge || !parentName || !phone || !program) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    await connectDB();

    const enquiry = await Enquiry.create(body);

    // Send data to Google Sheet
    try {
      await fetch(process.env.GOOGLE_SHEET_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ childName, childAge, parentName, phone, email, program, message }),
      });
    } catch (sheetError) {
      console.error("Google Sheet update failed:", sheetError);
    }

    // Send email notification
    try {
      await resend.emails.send({
        from: "Prakruthi Pre School <onboarding@resend.dev>",
        to: process.env.NOTIFICATION_EMAIL!.split(",").map((e) => e.trim()).filter(Boolean),
        subject: `🌿 New Admission Enquiry - ${childName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #FF6B35, #EC4899); padding: 20px; border-radius: 12px; text-align: center;">
              <h1 style="color: white; margin: 0;">🌿 New Admission Enquiry</h1>
              <p style="color: rgba(255,255,255,0.9); margin-top: 8px;">Prakruthi Pre School</p>
            </div>
            <div style="background: #FFF8F0; padding: 24px; border-radius: 12px; margin-top: 16px;">
              <h2 style="color: #FF6B35; margin-top: 0;">Child Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; width: 140px;">Child Name</td><td style="padding: 8px 0; font-weight: bold;">${childName}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Child Age</td><td style="padding: 8px 0; font-weight: bold;">${childAge}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Program</td><td style="padding: 8px 0; font-weight: bold;">${program}</td></tr>
              </table>
              <h2 style="color: #FF6B35; margin-top: 20px;">Parent Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; width: 140px;">Parent Name</td><td style="padding: 8px 0; font-weight: bold;">${parentName}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0; font-weight: bold;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; font-weight: bold;">${email ? `<a href="mailto:${email}">${email}</a>` : "Not provided"}</td></tr>
              </table>
              ${message ? `<h2 style="color: #FF6B35; margin-top: 20px;">Message</h2><p style="background: white; padding: 12px; border-radius: 8px; color: #333;">${message}</p>` : ""}
            </div>
            <div style="text-align: center; margin-top: 16px;">
              <a href="https://wa.me/91${phone}" style="background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Reply on WhatsApp</a>
            </div>
            <p style="text-align: center; color: #999; font-size: 12px; margin-top: 16px;">Sent from Prakruthi Pre School Website</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    return NextResponse.json(
      { message: "Enquiry submitted successfully!", id: enquiry._id },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error("Enquiry submission error:", errMessage);
    return NextResponse.json(
      { error: "Something went wrong. Please try again.", details: errMessage },
      { status: 500 }
    );
  }
}
