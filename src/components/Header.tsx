'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'
import LanguageToggle from './LanguageToggle'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const navigation = [
    { name: t.menu, href: '/menu' },
    { name: t.chefsSelection, href: '/chefs-selection' },
    { name: t.contact, href: '/contact' },
  ]

  return (
    <header className="fixed w-full bg-white z-50">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/cigani-logo.png"
              alt="Cigani Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#976f47] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/reservation"
              className="bg-[#976f47] text-white px-4 py-2 rounded-md hover:bg-[#7d5c3a] transition duration-300"
            >
              {t.makeReservation}
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#976f47]"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-[#976f47] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/reservation"
                className="block px-3 py-2 text-[#976f47] font-semibold hover:text-[#7d5c3a] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.makeReservation}
              </Link>
              <div className="px-3 py-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 