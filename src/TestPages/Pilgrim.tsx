import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  PageLoader,
  Navbar,
  HeroSection,
  StatsTicker,
  AcademicsSection,
  AchievementsSection,
  PathwaysSection,
  CampusLifeSection,
  MissionSection,
  TestimonialsSection,
  AdmissionsSection,
  NewsletterSection,
  Footer,
  ScrollProgress,
  PilgrimThemeStyles,
} from "../components/pilgrim";

export default function Pilgrim() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <PilgrimThemeStyles />

      <AnimatePresence>
        {!pageReady && (
          <div className="ps-root">
            <PageLoader onDone={() => setPageReady(true)} />
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className="ps-root"
        animate={{ opacity: pageReady ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <ScrollProgress />
        <Navbar />
        <main>
          <HeroSection />
          <StatsTicker />
          <AcademicsSection />
          <AchievementsSection />
          <PathwaysSection />
          <CampusLifeSection />
          <MissionSection />
          <TestimonialsSection />
          <AdmissionsSection />
          <NewsletterSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
