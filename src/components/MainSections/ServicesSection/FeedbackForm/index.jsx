import { useState } from "react";
import styles from "./styles.module.scss";
import transformPhoneNumber from "utils/transformPhoneNumber";

const FeedbackForm = ({ submitted, setSubmitted }) => {
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="modal">
      {!submitted ? (
        <Form onSubmit={handleSubmit} />
      ) : (
        <div className={styles.form}>
          <h1>ОБСУДИМ ВАШ ПРОЕКТ?</h1>
          <p>РАССКАЖИТЕ НАМ О СВОЕЙ ИДЕЕ, И МЫ СКОРО СВЯЖЕМСЯ С ВАМИ</p>
          <p className={styles.dataSent}>Спасибо! Данные успешно отправлены.</p>
        </div>
      )}
    </div>
  );
};

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    idea: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setFormData({
      ...formData,

      [name]: name !== "phone" ? value : transformPhoneNumber(value),
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // pattern: /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/,

    if (!/^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(formData.phone)) {
      newErrors = {
        ...newErrors,
        phone: "Телефон должен быть валидным",
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
      return false;
    } else {
      // Если форма валидна, можно отправлять данные
      //   console.log("Данные отправлены:", formData);
      setErrors({});
      return true;
    }

    // return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };
  console.log(errors);
  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <h1>ОБСУДИМ ВАШ ПРОЕКТ?</h1>
      <p>РАССКАЖИТЕ НАМ О СВОЕЙ ИДЕЕ, И МЫ СКОРО СВЯЖЕМСЯ С ВАМИ</p>
      <label>
        <input
          className={errors.phone && styles.error}
          type="text"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && (
          <span className={styles.errorMessage}>{errors.phone}</span>
        )}
      </label>
      <label>
        <input
          className={errors.name && styles.error}
          type="text"
          name="name"
          value={formData.name}
          placeholder="Имя"
          onChange={handleInputChange}
        />
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name}</span>
        )}
      </label>
      <label>
        <input
          className={errors.idea && styles.error}
          type="text"
          name="idea"
          value={formData.idea}
          placeholder="Ваша идея"
          onChange={handleInputChange}
        />
        {errors.idea && (
          <span className={styles.errorMessage}>{errors.idea}</span>
        )}
      </label>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default FeedbackForm;
