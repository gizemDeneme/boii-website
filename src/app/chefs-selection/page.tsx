'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'

interface Course {
  name: string
  description: string
  wine?: string
}

const tastingMenu: Course[] = [
  {
    name: "Amuse-bouche",
    description: "Chef's daily creation to awaken your palate",
  },
  {
    name: "Aegean Sea Scallops",
    description: "Pan-seared scallops with cauliflower purée and truffle oil",
    wine: "Urla Chardonnay"
  },
  {
    name: "Wild Mushroom Risotto",
    description: "Arborio rice with local wild mushrooms and aged parmesan",
    wine: "Sevilen Plato Syrah"
  },
  {
    name: "Sığacık Catch of the Day",
    description: "Fresh fish from local fishermen, prepared with seasonal ingredients",
    wine: "Urla Sauvignon Blanc"
  },
  {
    name: "Aged Beef Tenderloin",
    description: "28-day aged beef with root vegetables and red wine reduction",
    wine: "Sevilen Centum Syrah"
  },
  {
    name: "Pre-dessert",
    description: "Citrus sorbet with mint",
  },
  {
    name: "Dark Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla ice cream",
    wine: "Sevilen Late Harvest Boğazkere"
  }
]

export default function ChefsSelection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/images/chefs-selection-hero.jpg"
          alt="Chef's Selection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.chefsSelectionTitle}</h1>
          <p className="text-xl max-w-2xl">
            {t.chefsSelectionDescription}
          </p>
        </div>
      </section>

      {/* Tasting Menu */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#976f47] mb-4">{t.tastingMenu}</h2>
            <p className="text-gray-600">
              2,200 TL {t.perPerson}<br />
              {t.winePairing}: 1,800 TL {t.perPerson}
            </p>
          </div>

          <div className="space-y-12">
            {tastingMenu.map((course, index) => (
              <div
                key={course.name}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#976f47] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{course.description}</p>
                    {course.wine && (
                      <p className="text-sm text-[#976f47] font-medium">
                        {t.winePairing}: {course.wine}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              {t.menuDisclaimer}<br />
              {t.allergyNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 