import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  viber: string;
  whatsapp: string;
  socials: ISocials;
} = {
  subheading:
    "Empowering martial artists with cutting-edge social technology solutions.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Book a meeting",
      url: "#Book-a-meeting",
    },
    {
      text: "Pricing",
      url: "#pricing",
    },
    {
      text: "Testimonials",
      url: "#testimonials",
    },
  ],
  email: "office@scufflr.com",
  telephone: "+359 988 700 632",
  viber: "https://connect.viber.com/business/0c1dceb8-cdgregregt63-11ef-ac38-f2be0cea40e5?utm_source=manage&utm_medium=copy_link",
  whatsapp: "https://wa.me/qr/2EWZS4t4g34twrfrLHDCUXJA1",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    // twitter: "https://twitter.com/Twitter",
    // facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    tiktok: "dsdsds",
    linkedin: "https://www.linkedin.com/company/scufflr-com",
    // threads: 'https://www.threads.net',
    // instagram: "https://www.instagram.com/scufflr.official/",
  },
};
