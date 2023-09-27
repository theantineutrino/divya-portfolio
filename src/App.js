import "./index.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import MySkills from "./components/MySkills";
import Work from "./components/Work";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MySkills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
