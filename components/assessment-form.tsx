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
  email: z.string().email("Insira um e-mail válido"),
  nome: z
    .string()
    .min(3, "Insira seu nome completo")
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      "Insira nome e sobrenome"
    ),
  idade: z.coerce
    .number({ invalid_type_error: "Insira um número válido" })
    .int("Insira um número inteiro")
    .min(16, "Idade mínima: 16 anos")
    .max(90, "Idade máxima: 90 anos"),
  peso: z.coerce
    .number({ invalid_type_error: "Insira um número válido" })
    .min(30, "Peso mínimo: 30 kg")
    .max(300, "Peso máximo: 300 kg"),
  altura: z.coerce
    .number({ invalid_type_error: "Insira um número válido" })
    .min(120, "Altura mínima: 120 cm")
    .max(220, "Altura máxima: 220 cm"),
  tempoTreino: z.string().min(1, "Selecione uma opção"),
  localTreino: z.string().min(1, "Selecione uma opção"),
  meta: z.string().min(1, "Selecione sua meta"),
  alimentacao: z.string().min(1, "Selecione uma opção"),
  condicaoMedica: z.array(z.string()).min(1, "Selecione ao menos uma opção"),
  condicaoMedicaOutra: z.string().optional(),
  prioridadeCorpo: z.array(z.string()).min(1, "Selecione ao menos uma opção"),
  aceitaTermos: z.literal(true, {
    errorMap: () => ({ message: "Você precisa aceitar os termos" }),
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
      alimentacao: "",
      condicaoMedica: [],
      condicaoMedicaOutra: "",
      prioridadeCorpo: [],
      aceitaTermos: undefined,
      aceitaEmails: false,
    },
  })

  const aceitaTermos = watch("aceitaTermos")
  const aceitaEmails = watch("aceitaEmails")
  const condicaoMedica = watch("condicaoMedica")
  const prioridadeCorpo = watch("prioridadeCorpo")

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
        throw new Error("Erro ao enviar avaliação. Tente novamente.")
      }

      router.push("/pagamento")
    } catch {
      setSubmitError("Erro ao enviar avaliação. Tente novamente.")
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
      {/* E-mail */}
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
            <SelectItem value="intermediario">Intermediário (3-12 meses)</SelectItem>
            <SelectItem value="avancado">Avançado (12+ meses)</SelectItem>
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
            { value: "perder-gordura",  label: "Perder gordura" },
            { value: "ganhar-massa",    label: "Ganhar massa muscular" },
            { value: "definir-corpo",   label: "Definir o corpo" },
            { value: "ganhar-forca",    label: "Ganhar força" },
            { value: "condicionamento", label: "Melhorar condicionamento" },
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

      {/* Alimentação */}
      <div className="flex flex-col gap-3">
        <Label>Como você considera sua alimentação hoje? *</Label>
        <RadioGroup
          onValueChange={(val) => setValue("alimentacao", val, { shouldValidate: true })}
          className="flex flex-col gap-3"
        >
          {[
            { value: "muito-desorganizada", label: "Muito desorganizada" },
            { value: "mais-ou-menos",       label: "Mais ou menos" },
            { value: "ja-sigo-dieta",       label: "Já sigo uma dieta" },
          ].map((option) => (
            <div key={option.value} className="flex items-center gap-3">
              <RadioGroupItem value={option.value} id={`alimentacao-${option.value}`} />
              <Label htmlFor={`alimentacao-${option.value}`} className="cursor-pointer font-normal">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors.alimentacao && (
          <p className="text-sm text-destructive">{errors.alimentacao.message}</p>
        )}
      </div>

      {/* Condição médica */}
      <div className="flex flex-col gap-3">
        <Label>Possui alguma condição médica? *</Label>
        <div className="flex flex-col gap-3">
          {[
            { value: "hipertensao",         label: "Hipertensão" },
            { value: "diabetes",            label: "Diabetes" },
            { value: "problemas-cardiacos", label: "Problemas cardíacos" },
            { value: "nenhuma",             label: "Nenhuma" },
          ].map((option) => (
            <div key={option.value} className="flex items-center gap-3">
              <Checkbox
                id={`condicao-${option.value}`}
                checked={condicaoMedica.includes(option.value)}
                onCheckedChange={(checked) => {
                  const atual = condicaoMedica ?? []
                  const novo = checked
                    ? [...atual, option.value]
                    : atual.filter((v) => v !== option.value)
                  setValue("condicaoMedica", novo, { shouldValidate: true })
                }}
              />
              <Label htmlFor={`condicao-${option.value}`} className="cursor-pointer font-normal">
                {option.label}
              </Label>
            </div>
          ))}

          {/* Outra — com campo aberto */}
          <div className="flex items-center gap-3">
            <Checkbox
              id="condicao-outra"
              checked={condicaoMedica.includes("outra")}
              onCheckedChange={(checked) => {
                const atual = condicaoMedica ?? []
                const novo = checked
                  ? [...atual, "outra"]
                  : atual.filter((v) => v !== "outra")
                setValue("condicaoMedica", novo, { shouldValidate: true })
                if (!checked) setValue("condicaoMedicaOutra", "")
              }}
            />
            <Label htmlFor="condicao-outra" className="cursor-pointer font-normal">
              Outra
            </Label>
          </div>

          {condicaoMedica.includes("outra") && (
            <Input
              placeholder="Descreva sua condição..."
              {...register("condicaoMedicaOutra")}
              className="mt-1"
            />
          )}
        </div>
        {errors.condicaoMedica && (
          <p className="text-sm text-destructive">{errors.condicaoMedica.message}</p>
        )}
      </div>

      {/* Prioridade do corpo */}
      <div className="flex flex-col gap-3">
        <Label>Qual parte do corpo você quer priorizar? *</Label>
        <div className="flex flex-col gap-3">
          {[
            { value: "pernas-gluteos", label: "Pernas e glúteos" },
            { value: "abdomen",        label: "Abdômen" },
            { value: "bracos",         label: "Braços" },
            { value: "costas",         label: "Costas" },
            { value: "corpo-todo",     label: "Corpo todo" },
          ].map((option) => (
            <div key={option.value} className="flex items-center gap-3">
              <Checkbox
                id={`prioridade-${option.value}`}
                checked={prioridadeCorpo.includes(option.value)}
                onCheckedChange={(checked) => {
                  const atual = prioridadeCorpo ?? []
                  const novo = checked
                    ? [...atual, option.value]
                    : atual.filter((v) => v !== option.value)
                  setValue("prioridadeCorpo", novo, { shouldValidate: true })
                }}
              />
              <Label htmlFor={`prioridade-${option.value}`} className="cursor-pointer font-normal">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
        {errors.prioridadeCorpo && (
          <p className="text-sm text-destructive">{errors.prioridadeCorpo.message}</p>
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
              Política de Privacidade
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
            Aceito receber e-mails sobre o Plano de Treino e orientações (opcional)
          </Label>
        </div>
      </div>

      {submitError && (
        <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
          {submitError}
        </div>
      )}

      {/* Botões */}
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
            "Finalizar avaliação"
          )}
        </Button>
        <Button asChild variant="outline" size="lg" className="flex-1">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Voltar à Home
          </Link>
        </Button>
      </div>
    </form>
  )
}
