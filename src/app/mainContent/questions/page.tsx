"use client";
import { easy, hard, medium } from "@/data/dataQuestions";
import { AnyARecord } from "dns";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Questions() {
  const [waktu, setWaktu] = useState(15);
  const [randomQuestionsGenAlpha, setRandomQuestionsGenAlpha] =
    useState<any>(null);
  const [randomQuestionsMilennial, setRandomQuestionsMilennial] =
    useState<any>(null);
  const [randomQuestionsGenZ, setRandomQuestionsGenZ] = useState<any>(null);
  const getLevel = localStorage.getItem("level");
  const [points, setPoints] = useState(0);

  // useEffect(() => {
  //   if (waktu <= 0) return;

  //   const timer = setInterval(() => {
  //     setWaktu((prev) => prev - 1);
  //   }, 800);
  //   return () => clearInterval(timer);
  // }, [waktu]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * easy.length);
    setRandomQuestionsGenAlpha(easy[randomIndex]);
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * medium.length);
    setRandomQuestionsMilennial(medium[randomIndex]);
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * hard.length);
    setRandomQuestionsGenZ(hard[randomIndex]);
  }, []);

  function sourceImage() {
    if (getLevel === "genAlpha") {
      if (randomQuestionsGenAlpha !== null) {
        if (randomQuestionsGenAlpha.pathImage !== undefined) {
          return randomQuestionsGenAlpha.pathImage;
        }
      }
    }

    if (getLevel === "millenial") {
      if (randomQuestionsMilennial !== null) {
        if (randomQuestionsMilennial.pathImage !== undefined) {
          return randomQuestionsMilennial.pathImage;
        }
      }
    }

    if (getLevel === "genZ") {
      if (randomQuestionsGenZ !== null) {
        if (randomQuestionsGenZ.pathImage !== undefined) {
          return randomQuestionsGenZ.pathImage;
        }
      }
    }
  }

  function corrections(event: any) {
    // gen alpha
    if (getLevel === "genAlpha") {
      if (
        randomQuestionsGenAlpha?.soal ===
        "apa yang dikatakan kucing ini sehingga dia viral?"
      ) {
        if (event === "U ii a i o ui i a io") {
          return setPoints((prev) => prev + 10);
        } else {
          return setPoints((prev) => prev - 10);
        }
      }
      if (
        randomQuestionsGenAlpha?.soal ===
        "Apa nama karakter toilet jahat pada kartun ini"
      ) {
        if (event === "Skibidi Toilet") {
          return setPoints((prev) => prev + 10);
        } else {
          return setPoints((prev) => prev - 10);
        }
      }
    }

    // millenial
    if (getLevel === "millenial") {
      if (randomQuestionsMilennial?.soal === "apa nama pensil ini?") {
        if (event === "pensil inul") {
          return setPoints((prev) => prev + 10);
        } else {
          return setPoints((prev) => prev - 10);
        }
      }

      if (
        randomQuestionsMilennial?.soal ===
        "apa yang dikatakan ODGJ ini setelah tertangkap?"
      ) {
        if (event === "Baik, terimakasih atas kerjasamanya") {
          return setPoints((prev) => prev + 10);
        } else {
          return setPoints((prev) => prev - 10);
        }
      }
    }

    // gen-z
    if (getLevel === "genZ") {
      if (randomQuestionsGenZ?.soal === "siapa nama panjang keju ini") {
        if (event === "keju joget") {
          return setPoints((prev) => prev + 10);
        } else {
          return setPoints((prev) => prev - 10);
        }
      }

      if (randomQuestionsGenZ?.soal === "apa yang di katakan orang ini") {
        if (event === "dari mana duitnya") {
          return setPoints((prev) => prev + 10);
        } else {
          return setPoints((prev) => prev - 10);
        }
      }
    }
  }

  return (
    <div className="bg-slate-900 h-screen">
      <div className="w-11/12 mx-auto">
        <div className="w-1/5 pt-5 mx-auto">
          <h1 className="text-white text-center bg-slate-600 py-3 text-2xl font-bold rounded-xl">
            {waktu > 0 ? waktu : "Waktu Habis"}
          </h1>
        </div>
        <div>
          <div className="w-10/12 my-9 mx-auto flex justify-evenly items-center gap-x-5">
            <div className="basis-1/5 bg-amber-300 rounded-xl text-center h-28 font-semibold text-2xl">
              <h1 className="mt-3">SCORE</h1>
              <div className="mt-2">{points}</div>
            </div>
            <div className="basis-3/4 bg-slate-700 h-96 rounded-xl py-2">
              <h1 className="font-semibold text-2xl text-slate-200 text-center mb-3">
                {getLevel === "genAlpha"
                  ? randomQuestionsGenAlpha?.soal
                  : getLevel === "millenial"
                  ? randomQuestionsMilennial?.soal
                  : randomQuestionsGenZ?.soal}
              </h1>
              {sourceImage() && (
                <Image
                  src={sourceImage()}
                  alt="gambar pertannyaan"
                  className="w-1/3 mx-auto rounded-xl object-cover"
                  width={100}
                  height={100}
                  loading="lazy"
                />
              )}
            </div>
          </div>
          <ul className="text-white flex justify-evenly text-lg font-semibold">
            <li
              className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700"
              id="jawaban1"
              onClick={(e) => corrections(e.currentTarget.textContent)}
            >
              {getLevel === "genAlpha"
                ? randomQuestionsGenAlpha?.jawaban.ke1
                : getLevel === "millenial"
                ? randomQuestionsMilennial?.jawaban.ke1
                : randomQuestionsGenZ?.jawaban.ke1}
            </li>
            <li
              className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700"
              id="jawaban2"
              onClick={(e) => corrections(e.currentTarget.textContent)}
            >
              {getLevel === "genAlpha"
                ? randomQuestionsGenAlpha?.jawaban.ke2
                : getLevel === "millenial"
                ? randomQuestionsMilennial?.jawaban.ke2
                : randomQuestionsGenZ?.jawaban.ke2}
            </li>
            <li
              className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700"
              id="jawaban3"
              onClick={(e) => corrections(e.currentTarget.textContent)}
            >
              {getLevel === "genAlpha"
                ? randomQuestionsGenAlpha?.jawaban.ke3
                : getLevel === "millenial"
                ? randomQuestionsMilennial?.jawaban.ke3
                : randomQuestionsGenZ?.jawaban.ke3}
            </li>
            <li
              className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700"
              id="jawaban4"
              onClick={(e) => corrections(e.currentTarget.textContent)}
            >
              {getLevel === "genAlpha"
                ? randomQuestionsGenAlpha?.jawaban.ke4
                : getLevel === "millenial"
                ? randomQuestionsMilennial?.jawaban.ke4
                : randomQuestionsGenZ?.jawaban.ke4}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
