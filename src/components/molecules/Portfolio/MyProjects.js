import React from "react";

export default function MyProjects() {
  return (
    <div>
      <div className=" pt-28 ">
        <div className="px-36">
          <h1 className="text-center mt-[8rem]  text-black bg-yellow-400 mx-auto font-extrabold text-5xl font-family-quicksand">
            My Projects
          </h1>
          <div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[1, 2, 3, 4, 5].map(() => (
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
                    <p className="text-gray-700 text-base text-yellow-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      github
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      demo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
