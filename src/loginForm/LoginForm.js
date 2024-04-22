import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleLogin = () => {
    if (email === 'email@pucpr.br' && password === 'puc123') {
      setMessage('Acessado com sucesso!');
    } else if (email.length === 0 || password.length === 0) {
      setMessage('Preencha os campos em branco!');
    } else {
      setMessage('Usuário ou senha incorretos! <br><br> Email: email@pucpr.br <br> Senha: puc123');
    }    
    setShowMessage(true); 
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          className="login-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha: </label>
        <input
          className="login-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="login-button">Acessar</button>
      {showMessage && (
        <div className="popup">
          {/* <p>{message}</p> */}
          <p dangerouslySetInnerHTML={{ __html: message }}></p>
          <button onClick={handleCloseMessage}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
