import About from "./components/About";
import Bottom from "./components/Bottom";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col cursor-none">
      <Cursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
