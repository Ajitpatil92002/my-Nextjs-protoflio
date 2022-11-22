import Link from "next/link";
import { Projects } from "../data";
import ProjectList from "./ProjectList";
const Project = () => {
  let duration = 500;
  return (
    <>
      <section id="projects">
        <div className="container mx-auto flex flex-col mt-32 p-5 md:p-24">
          <h2 className="flex justify-center border-green border border-b-2 p-8 border-b-navy-blue text-3xl font-mono text-textlightWhite font-extrabold tracking-wide">
            Some Things I’ve Built
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-prj  md:p-14 mt-10 ">
            {Projects.map((prj, i) => {
              duration += 300;
              return (
                <ProjectList
                  key={i}
                  duration={duration}
                  title={prj.Title}
                  body={prj.Body}
                  githublink={prj.GithubLink}
                  weblink={prj.webLink}
                  Category={prj.Category}
                />
              );
            })}
          </div>
          <Link href={"/projects"} className="mt-4">
            <div
              style={{ margin: "auto" }}
              data-aos-duration="400"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              className="border-green border-2 w-36 text-center md:m-0 text-white p-4 rounded-md font-normal hover:bg-green-tint mt-2"
            >
              <span className="tracking-widest text-textlightWhite">
                Show More
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Project;
