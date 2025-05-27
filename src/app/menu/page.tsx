'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

const menuData: MenuSection[] = [
  {
    title: "Starters",
    items: [
      {
        name: "Mediterranean Mezze Platter",
        description: "Selection of hummus, babaganoush, tzatziki with fresh pita bread",
        price: "280 TL"
      },
      {
        name: "Aegean Octopus",
        description: "Grilled octopus with olive oil, lemon and Mediterranean herbs",
        price: "420 TL"
      },
      {
        name: "Local Cheese Selection",
        description: "Artisanal Turkish cheeses served with dried fruits and nuts",
        price: "340 TL"
      }
    ]
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Grilled Sea Bass",
        description: "Fresh sea bass with herbs, served with seasonal vegetables",
        price: "520 TL"
      },
      {
        name: "Lamb Shoulder",
        description: "Slow-cooked lamb with rosemary and local spices",
        price: "580 TL"
      },
      {
        name: "Seafood Linguine",
        description: "Fresh pasta with mixed seafood in white wine sauce",
        price: "460 TL"
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Baklava",
        description: "Traditional Turkish pastry with pistachios",
        price: "220 TL"
      },
      {
        name: "Sütlaç",
        description: "Rice pudding with a caramelized top",
        price: "180 TL"
      },
      {
        name: "Seasonal Fruit Plate",
        description: "Selection of fresh seasonal fruits",
        price: "160 TL"
      }
    ]
  }
]

export default function Menu() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/menu-hero.jpg"
          alt="Cigani Menu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t.ourMenu}</h1>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {menuData.map((section, index) => (
            <div key={section.title} className={index !== 0 ? 'mt-16' : ''}>
              <h2 className="text-3xl font-bold text-[#976f47] mb-8 text-center">
                {section.title === "Starters" ? t.starters :
                 section.title === "Main Courses" ? t.mainCourses :
                 section.title === "Desserts" ? t.desserts : section.title}
              </h2>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-gray-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <span className="text-lg font-medium text-[#976f47]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 