import { Marquee } from "./Marquee";
import { INSTITUTIONAL_RIBBON } from "./constants";

export function StatsTicker() {
  return (
    <section className="ps-marquee-shell overflow-hidden px-6 py-5">
      <Marquee items={INSTITUTIONAL_RIBBON} />
    </section>
  );
}
