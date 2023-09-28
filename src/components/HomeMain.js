import styles from "./HomeMain.module.css"

function HomeMain() {
  return (
    <div className={styles.main}>
      <div className={styles.mainInfo}>
        <h1 className={styles.mainTitle}>오펜하이머</h1>
        <button className={styles.mainBtn} id={styles.firstBtn}>재생</button>
        <button className={styles.mainBtn} id={styles.secBtn}>상세 정보</button>
      </div>
    </div>
  )
};

export default HomeMain;