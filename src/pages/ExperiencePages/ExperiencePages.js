import React from "react";
import LayoutResponsive from "../../components/organisms/LayoutResponsive";

const ExperiencePages = () => {
  return (
    <>
      <LayoutResponsive />
      <div className="container flex lg:flex-row md:flex-row flex-col lg:p-5 lg:mx-auto md:p-3 md:mx-auto w-full">
        <section className="lg:basis-[100%]  lg:ml-3 md:ml-3 ">
          <div>
            <div className="border-b-2 border-[#D1D0D366] p-3 lg:p-0 md:p-0 ">
              <div className="">
                <h1 className="text-3xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  Experience
                </h1>
                <h1 className="text-xl font-[700] text-center lg:text-start md:text-start font-family-quicksand">
                  WebGIS Developer, Pusat Studi Managemen Bencana UPN “Veteran”
                  Yogyakarta Des 2021- Sep 2022
                </h1>
                <h3 className="text-[#98949E] font-family-satoshi mb-6">
                  <ol>
                    <li>
                      - Collecting geospatial data, processing geospatial data,
                      designing and building MySql Database System
                    </li>
                    <li>
                      - Building Fullstack WebGIS using Leaflet js, HTML, CSS,
                      and CodeIgniter
                    </li>
                    <li>
                      - Conducting SUS and Black Box Testing of WebGIS
                      Development Results
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

export default ExperiencePages;
