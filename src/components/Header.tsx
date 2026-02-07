 import { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
 import { motion, AnimatePresence } from 'framer-motion';
 import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
 import { useLanguage, Language } from '@/contexts/LanguageContext';
 import { useTheme } from '@/contexts/ThemeContext';
 import { Button } from '@/components/ui/button';
 import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
 } from '@/components/ui/dropdown-menu';
 
 const languages: { code: Language; label: string }[] = [
   { code: 'uz', label: "O'zbekcha" },
   { code: 'en', label: 'English' },
   { code: 'ru', label: 'Русский' },
 ];
 
 export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { language, setLanguage, t } = useLanguage();
   const { theme, toggleTheme } = useTheme();
   const location = useLocation();
 
   const navLinks = [
     { path: '/', label: t('nav.home') },
     { path: '/services', label: t('nav.services') },
     { path: '/projects', label: t('nav.projects') },
     { path: '/about', label: t('nav.about') },
     { path: '/contact', label: t('nav.contact') },
     { path: '/faq', label: t('nav.faq') },
   ];
 
   const isActive = (path: string) => location.pathname === path;
 
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <Link to="/" className="flex items-center gap-2">
             <div className="w-10 h-10 bg-gradient-forge rounded-lg flex items-center justify-center">
               <span className="font-display text-xl font-bold text-primary-foreground">B</span>
             </div>
             <span className="font-display text-xl font-bold text-foreground">BOBUR</span>
           </Link>
 
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-1">
             {navLinks.map((link) => (
               <Link
                 key={link.path}
                 to={link.path}
                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                   isActive(link.path)
                     ? 'bg-primary text-primary-foreground'
                     : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                 }`}
               >
                 {link.label}
               </Link>
             ))}
           </nav>
 
           {/* Actions */}
           <div className="flex items-center gap-2">
             {/* Language Switcher */}
             <DropdownMenu>
               <DropdownMenuTrigger asChild>
                 <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                   <Globe className="h-5 w-5" />
                 </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                 {languages.map((lang) => (
                   <DropdownMenuItem
                     key={lang.code}
                     onClick={() => setLanguage(lang.code)}
                     className={language === lang.code ? 'bg-muted' : ''}
                   >
                     {lang.label}
                   </DropdownMenuItem>
                 ))}
               </DropdownMenuContent>
             </DropdownMenu>
 
             {/* Theme Toggle */}
             <Button
               variant="ghost"
               size="icon"
               onClick={toggleTheme}
               className="text-muted-foreground hover:text-foreground"
             >
               <motion.div
                 initial={false}
                 animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                 transition={{ duration: 0.3 }}
               >
                 {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
               </motion.div>
             </Button>
 
             {/* Mobile Menu Toggle */}
             <Button
               variant="ghost"
               size="icon"
               className="md:hidden text-muted-foreground hover:text-foreground"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
               {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
             </Button>
           </div>
         </div>
       </div>
 
       {/* Mobile Navigation */}
       <AnimatePresence>
         {isMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: 'auto' }}
             exit={{ opacity: 0, height: 0 }}
             className="md:hidden bg-background border-b border-border overflow-hidden"
           >
             <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
               {navLinks.map((link) => (
                 <Link
                   key={link.path}
                   to={link.path}
                   onClick={() => setIsMenuOpen(false)}
                   className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                     isActive(link.path)
                       ? 'bg-primary text-primary-foreground'
                       : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                   }`}
                 >
                   {link.label}
                 </Link>
               ))}
             </nav>
           </motion.div>
         )}
       </AnimatePresence>
     </header>
   );
 };