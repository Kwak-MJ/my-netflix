import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

import styles from "./MoviesSlide1.module.css";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_KEY = "14ce3cec0257cafce1c13e8ad25791ef";
const BASE_LANG = "ko";
const BASE_REGION = "KR";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className} style={{ ...style, display: "none" }} onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />
  );
}

function MoviesSlide1() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const slider = useRef(null);

  const getMovies = async () => {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`
    );
    const json = await response.json();
    setMovies(json.results);
    setLoading(false);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 9,
    slidesToScroll: 8,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1215, // 화면 사이즈
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : (
        <div>
          <div className={styles.arrowBtn}>
            <button id={styles.prevBtn} className="material-symbols-outlined" onClick={() => slider?.current?.slickPrev()}>
              arrow_back_ios
            </button>
            <button id={styles.nextBtn} className="material-symbols-outlined" onClick={() => slider?.current?.slickNext()}>
              arrow_forward_ios
            </button>
          </div>

          <Slider ref={slider} {...settings}>
            {movies.map((movie) => {
              const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
              return (
                <Link to={process.env.PUBLIC_URL + `/movies/${movie.id}`} key={movie.id}>
                  <div className={styles.eachMovie}>
                    <img className={styles.moviePoster} src={imageUrl} alt="moviePoster" />
                    <div className={styles.posterInfo}>
                      <h2 className={styles.movieTitle}>{movie.title}</h2>
                      <span className={styles.movieVote}>{movie.vote_average === 0 ? "new" : movie.vote_average}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </Slider>
        </div>
      )}

    </div>

  )
};

export default MoviesSlide1;