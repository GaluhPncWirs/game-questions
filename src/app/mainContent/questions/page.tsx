import Image from "next/image";
import Link from "next/link";

export default function ChoseenLevel() {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="w-11/12 mx-auto">
        <div className="w-1/5 pt-5 mx-auto">
          <h1 className="text-white text-center bg-slate-600 py-3 text-2xl font-bold rounded-xl">
            00:10
          </h1>
        </div>
        <div className="w-3/5 bg-slate-700 h-96 mx-auto rounded-xl my-9">
          <img src="" alt="gambar pertannyaan" />
          <h1 className="font-semibold text-2xl text-slate-200 text-center">
            siapakah nama tokoh ini
          </h1>
        </div>
        <ul className="text-white flex justify-evenly">
          <li className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700">
            lorem lorem
          </li>
          <li className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700">
            ipsum ipsum
          </li>
          <li className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700">
            dolor dolor
          </li>
          <li className="bg-slate-600 cursor-pointer py-6 px-10 rounded-xl hover:bg-slate-700">
            amet amet
          </li>
        </ul>
      </div>
    </div>
  );
}
