import Marquee from "react-fast-marquee";

import Image from "next/image";
import Velux from "@/public/images/brands/velux.webp";
import Bosscover from "@/public/images/brands/bosscover.webp";
import Resitrix from "@/public/images/brands/resitrix.webp";
import Iko from "@/public/images/brands/iko.webp";
import Derbigum from "@/public/images/brands/derbigum.webp";

export default function Brands() {
  return (
    <Marquee className="my-4 w-full">
      <Image className="w-28 mx-10 md:mx-24" src={Velux} alt="velux" />
      <Image className="w-28 mx-10 md:mx-24" src={Bosscover} alt="bosscover" />
      <Image className="w-28 mx-10 md:mx-24" src={Resitrix} alt="resitrix" />
      <Image className="w-28 mx-10 md:mx-24" src={Iko} alt="iko" />
      <Image className="w-28 mx-10 md:mx-24" src={Derbigum} alt="derbigum" />
    </Marquee>
  );
}
