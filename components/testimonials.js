import Star from "./icons/Star";

export default function Testimonials() {
  return (
    <div className="hidden bg-white py-10 lg:py-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h3 className="h3 font-bold text-center mb-8">
          Ce que disent nos clients
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Depoimento 1 */}
          <div className="bg-gray-50 p-6 rounded-md shadow-sm flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-1">
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z" />
              </svg>
            </div>
            <p className="text-gray-700 italic">
              "Ce menuisier a réalisé deux travaux pour moi. À chaque fois, le
              travail a été effectué correctement et de manière soignée."
            </p>
            <p className="text-[--primary-color] font-semibold">
              - Jan Courtois
            </p>
          </div>
          {/* Depoimento 2 */}
          <div className="bg-gray-50 p-6 rounded-md shadow-sm flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-1">
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
            </div>
            <p className="text-gray-700 italic">
              "Ils réalisent des charpentes, des toitures et du bardage — mon
              expérience avec eux a toujours été positive."
            </p>
            <p className="text-[--primary-color] font-semibold">
              - Yves Sijmus
            </p>
          </div>
          {/* Depoimento 3 */}
          <div className="bg-gray-50 p-6 rounded-md shadow-sm flex flex-col gap-y-3 ">
            <div className="flex flex-row gap-x-1">
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
            </div>
            <p className="text-gray-700 italic">
              "Bien situé dans la zone industrielle"
            </p>
            <p className="text-[--primary-color] font-semibold">
              - Robert Leonard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
