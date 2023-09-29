import netflixLogo from '../images/netflix_logo.jpg';
import userImg from '../images/user_image.jpg';
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navLeft}>
        <img id={styles.logo} src={netflixLogo} alt='netflixLogo' />
        <Link to='/my-netflix' className={styles.navLeftItems}>홈</Link>
        <Link to='/my-netflix/movies' className={styles.navLeftItems}>영화</Link>
        <Link to='/my-netflix/series' className={styles.navLeftItems}>시리즈</Link>
      </div>
      <div className={styles.navRight}>
        <span className="material-symbols-outlined" id={styles.search}>
          search
        </span>
        <span className="material-symbols-outlined" id={styles.notif}>
          notifications
        </span>
        <img id={styles.user} src={userImg} alt='userImg' />
      </div>
    </div>
  );
};

export default Navigation;