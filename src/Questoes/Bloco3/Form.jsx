import React, { useState, useEffect } from 'react';

const Form = ({ initialData = {} }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enviado com sucesso:', formData);
  };

  return (
    <div>
    <h3>Esse componente se refere a Questão 3.1</h3>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default Form;