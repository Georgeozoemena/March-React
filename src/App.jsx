import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar name="NavBar Props" />
      <Navbar name="George NavBar" className="nav-bar" />
    </>
  );
}

export default App;
