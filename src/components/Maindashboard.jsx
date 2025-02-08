import { useContext, useEffect, useState } from "react";
import styles from "./Maindashboard.module.css";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import Maindashboardsod from "./Maindashboardsod";
import { OperatorContext } from "./ContextApi";

function Maindashboard() {
  const { AddTask } = useContext(OperatorContext);
  const [deletedTasks, setDeletedTasks] = useState(0);
  const [growthRate, setGrowthRate] = useState(0);

  useEffect(() => {
    console.log(Array.isArray(AddTask));
    console.log(AddTask);

    const deletedTasksCount = AddTask.filter(
      (task) => task.deleted === true
    ).length;
    setDeletedTasks(deletedTasksCount);

    const completedTasksCount = AddTask.filter(
      (task) => task.completed === true
    ).length;
    const growth = ((completedTasksCount / AddTask.length) * 100).toFixed(2);
    setGrowthRate(growth);
  }, [AddTask]);

  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.topSection}>
          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>مجموع تسک ها</p>
              <p className={styles.cardNumber}>{AddTask.length}</p>
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

          {/* تسک‌های حذف‌شده */}
          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>تسک حذف شده</p>
              <p className={styles.cardNumber}>{deletedTasks}</p>
              <p className={styles.percentageChange}>5% افزایش از دیروز</p>
            </div>
            <FaDollarSign className={styles.cardIcon} />
          </div>

          {/* روند رشد */}
          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>روند رشد</p>
              <p className={styles.cardNumber}>+{growthRate}%</p>
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
