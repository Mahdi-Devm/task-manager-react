import { useContext, useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { OperatorContext } from "./ContextApi";

export default function Login() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("email@gmail.com");
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const { setCount, count } = useContext(OperatorContext);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleTermsChange = (e) => setTermsAgreed(e.target.checked);
  const navigator = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !lastName || !email || !password || !termsAgreed) {
      alert("Please fill in all fields");
      return;
    }
    const user = {
      name,
      lastName,
      email,
      password,
    };
    setCount(user);
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setTermsAgreed(false);
    navigator("/home");
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageSvg}></div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.HeaderForm}>
              <h3>Create an Account</h3>
              <p>
                Already have an account? <a href="#">Log in</a>
              </p>
            </div>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={handleNameChange}
              />
              <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={handleLastNameChange}
              />
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={handleEmailChange}
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </div>
            <div className={styles.inputTik}>
              <input
                type="checkbox"
                checked={termsAgreed}
                onChange={handleTermsChange}
              />
              <p>I agree to the terms and conditions</p>
            </div>
            <div className={styles.suggestForm}>
              <button type="submit" onClick={handleSubmit}>
                Create Account
              </button>
              <button className={styles.google}>
                <FaGoogle /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
