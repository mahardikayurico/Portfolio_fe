import React from "react";

import LayoutResponsive from "../../components/organisms/LayoutResponsive";

const EducationPages = () => {
  return (
    <>
      <LayoutResponsive />
      <div className="container flex lg:flex-row md:flex-row flex-col lg:p-5 lg:mx-auto md:p-3 md:mx-auto w-full">
        <section className="lg:basis-[100%]  lg:ml-3 md:ml-3 ">
          <div>
            <div className="border-b-2 border-[#D1D0D366] p-3 lg:p-0 md:p-0 ">
              <div className="">
                <h1 className="text-3xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  Education :
                </h1>
                <h1 className="text-xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  Fullstack Website Development, Fazztrack Bootcamp Nov 2022 -
                  Mar 2023
                </h1>
                <h1 className="text-xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  Bachelor’s degree in Geodesy Informatics Engineering, UPN
                  “Veteran” Yogyakarta Aug 2018 – Okt 2022
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EducationPages;