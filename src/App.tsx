// import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ItemComponent from './components/item/item.component';
import NavbarComponent from './components/navbar/navbar.component';
import AdminComponent from './components/admin/Dashboard/dashboard.component';
import ListAlbumsComponent from './components/Albums/list-albums/list-albums.component';
import ListArtistsComponent from './components/Artists/list-artist/list-artists.component';


// import LoginComponent from './components/admin/Login/login.component';
// import ModalComponent from './components/modal/modal.component';
// import NotFoundComponent from './components/not-found/not-found.component';
// import CreateAlbumComponent from './components/Albums/create-album/create-album.component';
// import CreateArtistComponent from './components/Artists/create-artist/create-artist.component';



function App() {
  

  return (
    // <Fragment>
    //   <ModalComponent title='Hello World' visible={ modalVisible } onClose={ hideModal }>
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //     Fugiat assumenda voluptas dignissimos autem atque dolorem optio iure, aperiam id ab laborum corrupti a quisquam officia quidem sit commodi veritatis? Nisi.
    //   </ModalComponent>

    //   <div className='container'>
    //     <button className='showModalBtn' onClick={ showModal }>Show Modal</button>
    //   </div>
    // </Fragment>
    <div>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={ ItemComponent }/>
          <Route path="/albums" exact component={ ListAlbumsComponent }/>
          <Route path="/artists" exact component={ ListArtistsComponent }/>
          <Route path="/admin" exact component={ AdminComponent }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
