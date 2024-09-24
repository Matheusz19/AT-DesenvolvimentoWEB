import React from 'react';
import { useForm } from 'react-hook-form';

const ValidarHookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <h3>Esse componente se refere a Questão 3.4</h3>
        <label>Nome:</label>
        <input {...register('nome', { required: 'Nome é obrigatório' })} />
        {errors.nome && <p>{errors.nome.message}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: 'Email é obrigatório' })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Telefone:</label>
        <input {...register('telefone', { pattern: { value: /^[0-9]*$/, message: 'Telefone deve ser numérico' } })} />
        {errors.telefone && <p>{errors.telefone.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ValidarHookForm;