import React from "react";
import axios from "axios";

export default function AboutMe() {
  const [user, setUser] = React.useState([]);

  // const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users/1")
      .then((response) => {
        setUser(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className=" pb-28 ">
        <div className="px-36">
          <h1 className="text-center mt-[12rem] underline text-white font-extrabold text-5xl font-family-quicksand">
            About Me
          </h1>
          {user.map((item) => (
            <h3 className="text-black bg-yellow-200 text-justify font-semibold py-3 px-10 text-xl rounded-xl shadow-xl font-family-satoshi mb-6 mt-20">
              {item.about}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}
