import React, { FunctionComponent, useEffect, ReactNode, useState } from 'react';
import './list-artists.style.css';

type IListArtistsProps = {

}

const ListArtistsComponent: FunctionComponent<IListArtistsProps> = (props: IListArtistsProps) => {

  const [artists, setArtists] = useState<any[]>([]);


  async function fetchArtists() {
    const callArtists = await fetch('http://localhost:3001/artist/all');

    const artistsFromServer = await callArtists.json();
    setArtists(artistsFromServer);

    console.log(artistsFromServer);
  }

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>List des artists</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>IsBand</td>
          </tr>
        {
          artists.map((artist: any, index) => (
            <tr>
                <td>
                  <p>{artist.name}</p>
                </td>
                <td>
                  <p>{artist.isBand}</p>
                </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default ListArtistsComponent;
