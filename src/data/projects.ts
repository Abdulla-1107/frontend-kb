 export interface Project {
   id: string;
   title: { uz: string; en: string; ru: string };
   description: { uz: string; en: string; ru: string };
   category: 'gate' | 'door' | 'fence';
   images: string[];
   materials: string[];
   year: number;
   location?: { uz: string; en: string; ru: string };
 }
 
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

 export const projects: Project[] = [
   {
     id: '1',
     title: {
       uz: 'Premium avtomatik darvoza',
       en: 'Premium Automatic Gate',
       ru: 'Премиум автоматические ворота',
     },
     description: {
       uz: 'Zamonaviy avtomatik darvoza, lazer kesish texnologiyasi bilan tayyorlangan. Pultdan boshqarish tizimi bilan jihozlangan.',
       en: 'Modern automatic gate, manufactured using laser cutting technology. Equipped with remote control system.',
       ru: 'Современные автоматические ворота, изготовленные с использованием технологии лазерной резки. Оснащены системой дистанционного управления.',
     },
     category: 'gate',
    images: [project1],
     materials: ['Steel', 'Aluminum', 'Glass'],
     year: 2024,
     location: { uz: 'Toshkent', en: 'Tashkent', ru: 'Ташкент' },
   },
   {
     id: '2',
     title: {
       uz: 'Klassik naqshli darvoza',
       en: 'Classic Ornate Gate',
       ru: 'Классические узорные ворота',
     },
     description: {
       uz: 'An\'anaviy o\'zbek naqshlari bilan bezatilgan darvoza. Qo\'lda ishlangan detallar.',
       en: 'Gate decorated with traditional Uzbek patterns. Handcrafted details.',
       ru: 'Ворота, украшенные традиционными узбекскими узорами. Детали ручной работы.',
     },
     category: 'gate',
    images: [project2],
     materials: ['Wrought Iron', 'Bronze'],
     year: 2024,
     location: { uz: 'Samarqand', en: 'Samarkand', ru: 'Самарканд' },
   },
   {
     id: '3',
     title: {
       uz: 'Himoya eshigi',
       en: 'Security Door',
       ru: 'Защитная дверь',
     },
     description: {
       uz: 'Yuqori xavfsizlik darajasiga ega temir eshik. Ko\'p qatlamli qulf tizimi.',
       en: 'High security iron door. Multi-layer lock system.',
       ru: 'Железная дверь с высоким уровнем безопасности. Многослойная система замков.',
     },
     category: 'door',
    images: [project3],
     materials: ['Steel', 'Titanium Alloy'],
     year: 2023,
     location: { uz: 'Toshkent', en: 'Tashkent', ru: 'Ташкент' },
   },
   {
     id: '4',
     title: {
       uz: 'Dekorativ panjara',
       en: 'Decorative Fence',
       ru: 'Декоративный забор',
     },
     description: {
       uz: 'Bog\' uchun chiroyli dekorativ panjara. Naqshli dizayn.',
       en: 'Beautiful decorative fence for garden. Patterned design.',
       ru: 'Красивый декоративный забор для сада. Узорчатый дизайн.',
     },
     category: 'fence',
    images: [project4],
     materials: ['Wrought Iron', 'Brass'],
     year: 2024,
     location: { uz: 'Buxoro', en: 'Bukhara', ru: 'Бухара' },
   },
   {
     id: '5',
     title: {
       uz: 'Zamonaviy slyuding darvoza',
       en: 'Modern Sliding Gate',
       ru: 'Современные откатные ворота',
     },
     description: {
       uz: 'Minimalist dizayndagi avtomatik slyuding darvoza.',
       en: 'Automatic sliding gate with minimalist design.',
       ru: 'Автоматические откатные ворота в минималистичном дизайне.',
     },
     category: 'gate',
    images: [project5],
     materials: ['Stainless Steel', 'Aluminum'],
     year: 2024,
     location: { uz: 'Toshkent', en: 'Tashkent', ru: 'Ташкент' },
   },
   {
     id: '6',
     title: {
       uz: 'Villa uchun eshik',
       en: 'Villa Entrance Door',
       ru: 'Входная дверь для виллы',
     },
     description: {
       uz: 'Hashamatli villa kirish eshigi. Premium materiallar.',
       en: 'Luxurious villa entrance door. Premium materials.',
       ru: 'Роскошная входная дверь для виллы. Премиальные материалы.',
     },
     category: 'door',
    images: [project6],
     materials: ['Steel', 'Oak Wood', 'Brass'],
     year: 2023,
     location: { uz: 'Toshkent', en: 'Tashkent', ru: 'Ташкент' },
   },
 ];