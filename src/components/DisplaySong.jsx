import React, {Component} from 'react';

class DisplaySong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: '',
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
         }
    }
    render() { 
        return ( 
            <div>
                <table>
                    <thead>
                        <th>Song Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </thead>
                    <tbody>
                        <tr key={state.id}>
                            <td>{this.state.title}</td>
                            <td>{this.state.artist}</td>
                            <td>{this.state.album}</td>
                            <td>{this.state.release_date}</td>
                            <td>{this.state.genre}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default DisplaySong;