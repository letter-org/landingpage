import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { appUrls, addUtmParams } from "@/lib/app-urls"
import { ALL_GUIDES, getGuideBySlug } from "@/lib/guides"
import { ALL_LETTER_MODELS } from "@/lib/letter-models"
import { FaqJsonLd } from "@/components/seo/faq-jsonld"
import Script from "next/script"

interface PageProps {
  params: Promise<{ slug: string }>
}

const GUIDE_CONTENT: Record<string, { faq: { q: string; a: string }[]; content: string }> = {
  "comment-envoyer-lettre-recommandee-suisse": {
    faq: [
      { q: "Comment envoyer une lettre recommandée en Suisse ?", a: "Vous pouvez envoyer une lettre recommandée via La Poste (bureau ou en ligne) ou via un service en ligne comme NextLetter qui imprime et envoie votre lettre avec preuve d'envoi et suivi." },
      { q: "Quel est le coût d'une lettre recommandée en Suisse ?", a: "Le coût varie selon le poids et le format. Une lettre recommandée standard coûte environ 8 à 12 CHF. Les services en ligne comme NextLetter incluent l'impression et l'envoi." },
      { q: "Ai-je une preuve d'envoi avec une lettre recommandée ?", a: "Oui, la lettre recommandée vous fournit un accusé de réception signé par le destinataire. NextLetter conserve également une preuve numérique dans votre dashboard." },
      { q: "Puis-je envoyer une lettre recommandée en ligne ?", a: "Oui, NextLetter permet d'envoyer des lettres recommandées entièrement en ligne : rédaction, impression, envoi et suivi. Sans déplacement." },
    ],
    content: `
Envoyer une lettre recommandée en Suisse est une formalité courante pour les résiliations, réclamations ou communications officielles. Ce guide vous explique les options disponibles, les coûts et les avantages de l'envoi en ligne.

## Pourquoi envoyer une lettre recommandée ?

La lettre recommandée offre une **preuve d'envoi et de réception** essentielle en cas de litige. Pour une résiliation de bail, d'assurance ou d'abonnement, elle constitue la preuve que votre courrier a bien été envoyé et reçu à une date donnée. En Suisse, de nombreux actes juridiques exigent une notification écrite avec preuve.

## Les options pour envoyer une lettre recommandée

### 1. Bureau de poste traditionnel

Vous pouvez vous rendre dans un bureau La Poste avec votre lettre imprimée. Le guichetier enregistre l'envoi et vous remet un récépissé. L'avantage : contact humain. L'inconvénient : déplacement, attente, horaires limités.

### 2. Envoi en ligne via La Poste

La Poste propose un service d'envoi en ligne. Vous uploadez votre document, indiquez l'adresse du destinataire, et La Poste imprime et envoie la lettre. Pratique si vous avez déjà votre lettre au format PDF.

### 3. Services tout-en-un comme NextLetter

NextLetter va plus loin : vous rédigez votre lettre à partir d'un modèle conforme au droit suisse, personnalisez le contenu, et NextLetter imprime, envoie par courrier recommandé et vous fournit une preuve conservée dans votre dashboard. Idéal pour les résiliations, contestations et réclamations.

## Avantages de l'envoi en ligne

- **Zéro déplacement** : tout se fait depuis chez vous
- **Preuve conservée** : accusé de réception et suivi en ligne
- **Modèles conformes** : lettres adaptées au droit suisse
- **Rapidité** : envoi le jour même ou sous 24h

## Quand utiliser une lettre recommandée ?

- Résiliation de bail, assurance, abonnement
- Démission
- Contestation de facture ou amende
- Demande de remboursement
- Opposition à une poursuite
- Toute communication officielle nécessitant une preuve

Pour générer et envoyer votre lettre recommandée en ligne, utilisez [NextLetter](${appUrls.base}).
    `,
  },
  "comment-resilier-assurance-suisse": {
    faq: [
      { q: "Quel délai pour résilier une assurance maladie en Suisse ?", a: "La résiliation se fait généralement pour fin d'année avec un préavis de 3 mois. Vous devez envoyer votre lettre avant le 30 septembre pour une résiliation au 31 décembre." },
      { q: "Dois-je envoyer ma résiliation par courrier recommandé ?", a: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception en cas de litige." },
      { q: "Puis-je résilier mon assurance à tout moment ?", a: "Pour l'assurance maladie (LAMal), la résiliation se fait en fin d'année. Pour les autres assurances (auto, ménage), les conditions varient selon le contrat." },
      { q: "Que doit contenir une lettre de résiliation d'assurance ?", a: "Vos coordonnées, le numéro de contrat, la date de résiliation souhaitée et une formulation claire de résiliation. NextLetter propose des modèles conformes." },
    ],
    content: `
Résilier une assurance en Suisse nécessite de respecter des délais et une procédure écrite. Ce guide vous explique comment procéder selon le type d'assurance.

## Résiliation assurance maladie (LAMal)

L'assurance maladie de base peut être résiliée **une fois par an**, pour prendre effet au **31 décembre**. Le délai de préavis est de **3 mois**. Vous devez donc envoyer votre lettre de résiliation avant le **30 septembre** pour une résiliation au 31 décembre de la même année.

La résiliation doit être envoyée **par écrit** à votre caisse maladie. Le courrier recommandé est fortement recommandé pour disposer d'une preuve.

## Résiliation assurance auto, ménage, complémentaire

Pour les autres assurances, les conditions varient selon le contrat. Consultez vos conditions générales pour connaître le délai de préavis et les dates d'échéance. La résiliation doit généralement être envoyée par écrit.

## Étapes pour résilier

1. **Vérifiez votre contrat** : délai de préavis, date d'échéance
2. **Rédigez votre lettre** : utilisez un modèle conforme (voir [modèles NextLetter](/modeles))
3. **Envoyez par courrier recommandé** : preuve d'envoi et de réception
4. **Conservez l'accusé de réception**

NextLetter propose des modèles pour [résiliation assurance maladie](/modeles/lettre-resiliation-assurance-maladie-suisse), [assurance CSS](/modeles/lettre-resiliation-assurance-css-suisse), [Helsana](/modeles/lettre-resiliation-assurance-helsana-suisse) et d'autres assureurs.
    `,
  },
  "comment-resilier-bail-suisse": {
    faq: [
      { q: "Quel est le délai de préavis pour résilier un bail ?", a: "Le délai est généralement de 3 mois. La résiliation doit respecter les dates d'échéance du bail (fin de trimestre : 31 mars, 30 juin, 30 septembre, 31 décembre)." },
      { q: "Dois-je envoyer ma résiliation par courrier recommandé ?", a: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception." },
      { q: "Quelle différence entre locataire et bailleur ?", a: "Le locataire résilie pour quitter le logement ; le bailleur résilie pour récupérer le logement (ou pour d'autres motifs prévus par la loi)." },
      { q: "Que doit contenir une lettre de résiliation de bail ?", a: "Vos coordonnées, celles du bailleur/locataire, la date de résiliation, la date de libération des lieux et l'adresse du logement. NextLetter propose des modèles conformes." },
    ],
    content: `
Résilier un bail en Suisse implique de respecter un délai de préavis et des dates d'échéance précises. Ce guide vous explique la procédure pour locataires et bailleurs.

## Délai de préavis et dates d'échéance

Le délai de préavis pour un bail à durée indéterminée est généralement de **3 mois**. La résiliation doit respecter les **dates d'échéance** du bail, le plus souvent en fin de trimestre : 31 mars, 30 juin, 30 septembre, 31 décembre.

Exemple : pour quitter un logement au 30 juin, vous devez envoyer votre résiliation avant le 31 mars.

## Résiliation par le locataire

Le locataire peut résilier le bail pour quitter le logement. La lettre doit être adressée au bailleur (propriétaire ou régie) et contenir l'adresse du logement, la date de libération des lieux et vos coordonnées.

## Résiliation par le bailleur

Le bailleur peut résilier le bail pour récupérer le logement (usage personnel, vente, etc.) ou pour d'autres motifs prévus par la loi. Les motifs sont encadrés et le bailleur doit respecter les mêmes délais.

## Courrier recommandé

L'envoi par **courrier recommandé** est fortement recommandé pour disposer d'une preuve d'envoi et de réception. En cas de litige sur la date de réception, cette preuve est essentielle.

NextLetter propose des modèles pour [résiliation bail locataire](/modeles/lettre-resiliation-bail-locataire-suisse) et [résiliation bail bailleur](/modeles/lettre-resiliation-bail-bailleur-suisse).
    `,
  },
  "comment-contester-facture-suisse": {
    faq: [
      { q: "Dans quel délai contester une facture ?", a: "Il n'y a pas de délai légal fixe, mais agissez rapidement. Dès que vous constatez une erreur, envoyez votre contestation par écrit." },
      { q: "Dois-je envoyer ma contestation par courrier recommandé ?", a: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi et de réception." },
      { q: "Que doit contenir une lettre de contestation ?", a: "Vos coordonnées, la référence de la facture, les motifs de contestation (erreur, double facturation, etc.) et votre demande de régularisation." },
      { q: "Puis-je refuser de payer une facture contestée ?", a: "En cas de contestation légitime, vous pouvez suspendre le paiement de la partie contestée tout en payant le reste. Indiquez clairement ce que vous contestez." },
    ],
    content: `
Contester une facture en Suisse nécessite d'agir par écrit et de conserver des preuves. Ce guide vous explique la procédure.

## Quand contester une facture ?

- Erreur de montant
- Double facturation
- Service non fourni
- Facturation de prestations non commandées
- Erreur sur les données (adresse, numéro de client)

## Procédure de contestation

1. **Agissez rapidement** : dès que vous constatez l'erreur
2. **Rédigez une lettre** : indiquez clairement les motifs et votre demande
3. **Envoyez par courrier recommandé** : preuve d'envoi et de réception
4. **Conservez les pièces** : facture, preuves d'achat, correspondance

## Contenu de la lettre

Votre lettre doit contenir : vos coordonnées, la référence de la facture contestée, une description des motifs (erreur, double facturation, etc.), votre demande (correction, remboursement, annulation) et éventuellement les pièces justificatives.

NextLetter propose un [modèle de contestation de facture](/modeles/lettre-contestation-facture-suisse) conforme et envoyé par courrier recommandé.
    `,
  },
  "comment-contester-amende-suisse": {
    faq: [
      { q: "Dans quel délai contester une amende ?", a: "Le délai varie selon le type d'amende (circulation, administrative). Souvent 30 jours. Vérifiez le délai indiqué sur l'amende." },
      { q: "Dois-je envoyer ma contestation par courrier recommandé ?", a: "Oui, le courrier recommandé est fortement recommandé pour disposer d'une preuve d'envoi dans les délais." },
      { q: "Que doit contenir une lettre de contestation d'amende ?", a: "Vos coordonnées, la référence de l'amende, les motifs de contestation (faits, arguments) et votre demande (annulation ou réduction)." },
      { q: "Puis-je contester une amende de radar ?", a: "Oui, vous pouvez contester une amende de circulation dans les délais. Indiquez vos arguments et joignez les preuves éventuelles." },
    ],
    content: `
Contester une amende en Suisse implique de respecter des délais stricts et une procédure écrite. Ce guide vous explique comment procéder.

## Délais de contestation

Le délai varie selon le type d'amende. Pour une amende de circulation (radar, excès de vitesse), le délai est souvent de **30 jours** à compter de la notification. Pour une amende administrative, consultez le document reçu. **Respectez le délai** : une contestation tardive peut être rejetée.

## Procédure

1. **Vérifiez le délai** indiqué sur l'amende
2. **Rédigez votre contestation** : motifs, faits, arguments
3. **Envoyez par courrier recommandé** avant l'échéance
4. **Conservez une copie** et l'accusé de réception

## Contenu de la lettre

Indiquez vos coordonnées, la référence de l'amende (numéro, date, autorité), les motifs de votre contestation (faits, circonstances) et votre demande (annulation ou réduction).

NextLetter propose un [modèle de contestation d'amende](/modeles/lettre-contestation-amende-suisse) pour vous aider.
    `,
  },
}

export async function generateStaticParams() {
  return ALL_GUIDES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}

  return {
    title: `${guide.title} – Guide NextLetter`,
    description: guide.description,
    alternates: { canonical: guide.path },
    openGraph: { title: guide.title, description: guide.description, url: guide.path },
  }
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const data = GUIDE_CONTENT[slug]
  if (!data) notFound()

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nextletter.ch"
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: `${baseUrl}${guide.path}`,
  }

  return (
    <>
      <FaqJsonLd id={`schema-faq-${slug}`} data={data.faq.map((f) => ({ question: f.q, answer: f.a }))} />
      <Script id={`schema-article-${slug}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative z-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-6">{guide.title}</h1>
            <p className="text-lg text-muted-foreground mb-12">{guide.description}</p>

            <div className="prose prose-lg max-w-none mb-12 text-muted-foreground leading-relaxed [&_a]:text-brand [&_a]:hover:underline">
              {data.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return <h2 key={i} className="text-xl font-semibold text-foreground mt-8 mb-4">{block.replace("## ", "")}</h2>
                }
                if (block.startsWith("- ")) {
                  const items = block.split("\n").filter((l) => l.startsWith("- "))
                  return (
                    <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                      {items.map((item, j) => {
                        const text = item.replace("- ", "")
                        const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
                        return (
                          <li key={j}>
                            {parts.map((part, k) => {
                              const m = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
                              return m ? <Link key={k} href={m[2]}>{m[1]}</Link> : part
                            })}
                          </li>
                        )
                      })}
                    </ul>
                  )
                }
                const parts = block.split(/(\[[^\]]+\]\([^)]+\))/g)
                return (
                  <p key={i} className="mb-4">
                    {parts.map((part, j) => {
                      const m = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
                      return m ? <Link key={j} href={m[2]}>{m[1]}</Link> : part
                    })}
                  </p>
                )
              })}
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {data.faq.map((f, i) => (
                  <details key={i} className="bg-card border border-border rounded-xl p-6">
                    <summary className="font-semibold cursor-pointer list-none">{f.q}</summary>
                    <p className="text-muted-foreground mt-4">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Modèles de lettres liés</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {guide.relatedModels.slice(0, 4).map((path) => {
                  const model = ALL_LETTER_MODELS.find((m) => m.path === path)
                  return (
                    <Link key={path} href={path} className="bg-card border border-border rounded-lg p-4 hover:border-brand/40 transition-colors">
                      <h3 className="font-semibold text-foreground">{model?.title || "Modèle de lettre"}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{model?.subtitle}</p>
                    </Link>
                  )
                })}
              </div>
              <Link href="/modeles" className="text-brand font-semibold hover:underline">
                Voir tous les modèles
              </Link>
            </section>

            <section className="text-center bg-gradient-to-br from-brand/5 to-cyan-500/5 border border-brand/20 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold mb-4">Prêt à envoyer votre lettre ?</h2>
              <p className="text-muted-foreground mb-6">Générez et envoyez votre lettre en quelques minutes avec NextLetter.</p>
              <a
                href={addUtmParams(appUrls.base, "landing", "cta", "guide")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                Générer ma lettre maintenant
                <ArrowRight className="w-5 h-5" />
              </a>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
