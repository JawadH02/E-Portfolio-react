import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Project } from "../components/ui/Project";
import { projects } from "../Data/projectsData";
import footerLogo from "../assets/images/logo.webp";
import "../index.css";

export const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="projects__header">
            <button
              className="header__button header__btn--projects-page"
              onClick={() => {
                navigate("/");
                window.scroll(0, 0);
              }}
            >
              Home
            </button>
            <h1 className="section__title">
              Projects <span className="blue">List</span>
            </h1>
          </div>
          <ul className="project__list">
            {projects.slice(0, 6).map((project) => {
              return <Project {...project} key={project.id} />;
            })}
          </ul>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row footer__row">
            <div onClick={() => window.scroll(0, 0)} className="footer__anchor">
              <figure>
                <img
                  className="footer__logo--img logo--white click"
                  src={footerLogo}
                  alt=""
                />
              </figure>
              <span className="footer__logo--popper click">
                Top
                <FaArrowUp />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
