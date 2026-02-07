 import { motion } from 'framer-motion';
 import { Layout } from '@/components/Layout';
 import { useLanguage, Language } from '@/contexts/LanguageContext';
 import { SectionTitle } from '@/components/SectionTitle';
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from '@/components/ui/accordion';
 import { faqData } from '@/data/faq';
 
 const FAQ = () => {
   const { t, language } = useLanguage();
 
   return (
     <Layout>
       <div className="pt-24 md:pt-32 pb-20">
         <div className="container mx-auto px-4">
           <SectionTitle
             title={t('faq.title')}
             subtitle={t('faq.subtitle')}
           />
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="max-w-3xl mx-auto mt-12"
           >
             <Accordion type="single" collapsible className="space-y-4">
               {faqData.map((item, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.4, delay: index * 0.1 }}
                 >
                   <AccordionItem
                     value={`item-${index}`}
                     className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                   >
                     <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                       {item.question[language as Language]}
                     </AccordionTrigger>
                     <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                       {item.answer[language as Language]}
                     </AccordionContent>
                   </AccordionItem>
                 </motion.div>
               ))}
             </Accordion>
           </motion.div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default FAQ;