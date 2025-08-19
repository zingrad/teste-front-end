import "./styles/global.scss";

import { Header } from "../components/Header/Header"; // cuidado com o C maiúsculo em Components
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
