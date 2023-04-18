import React from "react";
import SummaryMains from "../../components/organisms/Portfolio/SummaryMains";
import LayoutResponsive from "../../components/organisms/LayoutResponsive";

const HomePages = () => {
  return (
    <div className="bg-black">
      <LayoutResponsive />
      <div className="container flex lg:flex-row md:flex-row  flex-col lg:p-5 lg:mx-auto md:p-3 md:mx-auto w-full">
        <section className="lg:basis-[100%]  lg:ml-3 md:ml-3 ">
          <SummaryMains />
        </section>
      </div>
    </div>
  );
};

export default HomePages;
