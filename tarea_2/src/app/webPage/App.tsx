import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ListEmployees from './components/ListEmployees';
import InsertEmployee from './components/InsertEmployee';
import InsertMovement from './components/InsertMovement';
import ListMovements from './components/ListMovements';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Gestión de Empleados y Movimientos</h1>

        <div>
          <Link to="/list-employees">
            <button>Listar Empleados</button>
          </Link>
          <br /><br />
          <Link to="/insert-employee">
            <button>Insertar Empleado</button>
          </Link>
          <br /><br />
          <Link to="/insert-movement">
            <button>Insertar Movimiento</button>
          </Link>
          <br /><br />
          <Link to="/list-movements">
            <button>Listar Movimientos</button>
          </Link>
        </div>

        {/* Definir las rutas para las distintas páginas */}
        <Routes>
          <Route path="/list-employees" element={<ListEmployees />} />
          <Route path="/insert-employee" element={<InsertEmployee />} />
          <Route path="/insert-movement" element={<InsertMovement />} />
          <Route path="/list-movements" element={<ListMovements />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
