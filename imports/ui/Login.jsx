
import React, { useState } from 'react';
  const Login = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'veena@evolvier.com' && password === '12345') {
      onLogin()
    } else {
      setLoginError('Invalid email or password.');
    }
  };

  return (
    <div className='login-main'>
    <div className="mainDiv">
      <img className="logo" src="/My TO DO.png" alt="Example" />
      <div>
        <div className="manage">
          <span className="green">Manage your tasks</span>
        </div>
        <div className="logm">
          <span className="gre">Login</span>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="login-box"
          type="email"
          placeholder="Username"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <input
          className="login-box"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button className="colButton" type="submit">
          LOGIN
        </button>
      </form>
      {loginError && <div className="error">{loginError}</div>}
    </div>
    </div>
  );
};
export default Login;