import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Clock, DoorClosed, Fence, Phone } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { SectionTitle } from '@/components/SectionTitle';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { OrderModal } from '@/components/OrderModal';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { projects } from '@/data/projects';
import heroImage from '@/assets/hero-metalwork.jpg';
import gateImage from '@/assets/service-gate.jpg';
import doorImage from '@/assets/service-door.jpg';
import fenceImage from '@/assets/service-fence.jpg';

// Gate icon component
const GateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="8" height="16" rx="1" />
    <rect x="14" y="4" width="8" height="16" rx="1" />
    <line x1="6" y1="8" x2="6" y2="12" />
    <line x1="18" y1="8" x2="18" y2="12" />
  </svg>
);

const Index = () => {
  const { t, language } = useLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const services = [
    {
      icon: GateIcon,
      title: t('services.gates.title'),
      description: t('services.gates.description'),
      image: gateImage,
    },
    {
      icon: DoorClosed,
      title: t('services.doors.title'),
      description: t('services.doors.description'),
      image: doorImage,
    },
    {
      icon: Fence,
      title: t('services.fences.title'),
      description: t('services.fences.description'),
      image: fenceImage,
    },
  ];

  const stats = [
    { value: 15, suffix: '+', label: t('stats.years') },
    { value: 500, suffix: '+', label: t('stats.projects') },
    { value: 450, suffix: '+', label: t('stats.clients') },
  ];

  const features = [
    { icon: Shield, title: t('about.quality.title') },
    { icon: Award, title: t('about.experience.title') },
    { icon: Clock, title: t('about.guarantee.title') },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Metalwork craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                {t('hero.title')}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-gradient-forge hover:opacity-90 text-primary-foreground font-semibold px-8 shadow-glow transition-all hover:scale-[1.02]"
              >
                {t('hero.cta.order')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border hover:bg-muted"
              >
                <a href="tel:+998946487945">
                  <Phone className="mr-2 h-5 w-5" />
                  +998 94 648 79 45
                </a>
              </Button>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 text-muted-foreground"
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon as any}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
                onClick={() => setIsOrderModalOpen(true)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="hover:scale-[1.02] transition-transform">
              <Link to="/services">
                {t('services.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Projects Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('projects.title')}
            subtitle={t('projects.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-gradient-forge hover:opacity-90 text-primary-foreground hover:scale-[1.02] transition-transform">
              <Link to="/projects">
                {t('projects.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {language === 'uz' 
                ? 'Bepul maslahat oling' 
                : language === 'en' 
                ? 'Get Free Consultation' 
                : 'Получите бесплатную консультацию'}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-gradient-forge hover:opacity-90 text-primary-foreground font-semibold px-8 shadow-glow hover:scale-[1.02] transition-transform"
              >
                {t('hero.cta.order')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:scale-[1.02] transition-transform"
              >
                <a href="tel:+998946487945">
                  <Phone className="mr-2 h-5 w-5" />
                  +998 94 648 79 45
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </Layout>
  );
};

export default Index;
