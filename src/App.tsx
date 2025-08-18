import "./styles/global.scss";

import { Header } from "../components/Header/Header"; // cuidado com o C maiúsculo em Components
import Home from "../pages/Home/Home"; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
