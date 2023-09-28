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
        <Route path='/movies/:id' element={<MovieInfo />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
