import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav style={{ marginBottom: '20px' }}>
    <ul style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
      <li><Link to="/">Início</Link></li>
      <li><Link to="/perguntas">1.1</Link></li>
      <li><Link to="/inline-event">1.2</Link></li>
      <li><Link to="/event">1.3</Link></li>
      <li><Link to="/resposta-inlineevent">1.4</Link></li>
      <li><Link to="/admin">2.1</Link></li>
      <li><Link to="/dropdown">2.2</Link></li>
      <li><Link to="/filtrar-produtos">2.3</Link></li>
      <li><Link to="/pratos-dropdown">2.4</Link></li>
      <li><Link to="/form">3.1</Link></li>
      <li><Link to="/validar-form">3.2</Link></li>
      <li><Link to="/hook-form">3.3</Link></li>
      <li><Link to="/validar-hook-form">3.4</Link></li>
      <li><Link to="/admin-ligado">4.2</Link></li>
      <li><Link to="/admin-desligado">4.2</Link></li>
      <li><Link to="/dropdown-default">4.3</Link></li>
      <li><Link to="/form-preenchido">4.4</Link></li>
    </ul>
  </nav>
);

export default Menu;
