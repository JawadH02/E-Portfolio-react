import { useCallback } from "react";
import { Footer } from "../components/Footer";
import { Landing } from "../components/Landing";
import { Modal } from "../components/Modal";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";
import "../index.css";

export const Home = () => {
  const moveBackground = useCallback((event) => {
    const scaleFactor = 1 / 20;
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px)`;
    }
  }, []);
  return (
    <>
      <section id="landing-page" onMouseMove={(event) => moveBackground(event)}>
        <Nav />
        <Landing />
        <Modal />
      </section>
      <Projects />
      <Footer />
    </>
  );
};
