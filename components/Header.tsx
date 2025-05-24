'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white bg-opacity-95 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-2 border-b flex justify-between items-center">
          <div className="flex space-x-4 text-sm">
            <a href="tel:+905421147644" className="text-gray-600 hover:text-blue-600">
              +90 542 114 76 44
            </a>
            <a href="mailto:info@boii.com.tr" className="text-gray-600 hover:text-blue-600">
              info@boii.com.tr
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">TR</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">EN</a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/about-image.jpg"
                alt="Boii Rest & Breakfast Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hikayemiz"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Hikayemiz
              </Link>
              <Link
                href="/sigacik"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sığacık
              </Link>
              <Link
                href="/odalarimiz"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Odalarımız
              </Link>
              <Link
                href="/kahvaltimiz"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Kahvaltımız
              </Link>
              <Link
                href="/iletisim"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                İletişim
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Rezervasyon
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hikayemiz"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hikayemiz
              </Link>
              <Link
                href="/sigacik"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sığacık
              </Link>
              <Link
                href="/odalarimiz"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Odalarımız
              </Link>
              <Link
                href="/kahvaltimiz"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kahvaltımız
              </Link>
              <Link
                href="/iletisim"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Rezervasyon
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
} 