import React from 'react';
import SimpleForm from './SimpleForm';

const AparecerForm = () => (
  <div>
    <SimpleForm initialValues={{ nome: 'João', email: 'joao@example.com', telefone: '123456789' }} />
  </div>
);

export default AparecerForm;
