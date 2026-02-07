 import { useState } from 'react';
 import { motion } from 'framer-motion';
 import { Layout } from '@/components/Layout';
 import { useLanguage } from '@/contexts/LanguageContext';
 import { SectionTitle } from '@/components/SectionTitle';
 import { ProjectCard } from '@/components/ProjectCard';
 import { projects } from '@/data/projects';
 import { Button } from '@/components/ui/button';
 
 type FilterCategory = 'all' | 'gate' | 'door' | 'fence';
 
 const Projects = () => {
   const { t } = useLanguage();
   const [filter, setFilter] = useState<FilterCategory>('all');
 
   const filters: { key: FilterCategory; label: string }[] = [
     { key: 'all', label: t('projects.filter.all') },
     { key: 'gate', label: t('projects.filter.gates') },
     { key: 'door', label: t('projects.filter.doors') },
     { key: 'fence', label: t('projects.filter.fences') },
   ];
 
   const filteredProjects = filter === 'all'
     ? projects
     : projects.filter((p) => p.category === filter);
 
   return (
     <Layout>
       <div className="pt-24 md:pt-32 pb-20">
         <div className="container mx-auto px-4">
           <SectionTitle
             title={t('projects.title')}
             subtitle={t('projects.subtitle')}
           />
 
           {/* Filters */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-wrap justify-center gap-2 mb-12"
           >
             {filters.map((f) => (
               <Button
                 key={f.key}
                 variant={filter === f.key ? 'default' : 'outline'}
                 onClick={() => setFilter(f.key)}
                 className={filter === f.key ? 'bg-gradient-forge text-primary-foreground' : ''}
               >
                 {f.label}
               </Button>
             ))}
           </motion.div>
 
           {/* Projects Grid */}
           <motion.div
             layout
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
           >
             {filteredProjects.map((project, index) => (
               <ProjectCard key={project.id} project={project} index={index} />
             ))}
           </motion.div>
 
           {filteredProjects.length === 0 && (
             <div className="text-center py-20 text-muted-foreground">
               No projects found
             </div>
           )}
         </div>
       </div>
     </Layout>
   );
 };
 
 export default Projects;