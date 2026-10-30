"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { EMAIL } from "@/lib/site";

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Enquiry from the TIPA website")}`;

export function EmailButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // The mailto link opens nothing when no email app is set up, so also copy the address and say so.
  async function onClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return; // clipboard blocked: the mailto link still does its job
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 3000);
  }

  return (
    <div className="hero-after relative">
      <a href={MAILTO} onClick={onClick}
        className="press block bg-green px-4 py-3 font-extrabold text-navy md:px-6 [@media(hover:hover)]:hover:bg-navy [@media(hover:hover)]:hover:text-paper">
        Email us
      </a>
      <p aria-live="polite" className="absolute right-0 top-full mt-2 whitespace-nowrap text-[length:var(--step-small)]">
        <AnimatePresence>
          {copied && (
            <motion.span
              className="block bg-navy px-3 py-2 text-paper"
              initial={{ opacity: 0, transform: "translateY(-4px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)", transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              Copied {EMAIL}
            </motion.span>
          )}
        </AnimatePresence>
      </p>
    </div>
  );
}
