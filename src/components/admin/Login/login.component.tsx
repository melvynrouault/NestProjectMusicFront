import React, { FunctionComponent, useEffect, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import './login.style.css';

const axios = require('axios');

// type ILoginProps = {
//   setToken: Dispatch<SetStateAction<string | undefined>>;
// }

const LoginComponent: FunctionComponent = () => {


  const [mail, setMail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [token, setToken] = useState<string>();

  function onMailChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setMail(event.target.value);
  }
  function onPasswordChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }
  
  async function onSubmit() {
    
    console.log(mail);
    console.log(password);
    const token = await axios.post('http://localhost:3001/user/signin', {
      mail,
      password,
    });

    setToken(token);

    console.log(token);
  }

  useEffect(() => {
    onSubmit();
  }, []);

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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
