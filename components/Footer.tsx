import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">BOİİ REST & BREAKFAST</h3>
            <div className="space-y-3 text-gray-300">
              <p>Sığacık Mahallesi,</p>
              <p>128. Sk. No: 22</p>
              <p>Seferihisar / İzmir</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Hızlı Bağlantılar</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="block text-gray-300 hover:text-white transition-colors">
                Hakkımızda
              </Link>
              <Link href="/odalarimiz" className="block text-gray-300 hover:text-white transition-colors">
                Odalarımız
              </Link>
              <Link href="/kahvaltimiz" className="block text-gray-300 hover:text-white transition-colors">
                Kahvaltımız
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">İletişim</h3>
            <div className="space-y-3 text-gray-300">
              <p>Tel: +90 542 114 76 44</p>
              <p>E-posta: info@boii.com.tr</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Boii Rest & Breakfast. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/kvkk" className="text-gray-400 hover:text-white transition-colors">
                KVKK
              </Link>
              <Link href="/gizlilik" className="text-gray-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 