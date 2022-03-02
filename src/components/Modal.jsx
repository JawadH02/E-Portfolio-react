import "../index.css";
import { FaEnvelope, FaTimes, FaSpinner } from "react-icons/fa";
import { modalLanguages } from "../Data/modalLanguagesData";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { modalContext } from "../Context/ModalContext";
import emailjs from "@emailjs/browser";

export const Modal = () => {
  const { toggleModal, isModalOpen } = useContext(modalContext);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contact = useCallback((event) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_cbf58to",
        "template_kt71hbl",
        form.current,
        "user_kIMIfbJhdf4ZjlDLVDNqv"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          setSuccess(false);
          console.log(error.text);
        }
      );
  });

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  return (
    <section id="modal__section">
      <button className="mail__btn click" onClick={toggleModal}>
        <FaEnvelope />
      </button>
      <Link to="projects" className="scroll">
        <div className="scroll__icon click"></div>
      </Link>
      <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's a bit about me.
          </h3>
          <h4 className="modal__sub-title modal__sub-title--about">
            Frontend Software Engineer.
          </h4>
          <p className="modal__para">
            I'm a 19 year-old{" "}
            <strong className="blue">frontend software engineer</strong> living
            in the United States. I am highly motivated with a strong passion
            for learning and building websites that provide a{" "}
            <strong className="blue">great user experience.</strong>
            <br />I currently solve difficult engineering problems by enhancing
            my understanding of difficult programming concepts including{" "}
            <strong className="blue">
              responsive website development, CSS layout, Promises,
            </strong>{" "}
            and <strong className="blue">API requests</strong>.
          </p>
          <div className="modal__languages">
            {modalLanguages.map((language) => {
              return (
                <figure className="modal__language" key={language.id}>
                  <img
                    className="model__language--img"
                    src={language.image}
                    alt={language.name}
                  />
                  <span className="language__name">{language.name}</span>
                </figure>
              );
            })}
          </div>
        </div>
        <div className="modal__half modal__contact">
          <FaTimes
            className="fas fa-times modal__exit click"
            onClick={toggleModal}
          />
          <h3 className="modal__title modal__title--contact">
            Let's have a chat!
          </h3>
          <h4 className="modal__sub-title modal__sub-title--contact">
            I'm currently open to new opportunities.
          </h4>
          <form id="contact__form" onSubmit={contact} ref={form}>
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input
                type="text"
                className="input"
                name="user_name"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input
                type="email"
                className="input"
                name="user_email"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea
                type="text"
                className="input"
                name="message"
                required
              ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Send it my way
            </button>
          </form>
          <div
            className={`modal__overlay modal__overlay--loading ${
              loading && "modal__overlay--visible"
            }`}
          >
            <FaSpinner className="modal__overlay--spinner" />
          </div>
          <div
            className={`modal__overlay modal__overlay--success ${
              success && "modal__overlay--visible"
            }`}
          >
            <div className="wrapper">
              {" "}
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
