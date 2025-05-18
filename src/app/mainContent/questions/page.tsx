"use client";
import { easy } from "@/data/dataSoalEasy";
import { medium } from "@/data/dataSoalMedium";
import { hard } from "@/data/dataSoalHard";
import Image from "next/image";
import { useEffect, useState } from "react";
import GameOver from "@/app/component/gameOver/gameOver";

export default function QuestionsPage() {
  const [waktu, setWaktu] = useState(30);
  const [randomQuestionsGenAlpha, setRandomQuestionsGenAlpha] =
    useState<any>(null);
  const [randomQuestionsMilennial, setRandomQuestionsMilennial] =
    useState<any>(null);
  const [randomQuestionsGenZ, setRandomQuestionsGenZ] = useState<any>(null);
  const [points, setPoints] = useState<number>(0);
  const [levelGame, setLevelGame] = useState<string>("");
  const [timesOut, setTimesOut] = useState<boolean>(false);

  useEffect(() => {
    const getLevel = localStorage.getItem("level");
    if (getLevel) {
      setLevelGame(getLevel);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu((prev) => prev - 1);
    }, 800);

    if (waktu <= 0) {
      setTimesOut(true);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [waktu]);

  useEffect(() => {
    if (timesOut === false) {
      setPoints(0);
      setWaktu(30);
    }
  }, [timesOut]);

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
    if (levelGame === "genAlpha") {
      if (randomQuestionsGenAlpha !== null) {
        if (randomQuestionsGenAlpha.pathImage !== undefined) {
          return randomQuestionsGenAlpha.pathImage;
        }
      }
    }

    if (levelGame === "millenial") {
      if (randomQuestionsMilennial !== null) {
        if (randomQuestionsMilennial.pathImage !== undefined) {
          return randomQuestionsMilennial.pathImage;
        }
      }
    }

    if (levelGame === "genZ") {
      if (randomQuestionsGenZ !== null) {
        if (randomQuestionsGenZ.pathImage !== undefined) {
          return randomQuestionsGenZ.pathImage;
        }
      }
    }
  }

  function getNextQuestion() {
    if (levelGame === "genAlpha") {
      const randomIndex = Math.floor(Math.random() * easy.length);
      setRandomQuestionsGenAlpha(easy[randomIndex]);
    } else if (levelGame === "millenial") {
      const randomIndex = Math.floor(Math.random() * medium.length);
      setRandomQuestionsMilennial(medium[randomIndex]);
    } else if (levelGame === "genZ") {
      const randomIndex = Math.floor(Math.random() * hard.length);
      setRandomQuestionsGenZ(hard[randomIndex]);
    }
  }

  function corrections(event: any) {
    // gen alpha
    if (levelGame === "genAlpha") {
      if (
        randomQuestionsGenAlpha?.soal ===
          "apa yang dikatakan kucing ini sehingga dia viral?" &&
        event === randomQuestionsGenAlpha.jawabanBenar
      ) {
        getNextQuestion();
        setPoints((prev) => prev + 10);
      } else if (
        randomQuestionsGenAlpha?.soal === "Apa nama karakter toilet ini" &&
        event === randomQuestionsGenAlpha.jawabanBenar
      ) {
        getNextQuestion();
        setPoints((prev) => prev + 10);
      } else {
        setPoints((prev) => prev - 10);
      }
    }

    // millenial
    if (levelGame === "millenial") {
      if (
        randomQuestionsMilennial?.soal === "apa nama pensil ini?" &&
        event === randomQuestionsMilennial.jawabanBenar
      ) {
        getNextQuestion();
        setPoints((prev) => prev + 10);
      } else if (
        randomQuestionsMilennial?.soal ===
          "Apa yang Dikatakan ODGJ ini Setelah Tertangkap?" &&
        event === randomQuestionsMilennial.jawabanBenar
      ) {
        getNextQuestion();
        setPoints((prev) => prev + 10);
      } else {
        setPoints((prev) => prev - 10);
      }
    }

    // gen-z
    if (levelGame === "genZ") {
      if (
        randomQuestionsGenZ?.soal === "siapa nama panjang keju ini" &&
        event === randomQuestionsGenZ.jawabanBenar
      ) {
        getNextQuestion();
        setPoints((prev) => prev + 10);
      } else if (
        randomQuestionsGenZ?.soal === "apa yang di katakan orang ini" &&
        event === randomQuestionsGenZ.jawabanBenar
      ) {
        getNextQuestion();
        setPoints((prev) => prev + 10);
      } else {
        setPoints((prev) => prev - 10);
      }
    }
  }

  return (
    <div className="bg-slate-900 h-screen">
      <div className="w-11/12 mx-auto">
        {timesOut === true ? (
          <GameOver points={points} setTimesOut={setTimesOut} />
        ) : (
          <div>
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
                  <h1 className="font-semibold text-2xl text-slate-200 text-center mb-8">
                    {levelGame === "genAlpha"
                      ? randomQuestionsGenAlpha?.soal
                      : levelGame === "millenial"
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
                  {levelGame === "genAlpha"
                    ? randomQuestionsGenAlpha?.jawaban.ke1
                    : levelGame === "millenial"
                    ? randomQuestionsMilennial?.jawaban.ke1
                    : randomQuestionsGenZ?.jawaban.ke1}
                </li>
                <li
                  className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700"
                  id="jawaban2"
                  onClick={(e) => corrections(e.currentTarget.textContent)}
                >
                  {levelGame === "genAlpha"
                    ? randomQuestionsGenAlpha?.jawaban.ke2
                    : levelGame === "millenial"
                    ? randomQuestionsMilennial?.jawaban.ke2
                    : randomQuestionsGenZ?.jawaban.ke2}
                </li>
                <li
                  className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700"
                  id="jawaban3"
                  onClick={(e) => corrections(e.currentTarget.textContent)}
                >
                  {levelGame === "genAlpha"
                    ? randomQuestionsGenAlpha?.jawaban.ke3
                    : levelGame === "millenial"
                    ? randomQuestionsMilennial?.jawaban.ke3
                    : randomQuestionsGenZ?.jawaban.ke3}
                </li>
                <li
                  className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700"
                  id="jawaban4"
                  onClick={(e) => corrections(e.currentTarget.textContent)}
                >
                  {levelGame === "genAlpha"
                    ? randomQuestionsGenAlpha?.jawaban.ke4
                    : levelGame === "millenial"
                    ? randomQuestionsMilennial?.jawaban.ke4
                    : randomQuestionsGenZ?.jawaban.ke4}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
