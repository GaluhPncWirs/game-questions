import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GameOver({
  points,
  setTimesOut,
}: {
  points: number;
  setTimesOut: any;
}) {
  const [bestScore, setBestScore] = useState(points);

  useEffect(() => {
    if (points > bestScore) {
      setBestScore(points);
      localStorage.setItem("bestScore", points.toString());
    }
  }, [points, bestScore]);

  useEffect(() => {
    const saved = localStorage.getItem("bestScore");
    if (saved) {
      setBestScore(parseInt(saved));
    }
  }, []);

  return (
    <div className="w-10/12 mx-auto text-slate-200 h-screen">
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className="text-6xl font-bold mb-7 text-center">GAME OVER</h1>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            BEST SCORE: <span>{bestScore}</span>
          </h2>
          <p className="text-lg font-semibold">
            SCORE: <span>{points}</span>
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-x-10 items-center">
          <Image
            src={"/images/tombolUlang.png"}
            alt="return"
            width={300}
            height={300}
            className="w-1/2 cursor-pointer rounded-full hover:bg-amber-300"
            onClick={() => setTimesOut(false)}
          />
          <Link className="w-1/2" href={"/mainContent/choseLevel"}>
            <Image
              src={"/images/icon_home.png"}
              alt="home"
              width={100}
              height={100}
              className="w-1/2 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
