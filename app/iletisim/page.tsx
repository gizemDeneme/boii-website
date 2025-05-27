'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/contact-hero.jpg"
          alt="Contact Boii"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t.contactTitle}</h1>
            <p className="text-xl">{t.contactSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contactText1}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.contactText2}</h3>
                <p className="text-gray-600">{t.address}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.contactText3}</h3>
                <p className="text-gray-600">{t.phone}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.contactText4}</h3>
                <p className="text-gray-600">{t.email}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.contactText5}</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://instagram.com/boiirestbreakfast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5D4444] hover:text-[#4A3636]"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://facebook.com/boiirestbreakfast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5D4444] hover:text-[#4A3636]"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">{t.contactText6}</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    {t.contactText7}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D4444]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    {t.contactText8}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D4444]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    {t.contactText9}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D4444]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5D4444] text-white py-3 rounded-lg hover:bg-[#4A3636] transition-colors"
                >
                  {t.contactText10}
                </button>
              </form>
            </div>
          </div>

          {/* Visit Us Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">{t.contactText11}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{t.contactText12}</h3>
                <p className="text-gray-600 mb-4">{t.contactText13}</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.contactText14}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.contactText15}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                    {t.contactText16}
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12578.575367932894!2d26.778889!3d38.195556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb7f6c8e4c8b0f%3A0x7c2c4c4b4b4b4b4b!2sS%C4%B1%C4%9Fac%C4%B1k%2C+Seferihisar%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1621234567890!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 