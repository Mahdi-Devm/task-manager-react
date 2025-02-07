import Logo from "./Logo";
import styles from "./NavBar.module.css";
import { FaHome, FaTasks, FaCog } from "react-icons/fa";

function NavBar() {
  return (
    <div className={styles.container}>
      {/* لوگو */}
      <div>
        <Logo />
        <div className={styles.icons}>
          <FaHome title="صفحه اصلی" />
          <FaTasks title="مدیریت تسک‌ها" />
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
