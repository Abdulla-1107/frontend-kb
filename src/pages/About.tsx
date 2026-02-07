import { motion } from 'framer-motion';
import { Shield, Award, Clock, Hammer, RefreshCw, Wrench, Paintbrush } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionTitle } from '@/components/SectionTitle';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import heroImage from '@/assets/hero-metalwork.jpg';

const About = () => {
  const { t, language } = useLanguage();

  const milestones = [
    {
      year: '2009',
      title: language === 'uz' ? 'Ish boshlandi' : language === 'en' ? 'Started Work' : 'Начало работы',
      description: language === 'uz' 
        ? 'Birinchi ustaxona ochildi' 
        : language === 'en'
        ? 'First workshop opened'
        : 'Открылась первая мастерская',
    },
    {
      year: '2014',
      title: language === 'uz' ? '100-chi loyiha' : language === 'en' ? '100th Project' : '100-й проект',
      description: language === 'uz'
        ? 'Yirik loyihalar boshlanishi'
        : language === 'en'
        ? 'Large projects started'
        : 'Начало крупных проектов',
    },
    {
      year: '2019',
      title: language === 'uz' ? 'Kengayish' : language === 'en' ? 'Expansion' : 'Расширение',
      description: language === 'uz'
        ? 'Yangi zamonaviy jihozlar'
        : language === 'en'
        ? 'New modern equipment'
        : 'Новое современное оборудование',
    },
    {
      year: '2024',
      title: language === 'uz' ? 'Bugun' : language === 'en' ? 'Today' : 'Сегодня',
      description: language === 'uz'
        ? '500+ muvaffaqiyatli loyiha'
        : language === 'en'
        ? '500+ successful projects'
        : '500+ успешных проектов',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.quality.title'),
      description: language === 'uz'
        ? 'Profil temir, 12x12 va 14x14 kvadrat temir, shveller — eng yaxshi materiallar'
        : language === 'en'
        ? 'Profile metal, 12x12 and 14x14 square metal, channel — best quality materials'
        : 'Профильный металл, квадрат 12x12 и 14x14, швеллер — лучшие материалы',
    },
    {
      icon: Award,
      title: t('about.experience.title'),
      description: language === 'uz'
        ? '15 yillik professional tajriba'
        : language === 'en'
        ? '15 years of professional experience'
        : '15 лет профессионального опыта',
    },
    {
      icon: Clock,
      title: t('about.guarantee.title'),
      description: language === 'uz'
        ? '6 oydan 1 yilgacha kafolat — nosozlik bo\'lsa bepul ta\'mirlaymiz'
        : language === 'en'
        ? '6 months to 1 year warranty — free repair if defective'
        : 'Гарантия 6 месяцев — 1 год — бесплатный ремонт при неисправности',
    },
  ];

  const services = [
    {
      icon: Wrench,
      title: t('about.fullService.title'),
      description: t('about.fullService.description'),
    },
    {
      icon: RefreshCw,
      title: t('about.restoration.title'),
      description: t('about.restoration.description'),
    },
    {
      icon: Paintbrush,
      title: language === 'uz' ? 'Bo\'yash xizmati' : language === 'en' ? 'Painting Service' : 'Услуга покраски',
      description: language === 'uz'
        ? 'Barcha mahsulotlar mijoz tanlagan rangda bo\'yaladi'
        : language === 'en'
        ? 'All products are painted in the color chosen by the client'
        : 'Все изделия окрашиваются в цвет, выбранный клиентом',
    },
  ];

  const stats = [
    { value: 15, suffix: '+', label: t('stats.years') },
    { value: 500, suffix: '+', label: t('stats.projects') },
    { value: 450, suffix: '+', label: t('stats.clients') },
  ];

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t('about.subtitle')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.story')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt="Bobur at work"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-forge flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">{t('stats.years')}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-y border-border mb-20">
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

        {/* Services Highlight Section */}
        <section className="container mx-auto px-4 mb-20">
          <SectionTitle
            title={language === 'uz' ? 'Bizning xizmatlarimiz' : language === 'en' ? 'Our Services' : 'Наши услуги'}
            subtitle={language === 'uz' ? 'To\'liq xizmat — ishlab chiqarishdan o\'rnatishgacha' : language === 'en' ? 'Full service — from production to installation' : 'Полный сервис — от производства до установки'}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-forge flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 mb-20">
          <SectionTitle
            title={language === 'uz' ? 'Bizning qadriyatlarimiz' : language === 'en' ? 'Our Values' : 'Наши ценности'}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1 }}
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="container mx-auto px-4">
          <SectionTitle
            title={language === 'uz' ? 'Bizning yo\'limiz' : language === 'en' ? 'Our Journey' : 'Наш путь'}
          />

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border"
              >
                <motion.div 
                  className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                />
                <div className="text-sm text-primary font-semibold mb-1">{milestone.year}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
