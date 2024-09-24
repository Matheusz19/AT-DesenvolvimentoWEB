import React, { useEffect, useState } from 'react';

const Dropdown = ({ defaultCountry }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry || '');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        if (defaultCountry) {
          setSelectedCountry(defaultCountry);
        }
      });
  }, [defaultCountry]);

  return (
    <div>
      <h3>Esse componente se refere a Questão 2.2</h3>
      <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="">Selecione um país</option>
        {countries.map(country => (
          <option key={country.cca2} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      <p>País selecionado: {selectedCountry}</p>
    </div>
  );
};

export default Dropdown;