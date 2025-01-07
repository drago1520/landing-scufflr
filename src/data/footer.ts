import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
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
  telephone: "+359 988 700 631",
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
