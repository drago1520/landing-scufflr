export type User = {
  //~ What i need to pass to SQL database || What the db returns
  user_id: number;
  username: string;
  email: string;
  password?: string;
  profile_pic: string[];
  date_of_birth: string;
  bio?: string;
  gender: string;
  weight: number;
  height: number;
  location_latitude: number;
  location_longitude: number;
  fighting_style: string[];
  experience_level:
    | "👶Amateur"
    | "🧒Casual brawler"
    | "👊Some martial arts"
    | "🥋Training regularly"
    | "🏅Competitor in tournament"
    | "🏆Professional"
    | "👩‍🦰Trainer";
  rating?: number;
  is_banned?: boolean;
  preference_gender?: "Women" | "Men" | "Everyone";
  preference_xp?: xp[];
  preference_distance?: number;
  preference_enviroment?: string[];
  fcm_tokens: string[]; //?One token for each device on which push notifications will be delivered. "Registration token"
  no_users_to_swipe_count?: boolean;
  city: string;
  age: number;
  xp_levels: xp_level[];
  is_admin: boolean;
};
export type UserPublicInfo = Omit<
  User,
  | "email"
  | "password"
  | "location_latitude"
  | "location_longitude"
  | "fcm_tokens"
> & {
  distance?: number;
};

type xp =
  | "👶Amateur"
  | "🧒Casual brawler"
  | "👊Some martial arts"
  | "🥋Training regularly"
  | "🏅Competitor in tournament"
  | "🏆Professional"
  | "👩‍🦰Trainer";

type xp_level = {
  sport: string;
  level: xp_options2;
};

type xp_options2 =
  | string
  | "0 - Would learn"
  | "1 - Basics"
  | "2 - Training"
  | "3 - Confident"
  | "4 - Tournaments"
  | "5 - Champion";
