import styles from "./Profile.module.css";
import HeaFoot from "../components/HeaFoot";
import WelcomeMessage from "../components/WelcomeMessage ";

function Profile() {
  return (
    <div className={styles.container}>
      <HeaFoot />

      <div className={styles.box}>
        <div>
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <div>
          <h3>نام: مهدی رضایی</h3>
          <h5>ایمیل: mehdi@example.com</h5>
          <h5>رمز عبور: *********</h5>
        </div>
      </div>

      <WelcomeMessage text="خوش آمدید به پروفایل شما!" />
    </div>
  );
}

export default Profile;
