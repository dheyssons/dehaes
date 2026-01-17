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
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./languageselector";

export default function Header() {
  const t = useTranslations("header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-10 fixed w-full bg-white">
      <nav className="w-[80%] mx-auto flex flex-row items-center justify-between">
        <motion.div
          variants={dropdown}
          initial="variantInit"
          whileInView="variantAnim"
          viewport={{ once: true }}
          transition={transition1_s}
          className="max-w-max lg:flex-1 flex flex-row items-center justify-center gap-x-8 py-4"
        >
          {/* LOGO */}
          <motion.a variants={dropdown} href="/" className="">
            <img alt="home" src={config.companyIconPath} className="w-28" />
          </motion.a>
          {/* INFO */}
          <motion.div variants={dropdown} className="flex flex-col">
            <p className="text-[#121212] p">{config.ivaNumber}</p>
            <p className="text-[#121212] p hidden lg:flex">
              {config.localAddress}
            </p>
            <div className="flex flex-row items-center gap-x-1 lg:hidden">
              <PhoneIcon className="size-4 text-[#000000]" />
              <p className="text-[#121212] p">{config.phoneNumber}</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{t("header_open_menu")}</span>
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
            <menu className="hidden lg:flex lg:gap-x-12 items-center">
              {/* HOME */}
              {/* <li>
                <a href="/" title="Accueil" className="body">
                  {t("header_home")}
                </a>
              </li> */}

              {/* ABOUT US */}
              <li>
                <a href="/about" title="Wie zijn we" className="body">
                  {t("header_about")}
                </a>
              </li>

              <div>
                <Popover className="relative">
                  <motion.div>
                    <PopoverButton className="flex items-center gap-x-1 body">
                      {t("header_services")}
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
                      {/* plattedaken */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6">
                        <div className="flex-auto">
                          <a
                            className="block hover:text-[--primary-color]"
                            href="/services/plattedaken"
                          >
                            {t("header_services_plattedaken")}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                      {/* daktimmer */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6">
                        <div className="flex-auto">
                          <a
                            className="block hover:text-[--primary-color]"
                            href="/services/daktimmer"
                          >
                            {t("header_services_daktimmer")}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                      {/* groendaken */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6">
                        <div className="flex-auto">
                          <a
                            className="block hover:text-[--primary-color]"
                            href="/services/groendaken"
                          >
                            {t("header_services_groendaken")}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                      {/* gevelbekleding */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6">
                        <div className="flex-auto">
                          <a
                            className="block hover:text-[--primary-color]"
                            href="/services/gevelbekleding"
                          >
                            {t("header_services_gevelbekleding")}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                      {/* isolatie */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6">
                        <div className="flex-auto">
                          <a
                            className="block hover:text-[--primary-color]"
                            href="/services/isolatie"
                          >
                            {t("header_services_isolatie")}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                      {/* renovatie */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6">
                        <div className="flex-auto">
                          <a
                            className="block hover:text-[--primary-color]"
                            href="/services/renovatie"
                          >
                            {t("header_services_renovatie")}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      <a
                        rel="noopener"
                        href="https://www.facebook.com/people/Schrijnwerkerij-De-Haes/61552704719361/#"
                        target="_blank"
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 hover:bg-gray-100"
                      >
                        <ArrowRightStartOnRectangleIcon
                          aria-hidden="true"
                          className="size-5 flex-none text-gray-400"
                        />
                        {t("header_facebook")}
                      </a>
                      <a
                        rel="noopener"
                        href={`https://api.whatsapp.com/send?phone=${config.whatsappNumber}`}
                        target="_blank"
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 hover:bg-gray-100"
                      >
                        <ImWhatsapp
                          aria-hidden="true"
                          className="size-5 flex-none text-gray-400"
                        />
                        {t("header_quote")}
                      </a>
                    </div>
                  </PopoverPanel>
                </Popover>
              </div>

              {/* PORTFOLIO */}
              <li>
                <a title="Projecten" href="/portfolio" className="body">
                  {t("header_portfolio")}
                </a>
              </li>

              {/* CONTACT */}
              {/* <li>
                <a title="Contact" href="/contact" className="body">
                  {t("header_contact")}
                </a>
              </li> */}
              <li>
                <LanguageSwitcher />
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
                className="h-16 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">{t("header_close_menu")}</span>
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
                  {t("header_home")}
                </a>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {t("header_services")}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {/* plattedaken */}
                    <DisclosureButton
                      as="a"
                      href="/services/plattedaken"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex flex-row gap-x-2">
                        {t("header_services_plattedaken")}
                      </div>
                    </DisclosureButton>
                    {/* renovatie */}
                    <DisclosureButton
                      as="a"
                      href="/services/renovatie"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex flex-row gap-x-2">
                        {t("header_services_renovatie")}
                      </div>
                    </DisclosureButton>
                    {/* isolatie */}
                    <DisclosureButton
                      as="a"
                      href="/services/isolatie"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex flex-row gap-x-2">
                        {t("header_services_isolatie")}
                      </div>
                    </DisclosureButton>
                    {/* groendaken */}
                    <DisclosureButton
                      as="a"
                      href="/services/groendaken"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex flex-row gap-x-2">
                        {t("header_services_groendaken")}
                      </div>
                    </DisclosureButton>
                    {/* gevelbekleding */}
                    <DisclosureButton
                      as="a"
                      href="/services/gevelbekleding"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex flex-row gap-x-2">
                        {t("header_services_gevelbekleding")}
                      </div>
                    </DisclosureButton>
                    {/* Daktimmer */}
                    <DisclosureButton
                      as="a"
                      href="/services/daktimmer"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex flex-row gap-x-2">
                        {t("header_services_daktimmer")}
                      </div>
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <a
                  title="aboutus"
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t("header_about")}
                </a>
                <a
                  title="portfolio"
                  href="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t("header_portfolio")}
                </a>
                <a
                  title="contact"
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t("header_contact")}
                </a>
              </div>
            </div>
          </div>
          <LanguageSwitcher />
        </DialogPanel>
      </Dialog>
    </header>
  );
}
