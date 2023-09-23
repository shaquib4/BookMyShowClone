import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
//React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PlayPage from "./pages/PlayPage";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="plays" element={<PlayPage />} />
      </Routes>
    </div>
  );
}

export default App;
