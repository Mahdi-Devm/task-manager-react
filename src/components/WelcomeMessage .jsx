import { useState, useEffect } from "react";
import styles from "./WelcomeMessage .module.css";

export default function WelcomeMessage({ text }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <div className={styles.overlay}>
        <div className={styles.welcome}>
          {text.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 50}ms` }}>
              {char}
            </span>
          ))}
        </div>
      </div>
    )
  );
}
