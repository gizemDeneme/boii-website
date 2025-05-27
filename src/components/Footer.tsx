'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <div className="space-y-2">
              <p>Boii Hotel</p>
              <p>Sığacık, İzmir</p>
              <p>Turkey</p>
              <p className="mt-4">+90 XXX XXX XX XX</p>
              <p>info@ciganirestaurant.com</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.openingHours}</h3>
            <div className="space-y-2">
              <p>{t.lunch}</p>
              <p>{t.dinner}</p>
              <p className="mt-4 text-sm">{t.reservationsRecommended}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/menu"
                className="block text-gray-300 hover:text-white transition duration-200"
              >
                {t.menu}
              </Link>
              <Link
                href="/chefs-selection"
                className="block text-gray-300 hover:text-white transition duration-200"
              >
                {t.chefsSelection}
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition duration-200"
              >
                {t.contact}
              </Link>
              <Link
                href="/reservation"
                className="block text-gray-300 hover:text-white transition duration-200"
              >
                {t.makeReservation}
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/boii.sigacik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-200"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-200"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cigani Restaurant. {t.rights}</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition duration-200">
              {t.privacyPolicy}
            </Link>
            <Link href="/terms" className="hover:text-white transition duration-200">
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 