import FadeIn from "../animations/FadeIn.jsx";

export default function SectionHeader({ kicker, title, subtitle, center = true }) {
  return (
    <FadeIn className={center ? "text-center" : ""}>
      {kicker ? (
        <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-warning font-semibold">
          {kicker}
        </p>
      ) : null}

      <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-base-content">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </FadeIn>
  );
}
