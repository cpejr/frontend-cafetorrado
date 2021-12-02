import React, { useState, useEffect } from 'react';

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    async function handleInput() {
        try {

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

            <div className="">
                <button type="button" className="upper-button" onClick={(e) => { e.preventDefault(); handleLogin(); }}>
                    <p>Login</p>
                </button>
            </div>
        </div>
    );
};
export default Login;
