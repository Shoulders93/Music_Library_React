import axios from "axios";
import React, {Component} from "react";

class App extends Component{
  state = {
    songs: []
  }

  componentDidMount(){
    this.getAllSongs();
  }

  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
        songs: response.data
    });
    console.log(response);
  }
  render(){
      return(
          <div>
              <h1>This is a test!</h1>
          </div>
      )
  }
}

export default App;