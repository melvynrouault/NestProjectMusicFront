import React, { FunctionComponent, useEffect, ReactNode, useState } from 'react';
import CreateAlbumComponent from '../../Albums/create-album/create-album.component';
import CreateArtistComponent from '../../Artists/create-artist/create-artist.component';
import LoginComponent from '../Login/login.component';
import './admin.style.css';



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
        <div>
          <h2>Albums section</h2>
          <CreateAlbumComponent />
        </div>
        <div>
          <h2>Artist section</h2>
          <CreateArtistComponent />
        </div>

      </div>
    );
  }
};

export default AdminComponent;
