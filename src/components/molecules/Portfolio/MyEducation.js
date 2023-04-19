import React from "react";
import { IoIosSchool } from "react-icons/io";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function MyEducation() {
  return (
    <div>
      <div className="pt-[8rem]">
        <div className=" border-2 border-gray-300 bg-yellow-400 justify-around px-[29rem] flex flex-row">
          <IoIosSchool className=" font-extrabold text-5xl" />
          <h1 className="text-black font-extrabold text-5xl  font-family-quicksand bg-yellow-400 ">
            Education
          </h1>
        </div>
        <div className="mt-12  p-2 px-5 ml-4 rounded-xl bg-black">
          <ol className="text-center">
            <li className="text-yellow-300 text-lg font-bold flex flex-row">
              <BsArrowRightCircleFill className="text-lg mr-4 mt-1" />
              <h1>
                Fullstack Website Development, Fazztrack Bootcamp Nov 2022 - Mar
                2023
              </h1>
            </li>
            <li className="text-yellow-300 text-lg font-bold flex flex-row">
              <BsArrowRightCircleFill className="text-lg mr-4 mt-1" />
              <h1>
                Bachelor’s degree in Geodesy Informatics Engineering, UPN
                “Veteran” Yogyakarta Aug 2018 – Okt 2022
              </h1>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
