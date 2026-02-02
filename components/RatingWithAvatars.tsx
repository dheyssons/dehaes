// components/RatingWithAvatars.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";

type Avatar =
  | { kind: "image"; src: string; alt?: string }
  | {
      kind: "letter";
      letter: string;
      bg?: string; // ex: "#111827" ou "rgb(15,23,42)"
      fg?: string; // ex: "#ffffff"
      alt?: string;
    };

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.5c.2-.4.84-.4 1.04 0l2.2 4.46c.08.17.24.29.43.31l4.92.72c.44.06.62.6.3.9l-3.56 3.47c-.14.13-.2.32-.17.51l.84 4.9c.08.44-.39.78-.78.58l-4.4-2.31a.53.53 0 0 0-.52 0l-4.4 2.31c-.39.2-.86-.14-.78-.58l.84-4.9a.6.6 0 0 0-.17-.51L3.67 9.9c-.32-.3-.14-.84.3-.9l4.92-.72c.19-.02.35-.14.43-.31l2.2-4.46Z"
      />
    </svg>
  );
}

function AvatarCircle({ a, i }: { a: Avatar; i: number }) {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/40">
      {a.kind === "image" ? (
        <Image
          src={a.src}
          alt={a.alt ?? `Avatar ${i + 1}`}
          fill
          className="object-cover"
          sizes="48px"
          priority={i === 0}
        />
      ) : (
        <div
          className="grid h-full w-full place-items-center text-base font-semibold"
          aria-label={a.alt ?? `Avatar ${i + 1}`}
          style={{
            backgroundColor: a.bg ?? "#111827",
            color: a.fg ?? "#ffffff",
          }}
        >
          {String(a.letter ?? "?")
            .slice(0, 1)
            .toUpperCase()}
        </div>
      )}
    </div>
  );
}

export default function RatingWithAvatars({
  avatars,
  rating = 4.2,
  outOf = 5,
  className = "",
  maxAvatars = 3,
}: {
  avatars: Avatar[];
  rating?: number;
  outOf?: number;
  className?: string;
  maxAvatars?: number;
}) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const t = useTranslations("hero");

  return (
    <a
      href="https://share.google/q2pKXJz6D1XaongxB"
      target="_blank"
      rel="noopener"
    >
      <div className={`flex items-center gap-4 ${className}`}>
        {/* Avatares sobrepostos */}
        <div className="flex -space-x-3">
          {avatars.slice(0, maxAvatars).map((a, i) => (
            <AvatarCircle key={i} a={a} i={i} />
          ))}
        </div>

        {/* Texto + estrelas */}
        <div className="flex flex-col">
          <div className="body text-white">
            <span className="body text-white">{t("rating")}</span>
          </div>

          <div className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: outOf }).map((_, idx) => {
              const starIndex = idx + 1;
              const filled = starIndex <= fullStars;
              const half = !filled && hasHalf && starIndex === fullStars + 1;

              if (half) {
                return (
                  <span key={idx} className="relative inline-block h-3 w-3">
                    <span className="absolute inset-0">
                      <Star filled={false} />
                    </span>
                    <span
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: "50%" }}
                    >
                      <Star filled />
                    </span>
                  </span>
                );
              }

              return <Star key={idx} filled={filled} />;
            })}
          </div>
        </div>
      </div>
    </a>
  );
}
