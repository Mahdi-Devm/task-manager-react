import { FaGoogle } from "react-icons/fa";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <form className={styles.form}>
          <div className={styles.HeaderForm}>
            <h3>Create an Account</h3>
            <p>
              Already have an account? <a href="#">Log in</a>
            </p>
          </div>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles.inputTik}>
            <input type="checkbox" />
            <p>I agree to the terms and conditions</p>
          </div>
          <div className={styles.suggestForm}>
            <button>Create Account</button>
            <hr />
            <button>
              <FaGoogle /> Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
