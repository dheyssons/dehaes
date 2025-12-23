"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const images = [
  "/images/brands/velux.webp",
  "/images/brands/resitrix.webp",
  "/images/brands/iko.webp",
  "/images/brands/bosscover.webp",
];

export default function BrandsCarouselMobile() {
  const carouselRef = useRef | (null > null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className="lg:hidden relative overflow-hidden w-full py-4">
      <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-50" />
      <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-50" />

      <motion.div
        ref={carouselRef}
        className="flex space-x-6 cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 0 }}
        animate={{ x: [0, -width] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {images.concat(images).map((src, index) => (
          <div key={index} className="flex items-center min-w-[144px]">
            <Image
              src={src}
              alt=""
              width={300}
              height={200}
              className="object-scale-down px-4"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
