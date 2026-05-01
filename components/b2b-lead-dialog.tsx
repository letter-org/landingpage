"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, Sparkles } from "lucide-react"
import { toast } from "sonner"

const segmentLabels: Record<string, string> = {
  pme: "PME & indépendants",
  regulated: "Professions réglementées",
  public: "Communes & institutions",
}

const formSchema = z.object({
  segment: z.enum(["pme", "regulated", "public"]),
  companyType: z.string().min(1, "Type de société requis"),
  companyName: z.string().min(1, "Raison sociale requise"),
  firstName: z.string().min(1, "Prénom requis"),
  lastName: z.string().min(1, "Nom requis"),
  address: z.string().min(1, "Adresse requise"),
  phone: z.string().min(1, "Téléphone requis"),
  email: z.string().email("Email invalide"),
  volume: z.string().min(1, "Volume requis"),
  needs: z.array(z.string()).optional(),
  description: z.string().max(1000, "Maximum 1000 caractères").optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter d'être recontacté(e)",
  }),
  website: z.string().optional(), // Honeypot
})

type FormData = z.infer<typeof formSchema>

interface B2BLeadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  segment: "pme" | "regulated" | "public"
}

const needsOptions = [
  "CRM personnalisé",
  "Multi-comptes",
  "Statistiques",
  "SSO",
  "Intégration API",
  "Autre",
]

export function B2BLeadDialog({ open, onOpenChange, segment }: B2BLeadDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      segment,
      companyType: "",
      volume: "",
      needs: [],
      consent: false,
      website: "", // Honeypot
    },
  })

  const watchedNeeds = watch("needs") || []

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.website) {
      return // Silent fail for bots
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi")
      }

      setIsSuccess(true)
      toast.success("Demande envoyée avec succès !")
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false)
      reset()
      onOpenChange(false)
    }
  }

  const toggleNeed = (need: string) => {
    const current = watchedNeeds
    if (current.includes(need)) {
      setValue("needs", current.filter((n) => n !== need))
    } else {
      setValue("needs", [...current, need])
    }
  }

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="flex flex-col items-center text-center py-8">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 animate-scale-in">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <DialogTitle className="text-2xl mb-2">Message envoyé ✅</DialogTitle>
            <DialogDescription className="text-base">
              Nous vous recontactons sous 24–48h
            </DialogDescription>
            <Button onClick={handleClose} className="mt-6" variant="default">
              Fermer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand" />
            Demande – {segmentLabels[segment]}
          </DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire et nous vous recontacterons rapidement.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot */}
          <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Segment (hidden) */}
          <input type="hidden" {...register("segment")} />

          {/* Company Type */}
          <div className="space-y-2">
            <Label htmlFor="companyType">Type de société *</Label>
            <Select 
              value={watch("companyType")} 
              onValueChange={(value) => setValue("companyType", value)}
            >
              <SelectTrigger id="companyType" className={errors.companyType ? "border-destructive" : ""}>
                <SelectValue placeholder="Sélectionnez un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SA">SA</SelectItem>
                <SelectItem value="Sàrl">Sàrl</SelectItem>
                <SelectItem value="RI">RI</SelectItem>
                <SelectItem value="Association">Association</SelectItem>
                <SelectItem value="Fondation">Fondation</SelectItem>
                <SelectItem value="Collectivité publique">Collectivité publique</SelectItem>
                <SelectItem value="Autre">Autre</SelectItem>
              </SelectContent>
            </Select>
            {errors.companyType && (
              <p className="text-sm text-destructive">{errors.companyType.message}</p>
            )}
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <Label htmlFor="companyName">Raison sociale *</Label>
            <Input
              id="companyName"
              {...register("companyName")}
              className={errors.companyName ? "border-destructive" : ""}
            />
            {errors.companyName && (
              <p className="text-sm text-destructive">{errors.companyName.message}</p>
            )}
          </div>

          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                {...register("firstName")}
                className={errors.firstName ? "border-destructive" : ""}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                {...register("lastName")}
                className={errors.lastName ? "border-destructive" : ""}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Address - single field */}
          <div className="space-y-2">
            <Label htmlFor="address">Adresse *</Label>
            <Input
              id="address"
              {...register("address")}
              placeholder="Rue, NPA, Ville"
              className={errors.address ? "border-destructive" : ""}
            />
            {errors.address && (
              <p className="text-sm text-destructive">{errors.address.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Volume */}
          <div className="space-y-2">
            <Label htmlFor="volume">Combien de lettres envoyez-vous par mois ? *</Label>
            <Select 
              value={watch("volume")} 
              onValueChange={(value) => setValue("volume", value)}
            >
              <SelectTrigger id="volume" className={errors.volume ? "border-destructive" : ""}>
                <SelectValue placeholder="Sélectionnez un volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1–10</SelectItem>
                <SelectItem value="11-50">11–50</SelectItem>
                <SelectItem value="51-200">51–200</SelectItem>
                <SelectItem value="200+">200+</SelectItem>
              </SelectContent>
            </Select>
            {errors.volume && (
              <p className="text-sm text-destructive">{errors.volume.message}</p>
            )}
          </div>

          {/* Needs */}
          <div className="space-y-3">
            <Label>Besoins (optionnel)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {needsOptions.map((need) => (
                <div key={need} className="flex items-center space-x-2">
                  <Checkbox
                    id={`need-${need}`}
                    checked={watchedNeeds.includes(need)}
                    onCheckedChange={() => toggleNeed(need)}
                  />
                  <Label
                    htmlFor={`need-${need}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {need}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">
              Votre demande (optionnel)
            </Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Décrivez votre besoin spécifique..."
              className={errors.description ? "border-destructive" : ""}
              rows={4}
            />
            {errors.description && (
              <p className="text-sm text-destructive">{errors.description.message}</p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={watch("consent")}
              onCheckedChange={(checked) => setValue("consent", checked === true)}
              className={errors.consent ? "border-destructive" : ""}
            />
            <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
              J'accepte d'être recontacté(e) par NextLetter. *
            </Label>
          </div>
          {errors.consent && (
            <p className="text-sm text-destructive">{errors.consent.message}</p>
          )}

          {/* Submit */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Envoyer ma demande
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

