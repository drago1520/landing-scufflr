import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  // FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";
import {
  MdSportsMartialArts,
  MdGroups,
  MdSelfImprovement,
} from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Sparring partner, say whuut?",
    description:
      "We believe this is a great way to find friends and be a god level martial artist.",
    bullets: [
      {
        title: "Safety out-of-the-box",
        description:
          "Our AI powered matchmaking platforms detects suspicious profiles and removes them before something bad happens.",
        icon: <a href="https://www.scieOur team fightncedirect.com/science/article/abs/pii/S1359178921000653" target="_blank" rel="nofollow" > <FiBarChart2 size={26} /></a>,
      },
      {
        title: "Become THE Martial Artist",
        description:
          "Gain XP points, level up and let everybody know 'bout it. (coming soon)",
        icon: <MdSportsMartialArts size={26} />,
      },
      {
        title: "Build Friendships",
        description: "Your best friend awaits you.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/gym.jpg",
    alt: "Scufflr find martial art friend",
  },
  {
    title: "Seamless Sparring",
    description:
      "Want to test out a new martial art just for the fun of it? Scufflr makes martial arts accessible and straightforward.",
    bullets: [
      {
        title: "Any Martial Art",
        description: "Find cross-discipline martial arts training. Ever wondered what it is like to practice another martial art but did not want to go to the gym? Yeah we know the feeling.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Experts Aboard (coming soon)",
        description: "Choose to Train with a Professional.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Share Progress (coming soon)",
        description: "Post Images and Videos of Your Training",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/sparring.jpg",
    alt: "Healthy sparring with Scufflr",
  },
  {
    title: "Training buddy",
    description:
      "Martial arts training doesn't always have to be structured, rigid, or guided by a trainer. Train the way you want—serious when you need it, laid-back when you don’t.",
    bullets: [
      {
        title: "No Rules? No Problem!",
        description:
          "Enjoy training in your terms. Maybe you enjoy more laid-back trainings, maybe you are serious about martial arts. We connect you with like-minded people.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Martial art friends are forever",
        description:
          "2:30 minutes in ring shows more character out of people than 20 years at the office. Best bonds are build with martial arts. Start building partners and friendships now!",
        icon: <FiUser size={26} />,
      },
      {
        title: "Safe community",
        description:
          "Our system constantly monitors for suspicious activity to keep our community safe. We also do manual checks by sparring with our users.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/find-martial-art-training-buddy-with-Scufflr.jpg",
    alt: "Scufflr helps with sport",
  },

  {
    title: "Try New Locations",
    description:
      "We know you only go to 1 gym. We also know the hardest thing about trying a new gym is not knowing people. Connect with other Scufflers and expand your contacts. From hobbyists to professionals you will find them.",
    bullets: [
      {
        title: "Connect with other trainees",
        description: "Ever feel bored from the same people at your gym? Probably bored of the trainer?",
        icon: <MdGroups size={26} />,
      },
      {
        title: "Find the best place to learn",
        description:
          "Easily experience different martial arts by training with different people. Practice & experience makes perfect.",
        icon: <GiGymBag size={26} />,
      },
      {
        title: "Imporve your martial skills",
        description: "A black belt is a white belt who never quit.",
        icon: <MdSelfImprovement size={26} />,
      },
    ],
    imageSrc: "/images/try-new-gyms-with-scufflr.jpg",
    alt: "Try new gyms with Scufflr",
  },
];
