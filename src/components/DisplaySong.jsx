import React from 'react';
import CreateSong from './CreateSong';

function DisplaySong(props){
    return (
        <table>
            <thead>
                <tr>
                    <th>Song Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>

            <tbody>
                {props.allSongs.map((song) => {
                    return(
                        <tr key={song.id}> 
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default DisplaySong;