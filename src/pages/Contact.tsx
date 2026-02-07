import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast.success(t('order.success'));
    setFormData({ name: '', phone: '', message: '' });
  };

  const addressText = language === 'uz' 
    ? "Mirzo Ulug'bek tumani, Alisher Obod mahallasi, Yangi Tong ko'chasi, 17-uy"
    : language === 'en'
    ? "Mirzo Ulug'bek district, Alisher Obod neighborhood, Yangi Tong street, 17"
    : "Мирзо-Улугбекский район, махалля Алишер Обод, улица Янги Тонг, 17";

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+998 94 648 79 45',
      href: 'tel:+998946487945',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: addressText,
      href: undefined,
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: '@bobur_metalworks',
      href: 'https://t.me/bobur_metalworks',
    },
  ];

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="+998 94 648 79 45"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background resize-none focus:ring-2 focus:ring-primary/20 transition-all"
                      rows={5}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-forge hover:opacity-90 text-primary-foreground font-semibold transition-all hover:shadow-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          {t('contact.form.submit')}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-forge flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-base font-medium text-foreground leading-relaxed">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4 pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-[#0088cc] hover:bg-[#0088cc]/90 transition-all hover:scale-[1.02]"
                >
                  <a href="https://t.me/bobur_metalworks" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Telegram
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 transition-all hover:scale-[1.02]"
                >
                  <a href="https://wa.me/998946487945" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </motion.div>

              {/* Call to action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl"
              >
                <p className="text-foreground font-medium mb-3">
                  {language === 'uz' 
                    ? 'Hoziroq qo\'ng\'iroq qiling!' 
                    : language === 'en' 
                    ? 'Call us now!' 
                    : 'Позвоните сейчас!'}
                </p>
                <a 
                  href="tel:+998946487945"
                  className="inline-flex items-center gap-2 text-2xl font-display font-bold text-primary hover:opacity-80 transition-opacity"
                >
                  <Phone className="h-6 w-6" />
                  +998 94 648 79 45
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
