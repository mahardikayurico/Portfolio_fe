import React from "react";
import axios from "axios";

export default function MyProjects() {
  const [projects, setProjects] = React.useState([]);

  // const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/projects/1")
      .then((response) => {
        setProjects(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className=" pt-28 ">
        <div className="px-36">
          <h1 className="text-center mt-[8rem]  text-black bg-yellow-400 mx-auto font-extrabold text-5xl font-family-quicksand">
            My Projects
          </h1>
          <div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {projects.map((item) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black text-yellow-400">
                  <img
                    className="w-full"
                    src="/img/card-top.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-yellow-400">
                      {item.project_name}
                    </div>
                    <p className="text-gray-700 text-base text-yellow-400">
                      {item.description}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      github
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      demo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
