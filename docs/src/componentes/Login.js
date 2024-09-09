// src/componentes/Login.js
import React from 'react';
import './Login.css'; // Importa o CSS específico para o Login

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


