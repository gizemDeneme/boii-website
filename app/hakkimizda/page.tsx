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
            alt="Boii Sığacık"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Hikayemiz</h1>
              <p className="text-xl">Yavaşlamak İçin Bir Durak</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-8">
                Boii Rest & Breakfast, büyük şehirdeki tempolu hayatı geride bırakma cesaretiyle başladı.
                İstanbul'da yıllar süren hızlı, yoğun ve programlı yaşamın ardından, bir yaz günü Sığacık'ta 
                deniz kenarında otururken kendimize şu soruyu sorduk:
              </p>

              <p className="text-gray-600 mb-8 text-center font-bold text-xl">
                "Bu kadar sade, bu kadar huzurlu bir yaşam mümkünken… neden geri dönelim?"
              </p>

              <p className="text-gray-600 mb-8">
                O gün karar verdik: burada kalacak, yavaşlamayı bir yaşam biçimi haline getirecek ve 
                bu duyguyu başkalarıyla da paylaşacaktık.
              </p>

              <p className="text-gray-600 mb-8">
                Adını özgür ruhlarıyla bilinen antik Boii kabilesinden alan bu 10 odalı taş yapı, sade 
                ama özenli bir yaşam anlayışının ürünü.
                Mekânın dönüşüm sürecinden mimarisine, kullanılan dokulardan renk paletine kadar her kararı büyük bir özenle, kendi ellerimizle şekillendirdik.
                Gösterişten uzak ama detayda dikkatli… Her şey tam olması gerektiği kadar.
              </p>

              <p className="text-gray-600 mb-8">
                Odalarımız, dinginliği önceleyen yalın bir tasarıma sahip.
                Güne, her sabah tarladan toplanan taze malzemelerle hazırladığımız "Break & Slow" kahvaltımızla başlarsınız.
                Dilerseniz akşam saatlerinde, yalnızca rezervasyonla hizmet veren Cigani restoranda, yine aynı özenle seçilmiş ürünlerle oluşturduğumuz menümüzü deneyimleyebilirsiniz.
                Hem sabah hem akşam, sofranıza gelen her şey doğrudan toprağın, denizin ve doğanın ritminden ilham alır; doğrudan emeğimizle gelir.
              </p>

              <p className="text-gray-600 mb-8">
                Tüm deneyim, yavaşlamaya, tadını çıkarmaya ve gerçekten dinlenmeye odaklanır.
              </p>

              <p className="text-gray-600 mb-8">
                Boii, Sığacık Kaleiçi'nin merkezinde yer alır; sade ve anlamlı bir yaşamın hâlâ mümkün olduğunu hatırlatır.
                Burada hayat belki sessiz değildir, ama daha yavaş, daha içten ve daha derindir.
                Boii, kaçmak için değil; durmak, düşünmek ve yeniden başlamak için tasarlandı.
              </p>

              <p className="text-gray-600 mb-4">
                Biz kalmayı seçtik.
              </p>

              <p className="text-gray-600 mb-12 text-center font-bold italic text-xl">
                Belki siz de bir gün, sadece uğramakla yetinmezsiniz.
              </p>

              <div className="text-center">
                <button className="bg-[#9F7E7E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
                  REZERVASYON
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