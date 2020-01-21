import React from 'react';
import logo from './logo.svg';
import './App.css';
import IssueList from './IssueList';

function App() {
  const issues = [
    {
      id: 1,
      titulo: "Arreglar error al dar de alta",
      contenido: "El error se da en el ABM de clientes",
      estado: "open",
      usuario: "aceccoli",
      fecha: 1579263883,
      modificado: null
    },
    {
      id: 2,
      titulo: "ABM Productos",
      contenido: "Desarrollar el ABM de productos",
      estado: "closed",
      usuario: "aceccoli",
      fecha: 1579263883,
      modificado: 1579587883
    },
    {
      id: 3,
      titulo: "Arreglar error al dar de alta",
      contenido: "El error se da en el ABM de clientes",
      estado: "open",
      usuario: "aceccoli",
      fecha: 1579458283,
      modificado: null
    },
    {
      id: 4,
      titulo: "ABM Productos",
      contenido: "Desarrollar el ABM de productos",
      estado: "closed",
      usuario: "aceccoli",
      fecha: 1579458283,
      modificado: 1579587883
    }
  ];

  return (
    <div>
      <IssueList issues={issues} />
    </div>
  );
}

export default App;
