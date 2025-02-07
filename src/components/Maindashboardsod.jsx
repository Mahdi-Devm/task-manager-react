import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./Maindashboardsod.module.css";

const data = [
  { name: "دوشنبه", value: 100 },
  { name: "سه‌شنبه", value: 120 },
  { name: "چهارشنبه", value: 150 },
  { name: "پنج‌شنبه", value: 130 },
  { name: "جمعه", value: 180 },
  { name: "شنبه", value: 200 },
];

function Maindashboardsod() {
  return (
    <div>
      {/* بخش بالایی شامل کارت‌ها */}
      <div className={styles.topSection}>{/* کارت‌ها */}</div>

      {/* ادامه محتوا */}
      <div className={styles.bottomSection}>
        <h4 className={styles.bottomTitle}>روند سود</h4>

        {/* نمودار روند سود */}
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
    </div>
  );
}

export default Maindashboardsod;
