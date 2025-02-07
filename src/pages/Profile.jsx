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
import styles from "./Profile.module.css";
import HeaFoot from "../components/HeaFoot";
import WelcomeMessage from "../components/WelcomeMessage ";

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
                <p>شغل: توسعه‌دهنده نرم‌افزار</p>
              </div>
            </div>
            <div className={styles.profileRight}>
              <div className={styles.extraInfo}>
                <p>
                  <strong>علاقه‌مندی‌ها:</strong> برنامه‌نویسی، طراحی وب
                </p>
                <p>
                  <strong>شماره تماس:</strong> 0912-3456789
                </p>
                <p>
                  <strong>کد ملی:</strong> 1234567890
                </p>
              </div>
            </div>
          </div>
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

        <div className={styles.taskActivityBox}>
          <div className={styles.taskBox}>
            <h3>تسک‌های انجام شده</h3>
            <ul>
              <li>تسک 1: توسعه بخش API</li>
              <li>تسک 2: طراحی رابط کاربری</li>
              <li>تسک 3: نوشتن تست‌های واحد</li>
            </ul>
          </div>

          <div className={styles.recentActivityBox}>
            <h3>فعالیت‌های اخیر</h3>
            <ul>
              <li>فعالیت 1: رفع مشکل API</li>
              <li>فعالیت 2: بهبود رابط کاربری</li>
              <li>فعالیت 3: نوشتن مستندات پروژه</li>
            </ul>
          </div>
        </div>
      </div>

      <WelcomeMessage text="خوش آمدید به پروفایل شما!" />
    </div>
  );
}

export default Profile;
