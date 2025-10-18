"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

import { ImWhatsapp } from "react-icons/im";

//ASSURANCE
import { AiOutlineFileDone } from "react-icons/ai";
//INTEGRITY
import { BiCheckShield } from "react-icons/bi";
//EXCELLENCE
import { MdOutlineWorkspacePremium } from "react-icons/md";
//CUSTOMER SERVICE
import {
  ChevronDownIcon,
  PhoneIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/20/solid";
import { dropdown } from "@/public/variants/dropdown";
import { transition1_s } from "@/public/transitions/transition1_s";
import config from "@/utils/config";

const services = [
  {
    name: "Charpentes",
    description: "",
    href: "/services/daktimmer",
    icon: AiOutlineFileDone,
  },
  {
    name: "Toitures végétalisées",
    description: "",
    href: "/services/groendaken",
    icon: BiCheckShield,
  },
  {
    name: "Bardage",
    description: "",
    href: "/services/gevelbekleding",
    icon: MdOutlineWorkspacePremium,
  },
  {
    name: "Toits plats",
    description: "",
    href: "/services/plattedaken",
    icon: PhoneIcon,
  },
  {
    name: "Rénovation",
    description: "",
    href: "/services/renovatie",
    icon: PhoneIcon,
  },
  {
    name: "Isolation",
    description: "",
    href: "/services/isolatie",
    icon: PhoneIcon,
  },
];
const callsToAction = [
  {
    name: "Visitez notre Instagram",
    href: "https://www.instagram.com/wdtoitures",
    icon: ArrowRightStartOnRectangleIcon,
  },
  {
    name: "Demandez un devis",
    href: `https://api.whatsapp.com/send?phone=${config.whatsappNumber}`,
    icon: ImWhatsapp,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="parallax-header"
      className="z-10 fixed w-full bg-white pt-10 lg:pt-10"
    >
      <nav
        aria-label="Global"
        className="flex flex-row items-center justify-between lg:justify-around mx-8 lg:mx-0"
      >
        <motion.div
          variants={dropdown}
          initial="variantInit"
          whileInView="variantAnim"
          viewport={{ once: true }}
          transition={transition1_s}
          className="max-w-max lg:flex-1 flex flex-row items-center gap-x-4 pt-3"
        >
          {/* LOGO */}
          <motion.a variants={dropdown} href="/" className="">
            <img alt="home" src={config.companyIconPath} className="w-20" />
          </motion.a>
          {/* INFO */}
          <motion.div variants={dropdown} className="flex flex-col">
            <p className="text-[#121212] p small">{config.ivaNumber}</p>
            <p className="text-[#121212] p small lg:flex">
              {config.localAddress}
            </p>
            <div className="flex flex-row items-center gap-x-1 lg:hidden">
              <PhoneIcon className="size-4 text-[#000000]" />
              <p className="text-[#121212] p small">{config.phoneNumber}</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" color="#000000" className="size-10" />
          </button>
        </div>

        <motion.div
          variants={dropdown}
          whileInView="variantAnim"
          viewport={{ once: true }}
          transition={transition1_s}
          className="hidden lg:flex"
        >
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
            {/* PHONE NUMBER */}
            <motion.div>
              <div className="flex flex-row gap-x-2">
                <PhoneIcon className="size-7" />
                <span className="h5">{config.phoneNumber}</span>
              </div>
            </motion.div>

            <menu className="hidden lg:flex lg:gap-x-12 items-center">
              {/* ACCUEIL */}
              <li>
                <a
                  href="/"
                  title="Accueil"
                  className="text-sm font-semibold text-gray-900"
                >
                  ACCUEIL
                </a>
              </li>

              {/* ABOUT US */}
              <li className="hidden">
                <a
                  href="/about"
                  title="Qui sommes-nous"
                  className="text-sm font-semibold text-gray-900"
                >
                  QUI SOMMES-NOUS
                </a>
              </li>

              <div>
                <Popover className="relative">
                  <motion.div>
                    <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
                      NOS SERVICES
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none text-gray-400"
                      />
                    </PopoverButton>
                  </motion.div>

                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6"
                        >
                          {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                              <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-[--primary-color]" />
                            </div> */}
                          <div className="flex-auto">
                            <a
                              className="block font-semibold text-gray-900 hover:text-[--primary-color]"
                              href={item.href}
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-gray-400"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              </div>

              {/* NOTRE TRAVAIL */}
              <li>
                <a
                  title="Projecten"
                  href="/portfolio"
                  className="text-sm font-semibold text-gray-900"
                >
                  PROJETS
                </a>
              </li>

              {/* CONTACT */}
              <li>
                <a
                  title="Contact"
                  href="/contact"
                  className="text-sm font-semibold text-gray-900"
                >
                  CONTACT
                </a>
              </li>
            </menu>
          </PopoverGroup>
        </motion.div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{config.companyName}</span>
              <img
                alt=""
                src={config.companyIconPath}
                className="h-16 w-auto rounded-sm"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  title="home"
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  ACCUEIL
                </a>
                {/* <a title='nos services' onClick={() => setMobileMenuOpen(false)} href="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    ONZE DIENSTEN
                  </a> */}

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    ONZE DIENSTEN
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        <div className="flex flex-row gap-x-2">
                          {/* <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-[--primary-color]" /> */}
                          {item.name}
                        </div>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  title="aboutus"
                  href="/about"
                  className="-mx-3 hidden rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  QUI SOMMES-NOUS
                </a>
                <a
                  title="portfolio"
                  href="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  PROJETS
                </a>
                <a
                  title="contact"
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
