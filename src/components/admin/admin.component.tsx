import React, { FunctionComponent, useEffect, ReactNode, useState } from 'react';
import LoginComponent from './Login/login.component';

const AdminComponent: FunctionComponent = () => {
  // let token = '';
  const [token, setToken] = useState<string | null>();

  
  useEffect(() => {
    let userToken = localStorage.getItem('userToken');
    setToken(userToken);
  }, []);

  if(!token) {
    return (
      <LoginComponent />
    )
  } else {

    return (
      <div>
        <h1>Welcome to the admin dashboard</h1>
      </div>
    );
  }
};

export default AdminComponent;
