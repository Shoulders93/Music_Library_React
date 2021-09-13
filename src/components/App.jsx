import axios from "axios";
import React, {Component} from "react";
import DisplaySong from "./DisplaySong";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

  componentDidMount(){
    this.getAllSongs();
  }

  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
        songs: response.data
    });
    console.log(response.data);
  }

  render(){
      return(
          <div>
              <h1>This is a test!</h1>
              <DisplaySong allSongs={this.state.songs}/>
          </div>
      )
  }
}

export default App;