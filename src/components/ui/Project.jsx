import "../../index.css";
import { FaGithub, FaLink } from "react-icons/fa";

export const Project = (project) => {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img src={project.image} className="project__img" alt="" />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{project.name}</h3>
          <h4 className="project__description--sub-title">
            {project.techStack}
          </h4>
          <p className="project__description--para">{project.description}</p>
          <div className="project__description--links">
            <a
              href={project.gitHubLink}
              target="_blank"
              className="project__description--link"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={project.websiteLink}
              target="_blank"
              className="project__description--link"
              rel="noreferrer"
            >
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
