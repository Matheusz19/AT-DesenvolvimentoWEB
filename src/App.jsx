import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Questoes/Bloco4/Menu';
import Event from './Questoes/Bloco1/Event';
import InlineEvent from './Questoes/Bloco1/InlineEvent';
import PreguntaResposta from './Questoes/Bloco1/PreguntaResposta';
import AdminCheck from './Questoes/Bloco2/AdminCheck';
import Dropdown from './Questoes/Bloco2/Dropdown';
import FiltrarProdutos from './Questoes/Bloco2/FiltrarProdutos';
import PratosDropdown from './Questoes/Bloco2/PratosDropdown';
import Form from './Questoes/Bloco3/Form';
import HookForm from './Questoes/Bloco3/Hookform';
import ValidarForm from './Questoes/Bloco3/ValidarForm';
import ValidarHookForm from './Questoes/Bloco3/ValidarHookform';
import RespostaInlineEvent from './Questoes/Bloco1/RespostaInlineEvent';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>AT - Desenvolvimento WEB</h1>
        <Menu />
        <Routes>
          <Route path="/" element={<h2>Bem-vindo as questões!! Selecione qual deseja visualizar acima.</h2>} />
          <Route path="/event" element={<Event />} />
          <Route path="/inline-event" element={<InlineEvent />} />
          <Route path="resposta-inlineevent" element={<RespostaInlineEvent />} />
          <Route path="/perguntas" element={<PreguntaResposta pergunta="O que é React?" resposta="React é uma biblioteca JavaScript para construção de interfaces de usuário." />} />
          <Route path="/admin" element={<AdminCheck />} />
          <Route path="/admin-ligado" element={<AdminCheck isChecked={true} />} />
          <Route path="/admin-desligado" element={<AdminCheck isChecked={false} />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/dropdown-default" element={<Dropdown defaultCountry="Brasil" />} />
          <Route path="/filtrar-produtos" element={<FiltrarProdutos />} />
          <Route path="/pratos-dropdown" element={<PratosDropdown />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form-preenchido" element={<Form initialData={{ name: 'Matheus', email: 'Matheus@gmail.com' }} />} />
          <Route path="/hook-form" element={<HookForm />} />
          <Route path="/validar-form" element={<ValidarForm />} />
          <Route path="/validar-hook-form" element={<ValidarHookForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
