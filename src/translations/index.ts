interface Translation {
  // Navigation
  home: string
  menu: string
  about: string
  chefsSelection: string
  contact: string
  makeReservation: string

  // Home Page
  welcomeToCigani: string
  fineDining: string
  viewMenu: string
  aboutDescription: string
  learnMore: string
  reservationDescription: string

  // Menu Page
  ourMenu: string
  starters: string
  mainCourses: string
  desserts: string

  // Chef's Selection
  chefsSelectionTitle: string
  chefsSelectionDescription: string
  tastingMenu: string
  perPerson: string
  winePairing: string
  menuDisclaimer: string
  allergyNote: string

  // Contact
  getInTouch: string
  location: string
  phone: string
  email: string
  openingHours: string
  lunch: string
  dinner: string
  reservationsRecommended: string
  sendMessage: string
  name: string
  messageLabel: string
  send: string

  // Reservation
  reservationTitle: string
  date: string
  time: string
  guests: string
  guest: string
  guests_plural: string
  specialOccasion: string
  specialRequests: string
  submitReservation: string
  reservationDisclaimer: string
  largePartyNote: string

  // Footer
  rights: string
  privacyPolicy: string
  termsOfService: string
}

const tr: Translation = {
  // Navigation
  home: 'Ana Sayfa',
  menu: 'Menü',
  about: 'Hakkımızda',
  chefsSelection: 'Şef Menüsü',
  contact: 'İletişim',
  makeReservation: 'Rezervasyon',

  // Home Page
  welcomeToCigani: 'Cigani\'ye Hoş Geldiniz',
  fineDining: 'Boii Hotel\'de Benzersiz Bir Lezzet Deneyimi',
  viewMenu: 'Menüyü Görüntüle',
  aboutDescription: 'Cigani Restaurant\'ta geleneksel Türk lezzetlerini modern mutfak teknikleriyle buluşturuyoruz. Boii Hotel\'in kalbinde yer alan restoranımız, özenle hazırlanmış menüleri ve olağanüstü servisiyle unutulmaz bir yemek deneyimi sunuyor.',
  learnMore: 'Daha Fazla Bilgi',
  reservationDescription: 'Unutulmaz bir yemek deneyimi için yerinizi ayırtın',

  // Menu Page
  ourMenu: 'Menümüz',
  starters: 'Başlangıçlar',
  mainCourses: 'Ana Yemekler',
  desserts: 'Tatlılar',

  // Chef's Selection
  chefsSelectionTitle: 'Şef Menüsü',
  chefsSelectionDescription: 'Akdeniz mutfağının en iyilerini sunan özenle hazırlanmış yedi aşamalı tadım menüsü',
  tastingMenu: 'Tadım Menüsü',
  perPerson: 'kişi başı',
  winePairing: 'Şarap Eşleştirmesi',
  menuDisclaimer: '* Menü içeriği mevsimsel ürünlere göre değişiklik gösterebilir',
  allergyNote: '* Lütfen alerjilerinizi veya diyet kısıtlamalarınızı bize bildirin',

  // Contact
  getInTouch: 'Bize Ulaşın',
  location: 'Konum',
  phone: 'Telefon',
  email: 'E-posta',
  openingHours: 'Çalışma Saatleri',
  lunch: 'Öğle: 12:00 - 15:00',
  dinner: 'Akşam: 18:00 - 23:00',
  reservationsRecommended: '* Rezervasyon önerilir',
  sendMessage: 'Mesaj Gönderin',
  name: 'İsim',
  messageLabel: 'Mesajınız',
  send: 'Gönder',

  // Reservation
  reservationTitle: 'Rezervasyon',
  date: 'Tarih',
  time: 'Saat',
  guests: 'Kişi Sayısı',
  guest: 'Kişi',
  guests_plural: 'Kişi',
  specialOccasion: 'Özel Gün',
  specialRequests: 'Özel İstekler',
  submitReservation: 'Rezervasyon Yap',
  reservationDisclaimer: '* Rezervasyon talepleri müsaitlik durumuna göre değerlendirilir',
  largePartyNote: '* 9 ve üzeri kişi sayısı için lütfen bizimle direkt iletişime geçin',

  // Footer
  rights: 'Tüm hakları saklıdır.',
  privacyPolicy: 'Gizlilik Politikası',
  termsOfService: 'Kullanım Koşulları'
}

const en: Translation = {
  // Navigation
  home: 'Home',
  menu: 'Menu',
  about: 'About',
  chefsSelection: 'Chef\'s Selection',
  contact: 'Contact',
  makeReservation: 'Make a Reservation',

  // Home Page
  welcomeToCigani: 'Welcome to Cigani',
  fineDining: 'A Fine Dining Experience at Boii Hotel',
  viewMenu: 'View Menu',
  aboutDescription: 'At Cigani Restaurant, we blend traditional Turkish flavors with modern culinary techniques. Located in the heart of Sığacık at Boii Hotel, our restaurant offers an unforgettable dining experience with carefully curated menus and exceptional service.',
  learnMore: 'Learn More',
  reservationDescription: 'Book your table for an unforgettable dining experience',

  // Menu Page
  ourMenu: 'Our Menu',
  starters: 'Starters',
  mainCourses: 'Main Courses',
  desserts: 'Desserts',

  // Chef's Selection
  chefsSelectionTitle: 'Chef\'s Selection',
  chefsSelectionDescription: 'A carefully curated seven-course tasting menu showcasing the best of Mediterranean cuisine',
  tastingMenu: 'Tasting Menu',
  perPerson: 'per person',
  winePairing: 'Wine Pairing',
  menuDisclaimer: '* Menu items may vary based on seasonal availability',
  allergyNote: '* Please inform us of any dietary restrictions or allergies',

  // Contact
  getInTouch: 'Get in Touch',
  location: 'Location',
  phone: 'Phone',
  email: 'Email',
  openingHours: 'Opening Hours',
  lunch: 'Lunch: 12:00 - 15:00',
  dinner: 'Dinner: 18:00 - 23:00',
  reservationsRecommended: '* Reservations recommended',
  sendMessage: 'Send us a Message',
  name: 'Name',
  messageLabel: 'Message',
  send: 'Send',

  // Reservation
  reservationTitle: 'Make a Reservation',
  date: 'Date',
  time: 'Time',
  guests: 'Number of Guests',
  guest: 'Guest',
  guests_plural: 'Guests',
  specialOccasion: 'Special Occasion',
  specialRequests: 'Special Requests',
  submitReservation: 'Make Reservation',
  reservationDisclaimer: '* Reservation requests are subject to availability',
  largePartyNote: '* For parties of 9 or more, please contact us directly',

  // Footer
  rights: 'All rights reserved.',
  privacyPolicy: 'Privacy Policy',
  termsOfService: 'Terms of Service'
}

export const translations = {
  tr,
  en
} 