import HeaFoot from "../components/HeaFoot";
import TaskList from "../components/TaskList";

import WelcomeMessage from "../components/WelcomeMessage ";
import styles from "./Task.module.css";

function Task() {
  return (
    <div className={styles.container}>
      <HeaFoot />
      <div className={styles.taskContent}>
        <div className={styles.taskSection}>
          <TaskList />
        </div>
        <WelcomeMessage text="Welcome to My Task Page!" />
      </div>
    </div>
  );
}

export default Task;
