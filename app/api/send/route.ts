import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const { name, email, phone, carModel, service, message } = await request.json();

    // Map service slugs to human-readable names
    const serviceMap: Record<string, string> = {
      "car-detailing": "Car Detailing & Compounding",
      "car-painting": "Car Painting & Oven Bake",
      "denting": "Denting & Panel Alignment",
      "accident-repair": "Accident Restoration",
      "insurance-claims": "Insurance Claims Support",
      "ceramic-coating": "Ceramic Coating",
      "car-washing": "Foam Washing",
    };

    const humanReadableService = serviceMap[service] || service;

    const data = await resend.emails.send({
      from: "Hype Mechanical <onboarding@resend.dev>",
      to: ["Hypeautorepairs@gmail.com"],
      subject: `New Booking Request from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e5e7eb; border-radius: 16px; background-color: #ffffff; color: #1f2937;">
          <div style="border-bottom: 2px solid #e30613; padding-bottom: 15px; margin-bottom: 25px;">
            <h2 style="color: #e30613; text-transform: uppercase; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.05em;">New Booking Enquiry</h2>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: bold; letter-spacing: 0.1em;">Hype Mechanical & Smash Repairs</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 25px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 140px; font-weight: 600;">Customer Name:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email Address:</td>
              <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #e30613; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Phone Number:</td>
              <td style="padding: 8px 0; color: #111827;"><a href="tel:${phone}" style="color: #111827; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Vehicle Info:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: bold;">${carModel}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Service Requested:</td>
              <td style="padding: 8px 0; color: #e30613; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">${humanReadableService}</td>
            </tr>
          </table>

          <div style="background-color: #f9fafb; border: 1px solid #f3f4f6; border-radius: 12px; padding: 20px;">
            <h4 style="margin: 0 0 10px 0; color: #374151; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message Details:</h4>
            <p style="margin: 0; font-size: 13px; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message || "No additional message details provided."}</p>
          </div>

          <div style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px; text-align: center;">
            <p style="font-size: 11px; color: #9ca3af; margin: 0;">This email was sent automatically from the Hype Mechanical Contact Form.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
