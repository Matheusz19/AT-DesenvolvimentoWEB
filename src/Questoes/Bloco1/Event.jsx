import React from 'react';

const handleClick = () => {
  alert('Botão clicado com função de tratamento!');
};

const Event = () => (
  <div>
    <h3>Esse componente se refere a Questão 1.3</h3>
    <button 
      onClick={handleClick} 
      style={{ padding: '10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px' }}
    >
      Clique Aqui
    </button>
  </div>
);

export default Event;
