'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const heroImages = [
    {
      src: '/images/hero-image.jpg',
      alt: 'Boii Rest & Breakfast'
    },
    {
      src: '/images/hero-image-2.jpg',
      alt: 'Boii Kahvaltı'
    },
    {
      src: '/images/hero-image-3.jpg',
      alt: 'Boii Avlu'
    }
  ];

  return (
    <main>
      <HeroSlider images={heroImages} />

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/about-image.jpg"
                alt="Hakkımızda"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">{t.welcome}</h2>
              <div className="space-y-4">
                <p className="text-gray-600">{t.aboutText1}</p>
                <p className="text-gray-600">{t.aboutText2}</p>
              </div>
              <div className="text-center mt-12">
                <Link
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 bg-[#9F7E7E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  {t.reservation}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5D4444] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.freeWifi}</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5D4444] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.reception}</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5D4444] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.breakfastFeature}</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5D4444] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.climate}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t.roomsTitle}</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t.roomsDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/oda1.jpg"
                  alt="Standard Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#5D4444] font-semibold mb-2">{t.mostAffordable}</div>
                <h3 className="text-xl font-semibold mb-4">{t.standardRoom}</h3>
                <Link
                  href="/odalarimiz"
                  className="inline-block bg-[#5D4444] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#4A3636] transition-colors"
                >
                  {t.explore}
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/oda2.jpeg"
                  alt="Deluxe Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#5D4444] font-semibold mb-2">{t.comfortable}</div>
                <h3 className="text-xl font-semibold mb-4">{t.deluxeRoom}</h3>
                <Link
                  href="/odalarimiz"
                  className="inline-block bg-[#5D4444] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#4A3636] transition-colors"
                >
                  {t.explore}
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/oda3.jpeg"
                  alt="Suite Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#5D4444] font-semibold mb-2">{t.spacious}</div>
                <h3 className="text-xl font-semibold mb-4">{t.suiteRoom}</h3>
                <Link
                  href="/odalarimiz"
                  className="inline-block bg-[#5D4444] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#4A3636] transition-colors"
                >
                  {t.explore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
