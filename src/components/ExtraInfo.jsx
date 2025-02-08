import { useState, useEffect } from "react";
import { FiEdit3 } from "react-icons/fi";
import styles from "./ExtraInfo.module.css";

function ExtraInfo() {
  const [editField, setEditField] = useState(null);
  const [editedInfo, setEditedInfo] = useState(info);
  const [info, setInfo] = useState({
    interests: "برنامه‌نویسی، طراحی وب",
    phone: "0912-3456789",
    nationalId: "1234567890",
  });
  if (!info) {
    setInfo("");
  }
  useEffect(() => {
    setEditedInfo(info);
  }, [info]); // هر وقت `info` تغییر کرد، مقدار `editedInfo` هم تغییر کند.

  const handleEdit = (key) => setEditField(key);

  const handleChange = (e, key) => {
    setEditedInfo((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleBlur = () => setEditField(null);

  const handleSave = () => {
    console.log(editedInfo);
  };

  return (
    <div className={styles.extraInfoContainer}>
      {Object.entries(editedInfo || {}).map(([key, value]) => (
        <div key={key} className={styles.infoItem}>
          {editField === key ? (
            <div className={styles.editContainer}>
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(e, key)}
                onBlur={handleBlur}
                autoFocus
                className={styles.editInput}
              />
              <button onClick={handleSave} className={styles.saveButton}>
                ذخیره
              </button>
            </div>
          ) : (
            <div className={styles.viewContainer}>
              <span className={styles.infoText}>{value}</span>
              <FiEdit3
                className={styles.editIcon}
                onClick={() => handleEdit(key)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExtraInfo;
