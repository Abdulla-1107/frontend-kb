import { useState } from "react";
import { motion } from "framer-motion";
import { DoorClosed, Fence, ArrowRight, Check, RefreshCw } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { OrderModal } from "@/components/OrderModal";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import gateImage from "@/assets/service-gate.jpg";
import doorImage from "@/assets/service-door.jpg";
import fenceImage from "@/assets/service-fence.jpg";
import introVideo from "@/assets/video_uyx3.mp4";
import VideoSection from "@/components/Video";

const GateIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="8" height="16" rx="1" />
    <rect x="14" y="4" width="8" height="16" rx="1" />
    <line x1="6" y1="8" x2="6" y2="12" />
    <line x1="18" y1="8" x2="18" y2="12" />
  </svg>
);

const RailingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="2" y1="6" x2="22" y2="6" />
    <line x1="4" y1="6" x2="4" y2="18" />
    <line x1="10" y1="6" x2="10" y2="18" />
    <line x1="16" y1="6" x2="16" y2="18" />
    <line x1="22" y1="6" x2="22" y2="18" />
    <line x1="2" y1="18" x2="22" y2="18" />
  </svg>
);

const Services = () => {
  const { t, language } = useLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<
    "gate" | "door" | "fence" | "railing" | "restoration" | undefined
  >();

  const services = [
    {
      id: "gate" as const,
      icon: GateIcon,
      title: t("services.gates.title"),
      description: t("services.gates.description"),
      image: gateImage,
      features:
        language === "uz"
          ? [
              "Avtomatik va oddiy",
              "Profil temir va shveller",
              "Bo'yash kiritilgan",
            ]
          : language === "en"
            ? [
                "Automatic and manual",
                "Profile metal and channel",
                "Remote control",
                "Painting included",
              ]
            : [
                "Автоматические и обычные",
                "Профильный металл и швеллер",
                "Пульт управления",
                "Покраска включена",
              ],
    },
    {
      id: "door" as const,
      icon: DoorClosed,
      title: t("services.doors.title"),
      description: t("services.doors.description"),
      image: doorImage,
      features:
        language === "uz"
          ? [
              "Xavfsiz qulflar",
              "Individual dizayn",
              "Rangli bo'yoq",
              "O'rnatish kiritilgan",
            ]
          : language === "en"
            ? [
                "Secure locks",
                "Custom design",
                "Color finish",
                "Installation included",
              ]
            : [
                "Надёжные замки",
                "Индивидуальный дизайн",
                "Цветная покраска",
                "Установка включена",
              ],
    },
    {
      id: "fence" as const,
      icon: Fence,
      title: t("services.fences.title"),
      description: t("services.fences.description"),
      image: fenceImage,
      features:
        language === "uz"
          ? [
              "12x12 va 14x14 kvadrat temir",
              "Dekorativ naqshlar",
              "Himoya funksiyasi",
              "Reshotkalar",
            ]
          : language === "en"
            ? [
                "12x12 and 14x14 square metal",
                "Decorative patterns",
                "Protective function",
                "Grilles",
              ]
            : [
                "Квадрат 12x12 и 14x14",
                "Декоративные узоры",
                "Защитная функция",
                "Решётки",
              ],
    },
    // {
    //   id: 'railing' as const,
    //   icon: RailingIcon,
    //   title: t('services.railings.title'),
    //   description: t('services.railings.description'),
    //   image: gateImage,
    //   features: language === 'uz'
    //     ? ['Zinapoya perillari', 'Balkon perillari', 'Zamonaviy dizayn', 'Klassik uslub']
    //     : language === 'en'
    //     ? ['Stair railings', 'Balcony railings', 'Modern design', 'Classic style']
    //     : ['Перила для лестниц', 'Перила для балконов', 'Современный дизайн', 'Классический стиль'],
    // },
    {
      id: "restoration" as const,
      icon: RefreshCw,
      title: t("services.restoration.title"),
      description: t("services.restoration.description"),
      image: doorImage,
      features:
        language === "uz"
          ? [
              "Eski buyumlarni tiklash",
              "Qayta bo'yash",
              "Yangiday ko'rinish",
              "Uyda yoki ishda",
            ]
          : language === "en"
            ? [
                "Restoring old products",
                "Repainting",
                "Like-new appearance",
                "At home or work",
              ]
            : [
                "Восстановление старых изделий",
                "Перекраска",
                "Вид как новый",
                "На дому или на работе",
              ],
    },
  ];

  const handleOrder = (
    serviceId: "gate" | "door" | "fence" | "railing" | "restoration",
  ) => {
    setSelectedService(serviceId);
    setIsOrderModalOpen(true);
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />

          <div className="space-y-20 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-forge flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleOrder(service.id)}
                    className="bg-gradient-forge hover:opacity-90 text-primary-foreground font-semibold transition-all hover:scale-[1.02] hover:shadow-glow"
                  >
                    {t("hero.cta.order")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <VideoSection videoSrc={introVideo} language={language} />
      {/* Guarantee Section */}
      <GuaranteeSection />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        defaultService={selectedService}
      />
    </Layout>
  );
};

export default Services;
