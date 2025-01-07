import React from "react";
import clsx from "clsx";
import { ctaDetails } from "@/data/cta";
import Image from "next/image.js";

const PWAButton = ({ dark }: { dark?: boolean }) => {
  return (
    // <img src="/svg/pwa-icon.svg" alt="PWA button launch" className='min-w-[205px] mt-3 h-14 rounded-full w-full sm:w-fit'/>
    <a href={ctaDetails.pwaUrl} target="_blank">
      <button
        type="button"
        className={clsx(
          "flex items-center justify-start min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit hover:scale-105 transition duration-300",
          {
            "text-white bg-foreground hover:bg-[#1f1e1e] transition duration-300":
              dark,
            "text-foreground bg-white": !dark,
          },
        )}
      >
        {!dark ? (
          <Image
            src="/images/pwa-icon.webp"
            alt="PWA-icon"
            height={16}
            width={52}
            className="mr-4"
          />
        ) : (
          <Image
            src="/svg/pwa-icon.svg"
            alt="PWA launch icon"
            height={16}
            width={52}
            className="h-4 mr-4"
          />
        )}
        <div>
          <div className="text-xs">Launch now as</div>
          <div className="-mt-1 font-sans text-xl font-semibold">Web APP</div>
        </div>
      </button>
    </a>
  );
};

export default PWAButton;
