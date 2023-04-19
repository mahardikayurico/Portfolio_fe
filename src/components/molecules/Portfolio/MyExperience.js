import React from "react";
import { GrMapLocation } from "react-icons/gr";

export default function MyExperience() {
  return (
    <div>
      <div className="pt-[8rem] flex flex-row">
        <div className="basis-[30%] rounded-xl ml-2 bg-yellow-400 items-stretch flex flex-row">
          <GrMapLocation className=" font-extrabold text-5xl self-center ml-5" />
          <h1 className="text-black font-extrabold text-5xl self-center ml-3 font-family-quicksand bg-yellow-400 ">
            Experience
          </h1>
        </div>
        <div className="basis-[70%] ml-3  p-2 px-5 ml-4 rounded-xl  bg-black">
          <h1 className="text-xl font-[700] text-yellow-300 text-center lg:text-start md:text-start font-family-quicksand">
            WebGIS Developer, Pusat Studi Managemen Bencana UPN “Veteran”
            Yogyakarta Des 2021- Sep 2022
          </h1>
          <h3 className="text-yellow-300 font-family-satoshi mb-6">
            <ol>
              <li>
                - Collecting geospatial data, processing geospatial data,
                designing and building MySql Database System
              </li>
              <li>
                - Building Fullstack WebGIS using Leaflet js, HTML, CSS, and
                CodeIgniter
              </li>
              <li>
                - Conducting SUS and Black Box Testing of WebGIS Development
                Results
              </li>
            </ol>
          </h3>
        </div>
      </div>
    </div>
  );
}
