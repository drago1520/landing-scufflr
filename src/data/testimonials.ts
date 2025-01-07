import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: "Kris",
    role: "BJJ purple belt",
    message: `${siteDetails.siteName}'s community is awesome. I was a bit nervous the first time I arranged a sparring session, but the dude was cool. We are friends now for 2 months and casually train together BJJ and Muay Thai.`,
    avatar: "/images/Kris-testimonial-1-1.jpg",
  },
  {
    name: "Alex",
    role: "Boxing for 12 years",
    message: `As a Boxer with many years of experience, I'm impressed by ${siteDetails.siteName}'s matching system and and kind people. Sparring with people outside my gym gave me a lot of insights, where i can improve. Not to say the great 5 friends I made the previous month.`,
    avatar: "/images/Alex-testimonial-2.jpg",
  },
  {
    name: "Emily",
    role: "MMA cage fighter",
    message: `${siteDetails.siteName} is really helping me do trainings the way I need it. I like to do cardio first, then warm up and lastly train my MMA techniques. Scufflr helped me easily find 3 buddies and not do it alone anymore. It's awesome!`,
    avatar: "/images/Emily-testimolial-3.jpg",
  },
];
