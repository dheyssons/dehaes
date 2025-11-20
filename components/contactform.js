"use client";
import config from "@/utils/config";

import emailJS from "@emailjs/browser";
import { useState } from "react";

import { motion } from "framer-motion";
import { transition1 } from "@/public/transitions/transition1";
import { upward } from "@/public/variants/upward";
import { item } from "@/public/variants/item";
import { transition1_s } from "@/public/transitions/transition1_s";

// ICONS
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import Notification from "./notification";

export default function ContactForm() {
  const [showNotification, setShowNotification] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [validEmail, setValidEmail] = useState(false);
  const [emptyValue, setEmptyValue] = useState(false);

  const PUBLICKEY = process.env.PUBLICKEY;
  const SERVICEID = process.env.SERVICEID;
  const TEMPLATEID = process.env.TEMPLATEID;

  const handleChange = (e) => {
    let newProp = form;
    setValidEmail(true);
    newProp[e.target.name] = e.target.value;
    setForm({ ...newProp });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emptyValues = Object.values(form).some((obj) => obj == "");
    setEmptyValue(emptyValues);

    let validEmail = form["email"]
      .toLocaleLowerCase()
      .match(/[a-z]+@[a-z]+\.com(\.br)*/);
    setValidEmail(validEmail);

    const templateParams = {
      from_name: form["name"],
      message: form["message"],
      subject: form["subject"],
      email: form["email"],
    };

    document
      .querySelectorAll("input")
      .forEach((element) => (element.value = ""));
    if (!emptyValues && validEmail) {
      emailJS
        .send(SERVICEID, TEMPLATEID, templateParams, PUBLICKEY)
        .then((res) => {
          setShowNotification(true);
        });
    }
  };

  return (
    <main>
      {/* CONTACT US */}
      <section
        id="contactus"
        className="container mx-auto flex flex-col items-center gap-y-8 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8">
          {/* FORMULAIRE */}
          <div className="flex flex-col gap-y-14">
            <div className="">
              <motion.h3
                variants={upward}
                initial="variantInit"
                whileInView="variantAnim"
                viewport={{ once: true }}
                transition={transition1}
                className="h3 text-center !text-[--primary-color]"
              >
                Contact opnemen
              </motion.h3>
              <h3 className="h3 text-center">zonder verplichtingen</h3>
            </div>

            <div className="flex flex-row gap-x-12 w-full justify-evenly">
              {/* FORM */}
              <motion.form
                variants={upward}
                initial="variantInit"
                whileInView="variantAnim"
                viewport={{ once: true }}
                transition={transition1_s}
                onSubmit={handleSubmit}
                className="w-80 md:w-full md:max-w-md flex flex-col items-center"
              >
                <motion.div
                  variants={item}
                  className="relative z-0 w-full mb-5 group"
                >
                  <input
                    type="text"
                    onBlur={(e) => handleChange(e)}
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Uw naam
                  </label>
                </motion.div>
                <motion.div
                  variants={item}
                  className="relative z-0 w-full mb-5 group"
                >
                  <input
                    type="email"
                    onBlur={(e) => handleChange(e)}
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Uw e-mail
                  </label>
                </motion.div>
                <motion.div
                  variants={item}
                  className="relative z-0 w-full mb-5 group"
                >
                  <input
                    type="text"
                    onBlur={(e) => handleChange(e)}
                    name="subject"
                    id="subject"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Onderwerp
                  </label>
                </motion.div>
                <motion.div variants={item} className="grid md:gap-6 w-full">
                  <div className="relative z-0 w-full mb-5 group">
                    <textarea
                      type="message"
                      onBlur={(e) => handleChange(e)}
                      rows="8"
                      name="message"
                      id="message"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Vertel ons uw problemen
                    </label>
                  </div>
                </motion.div>
                <button type="submit" className="btn self-start uppercase">
                  Verzenden
                </button>
              </motion.form>
            </div>
          </div>

          {/* OTHER INFOS */}
          <motion.div
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1}
            className="text-white flex flex-col gap-y-16 p-12 lg:p-20 bg-[#151515] lg:rounded-lg"
          >
            <div className="flex flex-col justify-center gap-y-2">
              <div className="flex flex-row overflow-hidden">
                <h2 className="h2 !text-white">Contact</h2>
              </div>
              <p className="p !text-white">
                Wij zijn er om u te helpen met al uw vragen en ondersteuning.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-y-3">
              <a
                target="_blank"
                href={`mailto:${config.emailAddress}`}
                className="p tracking-widest flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50 "
              >
                <MdOutlineMail /> {config.emailAddress}
              </a>
              <a
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=${config.whatsappNumber}`}
                className="p  tracking-widest flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"
              >
                <ImWhatsapp />
                {config.phoneNumber}
              </a>
              <a
                target="_blank"
                href={config.mapsLink}
                title="address"
                className="p tracking-widest flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50 leading-10"
              >
                <FaMapMarkerAlt />
                {config.localAddress}
              </a>
            </div>
          </motion.div>
        </div>

        <iframe
          src={config.mapsLinkExtended}
          title="google location"
          className="border-0 lg:mt-20 w-[1440px] h-[300px] lg:h-[600px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="line"></div>
      </section>
      {showNotification && (
        <Notification
          message="Formulier succesvol verzonden"
          onClose={() => setShowNotification(false)}
        />
      )}
    </main>
  );
}
