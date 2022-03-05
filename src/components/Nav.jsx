import "../index.css";
import personalLogo from "../assets/images/logo.webp";
import { FaAdjust } from "react-icons/fa";
import { Link } from "react-router-dom";
import { squigglyImages } from "../Data/squigglyImagesData";
import Particles from "react-tsparticles";
import { useContext } from "react";
import { modalContext } from "../Context/ModalContext";

export const Nav = () => {
  const { toggleModal, setUV } = useContext(modalContext);

  return (
    <section id="nav__section">
      <nav>
        <figure className="personal-logo__figure">
          <img id="personal-logo" src={personalLogo} alt="" draggable="false" />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link" onClick={toggleModal}>
            <Link
              to="/"
              className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black"
            >
              About
            </Link>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black"
            >
              Projects
            </a>
          </li>
          <li className="nav__link" onClick={toggleModal}>
            <Link
              to="/"
              className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black"
            >
              Contact
            </Link>
          </li>
          <li
            className="nav__link click"
            onClick={() =>
              setUV((prev) => (prev === "dark" ? "light" : "dark"))
            }
          >
            <div
              className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black
              "
            >
              <FaAdjust />
            </div>
          </li>
        </ul>
      </nav>
      {squigglyImages.map((image) => {
        return (
          <img
            src={image.imgLink}
            className={image.classname}
            alt=""
            key={image.id}
          />
        );
      })}
      {/* <Particles
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ABABAB",
            },
            links: {
              color: "#ABABAB",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
            },
            opacity: {
              value: 0.5,
            },
            size: {
              random: true,
              value: 5,
            },
          },
        }}
      /> */}
    </section>
  );
};
