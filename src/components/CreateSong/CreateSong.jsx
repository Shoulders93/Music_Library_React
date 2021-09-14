import React, {Component} from 'react';
import './CreateSong.css'

class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state)
    }

    
    render() { 
        return ( 
            <form className='create'onSubmit={this.handleSubmit}>
                <label>Song Title</label>
                <input type='text' name="title" onChange={this.handleChange} value={this.state.title} />
                <label>Artist</label>
                <input type='text' name="artist" onChange={this.handleChange} value={this.state.artist} />
                <label>Album</label>
                <input type='text' name="album" onChange={this.handleChange} value={this.state.album} />
                <label>Release Date</label>
                <input type='date' name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                <label>Genre</label>
                <input type='text' name="genre" onChange={this.handleChange} value={this.state.genre} />
                <button type="submit">Create New Song</button>
            </form>
         );
    }
}

export default CreateSong;