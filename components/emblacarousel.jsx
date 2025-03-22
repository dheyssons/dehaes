'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla max-w-[36rem]" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img alt='' className='max-w-[36rem] rounded-md hidden md:flex' src='images/home1.webp'></img>
        </div>
        <div className="embla__slide">
          <img alt='' className='max-w-[36rem] rounded-md hidden md:flex' src='images/home2.webp'></img>
        </div>
        <div className="embla__slide">
          <img alt='' className='max-w-[36rem] rounded-md hidden md:flex' src='images/home3.webp'></img>
        </div>
        <div className="embla__slide">
          <img alt='' className='max-w-[36rem] rounded-md hidden md:flex' src='images/home4.webp'></img>
        </div>
        <div className="embla__slide">
          <img alt='' className='max-w-[36rem] rounded-md hidden md:flex' src='images/home5.webp'></img>
        </div>
      </div>
    </div>
  )
}