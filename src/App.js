import About from "./components/About";
import Bottom from "./components/Bottom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Bottom />
    </div>
  );
}

export default App;
