'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import LanguageToggle from './LanguageToggle';
import { FaInstagram } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/about-image.jpg"
                  alt="Boii Rest & Breakfast"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.home}
              </Link>
              <Link href="/hikayemiz" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.about}
              </Link>
              <Link href="/sigacik" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.sigacik}
              </Link>
              <Link href="/odalarimiz" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.rooms}
              </Link>
              <Link href="/kahvaltimiz" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.breakfast}
              </Link>
              <Link href="/iletisim" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.contact}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="https://instagram.com/boii.sigacik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5D4444] hover:text-[#4A3636] mr-4"
            >
              <FaInstagram size={24} />
            </a>
            <LanguageToggle />
            <Link
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5D4444] hover:bg-[#4A3636] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5D4444]"
            >
              {t.reservation}
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5D4444]"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-[#5D4444] text-base font-medium">
              {t.home}
            </Link>
            <Link href="/hikayemiz" className="text-gray-500 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              {t.about}
            </Link>
            <Link href="/sigacik" className="text-gray-500 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              {t.sigacik}
            </Link>
            <Link href="/odalarimiz" className="text-gray-500 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              {t.rooms}
            </Link>
            <Link href="/kahvaltimiz" className="text-gray-500 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              {t.breakfast}
            </Link>
            <Link href="/iletisim" className="text-gray-500 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              {t.contact}
            </Link>
            <div className="flex items-center pl-3 pr-4 py-2">
              <LanguageToggle />
              <Link
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5D4444] hover:bg-[#4A3636] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5D4444]"
              >
                {t.reservation}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 