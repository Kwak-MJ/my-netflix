import HomeMain from "../components/HomeMain"
import MoviesSlide1 from "../components/MoviesSlide1";
import MoviesSlide2 from "../components/MoviesSlide2";

function Home() {
  return (
    <div>
      <HomeMain />
      <div style={{ marginBottom: "100px" }}>
        <MoviesSlide1 />
        <MoviesSlide2 />
      </div>
    </div>
  );
}

export default Home;