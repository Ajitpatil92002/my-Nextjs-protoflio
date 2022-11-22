import { useState } from "react";
import Model from "../components/Model";
import Navbar from "../components/Navbar";
import PrjList from "../components/PrjList";
import { ProjectLists } from "../data";

const ProjectsPage = () => {
  let duration = 300;
  const [projects, setProjects] = useState(ProjectLists);
  const [showModel, setshowModel] = useState(false);
  const [ModelData, setModelData] = useState({});
  const handlefilterProjects = (value) => {
    const filteredProjects = ProjectLists.filter((items) => {
      return items.Category.includes(value);
    });
    setProjects(filteredProjects);
  };

  const handleModel = (list) => {
    setshowModel(!showModel);
    setModelData(list);
  };

  return (
    <>
      <div className="bg-navy-blue">
        <Navbar />
        <div className="container mx-auto py-2 px-5 flex justify-center mt-2 md:mt-20">
          <div className="flex flex-col">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
              className="text-textlightWhite font-bold opacity-80 text-4xl md:text-5xl text-center"
            >
              A list of things I’ve worked on
            </div>
            <div className="flex flex-row flex-wrap justify-center text-textlightWhite font-semibold space-x-1 space-y-2 mt-4 md:space-x-4">
              <span></span>
              <span
                className="bg-light-navy p-2 text-sm cursor-pointer opacity-90 hover:bg-opacity-25"
                onClick={() => {
                  setProjects(ProjectLists);
                }}
              >
                All Projects
              </span>

              <span
                className="bg-light-navy p-2 text-sm cursor-pointer opacity-90 hover:bg-opacity-25"
                onClick={() => {
                  handlefilterProjects("JavaScript");
                }}
              >
                JavaScript
              </span>
              <span
                className="bg-light-navy p-2 text-sm cursor-pointer opacity-90 hover:bg-opacity-25"
                onClick={() => {
                  handlefilterProjects("React.JS");
                }}
              >
                React.JS
              </span>
              <span
                className="bg-light-navy p-2 text-sm cursor-pointer opacity-90 hover:bg-opacity-25"
                onClick={() => {
                  handlefilterProjects("Express.JS");
                }}
              >
                Express.JS
              </span>
              <span
                className="bg-light-navy p-2 text-sm cursor-pointer opacity-90 hover:bg-opacity-25"
                onClick={() => {
                  handlefilterProjects("Tailwind Css");
                }}
              >
                Tailwind Css
              </span>
              <span
                className="bg-light-navy p-2 text-sm cursor-pointer opacity-90 hover:bg-opacity-25"
                onClick={() => {
                  handlefilterProjects("MonogoDB");
                }}
              >
                MonogoDB
              </span>
              <span
                className="bg-light-navy p-2 text-sm cursor-pointer opacity-90 hover:bg-opacity-25"
                onClick={() => {
                  handlefilterProjects("E.JS");
                }}
              >
                E.JS
              </span>
              <span
                className="bg-light-navy p-2 text-sm cursor-pointer opacity-90 hover:bg-opacity-25"
                onClick={() => {
                  handlefilterProjects("API");
                }}
              >
                API
              </span>
            </div>
            <div className="flex flex-col mt-8 md:mt-14">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                className="text-textlightWhite opacity-80 font-bold uppercase border-b border-b-green pb-4"
              >
                Project List’s
              </div>
              {projects.map((list, i) => {
                duration += 200;
                return (
                  <PrjList
                    key={i}
                    list={list}
                    duration={duration}
                    handleModel={handleModel}
                  />
                );
              })}
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {showModel && <Model project={ModelData} handleModel={handleModel} />}
    </>
  );
};

export default ProjectsPage;
