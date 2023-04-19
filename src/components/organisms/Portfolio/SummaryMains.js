import React from "react";
import ProfileMains from "../../molecules/Portfolio/ProfileMains";
import profile from "../../../assets/images/profile.jpg";
import AboutMe from "../../molecules/Portfolio/AboutMe";
import MyEducation from "../../molecules/Portfolio/MyEducation";
import MyExperience from "../../molecules/Portfolio/MyExperience";
import MyProjects from "../../molecules/Portfolio/MyProjects";
import MySkills from "../../molecules/Portfolio/MySkills";
import HonorAwards from "../../molecules/Portfolio/HonorAwards";
export default function SummaryMains() {
  return (
    <div className="bg-background-header bg-opacity-80 bg-cover bg-no-repeat">
      <div className="flex flex-row pt-20 ">
        <div className="basis-[50%] mt-8">
          <img
            src={profile}
            className="rounded-full h-72 w-72 mx-auto border-2 border-gray-300 shadow-xl"
          />
        </div>
        <ProfileMains />
      </div>
      <AboutMe />
      <MyEducation />
      <MyExperience />
      <MyProjects />
      <MySkills />
      <HonorAwards />
    </div>
  );
}
