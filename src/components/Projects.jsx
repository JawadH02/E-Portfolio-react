import "../index.css";
import { projects } from "../Data/projectsData";
import { FaGithub, FaLink } from "react-icons/fa";
import Particles from "react-tsparticles";
export const Projects = () => {
  
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="blue">projects</span>
          </h1>
          <ul className="project__list">
            {projects.map((project) => {
              return (
                <li className="project" key={project.id}>
                  <div className="project__wrapper">
                    <img src={project.image} className="project__img" alt="" />
                    <div className="project__wrapper--bg">
                      
                    </div>
                    <div className="project__description">
                      <h3 className="project__description--title">
                        {project.name}
                      </h3>
                      <h4 className="project__description--sub-title">
                        {project.techStack}
                      </h4>
                      <p className="project__description--para">
                        {project.description}
                      </p>
                      <div className="project__description--links">
                        <a
                          href={project.gitHubLink}
                          target="_blank"
                          className="project__description--link"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          className="project__description--link"
                        >
                          <FaLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
