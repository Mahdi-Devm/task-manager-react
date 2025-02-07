import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import { FaHome, FaTasks, FaPlusCircle, FaTrash } from "react-icons/fa";

function NavBar() {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <Logo />
        <div className={styles.icons}>
          <FaHome onClick={() => nav("/home")} title="صفحه اصلی" />
          <FaTasks onClick={() => nav("/task")} title="مدیریت تسک‌ها" />
          <FaPlusCircle
            onClick={() => nav("/add-task")}
            title="افزودن تسک جدید"
            className={styles.addTaskIcon}
          />

          <FaTrash onClick={() => nav("/notPage")} title="یاداشت ها" />
        </div>
      </div>

      <div className={styles.account}>
        <img
          onClick={() => nav("/Profile")}
          src="https://i.pravatar.cc/100"
          alt="User"
          className={styles.userImage}
        />
      </div>
    </div>
  );
}

export default NavBar;
