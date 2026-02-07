import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";

interface VideoSectionProps {
  videoSrc: string;
  language: "uz" | "en" | "ru";
}

const VideoSection = ({ videoSrc, language }: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    videoRef.current.play();
    setIsPlaying(true);
    videoRef.current.controls = true; // native controls yoqiladi
  };

  return (
    <section className="py-20 md:py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/10" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title={
            language === "uz"
              ? "Ish jarayonimiz"
              : language === "en"
                ? "Our Working Process"
                : "Наш рабочий процесс"
          }
          subtitle={
            language === "uz"
              ? "Videoda ish jarayonini to‘liq ko‘ring"
              : language === "en"
                ? "Watch the full working process"
                : "Посмотрите полный процесс работы"
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* VIDEO */}
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Overlay + Play */}
          {!isPlaying && (
            <>
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlay}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90
                             flex items-center justify-center shadow-glow"
                >
                  <svg
                    className="w-10 h-10 text-primary-foreground ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
