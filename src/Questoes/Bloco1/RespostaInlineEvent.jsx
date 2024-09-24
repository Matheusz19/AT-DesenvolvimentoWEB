import React from 'react';
import InlineEvent from './InlineEvent';

const RespostaInlineEvent = () => (
  <div>
    <InlineEvent/>
    <h3>Esse componente se refere a Questão 1.4</h3>
    <h2>Quais são as desvantagens de implementar um inline event?</h2>
    <p>As desvantagens são a dificuldade em separar a lógica da apresentação, o código se torna mais difícil de manter e testar, e pode resultar em algo repetitivo.</p>
  </div>
);

export default RespostaInlineEvent;
