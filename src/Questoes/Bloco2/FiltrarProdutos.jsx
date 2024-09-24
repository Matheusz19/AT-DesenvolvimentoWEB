import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const GeradorProdutos = () => {
  return Array.from({ length: 100 }, () => faker.commerce.productName());
};

const FiltrarProdutos = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(GeradorProdutos());
  }, []);

  const filtroProdutos = products.filter(product =>
    product.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Esse componente se refere a Questão 2.3</h3>
      <label htmlFor="product-filter" style={{ display: 'block', marginBottom: '5px' }}>
        Filtrar produtos:
      </label>
      <input
        id="product-filter"
        type="text"
        placeholder="Filtrar produtos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px' }}
      />
      <ul>
        {filtroProdutos.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiltrarProdutos;