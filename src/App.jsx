import { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { modalContext } from "./Context/ModalContext";
import { Home } from "./Pages/Home";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
    window.scroll(0, 0);
  };

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  return (
    <Router>
      <modalContext.Provider value={{ isModalOpen, toggleModal }}>
        <div className={`App ${isModalOpen ? "modal--open" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </modalContext.Provider>
    </Router>
  );
}

export default App;
