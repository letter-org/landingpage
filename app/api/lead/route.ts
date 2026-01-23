import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import * as z from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const leadSchema = z.object({
  segment: z.enum(["pme", "regulated", "public"]),
  companyType: z.string().min(1),
  companyName: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  volume: z.string().min(1),
  needs: z.array(z.string()).optional(),
  description: z.string().max(1000).optional(),
  consent: z.boolean().refine((val) => val === true),
  website: z.string().optional(),
})

const segmentLabels: Record<string, string> = {
  pme: "PME & indépendants",
  regulated: "Professions réglementées",
  public: "Communes & institutions",
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validate data
    const validatedData = leadSchema.parse(body)

    // Prepare email content
    const needsText = validatedData.needs && validatedData.needs.length > 0
      ? validatedData.needs.join(", ")
      : "Aucun besoin spécifique sélectionné"

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; display: block; }
            .value { color: #4b5563; }
            .section { background: white; padding: 15px; margin-bottom: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nouvelle demande B2B - NextLetter</h1>
              <p style="margin: 0;">Segment: ${segmentLabels[validatedData.segment]}</p>
            </div>
            <div class="content">
              <div class="section">
                <h2 style="margin-top: 0; color: #1f2937;">Informations de l'entreprise</h2>
                <div class="field">
                  <span class="label">Type de société:</span>
                  <span class="value">${validatedData.companyType}</span>
                </div>
                <div class="field">
                  <span class="label">Raison sociale:</span>
                  <span class="value">${validatedData.companyName}</span>
                </div>
                <div class="field">
                  <span class="label">Adresse:</span>
                  <span class="value">${validatedData.address}</span>
                </div>
              </div>

              <div class="section">
                <h2 style="margin-top: 0; color: #1f2937;">Contact</h2>
                <div class="field">
                  <span class="label">Nom complet:</span>
                  <span class="value">${validatedData.firstName} ${validatedData.lastName}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${validatedData.email}</span>
                </div>
                <div class="field">
                  <span class="label">Téléphone:</span>
                  <span class="value">${validatedData.phone}</span>
                </div>
              </div>

              <div class="section">
                <h2 style="margin-top: 0; color: #1f2937;">Besoins</h2>
                <div class="field">
                  <span class="label">Volume mensuel:</span>
                  <span class="value">${validatedData.volume} lettres/mois</span>
                </div>
                <div class="field">
                  <span class="label">Besoins sélectionnés:</span>
                  <span class="value">${needsText}</span>
                </div>
                ${validatedData.description ? `
                <div class="field">
                  <span class="label">Description:</span>
                  <span class="value">${validatedData.description}</span>
                </div>
                ` : ""}
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
Nouvelle demande B2B - NextLetter
Segment: ${segmentLabels[validatedData.segment]}

Informations de l'entreprise:
- Type: ${validatedData.companyType}
- Raison sociale: ${validatedData.companyName}
- Adresse: ${validatedData.address}

Contact:
- Nom: ${validatedData.firstName} ${validatedData.lastName}
- Email: ${validatedData.email}
- Téléphone: ${validatedData.phone}

Besoins:
- Volume: ${validatedData.volume} lettres/mois
- Besoins: ${needsText}
${validatedData.description ? `- Description: ${validatedData.description}` : ""}
    `

    // Send email
    const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.FROM_EMAIL || "onboarding@resend.dev"
    const toEmail = "info@nextletter.ch"

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[NextLetter] Nouvelle demande B2B - ${segmentLabels[validatedData.segment]}`,
      html: emailHtml,
      text: emailText,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 }
      )
    }

    console.error("API error:", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

