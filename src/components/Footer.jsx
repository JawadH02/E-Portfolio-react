import "../index.css";
import footerLogo from "../assets/images/logo.webp";
import { FaArrowUp } from "react-icons/fa";
import { useContext } from "react";
import { modalContext } from "../Context/ModalContext";
import Resume from "../assets/images/Resume.pdf";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { toggleModal } = useContext(modalContext);
  return (
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
          <div className="footer__social--list">
            <a
              href="https://github.com/JawadH02"
              target="_blank"
              className="
                footer__social--link
                link__hover-effect link__hover-effect--white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jawad-hanif02/"
              target="_blank"
              className="
                footer__social--link
                link__hover-effect link__hover-effect--white"
            >
              LinkedIn
            </a>
            <Link
              to="/"
              onClick={toggleModal}
              className="
                footer__social--link
                link__hover-effect link__hover-effect--white"
            >
              Contact
            </Link>
            <a
              href={Resume}
              target="_blank"
              className="
                footer__social--link
                link__hover-effect link__hover-effect--white"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; {new Date().getFullYear()} Jawad Hanif
          </div>
        </div>
      </div>
    </footer>
  );
};
