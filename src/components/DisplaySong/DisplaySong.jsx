import React from 'react';
import './DisplaySong.css'

function DisplaySong(props){
    return (
        <table className='center'>
            <thead>
                <tr>
                    <th>Song Name</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>

            <tbody className='word'>
                    {props.allSongs.map((song) => {
                        return(
                            <tr className='rows' key={song.id}> 
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <td><button type="button" onClick={() => props.deleteSong(song.id)}>Delete</button></td>
                        </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}


export default DisplaySong;