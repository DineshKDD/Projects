import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";
import { Newletter } from "./components/Newsletter";
function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <Banner></Banner>
        <Skill></Skill>
        <Project></Project>
        <Footer></Footer>
        <Newletter></Newletter>
      </div>
    </>
  );
}

export default App;
