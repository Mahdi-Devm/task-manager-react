import { useState } from "react";
import styles from "./TaskList.module.css";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

const tasksData = [
  { id: 1, title: "پروژه 1", description: "توضیح پروژه 1", completed: false },
  { id: 2, title: "پروژه 2", description: "توضیح پروژه 2", completed: true },
  { id: 3, title: "پروژه 3", description: "توضیح پروژه 3", completed: false },
  { id: 4, title: "پروژه 4", description: "توضیح پروژه 4", completed: false },
];

function TaskList() {
  const [searchQuery, setSearchQuery] = useState("");

  // فیلتر کردن تسک‌ها بر اساس جستجو
  const filteredTasks = tasksData.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* سرچ بار */}
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

      {/* لیست تسک‌ها */}
      <div className={styles.taskList}>
        {filteredTasks.map((task) => (
          <div key={task.id} className={styles.taskItem}>
            <div>
              <h4 className={styles.taskTitle}>{task.title}</h4>
              <p className={styles.taskDescription}>{task.description}</p>
            </div>
            <div className={styles.taskActions}>
              <button
                className={`${styles.button} ${
                  task.completed ? styles.completed : styles.inProgress
                }`}
              >
                {task.completed ? (
                  <>
                    <FaCheckCircle className={styles.emoji} /> تمام شده
                  </>
                ) : (
                  <>
                    <FaHourglassHalf className={styles.emoji} /> در حال انجام
                  </>
                )}
              </button>

              <button className={`${styles.button} ${styles.delete}`}>
                <FaTrash className={styles.emoji} /> حذف آیتم
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
