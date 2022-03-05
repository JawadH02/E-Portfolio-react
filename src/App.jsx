import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { modalContext } from "./Context/ModalContext";
import { Home } from "./Pages/Home";
import { ProjectsPage } from "./Pages/ProjectsPage";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uv, setUV] = useState(localStorage.getItem("uvmode"));

  const toggleModal = useCallback(() => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
    window.scroll(0, 0);
  }, [isModalOpen]);

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  useLayoutEffect(() => {
    setUV(localStorage.getItem("uvmode") || "dark");
    return () => {
      localStorage.setItem("uvmode", uv);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("uvmode", uv);
  }, [uv]);

  return (
    <Router>
      <modalContext.Provider value={{ isModalOpen, toggleModal, setUV }}>
        <div className={`App ${isModalOpen ? "modal--open" : ""} ${uv}-theme`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </modalContext.Provider>
    </Router>
  );
}

export default App;
