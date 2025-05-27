'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const { language } = useLanguage()
  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Cigani"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t.contact}</h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#976f47] mb-8">{t.getInTouch}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="w-6 h-6 text-[#976f47] mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{t.location}</h3>
                    <p className="text-gray-600">
                      Boii Hotel<br />
                      Sığacık, İzmir<br />
                      Turkey
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="w-6 h-6 text-[#976f47] mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{t.phone}</h3>
                    <p className="text-gray-600">+90 XXX XXX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="w-6 h-6 text-[#976f47] mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{t.email}</h3>
                    <p className="text-gray-600">info@ciganirestaurant.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">{t.openingHours}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{t.lunch}</p>
                  <p>{t.dinner}</p>
                  <p className="mt-4 text-sm">{t.reservationsRecommended}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#976f47] mb-8">{t.sendMessage}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#976f47]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#976f47]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#976f47]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#976f47]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#976f47] text-white py-3 rounded-md hover:bg-[#7d5c3a] transition duration-300"
                >
                  {t.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 