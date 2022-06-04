import NavBar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Work from "./components/work";
import Map from "./components/locations";
import Tempeh from "./components/tempeh";

function App() {
  return (
    <div class="relative">
      <div class="fixed top-0 right-0 left-0">
        <NavBar />
      </div>
      <Tempeh />
      <div class="bg-[url('assets/about.png')] bg-cover bg-fixed">
        <About />
        <Work />
      </div>

      <Map />
      <Footer />
    </div>
  );
}

export default App;
