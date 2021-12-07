import React, { useState, useEffect } from 'react';
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleInput() {
    // eslint-disable-next-line no-empty
    try {
    // eslint-disable-next-line no-empty
    } catch (error) {
    }
  }
  return (
    <div>
      <div className="containerLogin">
        <input
          className="inputs"
          placeholder="Usuário"
          name="user"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="inputs"
          placeholder="Senha"
          name="senha"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="login">
        <button type="button" className="upper-button" onClick={(e) => { e.preventDefault(); handleLogin(); }}>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};
export default Login;
