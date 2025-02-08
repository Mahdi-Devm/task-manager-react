import { useContext, useState } from "react";
import styles from "./AddTasks.module.css";
import { FaPlusCircle, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { OperatorContext } from "./ContextApi";

function AddTasks() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { setAddTask } = useContext(OperatorContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      return;
    }

    const newTaskObject = {
      id: Date.now(),
      title,
      description,
      completed: false,
      dueDate,
    };

    setAddTask((prevTasks) => [...prevTasks, newTaskObject]);

    setTitle("");
    setDescription("");
    setDueDate(null);

    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleDueDateChange = (date) => setDueDate(date);

  return (
    <div className={styles.addTaskContainer}>
      <h3 className={styles.addTaskTitle}>افزودن تسک جدید</h3>
      <form onSubmit={handleAddTask} className={styles.addTaskForm}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="عنوان تسک"
          className={styles.inputField}
          required
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="توضیحات تسک"
          className={styles.inputField}
          required
        />
        <div className={styles.datePickerContainer}>
          <FaCalendarAlt className={styles.dateIcon} />
          <DatePicker
            selected={dueDate}
            onChange={handleDueDateChange}
            className={styles.inputField}
            placeholderText="انتخاب تاریخ"
            required
          />
        </div>
        <button type="submit" className={styles.addTaskButton}>
          <FaPlusCircle /> افزودن تسک
        </button>
      </form>
      {showModal && (
        <div className={styles.successModal}>
          <p>تسک با موفقیت اضافه شد!</p>
        </div>
      )}
    </div>
  );
}

export default AddTasks;
