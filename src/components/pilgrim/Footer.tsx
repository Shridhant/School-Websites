import { PS_LOGO, PS_COLORS } from "./constants";

const FOOTER_SECTIONS = [
  {
    title: "Explore",
    links: ["Academics", "Results", "Campus Life", "Admissions"],
  },
  {
    title: "School",
    links: ["Philosophy", "Faculty", "Achievements", "Prospectus"],
  },
  {
    title: "Connect",
    links: ["Parents", "Alumni", "Community Bulletin", "Contact"],
  },
];

const SOCIAL_LINKS = [
  { icon: "Fb", label: "Facebook" },
  { icon: "Ig", label: "Instagram" },
  { icon: "Li", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer style={{ background: PS_COLORS.navy }} className="px-6 pb-8 pt-18">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b pb-12 md:grid-cols-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src={PS_LOGO} alt="Pilgrim" className="h-10 w-10 rounded-full" />
              <div>
                <div className="font-display text-xl font-semibold" style={{ color: PS_COLORS.cream }}>
                  Pilgrim School
                </div>
                <div className="text-xs uppercase tracking-[0.28em]" style={{ color: "rgba(246,241,231,0.56)" }}>
                  Established 1987
                </div>
              </div>
            </div>
            <p className="mb-6 max-w-md text-sm leading-7" style={{ color: "rgba(246,241,231,0.72)" }}>
              A disciplined school identity, now expressed through a more editorial and institutional
              design language built for Pilgrim rather than copied from a generic education template.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold transition-all"
                  style={{
                    borderColor: "rgba(201,164,92,0.25)",
                    color: PS_COLORS.cream,
                  }}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.32em]" style={{ color: "rgba(201,164,92,0.84)" }}>
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="ps-link-underline"
                      style={{ color: "rgba(246,241,231,0.72)" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row"
          style={{ color: "rgba(246,241,231,0.52)" }}
        >
          <div>© 2026 Pilgrim School. All rights reserved.</div>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <a href="#" className="ps-link-underline">
              Privacy Policy
            </a>
            <a href="#" className="ps-link-underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
