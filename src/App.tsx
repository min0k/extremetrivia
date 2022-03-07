import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import StartPage from "./pages/StartPage";
import NavBar from "./components/NavBar";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/trivia" element={<StartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
