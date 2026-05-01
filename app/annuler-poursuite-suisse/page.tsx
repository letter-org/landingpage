import type { Metadata } from "next"
import { SeoLandingTemplate } from "@/components/seo-landing-template"
import { appUrls, addUtmParams } from "@/lib/app-urls"

export const metadata: Metadata = {
  title: "Annuler une poursuite en Suisse – Opposition et mainlevée",
  description: "Comment annuler une poursuite en Suisse. Opposition dans les 10 jours, mainlevée après paiement. Procédure LP, courrier recommandé.",
  alternates: { canonical: "/annuler-poursuite-suisse" },
  openGraph: {
    title: "Annuler une poursuite en Suisse",
    url: "/annuler-poursuite-suisse",
  },
}

export default function AnnulerPoursuiteSuissePage() {
  return (
    <SeoLandingTemplate
      title="Annuler une poursuite"
      gradient="en Suisse"
      description="Comment annuler une poursuite en Suisse ? Deux cas : opposition dans les 10 jours (contestation) ou mainlevée après paiement de la dette. Procédure conforme au droit des poursuites."
      content={
        <>
          <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Opposition ou mainlevée ?</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong>Opposition</strong> : vous contestez la poursuite (dette inexistante, déjà payée, etc.). Délai de 10 jours à compter de la notification du commandement de payer. L'opposition ouvre une procédure de conciliation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Mainlevée</strong> : vous payez la dette et demandez la levée de la poursuite. Vous pouvez envoyer une lettre de mainlevée avec la preuve de paiement. La poursuite est levée une fois la créance éteinte.
            </p>
          </section>

          <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Cadre juridique</h2>
            <p className="text-muted-foreground leading-relaxed">
              La procédure est régie par la <strong>Loi fédérale sur la poursuite pour dettes et la faillite (LP)</strong>. Pour toute question, consultez un avocat ou un service de conseil juridique (Caritas, Pro Juventute, etc.).
            </p>
          </section>
        </>
      }
      faq={[
        { question: "Quelle différence entre opposition et mainlevée ?", answer: "L'opposition conteste la poursuite (délai 10 jours). La mainlevée intervient après paiement de la dette." },
        { question: "Comment obtenir la mainlevée ?", answer: "Payez la dette et demandez la mainlevée à l'office des poursuites avec preuve de paiement." },
        { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, pour l'opposition comme pour la mainlevée, le courrier recommandé est recommandé." },
      ]}
      ctaTitle="Prêt à faire opposition ou mainlevée ?"
      ctaDescription="Générez votre lettre et envoyez-la par courrier recommandé."
      ctaButtonText="Générer ma lettre"
      ctaHref={addUtmParams(appUrls.base, "landing", "cta", "annuler-poursuite")}
      modelPath="/modeles/opposition-poursuite-suisse"
      schemaId="annuler-poursuite-suisse"
      canonicalPath="/annuler-poursuite-suisse"
    />
  )
}
