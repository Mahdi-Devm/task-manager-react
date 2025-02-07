import { useState } from "react";
import styles from "./TaskList.module.css";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaTrash,
  FaSearch,
  FaPlusCircle,
} from "react-icons/fa";

const tasksData = [
  {
    id: 1,
    title: "پروژه 1",
    description: "توضیح پروژه 1",
    completed: false,
    dueDate: "2025-02-20",
  },
  {
    id: 2,
    title: "پروژه 2",
    description: "توضیحات پروژه 2",
    completed: true,
    dueDate: "2025-02-10",
  },
  {
    id: 3,
    title: "پروژه 3",
    description: "توضیح پروژه 3",
    completed: false,
    dueDate: "2025-02-15",
  },
  {
    id: 4,
    title: "پروژه 4",
    description: "توضیح پروژه 4",
    completed: false,
    dueDate: "2025-02-25",
  },
];

function TaskList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState(tasksData);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [isAddingTask, setIsAddingTask] = useState(false);
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNewTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.description || !newTask.dueDate) {
      return;
    }
    const newTaskObject = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      completed: false,
      dueDate: newTask.dueDate,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTask({ title: "", description: "", dueDate: "" });
    setIsAddingTask(false);
  };

  const handleToggleAddTask = () => {
    setIsAddingTask(!isAddingTask);
  };

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
        {filteredTasks.map((task) => (
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
                <FaTrash className={styles.emoji} /> حذف
              </button>
            </div>

            <div className={styles.taskInfo}>
              <p className={styles.taskDate}>{task.dueDate}</p>
            </div>
          </div>
        ))}
      </div>

      {isAddingTask ? (
        <form onSubmit={handleAddTask} className={styles.addTaskForm}>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleNewTaskChange}
            placeholder="عنوان تسک"
            className={styles.addTaskInput}
          />
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleNewTaskChange}
            placeholder="توضیحات تسک"
            className={styles.addTaskInput}
          />
          <input
            type="date"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleNewTaskChange}
            placeholder="تاریخ تسک"
            className={styles.addTaskInput}
          />
          <button type="submit" className={styles.addTaskButton}>
            <FaPlusCircle className={styles.emoji} /> افزودن تسک
          </button>
        </form>
      ) : (
        <button onClick={handleToggleAddTask} className={styles.addTaskButton}>
          <FaPlusCircle className={styles.emoji} /> افزودن تسک
        </button>
      )}
    </div>
  );
}

export default TaskList;
