import { FunctionComponent, useState } from 'react';
import './create-artist.style.css';

// type Props = {
//   onAddArtist: (name: string) => void;
// }

const CreateArtistComponent: FunctionComponent = () => {
  const [name, setName] = useState('');
  const [isBand, setIsBand] = useState(false);
  
  const [nameError, setNameError] = useState('');
  const [isBandError, setIsBandError] = useState('');

  function onNameChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }


  function onClickAddBtn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    
    setNameError('');
    setIsBandError('');

    let valid = true;

    if (name.trim() === '') {
      setNameError('Vous devez renseigner un titre valide !');
      valid = false;
    }

    if (valid) {
      setName('');
    }
  }

  return (
    <div className='createArtistContainer'>
      <h1>Add an artist</h1>
      <form className='createArtistForm'>
        <p>Name</p>
        <input placeholder='Name' type='text' value={ name } onChange={ onNameChanged } />
        <p className='error'>{ nameError }</p>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>

        <button type='submit' onClick={ onClickAddBtn }>Ajouter</button>
      </form>
    </div>
  );
};

export default CreateArtistComponent;