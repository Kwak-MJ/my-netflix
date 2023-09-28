import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styles from "./MovieInfo.module.css"

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_KEY = "14ce3cec0257cafce1c13e8ad25791ef";
const BASE_LANG = "ko";
const BASE_REGION = "KR";

function MovieInfo() {
  const { id } = useParams();
  const ref = useRef(null);
  const [info, setInfo] = useState([]);
  const [credit, setCredit] = useState([]);
  const [loading, setLoading] = useState(true);

  const getInfo = async () => {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`
    );
    const json = await response.json();
    setInfo(json);
    setLoading(false);
  }

  const getCredit = async () => {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`
    );
    const json = await response.json();
    setCredit(json.cast);
  }

  const imgChar = () => {
    const imgArray = [];
    for (let i = 0; i < 5; i++) {
      const imgPath = credit[i].profile_path;
      const imageChar = `https://image.tmdb.org/t/p/original${imgPath}`;
      imgArray.push(<img ref={ref} className={styles.charImg} key={credit[i].id} src={imageChar} />);
    }
    return imgArray;
  }

  const nameChar = () => {
    const nameArray = [];
    for (let i = 0; i < 5; i++) {
      nameArray.push(
        <span className={styles.charName}>
          {credit[i].name}
        </span>);
    }
    return nameArray;
  }

  const infoChar = () => {
    const imgArray = imgChar();
    const nameArray = nameChar();
    const infoCharDiv = [];
    for (let i = 0; i < 5; i++) {
      infoCharDiv.push(
        <div className={styles.eachCharInfo}>
          {imgArray[i]}
          {nameArray[i]}
        </div>
      )
    }
    return infoCharDiv;
  }



  const imageUrl = `https://image.tmdb.org/t/p/original${info.poster_path}`;


  useEffect(() => {
    getInfo();
  }, [])

  useEffect(() => {
    getCredit();
  }, [])

  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : (
        <div className={styles.main}>
          <div className={styles.content}>
            <img className={styles.infoPoster} src={imageUrl} alt="infoPoster" />
            <div className={styles.info}>
              <div className={styles.infoContent}>
                <h2 className={styles.infoTitle}>{info.title}</h2>
                <ul>
                  <li><span style={{ fontSize: "20px", fontWeight: "600" }}>기본정보</span></li>
                  <li><span className={styles.infoBasic}>개요</span>
                    {info.genres.map((genre) => (
                      <span className={styles.infoOutline} key={genre.id}>{genre.name}</span>
                    ))}
                    <span className={styles.infoTime}>{info.runtime}분</span></li>
                  <li><span className={styles.infoBasic}>개봉</span>
                    <span className={styles.infoDate}>{info.release_date}</span></li>
                  <li><span className={styles.infoBasic}>평점</span>
                    <span className={styles.infoVote} style={{ color: "tomato" }}>★</span><span className={styles.infoVote}>{info.vote_average === 0 ? "new" : info.vote_average}</span></li>
                </ul>
              </div>
              <div className={styles.infoOverview}>
                <p>{info.overview}</p>
              </div>
              <div className={styles.infoChar}>
                {infoChar()}
              </div>
            </div>
          </div>
          <div
            style={{
              background: `linear-gradient(to left, rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0.800)), url(${imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top"
            }}
            className={styles.background}
          >
          </div>
        </div>


      )}
    </div>
  )
}

export default MovieInfo;