import { useState } from "react";
import styles from "./AddTasks.module.css";
import { FaPlusCircle } from "react-icons/fa";

function AddTasks() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      return;
    }
    const task = { title, description };
    console.log(task);
    setDescription("");

    setTitle("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📝 افزودن تسک جدید</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="عنوان تسک..."
          value={title}
          onChange={handleTitleChange}
          required
        />
        <textarea
          name="description"
          placeholder="توضیحات تسک..."
          value={description}
          onChange={handleDescriptionChange}
          required
        ></textarea>

        <button type="submit" className={styles.addButton}>
          <FaPlusCircle className={styles.icon} /> افزودن تسک
        </button>
      </form>
    </div>
  );
}

export default AddTasks;
