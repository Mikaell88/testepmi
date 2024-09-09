// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './componentes/SignUp';
import Login from './componentes/Login';
import './App.css'; // Se você estiver usando CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} /> {/* Corrigido para /signup */}
          <Route path="/login" element={<Login />} /> {/* Corrigido para /login */}
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = () => (
  <div>
    <h1>Bem-vindo ao AU-migo!</h1>
    <p>Navegue até <a href="/signup">Cadastro</a> ou <a href="/login">Entrar</a> para usar o aplicativo.</p>
  </div>
);

export default App;




