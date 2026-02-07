 import { motion } from 'framer-motion';
 import { LucideIcon } from 'lucide-react';
 
 interface ServiceCardProps {
   icon: LucideIcon;
   title: string;
   description: string;
   image?: string;
   index?: number;
   onClick?: () => void;
 }
 
 export const ServiceCard = ({
   icon: Icon,
   title,
   description,
   image,
   index = 0,
   onClick,
 }: ServiceCardProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: '-50px' }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       onClick={onClick}
       className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 hover-lift cursor-pointer"
     >
       {image && (
         <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
           <img src={image} alt="" className="w-full h-full object-cover" />
         </div>
       )}
       
       <div className="relative z-10">
         <div className="w-14 h-14 rounded-xl bg-gradient-forge flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
           <Icon className="w-7 h-7 text-primary-foreground" />
         </div>
         
         <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
           {title}
         </h3>
         
         <p className="text-muted-foreground leading-relaxed">
           {description}
         </p>
       </div>
       
       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-forge transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
     </motion.div>
   );
 };