'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
      className="text-gray-700 hover:text-[#976f47] transition-colors duration-200"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </button>
  )
} 