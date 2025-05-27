'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export default function Sigacik() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/sigacik-hero.jpg"
          alt="Sığacık"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t.sigacikTitle}</h1>
            <p className="text-xl">{t.sigacikSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-8">
              {t.sigacikText1}
            </p>

            <p className="text-gray-600 mb-8">
              {t.sigacikText2}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.sigacikText3}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList1}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList2}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList3}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList4}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList5}
                  </li>
                </ul>
              </div>
              <div className="relative h-64">
                <Image
                  src="/sigacik-activities.jpg"
                  alt="Sığacık Activities"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="relative h-64">
                <Image
                  src="/sigacik-food.jpg"
                  alt="Sığacık Food"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.sigacikText4}</h3>
                <p className="mb-4">{t.sigacikText5}</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList6}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList7}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList8}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.sigacikList9}
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-semibold mb-4">{t.sigacikText6}</h3>
              <p className="mb-4">{t.sigacikText7}</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.sigacikList10}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.sigacikList11}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.sigacikList12}
                </li>
              </ul>
            </div>

            {/* Google Maps Embed */}
            <div className="relative h-96 my-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12578.575367932894!2d26.778889!3d38.195556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb7f6c8e4c8b0f%3A0x7c2c4c4b4b4b4b4b!2sS%C4%B1%C4%9Fac%C4%B1k%2C+Seferihisar%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1621234567890!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 