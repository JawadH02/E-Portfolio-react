import "../index.css";
import { projects } from "../Data/projectsData";
import { useNavigate } from "react-router-dom";
import { Project } from "./ui/Project";
export const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="projects__header">
            <h1 className="section__title">
              Here are some of my <span className="blue">projects</span>
            </h1>
            {projects.length > 3 && (
              <button
                className="header__button"
                onClick={() => {
                  navigate("/projects");
                  window.scroll(0, 0);
                }}
              >
                View All
              </button>
            )}
          </div>
          <ul className="project__list">
            {projects.slice(0, 3).map((project) => {
              return <Project {...project} key={project.id} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
