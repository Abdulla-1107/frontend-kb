import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/Video";
import introVideo from "@/assets/video_uyx2.mp4";
import { useProduct } from "@/hooks/useProduct";

type FilterCategory = "all" | "gate" | "door" | "fence";

const Projects = () => {
  const { t, language } = useLanguage();
  const { getProduct } = useProduct();
  const { data, isLoading } = getProduct;

  const [filter, setFilter] = useState<FilterCategory>("all");

  // 🔹 API dan kelgan products → ProjectCard formatiga moslash
  // ✅ Keyin
  const apiProjects = Array.isArray(data)
    ? data.map((p: any) => ({
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
        category: "gate" as const,
        year: new Date(p.createdAt).getFullYear(),
      }))
    : [];

  console.log(apiProjects);

  // 🔹 Static + API ni birlashtirish
  const allProjects = [...projects, ...apiProjects];

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: t("projects.filter.all") },
    { key: "gate", label: t("projects.filter.gates") },
    { key: "door", label: t("projects.filter.doors") },
    { key: "fence", label: t("projects.filter.fences") },
  ];

  // 🔹 Filter ishlashi
  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-32 text-center">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
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
                variant={filter === f.key ? "default" : "outline"}
                onClick={() => setFilter(f.key)}
                className={
                  filter === f.key
                    ? "bg-gradient-forge text-primary-foreground"
                    : ""
                }
              >
                {f.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Video */}
          <VideoSection videoSrc={introVideo} language={language} />

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
