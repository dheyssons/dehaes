"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initMetaPixel } from "@/lib/metaPixel";

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    initMetaPixel();
  }, []);

  // Reenvia evento a cada mudança de rota (importante em SPA)
  useEffect(() => {
    if (typeof fbq === "function") {
      fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
