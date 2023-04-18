import React from "react";
import ProfileMains from "../../molecules/Portfolio/ProfileMains";
import profile from "../../../assets/images/profile.jpg";
export default function SummaryMains() {
  return (
    <div className="bg-background-header bg-opacity-80">
      <div className="flex flex-row pt-20 ">
        <div className="basis-[50%] ">
          <img src={profile} className="rounded-full h-72 w-72 mx-auto" />
        </div>
        <ProfileMains />
      </div>
    </div>
  );
}
