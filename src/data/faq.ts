import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} secure?`,
    answer:
      "Absolutely. We use check every profile carefully if they meet the requirements. This guarantees a healthy & growing comminity of disciplined martial artists.",
  },
  {
    question: `Can I use ${siteDetails.siteName} as a beginner?`,
    answer:
      "Absolutely! Scufflr is for martial artists of all skill levels, from those who train for the health benefits alone to professionals and trainers.",
  },
  {
    question: `What types of martial arts does ${siteDetails.siteName} support?`,
    answer: `ALL! ${siteDetails.siteName} supports a wide range of martial arts, including Boxing, Muay Thai, Brazilian Jiu-Jitsu, Karate, Taekwondo, Judo, Kickboxing and more.`,
  },
  {
    question: "Can I filter people?",
    answer:
      "YES! Find the best training buddy for you by applying filters for Height, Weight, Experience, Martial arts, Age, Location and many more. Never again will you have to sparr with someone way beyond your weight class.",
  },
  {
    question: "What if I need help using the app?",
    answer:
      "Our dedicated support team answers fast via email & phone. Like really fast. Suggest a feature request or report a bug and we will fix it. You can also book a 15 minute meeting with our Founder.",
  },
];
