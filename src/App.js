import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import Navigation from "./components/Navigation"
import Series from "./routes/Series";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="my-netflix/movies/:id" element={<MovieInfo />} />
        <Route path="my-netflix/series" element={<Series />} />
        <Route path="my-netflix/movies" element={<Movies />} />
        <Route path="/my-netflix" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
