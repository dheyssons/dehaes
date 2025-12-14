"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla lg:w-[50%]" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="rounded-md"
            src="images/home1.webp"
          ></img>
        </div>
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="rounded-md"
            src="images/home2.webp"
          ></img>
        </div>
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="rounded-md"
            src="images/home4.webp"
          ></img>
        </div>
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="rounded-md"
            src="images/home5.webp"
          ></img>
        </div>
      </div>
    </div>
  );
}
