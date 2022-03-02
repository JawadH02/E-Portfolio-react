import "../index.css";
import personalLogo from "../assets/images/logo.webp";
import { FaAdjust } from "react-icons/fa";
import { Link } from "react-router-dom";
import { squigglyImages } from "../Data/squigglyImagesData";
import Particles from "react-tsparticles";
import { useCallback, useContext, useState } from "react";
import { modalContext } from "../Context/ModalContext";

export const Nav = () => {
  const { toggleModal } = useContext(modalContext);
  const [contrastToggle, setContrastToggle] = useState(true);

  const toggleContrast = useCallback(() => {
    setContrastToggle((current) => !current);
    if (contrastToggle) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [contrastToggle]);

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
          <li className="nav__link click" onClick={toggleContrast}>
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
      <Particles
        className="tsparticles"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
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
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </section>
  );
};
