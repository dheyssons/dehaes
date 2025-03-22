'use client'

// IMAGES
import Image from 'next/image';
import AboutImage from '@/public/images/about.webp'

import Velux from '@/public/images/brands/velux.webp'
import Resitrix from '@/public/images/brands/resitrix.webp'
import Iko from '@/public/images/brands/iko.webp'
import Bosscover from '@/public/images/brands/bosscover.webp'

// ICONS
import { LuArrowUpRight } from "react-icons/lu";

// MOTION
import { motion } from 'framer-motion';
import { transition1 } from '@/public/transitions/transition1';
import { upward } from '@/public/variants/upward';
import { item } from '@/public/variants/item';
import { transition1_s } from '@/public/transitions/transition1_s';
import { lefttoright } from '@/public/variants/lefttoright';

// COMPONENTS
import Carousel from '@/components/carousel';
import CarouselMobile from '@/components/carouselmobile';
import  {EmblaCarousel}  from '@/components/emblacarousel';

// OTHERS IMPORTS
import JsonLd from '@/components/jsonld';
import ContactForm from '@/components/contactform';
import Whyus from '@/components/whyus';
import Testimonials from '@/components/testimonials';

import { useState, useEffect, useRef } from 'react';

const images = [
  '/images/brands/velux.webp',
  '/images/brands/resitrix.webp',
  '/images/brands/iko.webp',
  '/images/brands/bosscover.webp'
];

export default function Home() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [ExtendedText, setExtendedText] = useState(false)

  useEffect( () => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);

    if(window.matchMedia("(min-width: 1024px)").matches) {
      setExtendedText(true)
    } else {
      setExtendedText(false)
    }
  }, [])

  function SetExtendedText() {
    if(ExtendedText) {
      setExtendedText(false)
    } else {
      setExtendedText(true)
    }
  }

  const items = [
    <div key="slide1" className='flex flex-row gap-x-10'>
      {/* daktimmer */}
      <div  className='card-services'>
        <img className='image-services' alt='bardage' src="images/services/charpenter.webp"></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
          {/* title */}
            <div className='overflow-hidden max-w-max h-56'>
              <h4 className='h4'>Daktimmers</h4>
              <p className='p small'>Daktimmers vormen de ruggengraat van een stevig en goed gebouwd dak. Met meer dan een eeuw ervaring werken wij met hoogwaardige houtsoorten en verfijnde technieken om duurzaamheid, veiligheid en een onberispelijke afwerking te garanderen, zowel bij nieuwbouw als renovaties.</p>
            </div>
        </div>
        <a className='btn uppercase' href='/services/daktimmer'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
      {/* groendaken */}
      <div className='card-services'>
        <img className='image-services' alt='groendaken' src='images/services/groendaken/image1.webp'></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
          {/* title */}
          <div className='overflow-hidden max-w-max h-56'>
            <h4 className='h4'>Groendaken</h4>
            <p className='p small'>Groendaken zijn een innovatieve en duurzame oplossing voor zowel residentiële als commerciële gebouwen. Ze verbeteren de energie-efficiëntie, verlengen de levensduur van het dak en dragen bij aan een beter milieu door waterretentie en luchtzuivering.</p>
          </div>  
      </div>
          <a className='btn uppercase' href='/services/groendaken'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
      {/* gevelbekleding */}
      <div className='card-services'>
        <img className='image-services' alt='gevelbekleding' src='images/services/gevelbekleding/image1.webp'></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
          {/* title */}       
            <div className='overflow-hidden max-w-max h-56'>
              <h4 className='h4'>Gevelbekleding</h4>
              <p className='p small'>Gevelbekleding zorgt voor de esthetische uitstraling en bescherming van uw gebouw. Wij bieden een breed scala aan gevelbekledingdiensten, van installatie tot renovatie, met materialen die zowel visueel aantrekkelijk als functioneel zijn.</p>
            </div> 
        </div>
          <a className='btn uppercase' href='/services/gevelbekleding'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
    </div> ,
    <div key="slide2" className='flex flex-row gap-x-10'>
      {/* plattedaken */}
      <div className='card-services'>
        <img className='image-services' alt='plateforme' src='images/services/plateforme.webp'></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
          {/* title */}
            <div className='overflow-hidden max-w-max h-56'>
              <h4 className='h4'>Platte daken</h4>
              <p className='p small'>Platte daken bieden efficiëntie en functionaliteit voor verschillende projecten, en zijn bovendien zeer effectief in waterdichting en isolatie. Met op maat gemaakte oplossingen garanderen we de duurzaamheid en prestaties van uw dak, waarbij we de structuur beschermen tegen klimaatschommelingen en problemen met de afwatering.</p>   
            </div>
        </div>
        <a className='btn uppercase' href='/services/plattedaken'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
      {/* renovatie */}
      <div className='card-services'>
      <img className='image-services' alt='renovatie' src='images/services/renovation.webp'></img>
      <div className='flex flex-col gap-y-3 justify-around h-60'>
          <div className='overflow-hidden max-w-max h-56'>
            <h4 className='h4'>Renovatie</h4>
            <p className='p small'>Renovatie is een cruciale stap om uw gebouwen en ruimtes te verbeteren, moderniseren of restaureren. Of het nu gaat om het repareren van schade, het moderniseren van een structuur of het verhogen van de energie-efficiëntie, onze renovatiediensten zijn ontworpen om aan uw behoeften te voldoen, terwijl we uw verwachtingen respecteren.</p>      
          </div>
      </div>
            <a className='btn uppercase' href='/services/renovatie'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
      {/* isolatie */}
      <div className='card-services'>
        <img className='image-services' alt='isolatie' src='images/services/isolatie.webp'></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
            <div className='overflow-hidden max-w-max h-56'>
              <h4 className='h4'>Isolatie</h4>
              <p className='p small'>Wij bieden thermische isolatie-oplossingen voor daken die zorgen voor meer comfort en een aanzienlijke vermindering van energiekosten. Onze diensten worden volledig gepersonaliseerd om te voldoen aan de specifieke behoeften van schuine of platte daken.</p>
            </div>
        </div>
        <a className='btn' href='/services/isolatie'>MEER INFORMATIE <LuArrowUpRight className='mx-1' /> </a>
      </div>
    </div>
  ];

  const itemsMobile = [
    <div key="slide1" className='flex flex-row gap-x-10'>
      {/* Daktimmers */}
      <div  className='card-services'>
        <img className='image-services' alt='bardage' src="images/services/charpenter.webp"></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
          {/* title */}
            <div className='overflow-hidden max-w-max lg:h-56'>
              <h4 className='h4'>Daktimmers</h4>
              <p className='p small'>Daktimmers vormen de ruggengraat van een stevig en goed gebouwd dak. Met meer dan een eeuw ervaring werken wij met hoogwaardige houtsoorten en verfijnde technieken om duurzaamheid, veiligheid en een onberispelijke afwerking te garanderen, zowel bij nieuwbouw als renovaties.</p>
            </div>
        </div>
        <a className='btn uppercase' href='/services/daktimmer'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
    </div>,
    <div key="slide2" className='flex flex-row gap-x-10'>2
      {/* Plateforme */}
      <div className='card-services'>
        <img className='image-services' alt='plateforme' src='images/services/plateforme.webp'></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
          {/* title */}
            <div className='overflow-hidden max-w-max lg:h-56'>
              <h4 className='h4'>Platte daken</h4>
              <p className='p small'>Platte daken bieden efficiëntie en functionaliteit voor verschillende projecten, en zijn bovendien zeer effectief in waterdichting en isolatie. Met op maat gemaakte oplossingen garanderen we de duurzaamheid en prestaties van uw dak, waarbij we de structuur beschermen tegen klimaatschommelingen en problemen met de afwatering.</p>   
            </div>
        </div>
        <a className='btn uppercase' href='/services/plattedaken'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
    </div>,
    <div key="slide3" className='flex flex-row gap-x-10'>
      {/* Groendaken */}
      <div className='card-services'>
        <img className='image-services' alt='groendaken' src='images/services/groendaken/image1.webp'></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
          {/* title */}
          <div className='overflow-hidden max-w-max lg:h-56'>
            <h4 className='h4'>Groendaken</h4>
            <p className='p small'>Groendaken zijn een innovatieve en duurzame oplossing voor zowel residentiële als commerciële gebouwen. Ze verbeteren de energie-efficiëntie, verlengen de levensduur van het dak en dragen bij aan een beter milieu door waterretentie en luchtzuivering.</p>
          </div>  
      </div>
          <a className='btn uppercase' href='/services/groendaken'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
    </div>,
    <div key="slide4" className='flex flex-row gap-x-10'>
      {/* Gevelbekleding */}
      <div className='card-services'>
        <img className='image-services' alt='gevelbekleding' src='images/services/gevelbekleding/image1.webp'></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
          {/* title */}       
            <div className='overflow-hidden max-w-max lg:h-56'>
              <h4 className='h4'>Gevelbekleding</h4>
              <p className='p small'>Gevelbekleding zorgt voor de esthetische uitstraling en bescherming van uw gebouw. Wij bieden een breed scala aan gevelbekledingdiensten, van installatie tot renovatie, met materialen die zowel visueel aantrekkelijk als functioneel zijn.</p>
            </div> 
        </div>
          <a className='btn uppercase' href='/services/gevelbekleding'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
    </div>,
    <div key="slide5" className='flex flex-row gap-x-10'>
      {/* isolatie */}
      <div className='card-services'>
        <img className='image-services' alt='isolatie' src='images/services/isolatie.webp'></img>
        {/* text */}
        <div className='flex flex-col gap-y-3 justify-around h-60'>
            <div className='overflow-hidden max-w-max lg:h-56'>
              <h4 className='h4'>Isolatie</h4>
              <p className='p small'>Wij bieden thermische isolatie-oplossingen voor daken die zorgen voor meer comfort en een aanzienlijke vermindering van energiekosten. Onze diensten worden volledig gepersonaliseerd om te voldoen aan de specifieke behoeften van schuine of platte daken.</p>
            </div>
        </div>
        <a className='btn' href='/services/isolatie'>MEER INFORMATIE <LuArrowUpRight className='mx-1' /> </a>
      </div>
    </div>,
    <div key="slide6" className='flex flex-row gap-x-10'>
      {/* renovatie */}
      <div className='card-services'>
      <img className='image-services' alt='renovatie' src='images/services/renovation.webp'></img>
      <div className='flex flex-col gap-y-3 justify-around h-60'>
          <div className='overflow-hidden max-w-max lg:h-56'>
            <h4 className='h4'>Renovatie</h4>
            <p className='p small'>Renovatie is een cruciale stap om uw gebouwen en ruimtes te verbeteren, moderniseren of restaureren. Of het nu gaat om het repareren van schade, het moderniseren van een structuur of het verhogen van de energie-efficiëntie, onze renovatiediensten zijn ontworpen om aan uw behoeften te voldoen, terwijl we uw verwachtingen respecteren.</p>      
          </div>
      </div>
            <a className='btn uppercase' href='/services/renovatie'>meer informatie <LuArrowUpRight className='mx-1' /> </a>
      </div>
    </div>,
  ];

  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "schrijnwerkerij de haes",
    "telephone": "015 55 19 35",
    "email": "info@schrijnwerkerij-dehaes.be",
    "address": {
      "@type": "PostalAddress",
      "postalCode": "2806"
    }
  };

  return (
    <main className="section flex flex-col gap-y-10 lg:gap-y-14">
      {/* HERO and ABOUT */}
      <div className='bg-gray-50'>
        {/* HERO */}
        <section className="banner flex flex-col w-full h-screen items-start relative">
          {/* title */}
          <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className="mt-44 lg:mt-52 mx-12 lg:mx-0 flex flex-col">
            <div className='flex flex-col gap-y-20 lg:gap-y-20 lg:ml-20'>
                {/* TITLE */}
                <div>
                  <motion.h1 variants={item} className="h1 drop-shadow-2xl text-white lg:text-[#ffffff] !leading-10 pb-5">Schrijnwerkerij De Haes</motion.h1>
                  <motion.p variants={item} className="text-[1.3rem] drop-shadow-2xl text-[#ffffffed] lg:text-[#ffffff] leading-6">Traditie en kwaliteit die generaties overstijgen.</motion.p>
                  <JsonLd data={jsonLdData}/>
                </div>
                {/* CALL TO ACTION  */}
                <div className='flex flex-col gap-y-2'>
                  <a className="btn max-w-max uppercase" href="#contactus">Contact opnemen</a>
                </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT US */}
        <section className='container mx-auto flex flex-col items-center gap-y-10 lg:gap-y-28 py-20'>
          {/* about */}
          <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-y-20'>
            {/* texts */}
            <div className='flex flex-col gap-y-16 items-center'>
              <div className='flex flex-col gap-y-8 items-center '>
                <div className='flex flex-col gap-y-2 items-center lg:items-start'>
                  <div>
                    <motion.h3
                    variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1}  
                    className='h2'>Over <span className='text-[--primary-color] font-bold'>De Haes</span></motion.h3>
                  </div>
                </div>
                  <p className='p md:large w-[20rem] md:w-[20rem] lg:w-[32rem] leading-8'>Schrijnwerkerij De Haes is een familiebedrijf dat kan terugblikken op een eeuw vakmanschap. Met Rudy De Haes, de huidige zaakvoerder, is het bedrijf al aan de vierde generatie schrijnwerkers toe. De rode draad door deze familiekroniek is een grote passie voor 'de stiel', een degelijke vakkennis en de wil om klanten een optimale kwaliteit en service te bieden, zoals alleen een familiebedrijf dat kan.</p>
                  <p className='p md:large w-[20rem] md:w-[20rem] lg:w-[32rem] leading-8'>Zaakvoerder Rudy volgt het technische aspect van ieder project volledig op. De werknemers zijn hooggekwalificeerd en hebben elk hun eigen specialiteit. Het resultaat? Een dak dat tot in de puntjes afgewerkt is.</p>
              </div>
              <a className="btn max-w-max lg:self-start uppercase" href="/about">Meer weten</a>
            </div>
            {/* CAROUSEL */}
            <EmblaCarousel>
            </EmblaCarousel>
          </div>

          {/* About Image section */}
          <div className='flex flex-col lg:flex-row gap-x-12'>
            {/* image */}
            <Image className='rounded-md hidden lg:block' src={AboutImage} alt=""/>
            {/* text */}
            <div className='flex flex-col gap-y-10'>
              <h2 className='h3'>Uw dak,<span className='text-[--primary-color]'> onze toewijding!</span></h2>

              <div>
                <div className={`flex flex-col gap-y-6 max-w-sm lg:max-w-lg ${ExtendedText ? "" : "!max-h-72 overflow-hidden"}`}>
                  <p className='p small'>Uw dak verdient het beste op het gebied van kwaliteit, <strong>isolatie</strong> en <strong>gafwerking</strong>. Ons gespecialiseerde team werkt met toewijding om uw projecten tot leven te brengen, waarbij we functionaliteit en esthetiek combineren voor het perfecte resultaat. Wat ons onderscheidt? Onze <strong>passie</strong> voor het vak en onze inzet om uw verwachtingen te overtreffen, ongeacht de complexiteit van de opdracht.</p>
                  <p className='p small'>Wij zijn actief in Brussel, Waals-Brabant en omliggende regio’s en bieden complete dakoplossingen, van klein onderhoud tot grootschalige renovaties. Met uitgebreide ervaring in de sector garanderen wij hoogwaardige service, met oog voor detail en vakmanschap, zowel voor platte als hellende daken.</p>
                  <p className='p small'>Onze expertise, van generatie op generatie doorgegeven, stelt ons in staat om alle aspecten van uw dak aan te pakken, van constructie tot de installatie van afwerkingen en accessoires. We werken met verschillende soorten <strong> dakbedekking, zoals dakpannen, leisteen, zink en aluminium</strong>, en bieden daarnaast isolatie- en dakraaminstallaties.</p>
                  <p className='p small'>Wat uw project ook is, wij leveren een op maat gemaakte service die perfect aansluit bij uw wensen. Vertrouw op ons team voor een duurzaam, veilig en perfect afgewerkt dak!</p>
                </div>

                <button className='lg:hidden text-lg !text-[--primary-color]' onClick={() => SetExtendedText()}> 
                  {ExtendedText ? "lees minder" : "lees verder..."}
                </button>
              </div>

              <a className='btn max-w-max uppercase' href='#contactus'>Contact opnemen</a>
            </div>

          </div>

          {/* bottom text */}
          <div className='flex flex-col gap-y-6 max-w-sm lg:max-w-screen-2xl'>
            <h3 className='h4'>Specialisten in <span className='text-[--primary-color]'>Daktimmers</span></h3>
            <p className='p small !max-w-screen-lg'>Een goed ontworpen <strong>daktimmer</strong> is de ruggengraat van een stevig en duurzaam dak. Het zorgt voor een gelijkmatige gewichtsverdeling en beschermt het gebouw tegen alle weersomstandigheden. Wij werken uitsluitend met hoogwaardige, behandelde houtsoorten die bestand zijn tegen vocht en ongedierte, waardoor een langdurige stabiliteit wordt gegarandeerd. Onze expertise omvat zowel traditionele dakconstructies als moderne spanten, altijd met oog voor precisie en maatwerk.</p>
            <p className='p small !max-w-screen-lg'>Naast een solide structuur is een goed ontwerp essentieel voor optimale ventilatie, thermische isolatie en efficiënte regenwaterafvoer. Door nauwkeurige plaatsing en de juiste materiaalkeuze voorkomen we toekomstige problemen zoals lekkage of verzakking. Of het nu gaat om nieuwbouw of renovatie, wij leveren daktimmers op maat die functionaliteit, duurzaamheid en vakmanschap combineren.</p>
          </div>
        </section>
      </div>

       {/* BRANDs and certifications */}
       <section className='container mx-auto flex flex-col items-center max-w-screen-lg gap-y-6'>
          <h3 className='h4 text-center'>Schrijnwerkerij De Haes, <span className='text-[--primary-color]'>deskundigen</span> in dakwerken, gevelbekleding, groendaken en isolatie</h3>
          <p className='p small text-center !max-w-screen-lg'>Wij werken met de beste merken op de markt, van kwaliteitsleveranciers met alle nodige certificeringen:<i> Resitrix, Velux, Iko enertherm, </i>enz.</p> 
          
          <div className='hidden lg:flex flex-row gap-x-20'>
            <Image className='w-36' src={Velux} alt=''/>
            <Image className='w-36' src={Iko} alt=''/>
            <Image className='w-36' src={Resitrix} alt=''/>
            <Image className='w-36 object-scale-down' src={Bosscover} alt=''/>
          </div>

          {/* IMAGE SLIDER */}
          <div className=" lg:hidden relative overflow-hidden w-full py-4">
              <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-50" />
              <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-50" />
              
              <motion.div
                  ref={carouselRef}
                  className="flex space-x-6 cursor-grab"
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  initial={{ x: 0 }}
                  animate={{ x: [0, -width] }}
                  transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
              >
                  {images.concat(images).map((src, index) => (
                  <div key={index} className="flex flex-row items-center min-w-[144px]">
                      <Image
                      src={src}
                      alt={`Slide ${index}`}
                      width={300}
                      height={200}
                      className="rounded-lg object-scale-down px-4"
                      />
                  </div>
                  ))}
              </motion.div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section id='services' className='container mx-auto flex flex-col gap-y-2 py-4'>
          <div className='overflow-hidden max-w-max mx-20'>
            <div className='flex flex-row items-center'>
              <div className='accent'></div>
              <h5 className='h5 !text-[--primary-color]'>Diensten</h5>
            </div>
            <motion.h2 variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h2'>Belangrijkste diensten</motion.h2>
          </div>
        
          <Carousel>
            {items}
          </Carousel>

          <CarouselMobile>
            {itemsMobile}
          </CarouselMobile>  
        </section>

        <Whyus />

        <Testimonials />

        <ContactForm />
      </main>
  )
}
