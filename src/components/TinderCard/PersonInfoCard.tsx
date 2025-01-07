import { UserPublicInfo } from "@/data/userModel.js";
import { BadgeCheck } from "lucide-react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

export type PersonInfoCardProps = {
  isSwipeForbiden?: boolean;
  user: UserPublicInfo | null | undefined;
};

export const PersonInfoCard = ({
  user,
  isSwipeForbiden = false,
}: PersonInfoCardProps) => {
  const sport = user?.xp_levels?.[0].sport;
  const level = user?.xp_levels?.[0].level;
  return (
    <div
      style={{ backgroundImage: `url( ${user?.profile_pic?.[0]} )` }}
      className="relative flex flex-grow justify-end max-w-[360px] h-[650px] border-none rounded-3xl bg-cover bg-center bg-mainBg"
    >
      <section className="relative bg-card-fade w-full flex items-end rounded-3xl shadow-2xl pt-[500px]">
        <section className="mx-5 mb-4 flex-col flex gap-1.5">
          <div className="flex justify-start items-center flex-wrap gap-1 overflow-hidden">
            <div className="px-[0.4rem] py-[0.125rem] border border-none rounded-[0.5rem] bg-green-600 tracking-[0.02rem] font-semibold whitespace-nowrap opacity-80 brightness-100 transition-filter duration-100 mr-2 capitalize inline-block text-xs">
              Nearby
            </div>
            <div className="px-[0.4rem] py-[0.125rem] border border-none rounded-[0.5rem] tracking-[0.02rem] font-semibold whitespace-nowrap opacity-80 transition-filter duration-100 mr-2 capitalize inline-block text-xs bg-red-300">
              {user?.weight}kg
            </div>
            <div className="px-[0.4rem] py-[0.125rem] border border-none rounded-[0.5rem] tracking-[0.02rem] font-semibold whitespace-nowrap opacity-80 transition-filter duration-100 mr-2 capitalize inline-block text-xs bg-red-300">
              {user?.height}cm
            </div>
            <div className="px-[0.4rem] py-[0.125rem] border border-none rounded-[0.5rem] tracking-[0.02rem] font-semibold whitespace-nowrap opacity-80 transition-filter duration-100 mr-2 capitalize inline-block text-xs bg-red-500">{`${sport} - ${level}`}</div>
          </div>
          <div className="flex justify-start text-3xl font-semibold gap-2 items-center">
            <h1 className="">
              {user?.username}{" "}
              <span className="font-normal text-2xl">{user?.age}y.</span>
            </h1>
            {/* <BadgeCheck color="#3498db" strokeWidth={2.4} absoluteStrokeWidth /> */}
            <BiSolidBadgeCheck color="cyan" className="saturate-50" />
          </div>
          <div className="flex justify-start items-center gap-1 font-medium text-xl">
            <SlLocationPin className="text-md w-auto inline" />
            <h4 className="inline">{user?.city}</h4>
          </div>
          {/* //TODO */}
          <p className="text-sm text-start text-slate-600">{user?.bio}</p>
        </section>
      </section>
    </div>
  );
};
