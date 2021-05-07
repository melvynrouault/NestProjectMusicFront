import React, { FunctionComponent, useEffect, ReactNode, useState } from 'react';
import './list-albums.style.css';

type IListAlbumsProps = {

}

const ListAlbumsComponent: FunctionComponent<IListAlbumsProps> = (props: IListAlbumsProps) => {

  const [albums, setAlbums] = useState<any[]>([]);


  async function fetchAlbums() {
    const callAlbums = await fetch('http://localhost:3001/album/all');

    const albumsFromServer = await callAlbums.json();
    setAlbums(albumsFromServer);

    // console.log(albumsFromServer);
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>List des albums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Titre</td>
            <td>Année</td>
            <td>Cover</td>
          </tr>
        {
          albums.map((album: any, index) => (
            <tr>
                <td>
                  <p>{album.title}</p>
                </td>
                <td>
                  <p>{album.year}</p>
                </td>
                <td>
                  <img src={album.cover}></img>
                </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default ListAlbumsComponent;
