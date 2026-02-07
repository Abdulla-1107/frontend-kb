 export interface FAQItem {
   question: { uz: string; en: string; ru: string };
   answer: { uz: string; en: string; ru: string };
 }
 
 export const faqData: FAQItem[] = [
   {
     question: {
       uz: 'Narxlar qanday belgilanadi?',
       en: 'How are prices determined?',
       ru: 'Как определяются цены?',
     },
     answer: {
       uz: 'Narxlar loyiha hajmi, material turi va murakkablik darajasiga qarab belgilanadi. Bepul konsultatsiya uchun biz bilan bog\'laning.',
       en: 'Prices are determined based on project size, material type, and complexity level. Contact us for a free consultation.',
       ru: 'Цены определяются в зависимости от размера проекта, типа материала и уровня сложности. Свяжитесь с нами для бесплатной консультации.',
     },
   },
   {
     question: {
       uz: 'Ishlab chiqarish qancha vaqt oladi?',
       en: 'How long does production take?',
       ru: 'Сколько времени занимает производство?',
     },
     answer: {
       uz: 'Oddiy loyihalar 7-14 kun, murakkab loyihalar 3-4 hafta vaqt oladi. Aniq muddatlar loyiha batafsil ko\'rib chiqilgandan so\'ng belgilanadi.',
       en: 'Simple projects take 7-14 days, complex projects take 3-4 weeks. Exact timelines are set after detailed project review.',
       ru: 'Простые проекты занимают 7-14 дней, сложные проекты — 3-4 недели. Точные сроки устанавливаются после детального рассмотрения проекта.',
     },
   },
   {
     question: {
       uz: 'Qanday materiallar ishlatiladi?',
       en: 'What materials are used?',
       ru: 'Какие материалы используются?',
     },
     answer: {
       uz: 'Biz yuqori sifatli po\'lat, alyuminiy, bronza va boshqa metallarni ishlatamiz. Barcha materiallar sertifikatlangan va uzoq muddatli.',
       en: 'We use high-quality steel, aluminum, bronze, and other metals. All materials are certified and long-lasting.',
       ru: 'Мы используем высококачественную сталь, алюминий, бронзу и другие металлы. Все материалы сертифицированы и долговечны.',
     },
   },
   {
     question: {
       uz: 'O\'rnatish xizmati bormi?',
       en: 'Is installation service available?',
       ru: 'Есть ли услуга установки?',
     },
     answer: {
       uz: 'Ha, biz to\'liq o\'rnatish xizmatini taqdim etamiz. Professional jamoa tomonidan sifatli o\'rnatish kafolatlanadi.',
       en: 'Yes, we provide full installation service. Quality installation by a professional team is guaranteed.',
       ru: 'Да, мы предоставляем полную услугу установки. Качественная установка профессиональной командой гарантирована.',
     },
   },
   {
     question: {
       uz: 'Kafolat muddati qancha?',
       en: 'What is the warranty period?',
       ru: 'Какой гарантийный срок?',
     },
     answer: {
       uz: 'Barcha mahsulotlarimizga 5 yillik kafolat beramiz. Avtomatik tizimlar uchun alohida kafolat shartlari mavjud.',
       en: 'We provide a 5-year warranty on all our products. Separate warranty terms apply for automatic systems.',
       ru: 'Мы предоставляем 5-летнюю гарантию на всю нашу продукцию. Для автоматических систем действуют отдельные гарантийные условия.',
     },
   },
   {
     question: {
       uz: 'Individual dizayn buyurtma qilish mumkinmi?',
       en: 'Can I order a custom design?',
       ru: 'Можно ли заказать индивидуальный дизайн?',
     },
     answer: {
       uz: 'Albatta! Biz har bir mijoz uchun individual dizayn ishlab chiqamiz. Sizning g\'oyalaringiz asosida noyob mahsulot yaratamiz.',
       en: 'Absolutely! We develop individual designs for each client. We create unique products based on your ideas.',
       ru: 'Конечно! Мы разрабатываем индивидуальный дизайн для каждого клиента. Создаём уникальные изделия на основе ваших идей.',
     },
   },
 ];