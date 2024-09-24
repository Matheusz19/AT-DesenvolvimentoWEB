import React, { useState } from 'react';

const PreguntaResposta = ({ pergunta, resposta }) => {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <div>
      <h3>Esse componente se refere a Questão 1.1</h3>
      <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{pergunta}</div>
      <button 
        onClick={() => setMostrarResposta(!mostrarResposta)} 
        style={{ marginBottom: '10px', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
      >
        {mostrarResposta ? 'Ocultar Resposta' : 'Mostrar Resposta'}
      </button>
      {mostrarResposta && (
        <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          {resposta}
        </div>
      )}
    </div>
    </div>
  );
};

export default PreguntaResposta;