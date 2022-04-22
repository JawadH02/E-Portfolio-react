import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Project } from "../components/ui/Project";
import { projects } from "../Data/projectsData";
import footerLogo from "../assets/images/logo.webp";
import "../index.css";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState(projects);
  const [filterWork, setFilterWork] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleProjectFilter = useCallback((item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(project);
      } else {
        setFilterWork(project.filter((work) => work.tags?.includes(item)));
      }
    }, 500);
  });

  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="projects__header projects-page__header">
            <button
              className="header__button header__btn--projects-page"
              onClick={() => {
                navigate("/");
                window.scroll(0, 0);
              }}
            >
              Home
            </button>
            <h1 className="section__title projects-page__section-title">
              Projects <span className="blue">List</span>
            </h1>
          </div>
          <div className="app__projects--filter">
            {["All", "Framework", "Full-Stack", "API", "Commercial"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleProjectFilter(item)}
                className={`app__projects--filter-item app__flex ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            <ul className="project__list">
              {filterWork.map((project) => {
                return <Project {...project} key={project.id} />;
              })}
            </ul>
          </motion.div>
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
