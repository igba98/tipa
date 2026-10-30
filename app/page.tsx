import Image from "next/image";
import { EmailButton } from "@/components/email-button";
import { EMAIL } from "@/lib/site";

export default function Home() {
  return (
    <main>
      {/* White over brand blue, like a switch. The seam runs between the two lines: blue on white above, white on blue below. */}
      <section className="relative h-svh min-h-[560px] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[var(--seam)] bg-paper" />
        <div className="absolute inset-x-0 bottom-0 top-[var(--seam)] bg-blue" />

        <h1 className="display absolute inset-x-[var(--m)] top-[var(--seam)] -translate-y-1/2 text-center uppercase text-blue">
          <span className="mask-line"><span>We’re currently</span></span>
          <span className="mask-line text-paper"><span>under construction</span></span>
        </h1>

        <header className="relative z-10 flex items-start justify-between gap-4 px-[var(--m)] pt-5 md:pt-7">
          <Image src="/brand/tipa-logo.png" alt="TIPA, Tanzania Intellectual Property Association" width={362} height={144} loading="eager" className="h-auto w-[132px] md:w-[180px]" />
          <EmailButton />
        </header>

        <p className="hero-after absolute inset-x-[var(--m)] bottom-8 max-w-[46ch] text-[length:var(--step-lead)] text-paper md:bottom-10 md:mx-auto md:text-center">
          The Tanzania Intellectual Property Association website is on its way. Until then, write to us at{" "}
          <a href={`mailto:${EMAIL}`} className="font-extrabold underline underline-offset-4">{EMAIL}</a>.
        </p>
      </section>
    </main>
  );
}
