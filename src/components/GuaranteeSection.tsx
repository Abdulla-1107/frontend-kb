import { motion } from 'framer-motion';
import { Users, Shield, ShieldCheck, Paintbrush, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionTitle } from '@/components/SectionTitle';

export const GuaranteeSection = () => {
  const { t } = useLanguage();

  const guarantees = [
    {
      icon: Users,
      title: t('guarantee.individual.title'),
      description: t('guarantee.individual.description'),
    },
    {
      icon: Shield,
      title: t('guarantee.materials.title'),
      description: t('guarantee.materials.description'),
    },
    {
      icon: ShieldCheck,
      title: t('guarantee.warranty.title'),
      description: t('guarantee.warranty.description'),
      highlight: true,
    },
    {
      icon: Paintbrush,
      title: t('guarantee.painting.title'),
      description: t('guarantee.painting.description'),
    },
    {
      icon: Wrench,
      title: t('guarantee.installation.title'),
      description: t('guarantee.installation.description'),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('guarantee.title')}
          subtitle={t('guarantee.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                item.highlight 
                  ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 shadow-lg shadow-primary/10' 
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    ⭐ KAFOLAT
                  </span>
                </div>
              )}
              
              <motion.div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  item.highlight 
                    ? 'bg-gradient-forge' 
                    : 'bg-muted'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <item.icon className={`w-7 h-7 ${
                  item.highlight ? 'text-primary-foreground' : 'text-primary'
                }`} />
              </motion.div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
