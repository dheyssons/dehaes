"use client";

import { ImWhatsapp, ImMail2, ImFacebook } from "react-icons/im";

import config from "@/utils/config";

export default function Footer() {
  return (
    <footer>
      <div className="container w-[80%] mx-auto flex flex-col gap-y-10 py-10">
        <div className="flex flex-row items-center justify-between">
          {/* icon & text  */}
          <div className="flex flex-col items-center md:items-start gap-y-2">
            <img src={config.companyIconPath} className="w-36" alt="" />
            <p className={`p w-[8rem] md:w-full text-center`}>
              {config.companySlogan}
            </p>
          </div>

          {/* social media  */}
          <div className="flex flex-col md:flex-col justify-between">
            <div className=" flex flex-col gap-y-6">
              <nav>
                <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6">
                  <li className="flex flex-row items-center">
                    <a
                      className="flex social_link btn"
                      href={`mailto:${config.emailAddress}`}
                      target="_blank"
                    >
                      <ImMail2 className="mr-2" />
                      Email
                    </a>
                  </li>
                  <li className="flex flex-row items-center">
                    <a
                      className="social_link btn"
                      href={config.facebookProfile}
                      target="_blank"
                    >
                      <ImFacebook className="mr-2" />
                      Facebook
                    </a>
                  </li>
                  <li className="flex flex-row items-center">
                    <a
                      className="social_link btn"
                      href={`https://api.whatsapp.com/send?phone=${config.whatsappNumber}`}
                      target="_blank"
                    >
                      <ImWhatsapp className="mr-2" />
                      Whatsapp
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex gap-10 md:gap-36">
          {/* menu  */}
          <div className="flex flex-col items-start gap-y-3">
            <p className="body after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[--primary-color] after:block">
              Menu
            </p>
            <a href="/" className="p hover:text-[#000000a1] transition-all">
              Home
            </a>
            <a
              href="/about"
              className="p hover:text-[#000000a1] transition-all"
            >
              Wie zijn we
            </a>
            <a
              href="/#services"
              className="p hover:text-[#000000a1] transition-all"
            >
              Onze Diensten
            </a>
            <a
              href="/portfolio"
              className="p hover:text-[#000000a1] transition-all"
            >
              Projecten
            </a>
            <a
              href="/contact"
              className="p hover:text-[#000000a1] transition-all"
            >
              Contact
            </a>
          </div>
          {/* services  */}
          <div className="flex flex-col items-start gap-y-3">
            <p
              className={`p !opacity-100 !text-[#000000] font-[600] leading-[1] after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[--primary-color] after:block`}
            >
              Diensten
            </p>
            <a
              href="/services/groendaken"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              Groendaken
            </a>
            <a
              href="/services/gaktimmers"
              className="p hover:text-[#000000a1] transition-all"
            >
              Daktimmers
            </a>
            <a
              href="/services/gevelbekleding"
              className="p hover:text-[#000000a1] transition-all"
            >
              Gevelbekleding
            </a>
            <a
              href="/services/plattedaken"
              className="p hover:text-[#000000a1] transition-all"
            >
              Platte daken
            </a>
            <a
              href="/services/renovatie"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              Renovatie
            </a>
            <a
              href="/services/isolatie"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              Isolatie
            </a>
          </div>
          {/* policy  */}
          <div className="flex flex-col items-start gap-y-3">
            <p
              className={`p !opacity-100 !text-[#000000] font-[600] leading-[1] after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[--primary-color] after:block`}
            >
              Beleid
            </p>
            <a
              href="/dataprotection"
              className={`p hover:text-[#000000a1] transition-all`}
            >
              Gegevensbescherming
            </a>
            <a
              href="/generalconditions"
              className="p hover:text-[#000000a1] transition-all"
            >
              Algemene Voorwaarden
            </a>
            <a
              href="/legalnotices"
              className="p hover:text-[#000000a1] transition-all"
            >
              Juridische Mededelingen
            </a>
            <a
              href="/privacypolicy"
              className="p hover:text-[#000000a1] transition-all"
            >
              Privacybeleid
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <p className={`p self-center text-center mx-[1rem]`}>
            © 2025 - {config.companyName}
          </p>
        </div>
      </div>

      <div className="bg-[#151515]">
        <p className="w-[80%] mx-auto body !text-center text-white py-4">
          Ontwikkeld door
          <a
            className="text-white hover:opacity-70 underline underline-offset-2 mx-1"
            href="https://hdeveloper.vercel.app/fr"
            target="_blank"
          >
            HDeveloper
          </a>
        </p>
      </div>
    </footer>
  );
}
