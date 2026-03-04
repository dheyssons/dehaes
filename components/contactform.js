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
import { LuSend } from "react-icons/lu";

import { useTranslations } from "next-intl";
import RequestEvaluationForm from "./RequestEvaluationForm";

export default function ContactForm() {
  const t = useTranslations("contactform");

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
    <div className="w-screen">
      <section>
        {/* CONTACT US */}
        <div
          id="contactus"
          className="flex flex-col items-center gap-y-8 overflow-hidden"
        >
          <div className="flex flex-col gap-14 lg:flex-row justify-between w-full">
            {/* FORMULAIRE */}
            <RequestEvaluationForm />

            {/* OTHER INFOS */}
            <motion.div
              variants={upward}
              initial="variantInit"
              whileInView="variantAnim"
              viewport={{ once: true }}
              transition={transition1}
              className="flex flex-col gap-y-16 lg:px-24 py-10 border-[1px] border-gray-200  shadow-sm lg:rounded-md"
            >
              <div className="flex flex-col justify-center items-start px-8">
                <h2 className="h3">{t("contact_info_title")}</h2>
                <p className="p !text-start">{t("contact_info_description")}</p>
              </div>
              <div className="flex flex-col items-start justify-center gap-y-2 px-8">
                <a
                  target="_blank"
                  href={`mailto:${config.emailAddress}`}
                  className="p flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50 "
                >
                  <MdOutlineMail className="text-[--primary-color]" />{" "}
                  {config.emailAddress}
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  onClick={() => {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      event: "click_phone",
                      phone_location: "contactpage",
                    });
                  }}
                  href={`https://api.whatsapp.com/send?phone=${config.whatsappNumber}`}
                  className="p flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"
                >
                  <ImWhatsapp className="text-[--primary-color]" />
                  {config.phoneNumber}
                </a>
                <a
                  target="_blank"
                  href={config.mapsLink}
                  title="address"
                  className="p !text-start flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"
                >
                  <FaMapMarkerAlt className="text-[--primary-color]" />
                  Dreefvelden 5, <br className="md:hidden" /> 2860
                  Sint-Katelijne-Waver
                </a>
              </div>
            </motion.div>
          </div>

          <iframe
            src={config.mapsLinkExtended}
            title="google location"
            className="border-0 lg:mt-20 w-full h-[300px] lg:h-[600px] z-10"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {showNotification && (
          <Notification
            message={t("form_submit_notification")}
            onClose={() => setShowNotification(false)}
          />
        )}
      </section>
    </div>
  );
}
