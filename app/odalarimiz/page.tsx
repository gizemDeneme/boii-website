import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Odalarimiz() {
  const rooms = [
    {
      title: 'Standart Oda',
      image: '/images/oda1.jpg',
      description: 'Modern ve konforlu bir şekilde tasarlanmış standart odalarımız, rahat bir konaklama için gereken tüm olanaklara sahiptir.',
      features: [
        '25m² Alan',
        'Çift Kişilik Yatak',
        'Klima',
        'Mini Bar',
        'Ücretsiz Wi-Fi',
        'LED TV',
        'Özel Banyo'
      ],
      price: 'Gecelik 1.200 TL\'den başlayan fiyatlarla'
    },
    {
      title: 'Deluxe Oda',
      image: '/images/oda2.jpeg',
      description: 'Geniş ve ferah deluxe odalarımız, konforunuz için özel olarak tasarlanmış olup, şık detaylarla donatılmıştır.',
      features: [
        '35m² Alan',
        'King Size Yatak',
        'Klima',
        'Mini Bar',
        'Ücretsiz Wi-Fi',
        'LED TV',
        'Lüks Banyo',
        'Oturma Alanı'
      ],
      price: 'Gecelik 1.500 TL\'den başlayan fiyatlarla'
    },
    {
      title: 'Suite Oda',
      image: '/images/oda3.jpeg',
      description: 'En üst düzey konfor ve lüksü bir arada sunan suite odalarımız, unutulmaz bir konaklama deneyimi yaşamanızı sağlar.',
      features: [
        '45m² Alan',
        'King Size Yatak',
        'Klima',
        'Mini Bar',
        'Ücretsiz Wi-Fi',
        'LED TV',
        'Jakuzili Banyo',
        'Geniş Oturma Alanı',
        'Deniz Manzarası'
      ],
      price: 'Gecelik 2.000 TL\'den başlayan fiyatlarla'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/images/oda1.jpg"
            alt="Boii Odalar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Odalarımız</h1>
              <p className="text-xl">Konfor ve Huzurun Buluştuğu Noktalar</p>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-20">
              {rooms.map((room, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className={`relative h-[400px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{room.title}</h2>
                    <p className="text-gray-600 mb-6">{room.description}</p>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Özellikler:</h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {room.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="text-lg font-semibold text-blue-600 mt-6">
                        {room.price}
                      </p>
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Rezervasyon Yap
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Tüm Odalarımızda</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Konfor</h3>
                <p className="text-gray-600">Yüksek Kaliteli Yataklar</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Teknoloji</h3>
                <p className="text-gray-600">Hızlı Wi-Fi</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Temizlik</h3>
                <p className="text-gray-600">Günlük Oda Servisi</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Güvenlik</h3>
                <p className="text-gray-600">24 Saat Kamera</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 