import styles from "./styles.module.scss";

const ContactsList = () => {
  return (
    <ul className={styles.list}>
      <div className={styles.topContacts}>
        <li className={styles.watsApp}>
          <p>What’s app</p>
          <a href="https://api.whatsapp.com/send?phone=79251800099">
            +7 925 180 00 99
          </a>
        </li>
        <li className={styles.telegram}>
          <p>Telegram</p>
          <a href="https://t.me/prowellness">@prowellness</a>
        </li>
      </div>
      <li className={styles.phone}>
        <p>Phone</p>
        <a href="tel:+79251800099">+7 925 180 00 99</a>
      </li>
    </ul>
  );
};

export default ContactsList;
