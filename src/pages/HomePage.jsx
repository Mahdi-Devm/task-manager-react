import Header from "../components/Header";
import Homepage from "../components/Homepage";
import NavBar from "../components/NavBar";
import WelcomeMessage from "../components/WelcomeMessage ";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={styles.contianer}>
      <WelcomeMessage text="Welcome to My App!" />
      <div>
        <NavBar />
      </div>
      <div>
        <Homepage />
        <Header />
      </div>
    </div>
  );
}

export default HomePage;
