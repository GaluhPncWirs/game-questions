import Image from "next/image";
import Link from "next/link";

export default function ChoseenLevel() {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="w-11/12 mx-auto">
        <h1 className="text-8xl font-bold text-center text-white pt-10">
          LEVEL
        </h1>
        <div className="h-1/2 mt-26 flex items-center justify-center gap-x-10">
          <Link
            href=""
            className="basis-1/3 flex flex-col justify-center relative cursor-default"
          >
            <h1 className="font-semibold text-2xl text-center bg-slate-300 rounded-lg">
              GEN ALPHA
            </h1>
            <Image
              src="/images/labu.png"
              alt="labu"
              height={100}
              width={100}
              className="w-full object-cover"
            ></Image>
            <div className="hover:bg-slate-300 rounded-full h-44 w-44 absolute opacity-50 right-24 top-16 cursor-pointer"></div>
            <h2 className="text-white font-semibold text-2xl text-center">
              Mengarah ke mode mudah
            </h2>
          </Link>
          <Link
            href=""
            className="basis-1/3 flex flex-col justify-center relative cursor-default"
          >
            <h1 className="font-semibold text-2xl text-center bg-slate-300 rounded-lg">
              MILENIAL
            </h1>
            <Image
              src="/images/labu.png"
              alt="labu"
              height={100}
              width={100}
              className="w-full object-cover"
            ></Image>
            <div className="hover:bg-slate-300 rounded-full h-44 w-44 absolute opacity-50 right-24 top-16 cursor-pointer"></div>
            <h2 className="text-white font-semibold text-2xl text-center">
              Mengarah ke mode sedang
            </h2>
          </Link>
          <Link
            href=""
            className="basis-1/3 flex flex-col justify-center relative cursor-default"
          >
            <h1 className="font-semibold text-2xl text-center bg-slate-300 rounded-lg">
              GEN Z
            </h1>
            <Image
              src="/images/labu.png"
              alt="labu"
              height={100}
              width={100}
              className="w-full object-cover"
            ></Image>
            <div className="hover:bg-slate-300 rounded-full h-44 w-44 absolute opacity-50 right-24 top-16 cursor-pointer"></div>
            <h2 className="text-white font-semibold text-2xl text-center">
              Mengarah ke mode sulit
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
