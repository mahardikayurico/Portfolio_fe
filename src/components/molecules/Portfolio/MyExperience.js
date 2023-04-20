import React from "react";
import { GrMapLocation } from "react-icons/gr";
import axios from "axios";

export default function MyExperience() {
  const [experience, setExperience] = React.useState([]);

  // const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/experience/1")
      .then((response) => {
        setExperience(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="pt-[8rem] flex flex-row">
        <div className="basis-[30%] rounded-xl ml-2 bg-yellow-400 items-stretch flex flex-row">
          <GrMapLocation className=" font-extrabold text-5xl self-center ml-5" />
          <h1 className="text-black font-extrabold text-5xl self-center ml-3 font-family-quicksand bg-yellow-400 ">
            Experience
          </h1>
        </div>
        {experience.map((item) => (
          <div className="basis-[70%] ml-3  p-2 px-5 ml-4 rounded-xl  bg-black">
            <h1 className="text-xl font-[700] text-yellow-300 text-center lg:text-start md:text-start font-family-quicksand">
              {item.experience_name}
            </h1>
            <h3 className="text-yellow-300 font-family-satoshi mb-6">
              {item.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
