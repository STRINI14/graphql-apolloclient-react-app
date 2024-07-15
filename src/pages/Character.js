import React from 'react'
import "./Characters.css"
import { useCharacter } from '../hooks/useCharacter'
import { useParams } from 'react-router';

export default function Character() {

    const {id} = useParams()

    const {data, loading, error} = useCharacter(id);
    
    if (error) return <div>something went wrong</div>

    if (loading) return <div>loading...</div>

  return (
    <div className='characters'>
        <img src={data.character.image} width={750} height={750} />
        <div className='characters-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='Character-episode'>
                {data.character.episode.map(episode => {
                    return <div className='episode'>
                       {episode.name} - <b>{episode.episode}</b>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}
