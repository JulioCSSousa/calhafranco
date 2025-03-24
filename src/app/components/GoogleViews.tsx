"use client";
import { useEffect } from "react";

export default function     GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full py-10">
      <div className="elfsight-app-28a1cd3c-c90f-479e-b5b0-7d27ab264c9c"></div>
    </div>
  );
}
