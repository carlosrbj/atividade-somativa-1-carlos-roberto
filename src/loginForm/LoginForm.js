import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email === 'email@pucpr.br' && password === 'puc123') {
      setMessage('Acessado com sucesso!');
    } else {
      setMessage('Usuário ou senha incorretos!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Acessar</button>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default LoginForm;
