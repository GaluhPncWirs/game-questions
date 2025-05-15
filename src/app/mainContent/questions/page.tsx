"use client";
import { hard } from "@/data/dataQuestions";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Questions() {
  const [waktu, setWaktu] = useState(15);

  useEffect(() => {
    if (waktu <= 0) return;

    const timer = setInterval(() => {
      setWaktu((prev) => prev - 1);
    }, 800);
    return () => clearInterval(timer);
  }, [waktu]);

  return (
    <div className="bg-slate-900 h-screen">
      <div className="w-11/12 mx-auto">
        <div className="w-1/5 pt-5 mx-auto">
          <h1 className="text-white text-center bg-slate-600 py-3 text-2xl font-bold rounded-xl">
            {waktu > 0 ? waktu : "Waktu Habis"}
          </h1>
        </div>
        {hard.map((item) => (
          <div key={item.id}>
            <div className="w-10/12 my-9 mx-auto flex justify-evenly items-center gap-x-5">
              <div className="basis-1/5 bg-amber-300 rounded-xl text-center h-28 font-semibold text-2xl">
                <h1 className="mt-3">SCORE</h1>
                <div className="mt-2">12</div>
              </div>
              <div className="basis-3/4 bg-slate-700 h-96 rounded-xl py-2">
                <h1 className="font-semibold text-2xl text-slate-200 text-center mb-3">
                  {item.soal}
                </h1>
                <Image
                  src={item.pathImage}
                  alt="gambar pertannyaan"
                  className="w-1/2 mx-auto rounded-t-xl object-cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <ul className="text-white flex justify-evenly text-lg font-semibold">
              <li className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700">
                {item.jawaban.ke1}
              </li>
              <li className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700">
                {item.jawaban.ke2}
              </li>
              <li className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700">
                {item.jawaban.ke3}
              </li>
              <li className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700">
                {item.jawaban.ke4}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
