import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  const nav = useNavigate();
  return <div className={styles.logo} onClick={() => nav("/home")}></div>;
}

export default Logo;
