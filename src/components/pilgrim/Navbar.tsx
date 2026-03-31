import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NAV_LINKS, PS_LOGO, PS_COLORS } from "./constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
      <motion.div
        className="mx-auto max-w-5xl rounded-[28px] border px-4 py-3 sm:px-5"
        style={{
          background: scrolled ? "rgba(246,241,231,0.92)" : "rgba(246,241,231,0.8)",
          backdropFilter: "blur(20px)",
          borderColor: PS_COLORS.border,
          boxShadow: scrolled ? "0 16px 44px rgba(15,28,46,0.12)" : "0 8px 22px rgba(15,28,46,0.06)",
        }}
        animate={{ y: scrolled ? 0 : 2 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
          <a href="/pilgrim" className="flex items-center gap-3">
            <img src={PS_LOGO} alt="Pilgrim" className="h-10 w-10 rounded-full object-cover" />
            <div className="min-w-0">
              <div
                className="font-display text-[1.05rem] font-semibold leading-none"
                style={{ color: PS_COLORS.navy }}
              >
                Pilgrim School
              </div>
              <div
                className="mt-1 text-[10px] uppercase tracking-[0.28em]"
                style={{ color: PS_COLORS.moss }}
              >
                Dimapur
              </div>
            </div>
          </a>

          <div className="hidden items-center justify-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="ps-link-underline text-sm"
                style={{
                  color:
                    location.pathname.startsWith("/pilgrim/events") && link.href === "/pilgrim/events"
                      ? PS_COLORS.oxblood
                      : PS_COLORS.navy,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3">
            <a
              href="/pilgrim#admissions"
              className="hidden lg:inline-flex rounded-full border px-5 py-2 text-sm font-medium transition-colors"
              style={{
                borderColor: "rgba(15,28,46,0.12)",
                color: PS_COLORS.navy,
                background: "rgba(255,255,255,0.28)",
              }}
            >
              Apply Now
            </a>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border lg:hidden"
              style={{ borderColor: PS_COLORS.border, color: PS_COLORS.navy }}
              onClick={() => setMobileOpen((current) => !current)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-5xl rounded-[28px] border p-6 lg:hidden"
            style={{
              background: "rgba(246,241,231,0.96)",
              backdropFilter: "blur(20px)",
              borderColor: PS_COLORS.border,
              boxShadow: "0 18px 44px rgba(15,28,46,0.12)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-base font-medium"
                style={{ color: PS_COLORS.navy }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/pilgrim#admissions"
              className="mt-3 inline-flex ps-button-primary"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
