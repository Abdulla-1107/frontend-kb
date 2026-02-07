 import { motion } from 'framer-motion';
 import { Header } from './Header';
 import { Footer } from './Footer';
 
 interface LayoutProps {
   children: React.ReactNode;
 }
 
 export const Layout = ({ children }: LayoutProps) => {
   return (
     <div className="min-h-screen flex flex-col bg-background">
       <Header />
       <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="flex-1"
       >
         {children}
       </motion.main>
       <Footer />
     </div>
   );
 };