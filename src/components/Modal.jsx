import "../index.css";
import { FaEnvelope, FaTimes, FaSpinner } from "react-icons/fa";
import { modalLanguages } from "../Data/modalLanguagesData";
import { useCallback, useContext, useRef, useState } from "react";
import { Link } from "react-scroll";
import { modalContext } from "../Context/ModalContext";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const Modal = () => {
  const { toggleModal } = useContext(modalContext);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contact = useCallback(
    (event) => {
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
    },
    [form]
  );

  return (
    <section id="modal__section">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <button className="mail__btn click" onClick={toggleModal}>
          <FaEnvelope />
        </button>
      </motion.span>
      <Link to="projects" className="scroll">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.4,
              },
            },
          }}
          className="scroll__icon click"
        ></motion.div>
      </Link>
      <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's a bit about me.
          </h3>
          <br />
          <p className="modal__para"> As a {" "}
            <strong className="blue">frontend software engineer</strong> based
            in the United States, I am skilled in creating engaging user interfaces using modern web technologies such as {" "}
            <strong className="blue">
              HTML, CSS, JavaScript/Typescript, and React.
            </strong>
            {" "}My skills also include <strong className="blue">API integration</strong> and website performance optimization.
            <br />
            <br />
            With a passion for building intuitive and user-friendly websites, I
            strive to stay up-to-date with the latest trends and best practices
            in the field to deliver optimal results for my clients. Additionally, I excel in {" "}
            <strong className="blue">
            responsive website development, CSS layout, Promises, and API requests,
            </strong>{" "}
            ensuring that my projects are optimized for a seamless user experience.
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
