"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    } else {
      updateConsent(consent === "accepted");
    }
  }, []);

  const updateConsent = (granted) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag("consent", "update", {
        ad_storage: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
        ad_user_data: granted ? "granted" : "denied",
        ad_personalization: granted ? "granted" : "denied",
      });
    }
  };

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    updateConsent(true);
    setVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    updateConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#f5f5f5] p-8 flex flex-col md:flex-row gap-4 justify-between items-center z-50 text-sm">
      <span className="max-w-5xl">
        We gebruiken cookies en soortgelijke technologieën om je een betere
        ervaring te bieden, het websiteverkeer te analyseren en inhoud en
        advertenties te personaliseren. Je kunt alle cookies accepteren of
        niet-essentiële cookies weigeren. Voor meer details, raadpleeg ons{" "}
        <a href="/dataprotection" className="underline">
          Meer weten
        </a>
        .
      </span>
      <div className="flex gap-2">
        <button
          onClick={acceptAll}
          className="bg-[--primary-color] text-white px-6 py-3 rounded"
        >
          Alles accepteren
        </button>
        <button
          onClick={rejectAll}
          className="bg-white text-black px-6 py-3 rounded"
        >
          Alles weigeren
        </button>
      </div>
    </div>
  );
}
