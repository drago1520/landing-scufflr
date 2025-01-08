import { Direction } from "./Tinder-card";
import Image from 'next/image'

type ActionButtonsProps = {
  swipe: (dir: Direction) => Promise<void>;
  className: string;
};

export function ActionButtons({ swipe, className }: ActionButtonsProps) {
  return (
    <section
      className={`flex justify-center items-end relative gap-8 ${className}`}
    >
      <button
        className="action-button p-3 h-16 w-16 bg-none "
        onClick={() => swipe("left")}
      >
        <Image src="/svg/peace-dove-svgrepo-com(1).svg" alt="peace dove" width={48} height={48} />
      </button>

      <button
        className="action-button h-12 w-12 p-1.5 bg-none "
        onClick={() => swipe("up")}
      >
        <Image src="/svg/punch-blast-svgrepo-com.svg" alt="super smash" width={48} height={48} />
      </button>

      <button
        className="action-button border-2 border-[--color-primary] h-16 w-16 bg-none flex justify-center items-center"
        onClick={() => swipe("right")}
      >
        <Image src="/svg/punch-svgrepo-com.svg" alt="punch" className="h-12" width={48} height={48} />
      </button>
    </section>
  );
}
