import { useContext, useEffect, useState } from "react";
import styles from "./TaskList.module.css";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaTrash,
  FaSearch,
} from "react-icons/fa";
import { OperatorContext } from "./ContextApi";

function TaskList() {
  const { AddTask, setAddTask } = useContext(OperatorContext);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(Array.isArray(AddTask));
    console.log(AddTask);
  }, [AddTask]);

  function handelDleat(id) {
    setAddTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }
  return (
    <div>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="جستجو در تسک‌ها..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.taskList}>
        {AddTask.filter((task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((task) => (
          <div key={task.id} className={styles.taskItem}>
            <div className={styles.taskHeader}>
              <FaHourglassHalf className={styles.iconProcess} />
              <div>
                <h4 className={styles.taskTitle}>{task.title}</h4>
                <p className={styles.taskDescription}>{task.description}</p>
              </div>
            </div>

            <div className={styles.taskActions}>
              <button
                className={`${styles.button} ${
                  task.completed ? styles.completed : styles.inProgress
                }`}
              >
                <FaCheckCircle className={styles.emoji} /> تمام شده
              </button>

              <button
                onClick={() => handelDleat(task.id)}
                className={`${styles.button} ${styles.delete}`}
              >
                <FaTrash className={styles.emoji} /> حذف
              </button>
            </div>

            <div className={styles.taskInfo}>
              <p className={styles.taskDate}>
                {task.dueDate
                  ? task.dueDate.toLocaleDateString()
                  : "بدون تاریخ"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
