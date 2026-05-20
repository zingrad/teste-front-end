import "./styles/global.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../src/components/Header/Header";
import Home from "../src/pages/Home/Home";
import ProductDetail from "../src/pages/ProductDetail/ProductDetail";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
