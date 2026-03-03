import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const { email, nome } = data

    if (!email || !nome) {
      return NextResponse.json(
        { error: "Dados incompletos" },
        { status: 400 }
      )
    }

    // Log lead for now (replace with CRM/Google Sheets integration)
    console.log("[v0] Nova avaliacao recebida:", {
      email,
      nome,
      idade: data.idade,
      peso: data.peso,
      altura: data.altura,
      tempoTreino: data.tempoTreino,
      localTreino: data.localTreino,
      meta: data.meta,
      aceitaEmails: data.aceitaEmails,
      timestamp: new Date().toISOString(),
    })

    // Send transactional email (placeholder — integrate with SendGrid/Resend/etc.)
    // In production, replace with actual email service:
    //
    // await sendEmail({
    //   to: email,
    //   from: "Plano Slim360 <no-reply@slim360.com.br>",
    //   subject: "Avaliacao concluida — proximo passo para garantir seu Plano de Treino",
    //   html: `
    //     <p>Ola, ${nome.split(" ")[0]},</p>
    //     <p>Recebemos sua avaliacao com sucesso. A seguir, finalize a compra do Plano de Treino
    //     Plano Slim360 para acessar os planos de treino e as sugestoes de dieta.</p>
    //     <p><strong>Importante:</strong> este material e informativo e nao substitui
    //     orientacao medica. Em caso de condicoes de saude, consulte um profissional.</p>
    //     <p>Se voce nao iniciou esta avaliacao, ignore este e-mail.</p>
    //     <p>— Equipe Plano Slim360 | Suporte: suporte@slim360.com.br</p>
    //   `,
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
