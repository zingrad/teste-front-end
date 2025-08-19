import "./styles/global.scss";

import { Header } from "../src/components/Header/Header"; // cuidado com o C maiúsculo em Components
import Home from "../src/pages/Home/Home";
import Footer from "../src/components/Footer/Footer";

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
