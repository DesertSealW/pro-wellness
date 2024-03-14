import React, { useState } from "react";
import styles from "./styles.module.scss";

const SendingForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    idea: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Пример простой валидации для демонстрации
    if (formData.phone.length < 5) {
      newErrors = {
        ...newErrors,
        phone: "Телефон должен быть длиннее 5 символов",
      };
    }
    if (formData.name.trim() === "") {
      newErrors = { ...newErrors, name: "Имя не может быть пустым" };
    }

    // Проверяем валидность данных
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Если форма валидна, можно отправлять данные
      console.log("Данные отправлены:", formData);
      setErrors({});
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label className={`${styles.formField} ${errors.phone && styles.error}`}>
        <p>Телефон:</p>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && (
          <span className={styles.errorMessage}>{errors.phone}</span>
        )}
      </label>
      <label className={`${styles.formField} ${errors.name && styles.error}`}>
        <p>Имя:</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name}</span>
        )}
      </label>
      <label className={styles.formField}>
        <p>Ваша идея:</p>
        <input
          type="text"
          name="idea"
          value={formData.idea}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Отправить
      </button>
    </form>
  );
};

export default SendingForm;

// const SendingForm = () => {
//   return (
//     <form className={styles.formContainer}>
//       <label className={styles.formField}>
//         <p>Телефон:</p>
//         <input type="tel" />
//       </label>
//       <label className={styles.formField}>
//         <p>Имя:</p>
//         <input type="text" />
//       </label>
//       <label className={styles.formField}>
//         <p>Ваша идея:</p>
//         <input type="text" />
//       </label>
//       <button type="submit" className={styles.submitButton}>
//         Отправить
//       </button>
//     </form>
//   );
// };
// export default SendingForm;
