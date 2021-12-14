import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../components/Functions/RequestHandler/RequestHandler';
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function handleLogin() {
    try {
      await login(username, password);
      history.push('/Home');
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Dados incorretos. Tente novamente');
    }
  }
  return (
    <div className="tudo">
      <div className="container_Login">
        <h1> Login</h1>
        <input
          className="inputlogin"
          placeholder="Usuário"
          name="user"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="inputlogin2"
          placeholder="Senha"
          name="senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login">
          <button type="button" className="upper-button-login" onClick={(e) => { e.preventDefault(); handleLogin(); }}>
            <p>Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
