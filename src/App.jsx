import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/hero.jsx";
import SobreMim from "./sections/SobreMim.jsx";
import MeusProjetos from "./sections/MeusProjetos.jsx";
import Habilidades from "./sections/Habilidades.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SobreMim />
      <MeusProjetos />
      <Habilidades />
      <Footer />

    </>
  );
}

export default App;
