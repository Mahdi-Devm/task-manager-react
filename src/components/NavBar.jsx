import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import { FaHome, FaTasks, FaCog, FaPlusCircle } from "react-icons/fa";

function NavBar() {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      {/* لوگو */}
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
          <FaCog title="تنظیمات" />
        </div>
      </div>
      {/* حساب کاربری */}
      <div className={styles.account}>
        <FaCog title="حساب کاربری" />
        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className={styles.userImage}
        />
      </div>
    </div>
  );
}

export default NavBar;
