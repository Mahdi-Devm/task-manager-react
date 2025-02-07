import styles from "./Maindashboard.module.css";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import Maindashboardsod from "./Maindashboardsod";

function Maindashboard() {
  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.topSection}>
          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>مجموع کاربران</p>
              <p className={styles.cardNumber}>405,541</p>
              <p className={styles.percentageChange}>8.5% افزایش از دیروز</p>
            </div>
            <FaUsers className={styles.cardIcon} />
          </div>

          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>مجموع سفارشات</p>
              <p className={styles.cardNumber}>12,345</p>
              <p className={styles.percentageChange}>2% کاهش از دیروز</p>
            </div>
            <FaShoppingCart className={styles.cardIcon} />
          </div>

          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>درآمد کل</p>
              <p className={styles.cardNumber}>$75,000</p>
              <p className={styles.percentageChange}>5% افزایش از دیروز</p>
            </div>
            <FaDollarSign className={styles.cardIcon} />
          </div>

          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>روند رشد</p>
              <p className={styles.cardNumber}>+12%</p>
              <p className={styles.percentageChange}>3% کاهش از هفته گذشته</p>
            </div>
            <FaChartLine className={styles.cardIcon} />
          </div>
        </div>
        <Maindashboardsod />
      </div>
    </>
  );
}

export default Maindashboard;
