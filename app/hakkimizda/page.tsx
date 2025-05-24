import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Hakkimizda() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/images/about-image.jpg"
            alt="Boii Hakkımızda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Hakkımızda</h1>
              <p className="text-xl">Sığacık'ta Bir Huzur Noktası</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Boii Rest & Breakfast'a Hoş Geldiniz</h2>
              
              <p className="text-gray-600 mb-8">
                Sığacık'ın kalbinde, tarihi dokuyla modern konforu birleştiren butik otelimiz, 
                size evinizin sıcaklığını aratmayacak bir konaklama deneyimi sunuyor. 
                Denize yürüme mesafesindeki konumumuz ve özenle tasarlanmış 10 odamızla, 
                hem iş hem de tatil amaçlı konaklamalarınız için ideal bir seçenek sunuyoruz.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Misyonumuz</h3>
                  <p className="text-gray-600">
                    Misafirlerimize unutulmaz bir konaklama deneyimi yaşatmak, Sığacık'ın 
                    eşsiz atmosferini en konforlu şekilde sunmak ve her detayda kaliteyi 
                    hissettirmek için çalışıyoruz.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Değerlerimiz</h3>
                  <p className="text-gray-600">
                    Misafirperverlik, kalite, konfor ve sürdürülebilirlik temel değerlerimizi 
                    oluşturuyor. Her misafirimizin kendini evinde gibi hissetmesi için özenle 
                    çalışıyoruz.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Ücretsiz Wi-Fi
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  24 Saat Resepsiyon
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Ferah Avlu
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Ev Yapımı Organik Kahvaltı
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Klima ve Isıtma
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Denize Yürüme Mesafesi
                </li>
              </ul>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4">Lokasyon</h3>
                <p className="text-gray-600 mb-6">
                  Sığacık'ın tarihi sokaklarında keyifli yürüyüşler yapabilir, yerel pazarı 
                  keşfedebilir ve enfes deniz ürünleri restoranlarının tadını çıkarabilirsiniz. 
                  Otelimiz, Sığacık'ın en merkezi noktalarından birinde yer alıyor.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 