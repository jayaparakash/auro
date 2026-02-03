export default function PillsTabs({ tabs, active, onChange }) {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map((t) => {
          const on = t === active;
          return (
            <button
              key={t}
              onClick={() => onChange(t)}
              className={`btn rounded-xl normal-case px-6 ${
                on
                  ? "bg-auro-blue text-white border-none"
                  : "bg-white/60 border border-black/5 text-auro-ink"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>
    );
  }
  