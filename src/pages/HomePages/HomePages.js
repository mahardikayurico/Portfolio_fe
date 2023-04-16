import React from "react";
import PortfolioMains from "../../components/organisms/Portfolio/PortfolioMains";
// import LayoutMains from "../../components/organisms/LayoutMains";
import LayoutResponsive from "../../components/organisms/LayoutResponsive";

const HomePages = () => {
  return (
    <>
      <LayoutResponsive />
      <div className="container flex lg:flex-row md:flex-row flex-col lg:p-5 lg:mx-auto md:p-3 md:mx-auto w-full">
        <section className="lg:basis-[100%]  lg:ml-3 md:ml-3 ">
          <PortfolioMains />
        </section>
      </div>
    </>
  );
};

export default HomePages;
