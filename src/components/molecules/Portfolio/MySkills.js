import React from "react";
import { GiSkills } from "react-icons/gi";

export default function MySkills() {
  return (
    <div>
      <div>
        <div className=" pt-28 ">
          <div className="px-36">
            <div className="bg-yellow-400 mt-[8rem] mr-[47rem] flex flex-row rounded-lg p-1">
              <GiSkills className="  text-black  font-extrabold text-5xl mr-2" />
              <h1 className="  text-black  font-extrabold text-5xl font-family-quicksand">
                Skills
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
                  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black text-yellow-400">
                    <img
                      className="w-full"
                      src="/img/card-top.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-yellow-400">
                        The Coldest Sunset
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
