import React, { FunctionComponent, useEffect, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import './login.style.css';

const axios = require('axios');

// type ILoginProps = {
//   setToken: Dispatch<SetStateAction<string | undefined>>;
// }

const LoginComponent: FunctionComponent = () => {


  const [mail, setMail] = useState('');
  const [password, setPassword] = useState<string>('');

  function onMailChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setMail(event.target.value);
  }
  function onPasswordChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }
  
  async function onSubmit() {
    
    let data = { mail, password };
    await axios.post('http://localhost:3001/user/signin', data)
    .then((response: any) => localStorage.setItem('userToken', response.data.accessToken))
    .catch();

  }

  // useEffect(() => {

  // }, []);

  return (
    <div className="login-wrapper">
      <h1>Sign In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" value={mail} onChange={ onMailChanged }/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={ onPasswordChanged }/>
        </label>
        <div>
          <button type="submit" onClick={() => onSubmit()}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
