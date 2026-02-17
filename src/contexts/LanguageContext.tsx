import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'uz' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.services': 'Xizmatlar',
    'nav.projects': 'Loyihalar',
    'nav.about': 'Biz haqimizda',
    'nav.contact': 'Aloqa',
    'nav.faq': 'Savol-javob',
    
    // Hero
    'hero.title': 'Ishonchli darvozalar va temir buyumlar',
    'hero.subtitle': 'Darvoza, eshik, perila va panjaralar — buyurtma, bo\'yash va o\'rnatish xizmatlari',
    'hero.cta.order': 'Buyurtma berish',
    'hero.cta.projects': 'Loyihalarni ko\'rish',
    
    // Stats
    'stats.years': 'Yillik tajriba',
    'stats.projects': 'Tugatilgan loyihalar',
    'stats.clients': 'Mamnun mijozlar',
    
    // Services
    'services.title': 'Bizning xizmatlarimiz',
    'services.subtitle': 'Barcha turdagi temir buyumlarni ishlab chiqarish, bo\'yash va o\'rnatish',
    'services.gates.title': 'Darvozalar',
    'services.gates.description': 'Avtomatik va oddiy darvozalar, profil temir, shveller va mijoz talabiga mos materiallardan.',
    'services.doors.title': 'Eshiklar',
    'services.doors.description': 'Xavfsiz va chiroyli temir eshiklar, individual dizayn va rangli bo\'yoq bilan.',
    'services.fences.title': 'Panjaralar',
    'services.fences.description': 'Dekorativ va himoya panjaralari, reshotkalar — 12x12, 14x14 kvadrat temir va profil.',
    'services.railings.title': 'Perilalar',
    'services.railings.description': 'Zinapoya va balkonlar uchun perilalar, zamonaviy va klassik uslubda.',
    'services.restoration.title': 'Qayta tiklash',
    'services.restoration.description': 'Eski, rangdan chiqqan temir buyumlarni qayta bo\'yash va yangilash xizmati.',
    'services.viewAll': 'Barcha xizmatlar',
    
    // Projects
    'projects.title': 'Bizning loyihalarimiz',
    'projects.subtitle': 'Eng so\'nggi ishlarimiz',
    'projects.filter.all': 'Barchasi',
    'projects.filter.gates': 'Darvozalar',
    'projects.filter.doors': 'Eshiklar',
    'projects.filter.fences': 'Panjaralar',
    'projects.filter.railings': 'Perilalar',
    'projects.filter.restoration': 'Tiklanganlar',
    'projects.viewDetails': 'Batafsil',
    'projects.viewAll': 'Barcha loyihalar',
    
    // Project Detail
    'project.materials': 'Materiallar',
    'project.year': 'Yil',
    'project.location': 'Manzil',
    'project.order': 'Buyurtma berish',
    
    // About
    'about.title': 'Biz haqimizda',
    'about.subtitle': 'To\'liq xizmat — ishlab chiqarish, bo\'yash va o\'rnatish',
    'about.story': 'Biz barcha turdagi temir buyumlarni ishlab chiqaramiz: darvozalar, eshiklar, perilalar va panjaralar. Mahsulotlar profil temir, 12x12 va 14x14 kvadrat temir, shveller va boshqa materiallardan tayyorlanadi. Barcha ishlar mijoz talabi, didi va byudjetiga mos ravishda bajariladi. Bo\'yash va o\'rnatish xizmatlari kiritilgan.',
    'about.experience.title': 'Tajriba',
    'about.quality.title': 'Sifat',
    'about.guarantee.title': 'Kafolat',
    'about.restoration.title': 'Tiklash xizmati',
    'about.restoration.description': 'Eski, rangdan chiqqan temir buyumlarni qayta tiklaymiz va yangiday qilib bo\'yaymiz.',
    'about.fullService.title': 'To\'liq xizmat',
    'about.fullService.description': 'Ishlab chiqarish + bo\'yash + o\'rnatish — barchasi bitta joyda.',
    
    // Guarantee Section
    'guarantee.title': 'Afzalliklar va Kafolat',
    'guarantee.subtitle': 'Nima uchun bizni tanlaysiz',
    'guarantee.individual.title': 'Individual yondashuv',
    'guarantee.individual.description': 'Har bir buyurtma mijozning talabi, didi va byudjetiga mos ravishda tayyorlanadi.',
    'guarantee.materials.title': 'Mustahkam materiallar',
    'guarantee.materials.description': 'Profil temir, 12x12 va 14x14 kvadrat temir, shveller — eng yaxshi materiallar.',
    'guarantee.warranty.title': '6 oy — 1 yillik kafolat',
    'guarantee.warranty.description': 'Agar mahsulot 6 oydan 1 yilgacha vaqt ichida nosoz bo\'lsa (ataylab buzish yoki avtohalokat bundan mustasno), bepul ta\'mirlaymiz.',
    'guarantee.painting.title': 'Bo\'yash kiritilgan',
    'guarantee.painting.description': 'Barcha mahsulotlar mijoz tanlagan rangda bo\'yaladi.',
    'guarantee.installation.title': 'O\'rnatish kiritilgan',
    'guarantee.installation.description': 'Professional o\'rnatish xizmati narxga kiritilgan.',
    
    // Contact
    'contact.title': 'Biz bilan bog\'laning',
    'contact.subtitle': 'Savollaringiz bormi? Biz bilan bog\'laning',
    'contact.form.name': 'Ismingiz',
    'contact.form.phone': 'Telefon raqami',
    'contact.form.message': 'Xabar',
    'contact.form.submit': 'Yuborish',
    'contact.address': 'Manzil',
    'contact.phone': 'Telefon',
    
    // FAQ
    'faq.title': 'Ko\'p so\'raladigan savollar',
    'faq.subtitle': 'Eng ko\'p beriladigan savollarga javoblar',
    
    // Order Modal
    'order.title': 'Buyurtma berish',
    'order.fullName': 'To\'liq ism',
    'order.phone': 'Telefon raqami',
    'order.address': 'Manzil',
    'order.serviceType': 'Xizmat turi',
    'order.message': 'Qo\'shimcha xabar',
    'order.submit': 'Buyurtma yuborish',
    'order.success': 'Buyurtmangiz qabul qilindi!',
    'order.select.gate': 'Darvoza',
    'order.select.door': 'Eshik',
    'order.select.fence': 'Panjara',
    'order.select.railing': 'Perila',
    'order.select.restoration': 'Tiklash',
    
    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan',
    'footer.description': 'Barcha turdagi temir buyumlarni ishlab chiqarish, bo\'yash va o\'rnatish',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'Reliable Gates and Metal Products',
    'hero.subtitle': 'Gates, doors, railings and fences — custom production, painting and installation',
    'hero.cta.order': 'Place Order',
    'hero.cta.projects': 'View Projects',
    
    // Stats
    'stats.years': 'Years of Experience',
    'stats.projects': 'Completed Projects',
    'stats.clients': 'Happy Clients',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Production, painting and installation of all metal products',
    'services.gates.title': 'Gates',
    'services.gates.description': 'Automatic and standard gates made from profile metal, channel and materials based on client requirements.',
    'services.doors.title': 'Doors',
    'services.doors.description': 'Secure and beautiful iron doors with custom design and color finishing.',
    'services.fences.title': 'Fences & Grilles',
    'services.fences.description': 'Decorative and protective fences and grilles made from 12x12, 14x14 square metal and profiles.',
    'services.railings.title': 'Railings',
    'services.railings.description': 'Stair and balcony railings in modern and classic styles.',
    'services.restoration.title': 'Restoration',
    'services.restoration.description': 'Restoration and repainting of old, faded metal products to look brand new.',
    'services.viewAll': 'All Services',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Latest works',
    'projects.filter.all': 'All',
    'projects.filter.gates': 'Gates',
    'projects.filter.doors': 'Doors',
    'projects.filter.fences': 'Fences',
    'projects.filter.railings': 'Railings',
    'projects.filter.restoration': 'Restored',
    'projects.viewDetails': 'View Details',
    'projects.viewAll': 'All Projects',
    
    // Project Detail
    'project.materials': 'Materials',
    'project.year': 'Year',
    'project.location': 'Location',
    'project.order': 'Order Similar',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Full-cycle service — production, painting and installation',
    'about.story': 'We produce all types of metal products: gates, doors, railings and fences. Products are made from profile metal, 12x12 and 14x14 square metal, channel and other materials. All work is done according to client requirements, taste and budget. Painting and installation services are included.',
    'about.experience.title': 'Experience',
    'about.quality.title': 'Quality',
    'about.guarantee.title': 'Guarantee',
    'about.restoration.title': 'Restoration Service',
    'about.restoration.description': 'We restore old, faded metal products and repaint them to look brand new.',
    'about.fullService.title': 'Full Service',
    'about.fullService.description': 'Production + painting + installation — all in one place.',
    
    // Guarantee Section
    'guarantee.title': 'Advantages & Guarantee',
    'guarantee.subtitle': 'Why choose us',
    'guarantee.individual.title': 'Individual Approach',
    'guarantee.individual.description': 'Every order is made according to client requirements, taste and budget.',
    'guarantee.materials.title': 'Strong Materials',
    'guarantee.materials.description': 'Profile metal, 12x12 and 14x14 square metal, channel — best quality materials.',
    'guarantee.warranty.title': '6 Months — 1 Year Warranty',
    'guarantee.warranty.description': 'If the product becomes unusable within 6 months to 1 year (excluding intentional damage or car accidents), we repair it FREE.',
    'guarantee.painting.title': 'Painting Included',
    'guarantee.painting.description': 'All products are painted in the color chosen by the client.',
    'guarantee.installation.title': 'Installation Included',
    'guarantee.installation.description': 'Professional installation service is included in the price.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? Get in touch',
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to common questions',
    
    // Order Modal
    'order.title': 'Place Order',
    'order.fullName': 'Full Name',
    'order.phone': 'Phone Number',
    'order.address': 'Address',
    'order.serviceType': 'Service Type',
    'order.message': 'Additional Message',
    'order.submit': 'Submit Order',
    'order.success': 'Your order has been received!',
    'order.select.gate': 'Gate',
    'order.select.door': 'Door',
    'order.select.fence': 'Fence',
    'order.select.railing': 'Railing',
    'order.select.restoration': 'Restoration',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.description': 'Production, painting and installation of all metal products',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.projects': 'Проекты',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.faq': 'Вопросы',
    
    // Hero
    'hero.title': 'Надёжные ворота и металлоизделия',
    'hero.subtitle': 'Ворота, двери, перила и заборы — изготовление, покраска и установка',
    'hero.cta.order': 'Заказать',
    'hero.cta.projects': 'Смотреть проекты',
    
    // Stats
    'stats.years': 'Лет опыта',
    'stats.projects': 'Завершённых проектов',
    'stats.clients': 'Довольных клиентов',
    
    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Изготовление, покраска и установка всех металлоизделий',
    'services.gates.title': 'Ворота',
    'services.gates.description': 'Автоматические и обычные ворота из профильного металла, швеллера и материалов по запросу клиента.',
    'services.doors.title': 'Двери',
    'services.doors.description': 'Надёжные и красивые железные двери с индивидуальным дизайном и покраской.',
    'services.fences.title': 'Заборы и решётки',
    'services.fences.description': 'Декоративные и защитные заборы и решётки из квадрата 12x12, 14x14 и профиля.',
    'services.railings.title': 'Перила',
    'services.railings.description': 'Перила для лестниц и балконов в современном и классическом стиле.',
    'services.restoration.title': 'Реставрация',
    'services.restoration.description': 'Восстановление и покраска старых, выцветших металлоизделий до состояния новых.',
    'services.viewAll': 'Все услуги',
    
    // Projects
    'projects.title': 'Наши проекты',
    'projects.subtitle': 'Последние работы',
    'projects.filter.all': 'Все',
    'projects.filter.gates': 'Ворота',
    'projects.filter.doors': 'Двери',
    'projects.filter.fences': 'Заборы',
    'projects.filter.railings': 'Перила',
    'projects.filter.restoration': 'Восстановленные',
    'projects.viewDetails': 'Подробнее',
    'projects.viewAll': 'Все проекты',
    
    // Project Detail
    'project.materials': 'Материалы',
    'project.year': 'Год',
    'project.location': 'Местоположение',
    'project.order': 'Заказать похожий',
    
    // About
    'about.title': 'О нас',
    'about.subtitle': 'Полный цикл — производство, покраска и установка',
    'about.story': 'Мы производим все виды металлоизделий: ворота, двери, перила и заборы. Изделия изготавливаются из профильного металла, квадрата 12x12 и 14x14, швеллера и других материалов. Все работы выполняются по требованиям клиента, его вкусу и бюджету. Покраска и установка включены.',
    'about.experience.title': 'Опыт',
    'about.quality.title': 'Качество',
    'about.guarantee.title': 'Гарантия',
    'about.restoration.title': 'Услуга реставрации',
    'about.restoration.description': 'Восстанавливаем старые, выцветшие металлоизделия и красим их как новые.',
    'about.fullService.title': 'Полный сервис',
    'about.fullService.description': 'Производство + покраска + установка — всё в одном месте.',
    
    // Guarantee Section
    'guarantee.title': 'Преимущества и Гарантия',
    'guarantee.subtitle': 'Почему выбирают нас',
    'guarantee.individual.title': 'Индивидуальный подход',
    'guarantee.individual.description': 'Каждый заказ выполняется по требованиям клиента, его вкусу и бюджету.',
    'guarantee.materials.title': 'Прочные материалы',
    'guarantee.materials.description': 'Профильный металл, квадрат 12x12 и 14x14, швеллер — лучшие материалы.',
    'guarantee.warranty.title': 'Гарантия 6 мес — 1 год',
    'guarantee.warranty.description': 'Если изделие выйдет из строя в течение 6 месяцев — 1 года (кроме умышленного повреждения или ДТП), ремонт БЕСПЛАТНО.',
    'guarantee.painting.title': 'Покраска включена',
    'guarantee.painting.description': 'Все изделия окрашиваются в цвет, выбранный клиентом.',
    'guarantee.installation.title': 'Установка включена',
    'guarantee.installation.description': 'Профессиональная установка включена в стоимость.',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Есть вопросы? Напишите нам',
    'contact.form.name': 'Ваше имя',
    'contact.form.phone': 'Номер телефона',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Ответы на популярные вопросы',
    
    // Order Modal
    'order.title': 'Оформить заказ',
    'order.fullName': 'Полное имя',
    'order.phone': 'Номер телефона',
    'order.address': 'Адрес',
    'order.serviceType': 'Тип услуги',
    'order.message': 'Дополнительное сообщение',
    'order.submit': 'Отправить заказ',
    'order.success': 'Ваш заказ принят!',
    'order.select.gate': 'Ворота',
    'order.select.door': 'Дверь',
    'order.select.fence': 'Забор',
    'order.select.railing': 'Перила',
    'order.select.restoration': 'Реставрация',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.description': 'Изготовление, покраска и установка всех металлоизделий',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
