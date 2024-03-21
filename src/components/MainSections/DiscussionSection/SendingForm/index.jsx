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

    if (formData.idea.length < 25) {
      newErrors = {
        ...newErrors,
        idea: "Идея не может быть короче 25 символов",
      };
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
      <label className={styles.formField}>
        <p>Телефон:</p>
        <input
          className={errors.phone && styles.error}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {/* {errors.phone && (
          <span className={styles.errorMessage}>{errors.phone}</span>
        )} */}
      </label>
      <label className={styles.formField}>
        <p>Имя:</p>
        <input
          className={errors.name && styles.error}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {/* {errors.name && (
          <span className={styles.errorMessage}>{errors.name}</span>
        )} */}
      </label>
      <label className={styles.formField}>
        <p>Ваша идея:</p>
        <input
          className={errors.idea && styles.error}
          type="text"
          name="idea"
          value={formData.idea}
          onChange={handleInputChange}
        />
        {/* {errors.idea && (
          <span className={styles.errorMessage}>{errors.idea}</span>
        )} */}
      </label>
      <button type="submit" className={styles.submitButton}>
        Отправить
      </button>
    </form>
  );
};

export default SendingForm;
