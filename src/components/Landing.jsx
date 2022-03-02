import "../index.css";
import { socialLinks } from "../Data/socialLinksData";
import { useContext } from "react";
import { modalContext } from "../Context/ModalContext";

export const Landing = () => {
  const { toggleModal } = useContext(modalContext);
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title blue">I'm Jawad.</h1>
        <p className="header__para">
          I'm a{" "}
          <strong className="blue">
            {" "}
            Freelance Frontend Software Engineer{" "}
          </strong>
          passionate about delivering great user experiences in web
          applications.
          <br />
          Here's a bit more{" "}
            <strong className="blue click" onClick={toggleModal}>
              about me.
            </strong>
        </p>
        <div className="social__list">
          {socialLinks.map((link) => {
            return (
              <a
                href={link.linkTo}
                target="_blank"
                key={link.id}
                className="social__link click"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};
