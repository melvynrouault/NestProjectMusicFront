import React, { FunctionComponent, useEffect, ReactNode, useState } from 'react';
import LoginComponent from './Login/login.component';

const AdminComponent: FunctionComponent = () => {
  const token = '';
  
  useEffect(() => {

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
