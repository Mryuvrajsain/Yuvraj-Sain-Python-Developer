import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set. Contact form submission simulation.")
    return NextResponse.json({ success: true, simulated: true })
  }

  const resend = new Resend(apiKey)
  
  try {
    const { name, email, message } = await req.json()
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mryuvrajsain@gmail.com",
      subject: `New Contact Request from ${name}`,
      replyTo: email,
      html: `
        <div>
          <h2>New Message from your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
