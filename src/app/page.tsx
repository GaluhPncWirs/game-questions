import Image from "next/image";
import Link from "next/link";

export default function MainMenu() {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="flex justify-center items-center text-white flex-col h-full">
        <div className="text-8xl font-bold text-center">
          <h1>GUESS</h1>
          <h1>MEME</h1>
        </div>
        <h2 className="text-4xl font-semibold my-7">Are You Ready ?</h2>
        <Link
          href="/mainContent/choseLevel"
          className="w-1/6 hover:bg-amber-400 rounded-2xl px-4"
        >
          <Image
            src="/images/playButton.png"
            alt="btn play"
            width={100}
            height={50}
            className="w-full brightness-125"
          />
        </Link>
      </div>
    </div>
  );
}
