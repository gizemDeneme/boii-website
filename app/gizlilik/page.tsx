import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Gizlilik() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>
          
          <div className="prose prose-lg">
            <p>
              Boii Rest & Breakfast olarak, sizlere sunduğumuz hizmetler kapsamında kişisel 
              bilgilerinizin gizliliğini korumaya önem veriyoruz. Bu Gizlilik Politikası, 
              web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda bilgilerinizin 
              nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Toplanan Bilgiler
            </h2>
            <p>
              Web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda aşağıdaki 
              bilgileri toplayabiliriz:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ad, soyad, e-posta adresi, telefon numarası gibi iletişim bilgileri</li>
              <li>Rezervasyon tarihleri, oda tercihleri gibi konaklama bilgileri</li>
              <li>Ödeme bilgileri</li>
              <li>IP adresi, tarayıcı türü gibi teknik bilgiler</li>
              <li>Çerezler aracılığıyla toplanan bilgiler</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Bilgilerin Kullanımı
            </h2>
            <p>
              Topladığımız bilgileri aşağıdaki amaçlar için kullanmaktayız:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rezervasyon işlemlerinin gerçekleştirilmesi</li>
              <li>Hizmetlerimiz hakkında bilgilendirme yapılması</li>
              <li>Müşteri hizmetlerinin sağlanması</li>
              <li>Web sitemizin ve hizmetlerimizin iyileştirilmesi</li>
              <li>Yasal yükümlülüklerimizin yerine getirilmesi</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Bilgilerin Paylaşımı
            </h2>
            <p>
              Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla 
              paylaşılmamaktadır. Bilgileriniz sadece hizmet sağlayıcılarımız ve yasal 
              otoritelerle, gerekli olduğu ölçüde paylaşılabilir.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Çerezler
            </h2>
            <p>
              Web sitemiz, kullanıcı deneyimini iyileştirmek ve site kullanımını analiz 
              etmek amacıyla çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri 
              devre dışı bırakabilirsiniz, ancak bu durumda web sitemizin bazı özellikleri 
              düzgün çalışmayabilir.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Güvenlik
            </h2>
            <p>
              Kişisel bilgilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel 
              önlemler almaktayız. Bilgileriniz, yetkisiz erişim, değiştirme, açıklama veya 
              imha edilmeye karşı korunmaktadır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Değişiklikler
            </h2>
            <p>
              Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Yapılan değişiklikler 
              web sitemizde yayınlanacak ve önemli değişiklikler olması durumunda size 
              bildirilecektir.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              İletişim
            </h2>
            <p>
              Gizlilik Politikamız hakkında sorularınız için aşağıdaki iletişim bilgilerini 
              kullanarak bize ulaşabilirsiniz:
            </p>
            <p className="mt-4">
              <strong>Adres:</strong> Sığacık Mahallesi, 128. Sk. No: 22, Seferihisar / İzmir<br />
              <strong>E-posta:</strong> info@boii.com.tr<br />
              <strong>Telefon:</strong> +90 542 114 76 44
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 