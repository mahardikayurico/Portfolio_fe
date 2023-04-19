import React from "react";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillEdit,
} from "react-icons/ai";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function ProfileMains() {
  return (
    <div className="basis-[50%]">
      <div className=" p-3 lg:p-0 md:p-0 ">
        <div className="border-b-2 border-[#D1D0D366] mt-12 text-center ">
          <h1 className="text-5xl font-[700] text-center text-white lg:text-start md:text-start font-family-quicksand">
            Hi There !
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
          <div className="flex flex-row">
            <button className="flex flex-row p-2 px-4 mt-7 mb-2 bg-yellow-300 rounded-xl shadow-xl hover:bg-yellow-900 hover:text-white font-semibold">
              <h1>About me</h1>
              <BsFillArrowDownCircleFill className="ml-3 mt-1 rotate-90 hover:rotate-0" />
            </button>
            <button className="flex flex-row p-2 px-4 ml-3 mt-7 mb-2 bg-yellow-300 rounded-xl shadow-xl hover:bg-yellow-900 hover:text-white font-semibold">
              <h1>Edit Profile</h1>
              <AiFillEdit className="ml-3 mt-1 " />
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-around mt-5 text-white">
          <div className="border-4 border-yellow-400 rounded-full ">
            <a href="https://www.linkedin.com/in/mahardikayurico">
              <AiOutlineLinkedin className="h-10 w-10 " />
            </a>
          </div>
          <div className="border-4 border-yellow-400 rounded-full">
            <a href="https://github.com/mahardikayurico">
              <AiFillGithub className="h-10 w-10" />
            </a>
          </div>
          <div className="border-4 border-yellow-400 rounded-full">
            <a href="https://wa.me/085713682950">
              <AiOutlineWhatsApp className="h-10 w-10" />
            </a>
          </div>
          <div className="border-4 border-yellow-400 rounded-full">
            <a href="mailto:mahardikayurico.my@gmail.com">
              <AiOutlineMail className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
