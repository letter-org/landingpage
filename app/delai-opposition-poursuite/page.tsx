import type { Metadata } from "next"
import { SeoLandingTemplate } from "@/components/seo-landing-template"
import { appUrls, addUtmParams } from "@/lib/app-urls"

export const metadata: Metadata = {
  title: "Délai opposition poursuite – 10 jours en Suisse",
  description: "Délai pour faire opposition à une poursuite en Suisse : 10 jours impératifs à compter de la notification du commandement de payer. Procédure LP.",
  alternates: { canonical: "/delai-opposition-poursuite" },
  openGraph: {
    title: "Délai opposition poursuite – 10 jours en Suisse",
    url: "/delai-opposition-poursuite",
  },
}

export default function DelaiOppositionPoursuitePage() {
  return (
    <SeoLandingTemplate
      title="Délai opposition poursuite"
      gradient="en Suisse"
      description="Quel délai pour faire opposition à une poursuite en Suisse ? Le délai est de 10 jours à compter de la notification du commandement de payer. Ce délai est impératif."
      content={
        <>
          <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Délai de 10 jours</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Selon la <strong>Loi fédérale sur la poursuite pour dettes et la faillite (LP)</strong>, l'opposition à une poursuite doit être déposée dans un délai de <strong>10 jours</strong> à compter de la notification du commandement de payer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ce délai est <strong>impératif</strong>. Passé ce délai, la poursuite devient définitive et des mesures d'exécution peuvent être prises (saisie, etc.). C'est la date de réception par l'office des poursuites qui compte, pas le cachet de la poste. Envoyez suffisamment tôt.
            </p>
          </section>

          <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Calcul du délai</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le délai commence à courir le lendemain de la notification du commandement de payer. Les dimanches et jours fériés sont comptés. Le dernier jour du délai, si c'est un samedi ou un jour où l'office est fermé, le délai est reporté au prochain jour ouvrable.
            </p>
          </section>
        </>
      }
      faq={[
        { question: "Quel est le délai exact ?", answer: "10 jours à compter de la notification du commandement de payer." },
        { question: "Que se passe-t-il si je dépasse le délai ?", answer: "La poursuite devient définitive. Des mesures d'exécution peuvent être prises. Consultez un avocat." },
        { question: "La date d'envoi ou de réception compte ?", answer: "C'est la date de réception par l'office des poursuites qui compte. Envoyez par courrier recommandé suffisamment tôt." },
      ]}
      howTo={{
        name: "Respecter le délai d'opposition à une poursuite",
        description: "Comment calculer et respecter le délai de 10 jours.",
        steps: [
          { name: "Noter la date", text: "Notez la date de notification du commandement de payer." },
          { name: "Calculer l'échéance", text: "Ajoutez 10 jours. Le dernier jour est la date limite." },
          { name: "Rédiger et envoyer", text: "Rédigez votre opposition et envoyez-la par courrier recommandé bien avant l'échéance." },
        ],
      }}
      ctaTitle="Prêt à faire opposition ?"
      ctaDescription="Générez votre lettre et envoyez-la dans les délais."
      ctaButtonText="Générer ma lettre d'opposition"
      ctaHref={addUtmParams(appUrls.base, "landing", "cta", "delai-opposition-poursuite")}
      modelPath="/modeles/opposition-poursuite-suisse"
      schemaId="delai-opposition-poursuite"
      canonicalPath="/delai-opposition-poursuite"
    />
  )
}
