import WelcomeMessage from "../components/WelcomeMessage ";
import HeaFoot from "../components/HeaFoot";
import Maindashboard from "../components/maindashboard";
import styles from "../pages/HomePage.module.css";
function HomePage() {
  return (
    <div className={styles.container}>
      {" "}
      <HeaFoot />
      <Maindashboard />
      <WelcomeMessage text="Welcome to My Home Page!" />
    </div>
  );
}

export default HomePage;
