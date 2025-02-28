import React from "react";
import clsx from "clsx";
import { ctaDetails } from "@/data/cta";
// import Image from "next/image.js";

const PWAButton = ({ dark }: { dark?: boolean }) => {
  return (
    // <img src="/svg/pwa-icon.svg" alt="PWA button launch" className='min-w-[205px] mt-3 h-14 rounded-full w-full sm:w-fit'/>
    <a href={ctaDetails.pwaUrl} target="_blank">
      <button
        type="button"
        className={clsx(
          "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit transition duration-300 text-white bg-primary hover:bg-[#1f1e1e]",
          {
            "":
              dark,
            "hover:bg-foreground": !dark,
          },
        )}
      >
        {/* {!dark ? (
          <Image
            src="/images/pwa-icon.webp"
            alt="PWA-icon"
            height={8.8}
            width={28.8}
            className="mr-4 saturate-0"
          />
        ) : (
          <Image
            src="/svg/pwa-icon.svg"
            alt="PWA launch icon"
            height={8.8}
            width={28.8}
            className="h-4 mr-4 saturate-0"
          />
        )} */}
        <div>
          {/* <div className="text-xs">Launch now as</div> */}
          <div className="-mt-1 font-sans text-xl font-semibold">Open App</div>
        </div>
      </button>
    </a>
  );
};

export default PWAButton;
