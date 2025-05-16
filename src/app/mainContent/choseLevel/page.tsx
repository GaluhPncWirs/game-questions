"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ChoseenLevel() {
  const { push } = useRouter();
  function choosenLevel(event: any) {
    if (event === "gen-alpha") {
      localStorage.setItem("level", "genAlpha");
      push("/mainContent/questions");
    }
    if (event === "milenial") {
      localStorage.setItem("level", "millenial");
      push("/mainContent/questions");
    }
    if (event === "gen-z") {
      localStorage.setItem("level", "genZ");
      push("/mainContent/questions");
    }
  }

  return (
    <div className="bg-slate-900 h-screen">
      <div className="w-11/12 mx-auto">
        <h1 className="text-8xl font-bold text-center text-white pt-10">
          LEVEL
        </h1>
        <div className="h-1/2 mt-26 flex items-center justify-center gap-x-10">
          <div className="basis-1/3 flex flex-col justify-center cursor-default">
            <h1 className="font-semibold text-2xl text-center bg-slate-300 rounded-lg">
              GEN ALPHA
            </h1>
            <Image
              src="/images/labu.png"
              alt="labu"
              height={100}
              width={100}
              className="w-full object-cover cursor-pointer"
              id="gen-alpha"
              onClick={(event) => choosenLevel(event.currentTarget.id)}
            ></Image>
            <h2 className="text-white font-semibold text-2xl text-center">
              Mengarah ke mode mudah
            </h2>
          </div>
          <div className="basis-1/3 flex flex-col justify-center relative cursor-default">
            <h1 className="font-semibold text-2xl text-center bg-slate-300 rounded-lg">
              MILENIAL
            </h1>
            <Image
              src="/images/labu.png"
              alt="labu"
              height={100}
              width={100}
              className="w-full object-cover cursor-pointer"
              id="milenial"
              onClick={(event) => choosenLevel(event.currentTarget.id)}
            ></Image>
            <h2 className="text-white font-semibold text-2xl text-center">
              Mengarah ke mode sedang
            </h2>
          </div>
          <div className="basis-1/3 flex flex-col justify-center relative cursor-default">
            <h1 className="font-semibold text-2xl text-center bg-slate-300 rounded-lg">
              GEN Z
            </h1>
            <Image
              src="/images/labu.png"
              alt="labu"
              height={100}
              width={100}
              className="w-full object-cover cursor-pointer"
              id="gen-z"
              onClick={(event) => choosenLevel(event.currentTarget.id)}
            ></Image>
            <h2 className="text-white font-semibold text-2xl text-center">
              Mengarah ke mode sulit
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
