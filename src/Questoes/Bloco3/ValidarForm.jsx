import React, { useState } from 'react';

const ValidarForm = () => {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });
  const [errors, setErrors] = useState({ nome: '', email: '', telefone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { nome: '', email: '', telefone: '' };

    if (!form.nome) {
      newErrors.nome = 'Nome é obrigatório';
      valid = false;
    }
    if (!form.email) {
      newErrors.email = 'Email é obrigatório';
      valid = false;
    }
    if (form.telefone && isNaN(form.telefone)) {
      newErrors.telefone = 'Telefone deve ser numérico';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(JSON.stringify(form, null, 2));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <h3>Esse componente se refere a Questão 3.2</h3>
        <label>Nome:</label>
        <input type="text" name="nome" value={form.nome} onChange={handleChange} />
        {errors.nome && <p>{errors.nome}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Telefone:</label>
        <input type="text" name="telefone" value={form.telefone} onChange={handleChange} />
        {errors.telefone && <p>{errors.telefone}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ValidarForm;