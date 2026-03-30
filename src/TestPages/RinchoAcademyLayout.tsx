import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

export default function RinchoAcademyLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#152033]">
      <div className="mx-auto min-h-screen overflow-hidden bg-white flex flex-col">
        <header className="sticky top-0 z-50 border-b border-[#edf1f6] bg-white px-6 py-5 lg:px-10 lg:py-7">
          <div className="flex items-center justify-between">
            <Link to="/rincho-academy" onClick={closeMobileMenu} className="font-serif text-[24px] lg:text-[26px] tracking-[-0.04em] text-[#101827] relative z-20">
              Rincho Academy
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 text-[12px] font-medium text-[#556274] lg:flex">
              <Link to="/rincho-academy" className="transition hover:text-[#101827]">
                Home
              </Link>
              <Link to="/rincho-academy/gallery" className="transition hover:text-[#101827]">
                Gallery
              </Link>
              <Link to="/rincho-academy/blog" className="transition hover:text-[#101827]">
                Blog
              </Link>
              <Link to="/rincho-academy/events" className="transition hover:text-[#101827]">
                Events
              </Link>
              <Link to="/rincho-academy/admission" className="transition hover:text-[#101827]">
                Admission
              </Link>
            </nav>

            {/* Desktop Apply Button */}
            <Link
              to="/rincho-academy/admission"
              className="hidden border-b border-[#101827] pb-1 text-[12px] font-semibold text-[#101827] lg:inline-block hover:text-[#2a3c5a] hover:border-[#2a3c5a] transition-colors"
            >
              Apply Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="flex flex-col justify-center items-center gap-[6px] w-8 h-8 lg:hidden focus:outline-none relative z-20"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-6 h-[2px] bg-[#101827] block origin-center rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-6 h-[2px] bg-[#101827] block rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-6 h-[2px] bg-[#101827] block origin-center rounded-full"
              />
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden overflow-hidden bg-white w-full absolute left-0 top-full border-b border-[#edf1f6] shadow-sm transform-gpu"
              >
                <nav className="flex flex-col px-6 py-6 pb-8 gap-5 text-[15px] font-medium text-[#556274]">
                  <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                    <Link to="/rincho-academy" onClick={closeMobileMenu} className="block transition hover:text-[#101827]">
                      Home
                    </Link>
                  </motion.div>
                  <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
                    <Link to="/rincho-academy/gallery" onClick={closeMobileMenu} className="block transition hover:text-[#101827]">
                      Gallery
                    </Link>
                  </motion.div>
                  <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <Link to="/rincho-academy/blog" onClick={closeMobileMenu} className="block transition hover:text-[#101827]">
                      Blog
                    </Link>
                  </motion.div>
                  <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.22 }}>
                    <Link to="/rincho-academy/events" onClick={closeMobileMenu} className="block transition hover:text-[#101827]">
                      Events
                    </Link>
                  </motion.div>
                  <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25 }}>
                    <Link to="/rincho-academy/admission" onClick={closeMobileMenu} className="block transition hover:text-[#101827]">
                      Admission
                    </Link>
                  </motion.div>
                  <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <Link
                      to="/rincho-academy/admission"
                      onClick={closeMobileMenu}
                      className="mt-2 inline-block border-b border-[#101827] pb-1 text-[14px] font-semibold text-[#101827]"
                    >
                      Apply Now
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="flex-1 w-full relative z-0">
          <Outlet />
        </main>

        <footer className="border-t border-white/10 bg-[#11233d] px-8 py-10 text-white lg:px-10 relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[560px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50">
                Rincho Academy School Sovima
              </p>
              <h2 className="mt-4 font-serif text-[32px] sm:text-[40px] leading-[1.02] tracking-[-0.04em]">
                A private unaided school in Nagaland building steady foundations since 2009.
              </h2>
            </div>

            <div className="space-y-2 text-[13px] sm:text-sm text-white/74">
              <p>Medziphema Block, Dimapur District, Nagaland</p>
              <p>Community-focused learning, recognition, and student growth</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
