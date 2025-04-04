import "./css/App.css";
import Home from "./pages/Shows";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import Anime from "./pages/Anime";
import { ShowProvider } from "./contexts/ShowConext";
import { Routes, Route } from "react-router-dom";

function App() {
  const showNumber = 1;
  return (
    <ShowProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/anime" element={<Anime />} />
        </Routes>
      </main>
    </ShowProvider>
  );
}

export default App;
