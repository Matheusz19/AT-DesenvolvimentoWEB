import React from 'react';

const InlineEvent = () => (
  <div>
    <h3>Esse componente se refere a Questão 1.2</h3>
    <button 
      onClick={() => alert('Botão clicado!')} 
      style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
    >
      Clique Aqui
    </button>
  </div>
);

export default InlineEvent;
