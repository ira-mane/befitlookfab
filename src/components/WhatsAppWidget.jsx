import { useEffect } from "react";
import React from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-5a63580b-f895-4dd9-a915-a187d5c67b99"
      data-elfsight-app-lazy
    ></div>
  );
};

export default WhatsAppWidget;


