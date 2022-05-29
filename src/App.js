import NavBar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Work from "./components/work";
import Map from "./components/locations";
import Tempeh from "./components/tempeh";

function App() {
  return (
    <div>
      <NavBar />
      <div class="bg-[url('assets/about.png')] bg-[length:100vw_100vh] bg-no-repeat  sm:bg-[length:100vw_100vh] bg-fixed">
        <Tempeh />
      </div>
      <About />
      <Work />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
