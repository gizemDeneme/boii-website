import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
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
    <>
      <Header />
      <main>
        <HeroSlider images={heroImages} />

        {/* About Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px]">
                <Image
                  src="/images/about-image.jpg"
                  alt="Hakkımızda"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Hoş Geldiniz</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Yılın her mevsimi aynı özenle hizmet veren otelimizde, her detay sizler için düşünüldü. 
                  Sabahları kuş sesleri eşliğinde başlayan güne, huzur dolu avlumuzda yerel lezzetlerle 
                  hazırlanmış kahvaltımızla merhaba deyin.
                </p>
                <p className="text-gray-600 text-lg mb-6">
                  Sığacık'ın taş sokaklarını keşfe çıkarken, ücretsiz danışma hizmetimizle en özel deneyimleri 
                  yaşayın ve tatilinizi unutulmaz kılın, her anın tadını çıkarın.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    Ücretsiz Wi-Fi
                  </p>
                  <p className="flex items-center">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    24 Saat Resepsiyon
                  </p>
                  <p className="flex items-center">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    Ferah Avlu
                  </p>
                  <p className="flex items-center">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    <a href="/kahvaltimiz" className="hover:text-blue-600 transition-colors">
                      Ev Yapımı Organik Kahvaltı
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    Klima ve Isıtma
                  </p>
                </div>
                <div className="text-center mb-12">
                  <button className="mt-8 bg-[#9F7E7E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
                    REZERVASYON
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-4">Odalarımız</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Modern konfor ve şık tasarımın buluştuğu odalarımızda huzurlu bir konaklama deneyimi sizi bekliyor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { image: '/images/oda1.jpg', title: 'Standart Oda', price: 'EN UYGUN' },
                { image: '/images/oda2.jpeg', title: 'Deluxe Oda', price: 'KONFORLU' },
                { image: '/images/oda3.jpeg', title: 'Suite Oda', price: 'FERAH' },
              ].map((room, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-64">
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-semibold">{room.price}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-4">{room.title}</h3>
                    <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                      İNCELE
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mb-12">
              <button className="mt-8 bg-[#9F7E7E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
                REZERVASYON
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">İletişim</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız.
              </p>
              <button className="mt-8 bg-[#9F7E7E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#8E6D6D] transition-colors">
                REZERVASYON
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Bize Ulaşın</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Adres:</span>
                    Sığacık Mahallesi, 128. Sk. No: 22 Seferihisar / İzmir
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Telefon:</span>
                    +90 542 114 76 44
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">E-posta:</span>
                    info@boii.com.tr
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Rezervasyon</h3>
                <p className="text-gray-600 mb-4">
                  Rezervasyon ve bilgi için bize ulaşın:
                </p>
                <button className="bg-[#9F7E7E] text-white px-8 py-3 rounded-lg hover:bg-[#8E6D6D] transition-colors">
                  REZERVASYON YAP
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
