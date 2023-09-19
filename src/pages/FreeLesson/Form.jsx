import React, { useState } from 'react';
import Button from '@mui/material/Button';
import 'react-phone-number-input/style.css';

import s from "./FreeLesson.module.scss";


function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить обработку отправки данных
    console.log(formData);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Телефон"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
      />
        <Button size='large' variant="contained" color='secondary' style={{ fontSize: "2rem " }}>
            Получить видео
        </Button>

    </form>
  );
}

export default MyForm;
