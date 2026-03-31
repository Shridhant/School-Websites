import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

interface NumberTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 40, stiffness: 90 });
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion) {
      ref.current.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      return;
    }
    ref.current.textContent = `${prefix}0${suffix}`;
  }, [prefersReducedMotion, prefix, suffix, value]);

  useEffect(() => {
    if (inView && !prefersReducedMotion) {
      motionValue.set(value);
    }
  }, [inView, motionValue, prefersReducedMotion, value]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
      }
    });

    return unsubscribe;
  }, [prefersReducedMotion, prefix, spring, suffix]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}
