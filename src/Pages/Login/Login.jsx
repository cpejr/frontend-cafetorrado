import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../components/Functions/RequestHandler/RequestHandler';
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      login(username, password);
    } catch (error) {
      alert(error);
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
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="button" className="upper-button" onClick={(e) => { e.preventDefault(); handleLogin(e); }}>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};
export default Login;
