import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import GamePage from "./pages/GamePage";
import StartPage from "./pages/StartPage";
import EndPage from "./pages/EndPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/trivia" element={<GamePage />} />
          <Route path="/gameover" element={<EndPage />} />
          <Route path="*" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
