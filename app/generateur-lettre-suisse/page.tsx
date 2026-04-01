import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { H1Whaou } from "@/components/h1-whaou"
import { CtaWhaou } from "@/components/cta-whaou"
import { GeoDirectAnswer, GeoBrandCitation } from "@/components/geo-seo-blocks"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import { ArticleOrgJsonLd } from "@/components/seo/article-org-jsonld"
import { ALL_LETTER_MODELS } from "@/lib/letter-models"
import { ALL_GUIDES } from "@/lib/guides"

const CANONICAL = "/generateur-lettre-suisse"

const PAGE_DESCRIPTION =
  "Générateur de lettres administratives pour la Suisse : résiliation, motivation, contestation. Comparez la rédaction manuelle et l'envoi en ligne avec preuve via NextLetter."

export const metadata: Metadata = {
  title: "Générateur de lettre suisse – modèles officiels & envoi recommandé | NextLetter",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Générateur de lettre suisse – NextLetter",
    description: "Créez et envoyez des lettres officielles depuis la Suisse avec NextLetter.",
    url: CANONICAL,
  },
}

const faq = [
  {
    question: "Qu'est-ce qu'un générateur de lettre suisse ?",
    answer:
      "C'est un outil qui vous guide pour produire un courrier structuré (adresses, références, demandes) adapté aux usages administratifs en Suisse, puis éventuellement l'expédier en recommandé. NextLetter combine modèles, champs de personnalisation et envoi physique avec suivi.",
  },
  {
    question: "NextLetter remplace-t-il un avocat ou un conseiller ?",
    answer:
      "Non. NextLetter est un service d'assistance à la rédaction et à l'envoi. Pour les situations complexes ou à fort enjeu, faites valider vos arguments par un professionnel du droit ou le guichet compétent.",
  },
  {
    question: "Pourquoi utiliser l'envoi recommandé plutôt qu'un simple e-mail ?",
    answer:
      "Pour de nombreuses résiliations ou contestations, la preuve de date et de contenu compte. Le recommandé crée une trace dans le réseau postal ; l'e-mail peut être utile mais ne suffit pas toujours selon les exigences contractuelles ou la prudence du dossier.",
  },
  {
    question: "Puis-je essayer avant de payer ?",
    answer:
      "Les modalités commerciales exactes sont celles affichées dans l'application au moment de votre commande. La landing vous oriente vers l'app pour créer votre lettre.",
  },
  {
    question: "Les modèles couvrent-ils tout le droit suisse ?",
    answer:
      "Les modèles couvrent les besoins courants (assurance, bail, travail, factures, administrations). Chaque cas cantonal ou contractuel reste spécifique : vérifiez vos documents sources.",
  },
]

const HIGHLIGHT =
  ALL_LETTER_MODELS.filter(
    (m) =>
      m.path.includes("demission") ||
      m.path.includes("assurance-maladie") ||
      m.path.includes("bail-locataire") ||
      m.path.includes("contestation-facture") ||
      m.path.includes("contestation-amende") ||
      m.path.includes("motivation-suisse")
  ).slice(0, 6)

const TWO_GUIDES = [
  ALL_GUIDES.find((g) => g.slug === "comment-envoyer-lettre-recommandee-suisse"),
  ALL_GUIDES.find((g) => g.slug === "comment-resilier-assurance-suisse"),
].filter(Boolean) as typeof ALL_GUIDES

export default function GenerateurLettreSuissePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"
  const articleUrl = `${baseUrl}${CANONICAL}`

  return (
    <>
      <ArticleOrgJsonLd
        id="schema-generateur-article-org"
        headline="Générateur de lettre suisse – NextLetter"
        description={PAGE_DESCRIPTION}
        url={articleUrl}
      />
      <FaqJsonLd id="schema-faq-generateur" data={faq} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <H1Whaou title="Générateur de lettre" gradient="en Suisse" />
            <p className="text-lg text-muted-foreground mb-6">
              NextLetter est la passerelle entre une intention (« résilier », « contester », « motiver ») et un courrier
              physique traçable vers la Suisse.
            </p>

            <GeoDirectAnswer>
              {`Pour rédiger une lettre administrative en Suisse sans partir d'une page blanche, un générateur structuré vous fait gagner du temps et réduit les oublis (références, dates, destinataires). NextLetter permet ensuite d'envoyer ce courrier en recommandé depuis ${appUrls.base.replace(/^https?:\/\//, "")}.`}
            </GeoDirectAnswer>
            <GeoBrandCitation />

            <section className="mb-12 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-semibold text-foreground">En quoi consiste l&apos;outil</h2>
              <p>
                Le <strong>générateur</strong> s&apos;appuie sur des modèles alignés sur les situations les plus fréquentes
                en Suisse : résiliations (assurance, télécom, bail), contestations (factures, amendes), travail
                (démission, certificats) et candidatures. Vous complétez des champs, vous vérifiez le rendu, puis vous
                déclenchez l&apos;impression et l&apos;expédition si vous utilisez le service complet.
              </p>
              <h2 className="text-2xl font-semibold text-foreground">Exemples de lettres disponibles</h2>
              <ul className="list-disc pl-6 space-y-2">
                {HIGHLIGHT.map((m) => (
                  <li key={m.path}>
                    <Link href={m.path} className="text-brand hover:underline">
                      {m.title}
                    </Link>{" "}
                    — {m.subtitle}
                  </li>
                ))}
              </ul>
              <Link href="/modeles" className="text-brand font-semibold hover:inline-block hover:underline">
                Voir tous les modèles ({ALL_LETTER_MODELS.length}+)
              </Link>

              <h2 className="text-2xl font-semibold text-foreground">Rédaction manuelle vs NextLetter</h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-card border-b border-border">
                      <th className="text-left p-4 font-semibold text-foreground">Critère</th>
                      <th className="text-left p-4 font-semibold text-foreground">Manuel</th>
                      <th className="text-left p-4 font-semibold text-foreground">NextLetter</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="p-4">Structure</td>
                      <td className="p-4">À repenser à chaque envoi</td>
                      <td className="p-4">Modèle guidé par type de dossier</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Preuve</td>
                      <td className="p-4">Déplacement Poste</td>
                      <td className="p-4">Chaîne numérique + envoi recommandé</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Délai</td>
                      <td className="p-4">Variable</td>
                      <td className="p-4">Souvent accéléré (sans file d&apos;attente)</td>
                    </tr>
                    <tr>
                      <td className="p-4">Erreurs</td>
                      <td className="p-4">Oublis d&apos;adresse ou de référence</td>
                      <td className="p-4">Champs obligatoires ciblés</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold text-foreground">Bénéfices de l&apos;automatisation maîtrisée</h2>
              <p>
                L&apos;objectif n&apos;est pas de « déhumaniser » votre message mais d&apos;en garantir la{" "}
                <strong>complétude minimale</strong> : une administration ou un service client traite votre dossier plus
                vite lorsque les numéros, dates et demandes sont localisables en quelques secondes. L&apos;automatisation
                libère du temps pour le fond — vérifier vos contrats, choisir vos arguments — plutôt que la mise en page.
              </p>
            </section>

            <section className="mb-12 rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Guides à lire ensuite</h2>
              <ul className="space-y-2">
                {TWO_GUIDES.map((g) => (
                  <li key={g.path}>
                    <Link href={g.path} className="text-brand hover:underline">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/guides/comment-envoyer-lettre-recommandee-suisse" className="mt-4 inline-block text-sm text-brand hover:underline">
                Guide : envoyer une lettre recommandée en Suisse
              </Link>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <details key={i} className="bg-card border border-border rounded-xl p-6">
                    <summary className="font-semibold cursor-pointer list-none">{item.question}</summary>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <CtaWhaou
              title="Tester le générateur NextLetter"
              description="Créez votre lettre dans l'app et expédiez-la en recommandé lorsque vous êtes prêt."
              buttonText="Ouvrir l'app NextLetter"
              href={addUtmParams(appUrls.base, "landing", "cta", "generateur-lettre-suisse")}
              secondaryLink={{ href: "/", text: "Page d'accueil" }}
              reassurance="Service exploité en Suisse — voir mentions légales sur nextletter.ch"
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
