import { useState } from "react";
import styles from "./Form.module.css";

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData);
    // Send email with reservation details
  };

  return (
    <form onSubmit={handleSubmit} className={styles.reservationForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Imię i nazwisko:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Numer telefonu:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="checkin">Data przyjazdu:</label>
        <input
          type="date"
          id="checkin"
          name="checkin"
          value={formData.checkin}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="checkout">Data wyjazdu:</label>
        <input
          type="date"
          id="checkout"
          name="checkout"
          value={formData.checkout}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="guests">Liczba gości:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Uwagi / Specjalne życzenia:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn-primary">
        Wyślij
      </button>
    </form>
  );
}

export default ReservationForm;