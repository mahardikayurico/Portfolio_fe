import React from "react";

export default function ProfileMains() {
  return (
    <div className="basis-[50%]">
      <div className=" p-3 lg:p-0 md:p-0 ">
        <div className="border-b-2 border-[#D1D0D366] mt-12 text-center ">
          <h1 className="text-5xl font-[700] text-center text-white lg:text-start md:text-start font-family-quicksand">
            Hi Guys!
          </h1>
          <h1 className="text-4xl text-white font-[700] mt-6 text-center lg:text-start md:text-start font-family-quicksand">
            Im{" "}
            <span className="bg-yellow-300 text-black font-bold rounded-md p-1">
              Mahardika Yurico Billian
            </span>
          </h1>
          <h1 className="text-2xl text-white font-[700] mt-4 text-center lg:text-start md:text-start font-family-quicksand">
            I am into{" "}
            <span className=" text-yellow-500  font-bold rounded-md p-1">
              {" "}
              Full Stack Developer
            </span>
          </h1>
          <button className="p-2 px-4 mt-7 mb-2 bg-yellow-300 rounded-xl shadow-xl hover:bg-yellow-900 hover:text-white font-semibold">
            About me{" "}
          </button>
          {/* <h3 className="text-[#98949E] font-family-satoshi mb-6">
            I am a Geomatics Engineering Fresh graduate with a field of study
            Interest namely WebGIS Development. During college, I actively
            participated in organizations, so I have the ability in public
            speaking, time management, teamwork, and critical thinking. After
            graduating from university, I took part in a Fullstack Website
            Development Bootcamp, so I could improve my skills as a Web
            Developer, by learning programming languages, and web technologies,
            along with various frameworks/libraries.
          </h3> */}
        </div>
        <div className="flex flex-row justify-around mt-5 text-white">
          <div>linkedin</div>
          <div>Github</div>
          <div>Email</div>
          <div>What`s App</div>
        </div>
      </div>
    </div>
  );
}
