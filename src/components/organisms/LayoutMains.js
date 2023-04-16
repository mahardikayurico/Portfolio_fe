import React from "react";
import logo from "../../assets/images/square.png";
import MenuLayouts from "../molecules/MenuLayouts";
import profile from "../../assets/images/profile.png";
import { RiLogoutBoxFill } from "react-icons/ri";

export default function LayoutMains() {
  return (
    <div className="hidden lg:block md:block">
      <section className="basis-[15%] border-r-2 border-[#D1D0D366] ">
        <MenuLayouts />
      </section>
    </div>
  );
}
