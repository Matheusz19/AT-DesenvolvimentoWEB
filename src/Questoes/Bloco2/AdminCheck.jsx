import React, { useState, useEffect } from 'react';

const AdminCheck = ({ isChecked = false }) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <div>
      <h3>Esse componente se refere a Questão 2.1</h3>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        Administrador
      </label>
    </div>
  );
};

export default AdminCheck;