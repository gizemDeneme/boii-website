'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#5D4444] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Boii Rest & Breakfast */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Boii Rest & Breakfast</h3>
            <p className="text-sm">{t.address}</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.socialMedia}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/boii.sigacik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-300 flex items-center"
              >
                <FaInstagram className="mr-2" size={20} />
                Instagram
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-300 flex items-center"
              >
                <FaFacebook className="mr-2" size={20} />
                Facebook
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <p className="text-sm mb-2">{t.phone}</p>
            <p className="text-sm">{t.email}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-300">{t.home}</Link>
              </li>
              <li>
                <Link href="/hikayemiz" className="hover:text-gray-300">{t.about}</Link>
              </li>
              <li>
                <Link href="/sigacik" className="hover:text-gray-300">{t.sigacik}</Link>
              </li>
              <li>
                <Link href="/odalarimiz" className="hover:text-gray-300">{t.rooms}</Link>
              </li>
              <li>
                <Link href="/kahvaltimiz" className="hover:text-gray-300">{t.breakfast}</Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-gray-300">{t.contact}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Boii Rest & Breakfast. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
} 