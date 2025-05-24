import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Kahvalti() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/images/kahvalti.jpg"
            alt="Boii Kahvaltı"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Kahvaltımız</h1>
              <p className="text-xl">Ev Yapımı Lezzetler ve Organik Ürünler</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Taze ve Organik Kahvaltı Deneyimi</h2>
              
              <p className="text-gray-600 mb-6">
                Her sabah özenle hazırladığımız kahvaltı büfemizde, yerel üreticilerden temin ettiğimiz 
                taze ve organik ürünleri siz değerli misafirlerimizle buluşturuyoruz.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Kahvaltı Büfemizde:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ev Yapımı Reçeller</li>
                    <li>• Yerel Peynir Çeşitleri</li>
                    <li>• Taze Pişmiş Börekler</li>
                    <li>• Organik Yumurta</li>
                    <li>• Sığacık'tan Taze Otlar</li>
                    <li>• Zeytinyağlılar</li>
                    <li>• Mevsim Meyveleri</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">İçecekler:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Türk Kahvesi</li>
                    <li>• Filtre Kahve</li>
                    <li>• Bitki Çayları</li>
                    <li>• Taze Sıkılmış Meyve Suları</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Kahvaltımız, 08:30 - 10:30 saatleri arasında servis edilmektedir. 
                Özel beslenme ihtiyaçlarınız varsa, lütfen önceden bizi bilgilendirin.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 