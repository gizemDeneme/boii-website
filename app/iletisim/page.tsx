import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Iletisim() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh]">
          <Image
            src="/images/hero-image.jpg"
            alt="Boii İletişim"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">İletişim</h1>
              <p className="text-xl">Size Yardımcı Olmaktan Mutluluk Duyarız</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adres</h3>
                    <p className="text-gray-600">
                      Sığacık Mahallesi, 128. Sk. No: 22<br />
                      Seferihisar / İzmir
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+905421147644" className="hover:text-blue-600">
                        +90 542 114 76 44
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">E-posta</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@boii.com.tr" className="hover:text-blue-600">
                        info@boii.com.tr
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sosyal Medya</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Bize Ulaşın</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#9F7E7E] text-white px-8 py-3 rounded-lg hover:bg-[#8E6D6D] transition-colors"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Konum</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.8876168859087!2d26.78837!3d38.19194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb95a5e8f85c21%3A0x9876543210fedcba!2zQm9paSBSZXN0ICYgQnJlYWtmYXN0IC0gU8SxxJ9hY8SxayBLYWxlacOnaSBCdXRpayBPdGVs!5e0!3m2!1str!2str!4v1710371234567!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 