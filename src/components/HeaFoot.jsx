import Header from "../components/Header";

import NavBar from "../components/NavBar";

import styles from "./HeaFoot.module.css";
function HeaFoot() {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.navbar}>
        <NavBar />
      </div>
    </>
  );
}

export default HeaFoot;
