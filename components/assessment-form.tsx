"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Loader2 } from "lucide-react"

const assessmentSchema = z.object({
  email: z.string().email("Insira um e-mail valido"),
  nome: z
    .string()
    .min(3, "Insira seu nome completo")
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      "Insira nome e sobrenome"
    ),
  idade: z.coerce
    .number({ invalid_type_error: "Insira um numero valido" })
    .int("Insira um numero inteiro")
    .min(16, "Idade minima: 16 anos")
    .max(90, "Idade maxima: 90 anos"),
  peso: z.coerce
    .number({ invalid_type_error: "Insira um numero valido" })
    .min(30, "Peso minimo: 30 kg")
    .max(300, "Peso maximo: 300 kg"),
  altura: z.coerce
    .number({ invalid_type_error: "Insira um numero valido" })
    .min(120, "Altura minima: 120 cm")
    .max(220, "Altura maxima: 220 cm"),
  tempoTreino: z.string().min(1, "Selecione uma opcao"),
  localTreino: z.string().min(1, "Selecione uma opcao"),
  meta: z.string().min(1, "Selecione sua meta"),
  aceitaTermos: z.literal(true, {
    errorMap: () => ({ message: "Voce precisa aceitar os termos" }),
  }),
  aceitaEmails: z.boolean().optional(),
})

type AssessmentFormData = z.infer<typeof assessmentSchema>

export function AssessmentForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      email: "",
      nome: "",
      tempoTreino: "",
      localTreino: "",
      meta: "",
      aceitaTermos: undefined,
      aceitaEmails: false,
    },
  })

  const aceitaTermos = watch("aceitaTermos")
  const aceitaEmails = watch("aceitaEmails")

  async function onSubmit(data: AssessmentFormData) {
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const res = await fetch("/api/avaliacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Erro ao enviar avaliacao. Tente novamente.")
      }

      router.push("/pagamento")
    } catch {
      setSubmitError("Erro ao enviar avaliacao. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
      noValidate
    >
      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-mail *</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          autoComplete="email"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Nome */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome">Nome completo *</Label>
        <Input
          id="nome"
          type="text"
          placeholder="Maria da Silva"
          autoComplete="name"
          {...register("nome")}
          aria-invalid={!!errors.nome}
        />
        {errors.nome && (
          <p className="text-sm text-destructive">{errors.nome.message}</p>
        )}
      </div>

      {/* Idade, Peso, Altura */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="idade">Idade *</Label>
          <Input
            id="idade"
            type="number"
            placeholder="30"
            min={16}
            max={90}
            {...register("idade")}
            aria-invalid={!!errors.idade}
          />
          {errors.idade && (
            <p className="text-sm text-destructive">{errors.idade.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="peso">Peso (kg) *</Label>
          <Input
            id="peso"
            type="number"
            placeholder="75"
            min={30}
            max={300}
            step={0.1}
            {...register("peso")}
            aria-invalid={!!errors.peso}
          />
          {errors.peso && (
            <p className="text-sm text-destructive">{errors.peso.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="altura">Altura (cm) *</Label>
          <Input
            id="altura"
            type="number"
            placeholder="170"
            min={120}
            max={220}
            {...register("altura")}
            aria-invalid={!!errors.altura}
          />
          {errors.altura && (
            <p className="text-sm text-destructive">{errors.altura.message}</p>
          )}
        </div>
      </div>

      {/* Tempo de treino */}
      <div className="flex flex-col gap-2">
        <Label>Tempo de treino *</Label>
        <Select
          onValueChange={(val) => setValue("tempoTreino", val, { shouldValidate: true })}
        >
          <SelectTrigger aria-invalid={!!errors.tempoTreino}>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="iniciante">Iniciante (0-3 meses)</SelectItem>
            <SelectItem value="intermediario">Intermediario (3-12 meses)</SelectItem>
            <SelectItem value="avancado">Avancado (12+ meses)</SelectItem>
          </SelectContent>
        </Select>
        {errors.tempoTreino && (
          <p className="text-sm text-destructive">{errors.tempoTreino.message}</p>
        )}
      </div>

      {/* Local de treino */}
      <div className="flex flex-col gap-2">
        <Label>Local de treino *</Label>
        <Select
          onValueChange={(val) => setValue("localTreino", val, { shouldValidate: true })}
        >
          <SelectTrigger aria-invalid={!!errors.localTreino}>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="casa">Casa</SelectItem>
            <SelectItem value="academia">Academia</SelectItem>
          </SelectContent>
        </Select>
        {errors.localTreino && (
          <p className="text-sm text-destructive">{errors.localTreino.message}</p>
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-3">
        <Label>Qual a sua meta? *</Label>
        <RadioGroup
          onValueChange={(val) => setValue("meta", val, { shouldValidate: true })}
          className="flex flex-col gap-3"
        >
          {[
            { value: "emagrecimento", label: "Emagrecimento" },
            { value: "definicao", label: "Definicao e hipertrofia" },
            { value: "saude", label: "Saude e bem-estar" },
          ].map((option) => (
            <div key={option.value} className="flex items-center gap-3">
              <RadioGroupItem value={option.value} id={`meta-${option.value}`} />
              <Label htmlFor={`meta-${option.value}`} className="cursor-pointer font-normal">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors.meta && (
          <p className="text-sm text-destructive">{errors.meta.message}</p>
        )}
      </div>

      {/* Consentimentos */}
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-muted/50 p-4">
        <div className="flex items-start gap-3">
          <Checkbox
            id="aceitaTermos"
            checked={aceitaTermos === true}
            onCheckedChange={(checked) =>
              setValue("aceitaTermos", checked === true ? true : (undefined as unknown as true), { shouldValidate: true })
            }
            aria-invalid={!!errors.aceitaTermos}
          />
          <Label htmlFor="aceitaTermos" className="cursor-pointer text-sm font-normal leading-relaxed">
            Li e aceito os{" "}
            <Link href="/termos" className="text-primary underline underline-offset-2" target="_blank">
              Termos de Uso
            </Link>{" "}
            e a{" "}
            <Link href="/privacidade" className="text-primary underline underline-offset-2" target="_blank">
              Politica de Privacidade
            </Link>{" "}
            *
          </Label>
        </div>
        {errors.aceitaTermos && (
          <p className="text-sm text-destructive">{errors.aceitaTermos.message}</p>
        )}

        <div className="flex items-start gap-3">
          <Checkbox
            id="aceitaEmails"
            checked={aceitaEmails === true}
            onCheckedChange={(checked) =>
              setValue("aceitaEmails", checked === true, { shouldValidate: true })
            }
          />
          <Label htmlFor="aceitaEmails" className="cursor-pointer text-sm font-normal leading-relaxed">
            Aceito receber e-mails sobre o Plano de Treino e orientacoes (opcional)
          </Label>
        </div>
      </div>

      {submitError && (
        <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
          {submitError}
        </div>
      )}

      {/* Botoes */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          size="lg"
          className="flex-1 text-base font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Enviando...
            </>
          ) : (
            "Finalizar avaliacao"
          )}
        </Button>
        <Button asChild variant="outline" size="lg" className="flex-1">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Voltar a Home
          </Link>
        </Button>
      </div>
    </form>
  )
}
