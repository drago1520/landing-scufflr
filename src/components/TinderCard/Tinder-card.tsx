"use client";
import { createRef, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { PersonInfoCard } from "./PersonInfoCard";
import { UserPublicInfo } from "@/data/userModel";
import { ActionButtons } from "./Action-Buttons";

type TinderCardCustomProps = {
  users: UserPublicInfo[];
  withButtons?: boolean;
};
type API = {
  /**
   * Programmatically trigger a swipe of the card in one of the valid directions `'left'`, `'right'`, `'up'` and `'down'`. This function, `swipe`, can be called on a reference of the TinderCard instance. Check the [example](https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js) code for more details on how to use this.
   *
   * @param dir The direction in which the card should be swiped. One of: `'left'`, `'right'`, `'up'` and `'down'`.
   */
  swipe(dir?: Direction): Promise<void>;

  /**
   * Restore swiped-card state. Use this function if you want to undo a swiped-card (e.g. you have a back button that shows last swiped card or you have a reset button. The promise is resolved once the card is returned
   */
  restoreCard(): Promise<void>;
};

export type Direction = "left" | "right" | "up" | "down";

export default function TinderCardCustom({
  users,
  withButtons = true,
}: TinderCardCustomProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(users.length - 1);
  const [_lastDirection, _setLastDirection] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);
  const canGoBack = currentIndex < users.length - 1;
  const canSwipe = currentIndex >= 0;

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map(() => createRef<API>()),
    [],
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    // eslint-disable-next-line react-compiler/react-compiler
    currentIndexRef.current = val;
    if (val === -1)
      setTimeout(() => {
        setIsLoading(true);
      }, 700);
  };

  // set last direction and decrease current index
  const swiped = (index: number) => {
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name: string, idx: number) => {
    console.info(`${name} (${idx}) left the screen!`, currentIndexRef.current);
  };

  const swipe = async (dir: Direction) => {
    if (canSwipe && currentIndex < users.length) {
      await childRefs[currentIndex].current?.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const _goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current?.restoreCard();
  };

  return (
    <>
      {/* //TODO When user swipes 2 times, CTA to join the app. */}
      <section className="relative grid">
        {users.map((user, index) => (
          <TinderCard
            ref={childRefs[index]}
            key={`${user.user_id}`}
            onSwipe={async (dir) => swiped(index)}
            onCardLeftScreen={() =>
              outOfFrame(user.username as string, user.user_id)
            } //?  have checked before rendering
            swipeRequirementType="position"
            swipeThreshold={390 / 3} //In px
            // preventSwipe={["down"]}
            //~ Prevent the swipe in all directions because new users are still rendering and causes bugs (only with mouse/ touch swipe). I am also disabling the buttons
            preventSwipe={["down", "up"]}
          >
            <PersonInfoCard user={user} isSwipeForbiden={false} />
          </TinderCard>
        ))}
        <ActionButtons swipe={swipe} className="my-8" />
      </section>
    </>
  );
}
