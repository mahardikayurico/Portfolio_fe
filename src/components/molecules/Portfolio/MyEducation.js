import React from "react";
import { IoIosSchool } from "react-icons/io";
import { BsArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";

export default function MyEducation() {
  const [education, setEducation] = React.useState([]);

  // const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/education/1")
      .then((response) => {
        setEducation(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="pt-[8rem]">
        <div className=" border-2 border-gray-300 bg-yellow-400 justify-around px-[29rem] flex flex-row">
          <IoIosSchool className=" font-extrabold text-5xl" />
          <h1 className="text-black font-extrabold text-5xl  font-family-quicksand bg-yellow-400 ">
            Education
          </h1>
        </div>
        <div className="mt-12  p-2 px-5 ml-4 rounded-xl bg-black">
          <ol className="text-center">
            {education.map((item) => (
              <li className="text-yellow-300 text-lg font-bold flex flex-row">
                <BsArrowRightCircleFill className="text-lg mr-4 mt-1" />
                <h1>{item.education}</h1>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
