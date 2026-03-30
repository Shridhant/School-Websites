import { Link, Outlet } from "react-router-dom";

export default function RinchoAcademyLayout() {
  return (
    <div className="min-h-screen bg-white text-[#152033]">
      <div className="mx-auto min-h-screen overflow-hidden bg-white">
        <header className="border-b border-[#edf1f6] px-8 py-7 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link to="/rincho-academy" className="font-serif text-[26px] tracking-[-0.04em] text-[#101827]">
              Rincho Academy
            </Link>

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
              <Link to="/rincho-academy/admission" className="transition hover:text-[#101827]">
                Admission
              </Link>
            </nav>

            <Link
              to="/rincho-academy/admission"
              className="border-b border-[#101827] pb-1 text-[12px] font-semibold text-[#101827]"
            >
              Apply Now
            </Link>
          </div>
        </header>

        <Outlet />

        <footer className="border-t border-white/10 bg-[#11233d] px-8 py-10 text-white lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[560px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50">
                Rincho Academy School Sovima
              </p>
              <h2 className="mt-4 font-serif text-[40px] leading-[1.02] tracking-[-0.04em]">
                A private unaided school in Nagaland building steady foundations since 2009.
              </h2>
            </div>

            <div className="space-y-2 text-sm text-white/74">
              <p>Medziphema Block, Dimapur District, Nagaland</p>
              <p>Community-focused learning, recognition, and student growth</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
