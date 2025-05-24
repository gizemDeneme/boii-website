import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Sigacik() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/images/sigacik-kale.jpg"
            alt="Sığacık Kalesi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Sığacık</h1>
              <p className="text-xl">Tarihi Dokusuyla Yaşayan Kale Kent</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Sığacık'ın Tarihi</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Image
                    src="/images/sigacik-aerial.jpg"
                    alt="Sığacık Kalesi Havadan Görünüm"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-600">
                    Sığacık, antik çağlardan bu yana önemli bir liman kenti olarak varlığını sürdürmüştür. 
                    16. yüzyılda Kanuni Sultan Süleyman döneminde inşa edilen Sığacık Kalesi, bölgenin 
                    en önemli tarihi yapılarından biridir. Osmanlı döneminde önemli bir ticaret merkezi 
                    olan Sığacık, bugün hala tarihi dokusunu korumaktadır.
                  </p>
                </div>
              </div>

              {/* Historical Places Map */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Tarihi ve Turistik Noktalar</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1YxR7oKDxoqYBl5Jl4NBuXYZ9Yk_8KDM"
                    width="100%"
                    height="480"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Ionian Route Map */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-center">İyon Rotası</h2>
                <div className="prose prose-lg mx-auto mb-8">
                  <p className="text-gray-600 text-center">
                    Antik İyon Uygarlığı'nın 12 önemli kentinden biri olan Teos'u da içeren tarihi rota
                  </p>
                </div>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1oIBBqU8_8oqPz8ZFHoCWXLJLpPQNlxs"
                    width="100%"
                    height="480"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">İyon Rotası'ndaki Antik Kentler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Foça (Phokaia)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Smyrna (İzmir)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Klazomenai (Urla)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Erythrai (Ildırı)
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Teos (Sığacık)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Lebedos (Ürkmez)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Kolophon
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Ephesos (Efes)
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Priene
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Myus
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Miletos (Milet)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Didyma (Didim)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Activities and Attractions */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Sığacık'ta Yapılacaklar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Kaleiçi Pazarı</h3>
                    <p className="text-gray-600">
                      Tarihi kale içinde kurulan yerel pazarda, yöresel ürünler, el işi ürünler ve 
                      organik gıdalar bulabilirsiniz. Özellikle hafta sonları canlanan pazar, 
                      ziyaretçilerine otantik bir alışveriş deneyimi sunar.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Teos Antik Kenti</h3>
                    <p className="text-gray-600">
                      Dionysos Tapınağı, antik tiyatro ve liman kalıntılarıyla İyon medeniyetinin 
                      önemli merkezlerinden biri olan Teos, tarih meraklıları için vazgeçilmez bir durak.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Plajlar ve Koylar</h3>
                    <p className="text-gray-600">
                      Ekmeksiz Plajı, Akkum Plajı ve çevredeki sakin koylar, berrak suları ve 
                      doğal güzellikleriyle yaz aylarının vazgeçilmez noktaları.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Marina ve Balıkçı Barınağı</h3>
                    <p className="text-gray-600">
                      Teos Marina ve geleneksel balıkçı barınağı, deniz tutkunları için ideal noktalar. 
                      Çevredeki restoranlarda taze deniz ürünlerinin tadına bakabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 