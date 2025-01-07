"use client";
import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Dynamically load Calendly's widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/dragomir1520/scufflr?hide_gdpr_banner=1&primary_color=ff3f00"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CalendlyWidget;
