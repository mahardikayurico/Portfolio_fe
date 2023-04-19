import React from "react";
import { BsAward } from "react-icons/bs";

export default function HonorAwards() {
  return (
    <div>
      <div className="pt-[8rem] px-28 flex flex-row pb-20">
        <div className="basis-[30%] rounded-xl ml-2 bg-yellow-400 items-stretch flex flex-row">
          <BsAward className=" font-extrabold text-3xl self-center ml-5" />
          <h1 className="text-black font-extrabold text-3xl self-center ml-3 font-family-quicksand bg-yellow-400 ">
            Honor and Awards
          </h1>
        </div>
        <div className="basis-[70%] ml-3  p-2 px-5 ml-4 rounded-xl  bg-black">
          <h3 className="text-yellow-300 text-xl font-[700] font-family-satoshi mb-3">
            <ol>
              <li>
                - Speaker in Introduction to Basic WebGIS Development held by
                Bootcamp Hi Spatial. January, 2023
              </li>
              <li className="mt-3">
                - 2st Runner up of National Essay Competition Greeneration held
                by Himpunan Mahasiswa Teknik Lingkungan, UPN “Veteran”
                Yogyakarta. November, 2020
              </li>
            </ol>
          </h3>
        </div>
      </div>
    </div>
  );
}
