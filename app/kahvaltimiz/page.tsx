'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export default function Breakfast() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/breakfast-hero.jpg"
          alt="Breakfast at Boii"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t.breakfastTitle}</h1>
            <p className="text-xl">{t.breakfastSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-12 text-center text-xl">
              {t.breakfastText1}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.breakfastText2}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.breakfastList1}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.breakfastList2}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.breakfastList3}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.breakfastList4}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.breakfastList5}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.breakfastList6}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.breakfastList7}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.breakfastList8}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.breakfastText3}</h3>
                <p className="text-gray-600 mb-2">{t.breakfastText4}</p>
                <p className="text-gray-600 mb-2">{t.breakfastText5}</p>
                <p className="text-gray-600">{t.breakfastText6}</p>
              </div>
            </div>

            <div className="text-gray-600 mb-6">
              <p className="mb-2">{t.breakfastText7}</p>
              <p>{t.breakfastText8}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 