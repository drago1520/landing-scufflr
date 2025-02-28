import React from "react";
// import Image from "next/image";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

import { heroDetails } from "@/data/hero";
import PWAButton from "./PWA-Button";
// import { PersonInfoCard } from "./TinderCard/PersonInfoCard";
import { UserPublicInfo } from "@/data/userModel";
import TinderCardCustom from "./TinderCard/Tinder-card";
import Image from "next/image";

const Hero: React.FC = () => {
  //TODO Add more users. Ourselves
  const users: UserPublicInfo[] = [
    {
      user_id: 506,
      username: "Ali",
      profile_pic: [
        "https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/0ad9aa23-116c-4641-cc93-9261eb5dca00/public",
      ],
      date_of_birth: "08/08/2008",
      gender: "woman",
      weight: 80,
      height: 193,
      fighting_style: ["Muay Thai"],
      experience_level: "🥋Training regularly",
      city: "Varna",
      age: 21,
      xp_levels: [{ sport: "Muay Thai", level: "Confident" }],
      is_admin: false,
      bio: "Yo, I be trainin' Muay Thai for about 6 months. Very hyped to train for the upcoming tournaments. If you wanna spar, swipe right dog 🥊",
    },
  ];
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden px-5 pb-0 pt-32 md:pt-40"
    >
      <div className="absolute inset-y-0 left-0 -z-10 w-full">
        <div className="bg-hero-background absolute inset-0 size-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[2px]"></div>

      <div className="text-center">
        <h1 className="text-foreground mx-auto max-w-lg text-4xl font-bold md:max-w-2xl md:text-6xl md:leading-tight">
          {heroDetails.heading}
        </h1>
        <p className="text-foreground mx-auto mt-4 max-w-lg">
          {heroDetails.subheading}
        </p>
        <div className="relative mx-auto mt-6 flex w-fit flex-col items-center sm:flex-row sm:gap-4">
          <img width={65} className="absolute -top-5 transform-gpu z-10 -left-20 rotate-[105deg]" src="/svg/up-arrow-with-scribble-svgrepo-com.svg" alt="arrow down" />

          {/* <AppStoreButton dark /> */}
          <PWAButton dark />
          {/* <PlayStoreButton dark /> */}
        </div>
        {/* <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="scufflr app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        /> */}
        <div className="relative my-20 flex w-full flex-col items-center justify-center">
          <TinderCardCustom users={users} />
          <p className="z-10 text-sm italic">*Demo of the real app</p>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
