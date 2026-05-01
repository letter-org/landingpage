import type { Metadata } from "next"
import { SeoLandingTemplate } from "@/components/seo-landing-template"
import { appUrls, addUtmParams } from "@/lib/app-urls"

export const metadata: Metadata = {
  title: "Comment faire opposition à une poursuite en Suisse – Guide complet",
  description: "Comment faire opposition à une poursuite en Suisse. Délai 10 jours, procédure, lettre conforme. Courrier recommandé. Droit des poursuites suisse.",
  alternates: { canonical: "/comment-faire-opposition-poursuite" },
  openGraph: {
    title: "Comment faire opposition à une poursuite en Suisse",
    description: "Guide : délai 10 jours, procédure, lettre d'opposition conforme.",
    url: "/comment-faire-opposition-poursuite",
  },
}

export default function CommentFaireOppositionPoursuitePage() {
  return (
    <SeoLandingTemplate
      title="Comment faire opposition à une poursuite"
      gradient="en Suisse"
      description="Vous avez reçu un commandement de payer ? Voici comment faire opposition à une poursuite en Suisse : délai impératif de 10 jours, procédure et modèle de lettre conforme au droit des poursuites."
      content={
        <>
          <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Procédure d'opposition</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              En Suisse, l'opposition à une poursuite doit être déposée dans un <strong>délai de 10 jours</strong> à compter de la notification du commandement de payer. Ce délai est <strong>impératif</strong> – passé ce délai, la poursuite devient définitive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L'opposition se fait par écrit auprès de l'office des poursuites compétent. Elle doit contenir vos coordonnées, les références de la poursuite et une formulation claire d'opposition. Le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi.
            </p>
          </section>

          <section className="mb-12 bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Cadre juridique suisse</h2>
            <p className="text-muted-foreground leading-relaxed">
              La procédure de poursuite pour dettes est régie par la <strong>Loi fédérale sur la poursuite pour dettes et la faillite (LP)</strong>. L'opposition ouvre une procédure de conciliation ou de mainlevée. Consultez un avocat ou un service de conseil juridique pour toute question spécifique.
            </p>
            <p className="text-sm italic text-muted-foreground mt-4 pt-4 border-t border-border">
              ⚠️ NextLetter est un service d'assistance à la rédaction et à l'envoi de courriers. Pour une poursuite, consultez immédiatement un avocat ou un service de conseil juridique.
            </p>
          </section>
        </>
      }
      faq={[
        { question: "Dans quel délai faire opposition ?", answer: "Le délai est de 10 jours à compter de la notification du commandement de payer. Ce délai est impératif." },
        { question: "Où envoyer ma lettre d'opposition ?", answer: "À l'office des poursuites compétent, dont l'adresse figure sur le commandement de payer." },
        { question: "Dois-je envoyer par courrier recommandé ?", answer: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi dans les délais." },
        { question: "Que se passe-t-il après l'opposition ?", answer: "Une procédure de conciliation ou de mainlevée peut être ouverte. Consultez un avocat pour la suite." },
      ]}
      howTo={{
        name: "Comment faire opposition à une poursuite en Suisse",
        description: "Procédure pour faire opposition à un commandement de payer dans les délais.",
        steps: [
          { name: "Recevoir le commandement", text: "Vous recevez le commandement de payer par l'office des poursuites." },
          { name: "Vérifier le délai", text: "Notez la date de notification. Vous avez 10 jours pour faire opposition." },
          { name: "Rédiger la lettre", text: "Utilisez un modèle conforme. Indiquez vos coordonnées et les références de la poursuite." },
          { name: "Envoyer en recommandé", text: "Envoyez votre opposition par courrier recommandé à l'office des poursuites." },
        ],
      }}
      ctaTitle="Prêt à faire opposition ?"
      ctaDescription="Générez votre lettre d'opposition et envoyez-la par courrier recommandé. Agissez dans les 10 jours."
      ctaButtonText="Générer ma lettre d'opposition"
      ctaHref={addUtmParams(appUrls.base, "landing", "cta", "opposition-poursuite")}
      modelPath="/modeles/opposition-poursuite-suisse"
      schemaId="comment-faire-opposition-poursuite"
      canonicalPath="/comment-faire-opposition-poursuite"
    />
  )
}
