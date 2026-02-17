import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Wrench } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { OrderModal } from "@/components/OrderModal";
import { projects } from "@/data/projects";
import { useProduct } from "@/hooks/useProduct";

const ProjectDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const { getProduct } = useProduct();
  const { data, isLoading } = getProduct;

  // 🔹 API dan kelgan products → ProjectCard formatiga moslash (Projects.tsx dagidek)
  const apiProjects = (data ?? []).map((p: any) => ({
    id: p.id,
    title: {
      uz: p.name_uz,
      ru: p.name_ru,
      en: p.name_en,
    },
    description: {
      uz: p.description_uz,
      ru: p.description_ru,
      en: p.description_en,
    },
    images: [p.image],
    category: "gate",
    year: new Date(p.createdAt).getFullYear(),
    // 🔹 API loyihalari uchun qo'shimcha maydonlarni default qiymat bilan qo'shish (xatolik oldini olish uchun)
    materials: [], // Default bo'sh array
    location: undefined, // Agar kerak bo'lsa, default qiymat
  }));

  // 🔹 Static + API ni birlashtirish
  const allProjects = [...projects, ...apiProjects];

  // 🔹 ID bo'yicha loyihani topish (id string, p.id number bo'lishi mumkin, shuning uchun String bilan solishtirish)
  const project = allProjects.find((p) => String(p.id) === id);

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-32 text-center">Loading...</div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="pt-24 md:pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Project not found
            </h1>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button asChild variant="ghost">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("projects.title")}
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={project.images[0]}
                  alt={project.title[language as Language]}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary text-primary-foreground capitalize">
                    {t(`projects.filter.${project.category}s`)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {project.title[language as Language]}
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {project.description[language as Language]}
              </p>

              {/* Meta info */}
              <div className="space-y-4 mb-8">
                {project.location && (
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                      {t("project.location")}:
                    </span>
                    <span className="text-muted-foreground">
                      {project.location[language as Language]}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 text-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">{t("project.year")}:</span>
                  <span className="text-muted-foreground">{project.year}</span>
                </div>

                {project.materials?.length > 0 && (
                  <div className="flex items-start gap-3 text-foreground">
                    <Wrench className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">
                        {t("project.materials")}:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.materials.map((material, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button
                size="lg"
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-gradient-forge hover:opacity-90 text-primary-foreground font-semibold"
              >
                {t("project.order")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        defaultService={project.category}
      />
    </Layout>
  );
};

export default ProjectDetail;
