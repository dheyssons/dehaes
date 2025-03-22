'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';

const CarouselMobile = ({ children }) => {
  const [index, setIndex] = useState(0);
  const total = children.length;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="lg:hidden relative w-full max-w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // Esse key precisa ser único para cada item
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center"
        >
          {children[index]}
        </motion.div>
      </AnimatePresence>
 
      <button
      title='left button'
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[--primary-color] bg-gradient-to-r from-[#073c68] to-transparent to-70% text-white p-2 rounded-full shadow-lg hover:bg-[#2255a6]"
      >
        <BiChevronLeft size={24} />
      </button>

      <button
      title='right button'
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[--primary-color] bg-gradient-to-r from-[#073c68] to-transparent to-70% text-white p-2 rounded-full shadow-lg hover:bg-[#2255a6]"
      >
        <BiChevronRight size={24} />
      </button>
    </div>
  );
};

export default CarouselMobile;
