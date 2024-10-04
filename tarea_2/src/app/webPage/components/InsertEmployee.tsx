import React, { useState } from 'react';

const InsertEmployee: React.FC = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleInsert = () => {
    // Lógica para insertar el empleado
    console.log(`Empleado insertado: ${name}, Puesto: ${position}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Insertar Empleado</h2>
      <input
        type="text"
        placeholder="Nombre del empleado"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Puesto"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <br />
      <button onClick={handleInsert}>Insertar Empleado</button>
    </div>
  );
};

export default InsertEmployee;
