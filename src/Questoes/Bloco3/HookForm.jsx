import React from 'react';
import { useForm } from 'react-hook-form';

const HookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <h3>Esse componente se refere a Questão 3.3</h3>
        <label>Nome:</label>
        <input {...register('nome')} />
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email')} />
      </div>
      <div>
        <label>Telefone:</label>
        <input {...register('telefone')} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default HookForm;
