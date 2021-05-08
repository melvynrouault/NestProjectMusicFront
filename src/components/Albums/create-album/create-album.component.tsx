import { FunctionComponent, useState } from 'react';
import './create-album.style.css';

// type Props = {
//   onAddAlbum: (title: string, year: string, cover: string) => void;
// }

const CreateAlbumComponent: FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [cover, setCover] = useState('');
  const [titleError, setTitleError] = useState('');
  const [yearError, setYearError] = useState('');
  const [coverError, setCoverError] = useState('');

  function onTitleChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  function onYearChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setYear(event.target.value);
  }

  function onCoverChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setYear(event.target.value);
  }

  function onClickAddBtn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    
    setYearError('');
    setTitleError('');

    let valid = true;

    if (title.trim() === '') {
      setTitleError('Vous devez renseigner un titre valide !');
      valid = false;
    }

    if (year.trim() === '') {
      setYearError('Vous devez renseigner une année valide !');
      valid = false;
    }

    if (cover.trim() === '') {
      setCoverError('Vous devez renseigner une année valide !');
      valid = false;
    }
    
    if (valid) {
      // props.onAddAlbum(title, year, cover);
      setTitle('');
      setYear('');
      setCover('');
    }
  }

  return (
    <div className='createAlbumContainer'>
      <h1>Add an album</h1>
      <form className='createAlbumForm'>
        <p>Title</p>
        <input placeholder='Titre' type='text' value={ title } onChange={ onTitleChanged } />
        <p className='error'>{ titleError }</p>

        <p>Year</p>
        <input placeholder='Year' type='text' value={ year } onChange={ onYearChanged } />
        <p className='error'>{ yearError }</p>

        <p>Cover</p>
        <input placeholder='Cover' type='text' value={ cover } onChange={ onCoverChanged } />
        <p className='error'>{ coverError }</p>

        <button type='submit' onClick={ onClickAddBtn }>Ajouter</button>
      </form>
    </div>
  );
};

export default CreateAlbumComponent;