'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Cigani Restaurant"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <Image
            src="/images/cigani-logo-white.png"
            alt="Cigani Logo"
            width={200}
            height={100}
            className="mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.welcomeToCigani}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {t.fineDining}
          </p>
          <Link
            href="/menu"
            className="bg-[#976f47] text-white px-8 py-3 rounded-md hover:bg-[#7d5c3a] transition duration-300"
          >
            {t.viewMenu}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#976f47] mb-6">
                {t.fineDining}
              </h2>
              <p className="text-gray-600 mb-6">
                {t.aboutDescription}
              </p>
              <Link
                href="/chefs-selection"
                className="text-[#976f47] font-semibold hover:text-[#7d5c3a] transition duration-300"
              >
                {t.learnMore} →
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Cigani Restaurant Interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/menu-preview.jpg"
                  alt="Menu Preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#976f47] mb-3">{t.menu}</h3>
                <p className="text-gray-600 mb-4">
                  {t.aboutDescription}
                </p>
                <Link
                  href="/menu"
                  className="text-[#976f47] font-semibold hover:text-[#7d5c3a] transition duration-300"
                >
                  {t.viewMenu} →
                </Link>
              </div>
            </div>

            {/* Chef's Selection */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/chefs-selection-preview.jpg"
                  alt="Chef's Selection Preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#976f47] mb-3">
                  {t.chefsSelection}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.chefsSelectionDescription}
                </p>
                <Link
                  href="/chefs-selection"
                  className="text-[#976f47] font-semibold hover:text-[#7d5c3a] transition duration-300"
                >
                  {t.learnMore} →
                </Link>
              </div>
            </div>

            {/* Reservations */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/reservation-preview.jpg"
                  alt="Reservation Preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#976f47] mb-3">
                  {t.makeReservation}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.reservationDescription}
                </p>
                <Link
                  href="/reservation"
                  className="text-[#976f47] font-semibold hover:text-[#7d5c3a] transition duration-300"
                >
                  {t.makeReservation} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#976f47] mb-6">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest dishes and events
          </p>
          <a
            href="https://instagram.com/cigani.restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#976f47] font-semibold hover:text-[#7d5c3a] transition duration-300"
          >
            @cigani.restaurant →
          </a>
        </div>
      </section>
    </div>
  )
} 