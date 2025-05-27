'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/about-image.jpg"
          alt="About Boii"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t.about}</h1>
            <p className="text-xl">{t.welcome}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-8">
              {t.aboutText3}
            </p>

            <p className="text-gray-600 mb-8 text-center font-bold text-xl">
              {t.aboutText4}
            </p>

            <p className="text-gray-600 mb-8">
              {t.aboutText5}
            </p>

            <p className="text-gray-600 mb-8">
              {t.aboutText6}
            </p>

            <p className="text-gray-600 mb-8">
              {t.aboutText7}
            </p>

            <p className="text-gray-600 mb-8">
              {t.aboutText8}
            </p>

            <p className="text-gray-600 mb-8">
              {t.aboutText9}
            </p>

            <p className="text-gray-600 mb-4">
              {t.aboutText10}
            </p>

            <p className="text-gray-600 mb-12 text-center font-bold italic text-xl">
              {t.aboutText11}
            </p>

            <div className="text-center">
              <Link
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5D4444] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#4A3636] transition-all"
              >
                {t.reservation}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 