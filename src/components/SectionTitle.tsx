 import { motion } from 'framer-motion';
 
 interface SectionTitleProps {
   title: string;
   subtitle?: string;
   centered?: boolean;
 }
 
 export const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: '-100px' }}
       transition={{ duration: 0.6 }}
       className={`mb-12 ${centered ? 'text-center' : ''}`}
     >
       <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
         {title}
       </h2>
       {subtitle && (
         <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
           {subtitle}
         </p>
       )}
     </motion.div>
   );
 };