import { User, Briefcase, Scale, Building2 } from "lucide-react"

const audiences = [
  {
    icon: User,
    title: "Particuliers",
    description: "Résiliation de contrats, réclamations, démarches administratives simplifiées.",
  },
  {
    icon: Briefcase,
    title: "PME & indépendants",
    description: "Factures, relances, correspondances commerciales et administratives.",
  },
  {
    icon: Scale,
    title: "Professions réglementées",
    description: "Avocats, notaires, fiduciaires : conformité et traçabilité garanties.",
  },
  {
    icon: Building2,
    title: "Communes & institutions",
    description: "Communication officielle, notifications légales, gestion documentaire.",
  },
]

export function TargetAudience() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Pour qui ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            NextLetter s'adapte à tous vos besoins, que vous soyez un particulier ou une organisation.
          </p>
        </div>

        {/* Audience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-transparent hover:border-blue-400 rounded-2xl transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{audience.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{audience.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
