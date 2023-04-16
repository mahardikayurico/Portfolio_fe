import React from "react";
import PortfolioMains from "../../components/organisms/Portfolio/PortfolioMains";
// import LayoutMains from "../../components/organisms/LayoutMains";
import LayoutResponsive from "../../components/organisms/LayoutResponsive";

const ProjectPages = () => {
  return (
    <>
      <LayoutResponsive />
      <div className="container flex lg:flex-row md:flex-row flex-col lg:p-5 lg:mx-auto md:p-3 md:mx-auto w-full">
        <section className="lg:basis-[100%]  lg:ml-3 md:ml-3 ">
          <div>
            <div className="border-b-2 border-[#D1D0D366] p-3 lg:p-0 md:p-0 ">
              <div className="">
                <h1 className="text-3xl font-[700] text-center mb-5 lg:text-start md:text-start font-family-quicksand">
                  Project
                </h1>
                <h1 className="text-xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  ● Fullstack CoffeeShop Website
                </h1>
                <h3 className="text-[#98949E] font-family-satoshi mb-6">
                  <ol>
                    <li>- Designing and building PostgreSQL Database System</li>
                    <li>
                      - Development Fullstack Web using a framework/library Node
                      js, tailwind, and React js
                    </li>
                  </ol>
                </h3>
                <h1 className="text-xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  ● Team Lead in Fullstack Hiringme Website
                </h1>
                <h3 className="text-[#98949E] font-family-satoshi mb-6">
                  <ol>
                    <li>- Managed team to develop website Hiringme </li>
                    <li>- Designing and building PostgreSQL Database System</li>
                    <li>
                      - Development Fullstack website using framework/library
                      Node js, React js, and tailwind
                    </li>
                  </ol>
                </h3>
                <h1 className="text-xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  ● Fullstack Fazzpay Website
                </h1>
                <h3 className="text-[#98949E] font-family-satoshi mb-6">
                  <ol>
                    <li>
                      - Designing and building PostgreSQL Database System{" "}
                    </li>
                    <li>
                      - Development Fullstack Web using a framework/library Node
                      js, tailwind, and Next js
                    </li>
                  </ol>
                </h3>
                <h1 className="text-xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  ● Fullstack Tickitz Website
                </h1>
                <h3 className="text-[#98949E] font-family-satoshi mb-6">
                  <ol>
                    <li>- Designing and building PostgreSQL Database System</li>
                    <li>
                      - Development Fullstack Web using a framework/library Node
                      js, tailwind, and React js
                    </li>
                  </ol>
                </h3>
                <h1 className="text-xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  ● CoffeeShop Mobile App
                </h1>
                <h3 className="text-[#98949E] font-family-satoshi mb-6">
                  <ol>
                    <li>
                      - Development Mobile App using a framework/library React
                      Native
                    </li>
                  </ol>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectPages;
