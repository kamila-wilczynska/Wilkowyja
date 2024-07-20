import "./App.css";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/error" element={<Error />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
      </Routes>
    </>
  );
}

export default App;
