import React, { useState } from 'react';

const InsertMovement: React.FC = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [amount, setAmount] = useState('');

  const handleInsertMovement = () => {
    // Lógica para insertar el movimiento
    console.log(`Movimiento insertado para Empleado ID: ${employeeId}, Monto: ${amount}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Insertar Movimiento</h2>
      <input
        type="text"
        placeholder="ID del empleado"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Monto del movimiento"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleInsertMovement}>Insertar Movimiento</button>
    </div>
  );
};

export default InsertMovement;
