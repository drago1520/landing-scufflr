import { PersonInfoCard } from "./PersonInfoCard.jsx";

const db = [
  {
    name: "Steve",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/48846128-09ef-473a-233e-96ee42ff3500/default",
  },
  {
    name: "Alex a.k.a. Cash money",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/0189dc89-ad3e-4cfa-8d7e-4fec2dc23e00/default",
  },
  {
    name: "Mr. Jackson",
    url: "https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/940e11bf-1ad3-4de3-5a3d-f554cd7c2b00/default",
  },
  {
    name: "Maddie",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/de086de9-adb4-4256-6298-1974bb365100/default",
  },
  {
    name: "Robert",
    url: "https://imagedelivery.net/J2MKSchO1M3y9yxY4WZQhA/943da053-736b-4d04-c3bd-62102295ed00/default",
  },
  {
    name: "Kevin",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/d30468e8-f59b-4fd4-7d81-38dde3b2d500/default",
  },
  {
    name: "Jessica",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/0b300f46-7cdd-4212-fae3-c7406122a900/default",
  },
  {
    name: "Stanley",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/8abaae33-b79b-46ff-bf37-91f38e328f00/default",
  },
  {
    name: "Abbacio",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/aff946ea-57ee-4f6e-09e7-5f2aa39f4700/default",
  },
  {
    name: "Justin",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/206ed6eb-8261-4684-1c02-fe1cac1b8800/default",
  },
  {
    name: "Monica",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/a5f3f07c-7d02-4fe4-4af2-cd555e86d800/default",
  },
  {
    name: "Chris",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/dcd84912-3aa4-4752-d111-2fefda715500/default",
  },
  {
    name: "Jonathan Joestar",
    url: "https://images.scufflr.com/cdn-cgi/image/format=webp,quality=70/https://images.scufflr.com/images/38dcc2a5-7fcd-480f-f1f2-ad188c370b00/default",
  },
];

export default function TinderCardCustom() {
  return (
    <>
      <section className="h-full w-full max-w-[460px] relative flex justify-center items-center">
        {users.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className={`absolute w-full h-full index-card-${index}-${character.name}`}
            key={character.name}
            onSwipe={(dir: Direction) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
            swipeRequirementType="position"
            swipeThreshold={390 / 3} //In px
            //~ Prevent the swipe in all directions because new users are still rendering and causes bugs (only with mouse/ touch swipe). I am also disabling the buttons
            preventSwipe={["down"]}
          >
            <PersonInfoCard user={user} isSwipeForbiden={false} />
          </TinderCard>
        ))}
      </section>
      {ActionButtons(false, false, swipe, false)}
    </>
  );
}

function ActionButtons(
  isDemo: boolean,
  isLoading: boolean,
  swipe: (dir: Direction) => Promise<void>,
  isSwipeForbiden?: boolean,
) {
  isLoading = false;
  isSwipeForbiden = false;
  return (
    <section className="flex justify-center items-end relative gap-8 mb-6">
      <button
        className={`action-button p-3 h-[4.4rem] w-[4.4rem] bg-none ${isLoading ? "opacity-50" : null}`}
        onClick={() => swipe("left")}
      >
        <img src="/svg/peace-dove-svgrepo-com(1).svg" alt="peace dove" />
      </button>

      <button
        className={`action-button h-12 w-12 p-1.5 bg-none ${isLoading ? "opacity-50" : null}`}
        onClick={() => swipe("up")}
      >
        <img src="/svg/punch-blast-svgrepo-com.svg" alt="" />
      </button>

      <button
        className={`action-button border-2 border-[--color-primary] h-[4.4rem] w-[4.4rem] bg-none ${isLoading ? "opacity-50" : null}`}
        onClick={() => swipe("right")}
      >
        <img src="/svg/punch-svgrepo-com.svg" alt="punch" />
      </button>
    </section>
  );
}

type PersonInfoCardProps = {
  bgImage: string;
  name: string;
};

function PersonInfoCardDemo({ bgImage, name }: PersonInfoCardProps) {
  return (
    <div
      style={{ backgroundImage: `url( ${bgImage} )` }}
      className="relative flex flex-grow justify-end h-full border-none rounded-3xl bg-cover bg-center bg-mainBg"
    >
      <section className="relative pt-10 bg-card-fade flex flex-grow items-end">
        {
          <section className="mx-5 mb-4 flex-col flex gap-1.5">
            <div>
              <div className="pills bg-green-400 brightness-50">Nearby</div>
              <div className="pills bg-red-300 brightness-50">{67}kg</div>
              <div className="pills bg-red-300 brightness-50">{185}cm</div>
              <div className="pills bg-red-500 brightness-50">{`Muay Thai - Confident`}</div>
            </div>
            <div className="flex justify-start gap-2 items-center">
              <h1 className="name">
                {name} <span className="font-normal">{19}</span>
              </h1>
              <div>
                <BadgeCheck strokeWidth={2.4} color="#3498db" />
              </div>
            </div>
            <div className="flex">
              <img
                src="/svg/location-pin-svgrepo-com(2).svg"
                alt="location pin"
                className="h-[var(--text-size-xl)] w-auto inline"
              />
              <h4 className="inline">Burgas/ Sofia</h4>
            </div>
            {/* //TODO */}
            <p className="bio">
              Yo, I be trainin' Muay Thai for about 6 months. Very hyped to
              train for the upcoming tournaments. If you wanna spar, swipe right
              dog 🥊
            </p>
          </section>
        }
      </section>
    </div>
  );
}
