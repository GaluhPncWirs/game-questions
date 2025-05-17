import Image from "next/image";

export default function GameOver() {
  return (
    <div className="w-10/12 mx-auto text-slate-200 h-screen">
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className="text-6xl font-bold mb-7 text-center">GAME OVER</h1>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            BEST SCORE: <span>123</span>
          </h2>
          <p className="text-lg font-semibold">
            SCORE: <span>50</span>
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-x-10 items-center">
          <Image
            src={"/images/tombolUlang.png"}
            alt="return"
            width={300}
            height={300}
            className="w-1/2 cursor-pointer rounded-full hover:bg-amber-300"
          />
          <button className="cursor-pointer w-1/2 hover:bg-amber-300">
            HOME
          </button>
        </div>
      </div>
    </div>
  );
}
