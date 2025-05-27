'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export default function Rooms() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/rooms-hero.jpg"
          alt="Rooms at Boii"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t.roomsTitle}</h1>
            <p className="text-xl">{t.roomsSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.roomsText1}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t.roomsText2}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.roomsList1}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.roomsList2}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.roomsList3}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.roomsList4}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.roomsList5}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5D4444] rounded-full mr-3"></span>
                  {t.roomsList6}
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src="/room-features.jpg"
                alt="Room Features"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Room Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Room */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/standard-room.jpg"
                  alt="Standard Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{t.standardRoomTitle}</h3>
                <p className="text-gray-600 mb-4">{t.standardRoomText}</p>
                <p className="text-[#5D4444] font-semibold mb-4">{t.standardRoomPrice}</p>
                <Link
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#5D4444] text-white px-6 py-2 rounded-full hover:bg-[#4A3636] transition-colors"
                >
                  {t.reservation}
                </Link>
              </div>
            </div>

            {/* Deluxe Room */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/deluxe-room.jpg"
                  alt="Deluxe Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{t.deluxeRoomTitle}</h3>
                <p className="text-gray-600 mb-4">{t.deluxeRoomText}</p>
                <p className="text-[#5D4444] font-semibold mb-4">{t.deluxeRoomPrice}</p>
                <Link
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#5D4444] text-white px-6 py-2 rounded-full hover:bg-[#4A3636] transition-colors"
                >
                  {t.reservation}
                </Link>
              </div>
            </div>

            {/* Suite Room */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/suite-room.jpg"
                  alt="Suite Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{t.suiteRoomTitle}</h3>
                <p className="text-gray-600 mb-4">{t.suiteRoomText}</p>
                <p className="text-[#5D4444] font-semibold mb-4">{t.suiteRoomPrice}</p>
                <Link
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#5D4444] text-white px-6 py-2 rounded-full hover:bg-[#4A3636] transition-colors"
                >
                  {t.reservation}
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg mt-16">
            <h3 className="text-2xl font-semibold mb-4">{t.roomsText3}</h3>
            <p className="text-lg mb-2">{t.roomsText4}</p>
            <p className="text-lg mb-4">{t.roomsText5}</p>
            <div className="text-center">
              <p className="text-lg mb-2">{t.roomsText6}</p>
              <p className="text-lg mb-4">{t.roomsText7}</p>
              <Link
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5D4444] text-white px-8 py-3 rounded-full hover:bg-[#4A3636] transition-colors"
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