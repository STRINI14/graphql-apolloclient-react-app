import React from 'react'
import './CharacterList.css'
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';


export default function CharactersList() {

    const {error, loading, data} = useCharacters();

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Something Went Wrong</div>


  return (
    <div className='character-list'>
        {data.characters.results.map(character => {
            return ( 
                <Link to={`/${character.id}`}>
                    <h2>{character.name}</h2> 
                    <img src={character.image} alt='img'/>
                </Link>
            );
        })}
    </div>
  );
}
