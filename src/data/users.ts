import { UserPublicInfo } from "./userModel";

export const users: UserPublicInfo[] = [
    // Original entry
    {
      user_id: 506,
      username: "Ali",
      profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/0ad9aa23-116c-4641-cc93-9261eb5dca00/public"],
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
      bio: "Yo, I be trainin' Muay Thai for about 6 months. Very hyped to train for the upcoming tournaments. If you wanna spar, swipe right dog 🥊"
    },
    // DadBod Fighter
    {
        user_id: 117,
        username: "PunchDad",
        profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/punch-dad-101/public"],
        date_of_birth: "10/10/1985",
        gender: "man",
        weight: 95,
        height: 182,
        fighting_style: ["Boxing"],
        experience_level: "🧒Casual brawler",
        city: "Burgas",
        age: 38,
        xp_levels: [{ sport: "Boxing", level: "1 - Basics" }],
        is_admin: false,
        bio: "Office dad getting back in shape! Looking for chill sparring partners who don't mind occasional dad jokes between rounds 😅🥊"
    },
  
    // Variation 1 - Professional Boxer
    {
      user_id: 707,
      username: "IvanTheTerrible",
      profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/1bc5cd32-4567-8910-abc1-2345b6c7d8e9/public"],
      date_of_birth: "05/12/1995",
      gender: "man",
      weight: 75,
      height: 180,
      fighting_style: ["Boxing"],
      experience_level: "🏆Professional",
      city: "Sofia",
      age: 28,
      xp_levels: [{ sport: "Boxing", level: "5 - Champion" }],
      is_admin: false,
      bio: "Pro boxer with 12 years experience. Looking for serious sparring partners. No time for playboys - bring your A-game or don't bother."
    },
    // Weapons Enthusiast
  {
    user_id: 505,
    username: "KaliNewbie",
    profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/kali-newbie-202/public"],
    date_of_birth: "09/09/1997",
    gender: "woman",
    weight: 60,
    height: 160,
    fighting_style: ["Kali", "Muay Thai"],
    experience_level: "👊Some martial arts",
    city: "Ruse",
    age: 26,
    xp_levels: [
      { sport: "Muay Thai", level: "3 - Confident" },
      { sport: "Kali", level: "0 - Would learn" }
    ],
    is_admin: false,
    bio: "MT practitioner wanting to try Kali sticks! Will trade clinch work for weapon basics. Safety first - let's use pool noodles first? 🏊‍♀️🥢"
  },
     // Casual Learner 1 - Cross-training
  {
    user_id: 615,
    username: "JudoJill",
    profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/judo-jill-123/public"],
    date_of_birth: "04/01/2003",
    gender: "woman",
    weight: 72,
    height: 178,
    fighting_style: ["Judo", "Boxing"],
    experience_level: "👊Some martial arts",
    city: "Varna",
    age: 20,
    xp_levels: [
      { sport: "Judo", level: "3 - Confident" },
      { sport: "Boxing", level: "1 - Basics" }
    ],
    is_admin: false,
    bio: "Judo green belt dipping into boxing! Want partners to help me learn punches while I teach throws. Coffee after training? ☕️"
  },
  
    // Variation 2 - BJJ Trainer
    {
      user_id: 889,
      username: "GracieSophia",
      profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/9d8e7f6a-5432-1b2c-3d4e-5f6g7h8i9j0k/public"],
      date_of_birth: "03/22/1990",
      gender: "woman",
      weight: 65,
      height: 168,
      fighting_style: ["BJJ", "Wrestling"],
      experience_level: "👩‍🦰Trainer",
      city: "Plovdiv",
      age: 33,
      xp_levels: [{ sport: "BJJ", level: "5 - Champion" }, { sport: "Wrestling", level: "4 - Tournaments" }],
      is_admin: false,
      bio: "Black belt in BJJ offering private lessons. Let's roll! 🥋 Perfect technique beats brute force every time."
    },
  
    // Variation 3 - Karate Competitor
    {
      user_id: 112,
      username: "DragonSlayer",
      profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/a1b2c3d4-5678-90ef-1234-5678abcd1234/public"],
      date_of_birth: "11/05/2002",
      gender: "non-binary",
      weight: 70,
      height: 175,
      fighting_style: ["Karate"],
      experience_level: "🏅Competitor in tournament",
      city: "Burgas",
      age: 21,
      xp_levels: [{ sport: "Karate", level: "4 - Tournaments" }],
      is_admin: false,
      bio: "National karate champion seeking training partners for world championship prep. Kata perfectionist 🐉"
    },
  
    // Variation 4 - Taekwondo Practitioner
    {
      user_id: 335,
      username: "HighKicker",
      profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/z9y8x7w6-5432-1a2b-3c4d-5e6f7g8h9i0j/public"],
      date_of_birth: "07/19/2000",
      gender: "man",
      weight: 82,
      height: 185,
      fighting_style: ["Taekwondo"],
      experience_level: "🥋Training regularly",
      city: "Ruse",
      age: 23,
      xp_levels: [{ sport: "Taekwondo", level: "3 - Confident" }],
      is_admin: false,
      bio: "3rd degree black belt in TKD. Specializing in spinning kicks and competition patterns. Let's exchange techniques! 🦵"
    },
  
    // Variation 5 - MMA Casual
    {
      user_id: 442,
      username: "CageQueen",
      profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/q1w2e3r4-5t6y7u8i-9o0p-asdfghjkl123/public"],
      date_of_birth: "09/14/2005",
      gender: "woman",
      weight: 68,
      height: 170,
      fighting_style: ["MMA"],
      experience_level: "🧒Casual brawler",
      city: "Stara Zagora",
      age: 18,
      xp_levels: [{ sport: "MMA", level: "1 - Basics" }],
      is_admin: false,
      bio: "Just starting my MMA journey! Looking for friendly partners to learn grappling and striking together. No egos please! 🤼"
    },
  
    // Variation 6 - Kickboxing Pro
    {
      user_id: 224,
      username: "GoldenGloves",
      profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/6n5m4b3v-2c1x0z-9a8s-7d6f-5g4h3j2k1l0/public"],
      date_of_birth: "12/25/1998",
      gender: "man",
      weight: 77,
      height: 182,
      fighting_style: ["Kickboxing"],
      experience_level: "🏆Professional",
      city: "Sofia",
      age: 25,
      xp_levels: [{ sport: "Kickboxing", level: "5 - Champion" }],
      is_admin: false,
      bio: "K-1 rules specialist. 15-3 pro record. Training partners must have competitive experience. Let's make each other better! 💥"
    },

   

  // Fun-focused Sparrer
  {
    user_id: 888,
    username: "SparBro",
    profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/spar-bro-456/public"],
    date_of_birth: "02/14/1999",
    gender: "man",
    weight: 85,
    height: 190,
    fighting_style: ["MMA", "Karate"],
    experience_level: "🧒Casual brawler",
    city: "Plovdiv",
    age: 24,
    xp_levels: [
      { sport: "MMA", level: "2 - Training" },
      { sport: "Karate", level: "1 - Basics" }
    ],
    is_admin: false,
    bio: "Not here for trophies - just love the sweat and laughs! Weekend warrior looking for light contact sparring. Bring your gloves and jokes 🥊😂"
  },

  // Style Explorer
  {
    user_id: 303,
    username: "CapoeiraCurious",
    profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/capoeira-789/public"],
    date_of_birth: "06/30/2001",
    gender: "non-binary",
    weight: 63,
    height: 165,
    fighting_style: ["Taekwondo", "Capoeira"],
    experience_level: "👶Amateur",
    city: "Sofia",
    age: 22,
    xp_levels: [
      { sport: "Taekwondo", level: "2 - Training" },
      { sport: "Capoeira", level: "0 - Would learn" }
    ],
    is_admin: false,
    bio: "TKD blue belt obsessed with Capoeira videos! Want to trade - I'll teach kicks, you teach me those sweet dance moves? 🕺💃"
  },

  

  

  // Yoga-Fighter Hybrid
  {
    user_id: 711,
    username: "ZenKicker",
    profile_pic: ["https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/zen-kicker-303/public"],
    date_of_birth: "03/15/1993",
    gender: "woman",
    weight: 58,
    height: 155,
    fighting_style: ["Kung Fu", "Tai Chi"],
    experience_level: "🥋Training regularly",
    city: "Sofia",
    age: 30,
    xp_levels: [
      { sport: "Kung Fu", level: "3 - Confident" },
      { sport: "Tai Chi", level: "4 - Tournaments" }
    ],
    is_admin: false,
    bio: "Martial arts yogini here! Let's flow between forms and sparring. Perfect for stress relief - we'll fight then meditate 🧘♀️👊"
  }
];