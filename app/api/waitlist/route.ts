import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("WAITLIST_WEBHOOK_URL is not set in .env.local");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  try {
    const url = new URL(webhookUrl);
    url.searchParams.set("email", email);
    url.searchParams.set("timestamp", new Date().toISOString());

    const res = await fetch(url.toString(), {
      method: "GET",
      redirect: "follow",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to reach webhook:", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
