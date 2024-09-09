// src/componentes/SignUp.js
import React from 'react';
import './SignUp.css'; // Importa o CSS específico para o SignUp

const SignUp = () => {
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        
        <label htmlFor="cpf">CPF:</label>
        <input id="cpf" type="text" />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

