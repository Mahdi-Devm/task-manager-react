import AddTasks from "../components/AddTasks";
import HeaFoot from "../components/HeaFoot";
import WelcomeMessage from "../components/WelcomeMessage ";
import styles from "./AddTask.module.css";

function AddTask() {
  return (
    <div className={styles.container}>
      <HeaFoot />
      <div>
        <AddTasks />
        <WelcomeMessage text="Welcome to My Add Task Page!" />
      </div>
    </div>
  );
}

export default AddTask;
