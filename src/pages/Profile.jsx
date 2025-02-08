import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import styles from "./Profile.module.css";
import HeaFoot from "../components/HeaFoot";
import WelcomeMessage from "../components/WelcomeMessage ";

import ExtraInfo from "../components/ExtraInfo";
const data = [
  { name: "فروردین", value: 400 },
  { name: "اردیبهشت", value: 450 },
  { name: "خرداد", value: 500 },
  { name: "تیر", value: 550 },
  { name: "مرداد", value: 600 },
  { name: "شهریور", value: 650 },
  { name: "مهر", value: 700 },
];

function Profile() {
  return (
    <div className={styles.container}>
      <HeaFoot />

      <div className={styles.content}>
        <div className={styles.profileBox}>
          <h3>اطلاعات پروفایل</h3>
          <div className={styles.profileInfoBox}>
            <div className={styles.profileLeft}>
              <div className={styles.profileImageContainer}>
                <img
                  src="https://i.pravatar.cc/100"
                  alt="Profile"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.userInfo}>
                <h4>نام: مهدی رضایی</h4>
                <p>ایمیل: mehdi@example.com</p>
                <p>رمز عبور: *********</p>
              </div>
            </div>
            <div className={styles.profileRight}>
              <ExtraInfo />
            </div>
          </div>
          <button>بیرون رفتن از حساب</button>
        </div>

        <div className={styles.progressBox}>
          <h3>روند پیشرفت</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid
                stroke="rgba(255, 140, 0, 0.3)"
                strokeDasharray="3 3"
              />
              <XAxis dataKey="name" stroke="#ddd" />
              <YAxis stroke="#ddd" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid #FF7300",
                  color: "#fff",
                }}
              />
              <Legend wrapperStyle={{ color: "#fff" }} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FF7300"
                strokeWidth={3}
                activeDot={{
                  r: 8,
                  fill: "#FF7300",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

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
      </div>

      <WelcomeMessage text="خوش آمدید به پروفایل شما!" />
    </div>
  );
}

export default Profile;
