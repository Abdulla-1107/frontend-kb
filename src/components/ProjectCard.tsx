 import { motion } from 'framer-motion';
 import { ArrowRight } from 'lucide-react';
 import { Link } from 'react-router-dom';
 import { Project } from '@/data/projects';
 import { useLanguage, Language } from '@/contexts/LanguageContext';
 
 interface ProjectCardProps {
   project: Project;
   index?: number;
 }
 
 export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
   const { language, t } = useLanguage();
 
   return (
     <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: '-50px' }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
     >
       <Link
         to={`/projects/${project.id}`}
         className="group block relative overflow-hidden rounded-xl bg-card border border-border hover-lift"
       >
         <div className="aspect-[4/3] overflow-hidden">
           <motion.img
             src={project.images[0]}
             alt={project.title[language as Language]}
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
         </div>
         
         <div className="p-5">
           <div className="flex items-center gap-2 mb-2">
             <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary capitalize">
               {t(`projects.filter.${project.category}s`)}
             </span>
             <span className="text-xs text-muted-foreground">{project.year}</span>
           </div>
           
           <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
             {project.title[language as Language]}
           </h3>
           
           <p className="text-sm text-muted-foreground line-clamp-2">
             {project.description[language as Language]}
           </p>
           
           <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium">
             <span>{t('projects.viewDetails')}</span>
             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
           </div>
         </div>
       </Link>
     </motion.div>
   );
 };