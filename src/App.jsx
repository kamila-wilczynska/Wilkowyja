import "./App.css";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions/Attractions";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Reservation from "./pages/Reservation/Reservation";
// import BookButton from "./components/BookButton/BookButton";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="*" element={<Error />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
