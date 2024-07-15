import React, {useState} from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import './Search.css'


const GET_CHARACTER_LOCATIONS  = gql`
query GetCharacterLocations($name: String!){
    characters(filter: {name: $name}) {
        results {
            location {
                name

            }
        }
    }
}
`;

export default function Search() {
    const [name, setName] = useState("");

    const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name,
        },
    });

  return (
    <div>
        <h1>Search for a character's location</h1>
      <input value={name} className='text' onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()} className='search'>Search</button>
      {loading && <div>loading...</div>}
      {error && <div>something went wrong...</div>}
      {data && (
        <ul>
            {data.characters.results.map((character) => {
                return <li>{character.location.name}</li>
            })}
        </ul>
      )}
    </div>
  )
}
