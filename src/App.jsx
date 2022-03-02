import { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { modalContext } from "./Context/ModalContext";
import { Home } from "./Pages/Home";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    if (isModalOpen) {
      setIsModalOpen(false);
      return document.body.classList.remove("modal--open");
    }
    setIsModalOpen(true);
    window.scroll(0, 0);
    document.body.classList += " modal--open";
  }, [isModalOpen]);

  return (
    <Router>
      <modalContext.Provider value={{ isModalOpen, toggleModal }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </modalContext.Provider>
    </Router>
  );
}

export default App;
