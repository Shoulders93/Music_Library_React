import axios from "axios";
import React, {Component} from "react";
import CreateSong from "./CreateSong";
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

  getAllSongs = async ()=>{
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
        songs: response.data
    });
    console.log(response.data);
  }

   AddNewSong = async (newSong) =>{
      try{
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
        console.log(response.data)
       
      }
      catch(err){
          console.log(err)
      }
      this.getAllSongs();
   
    }



    deleteSong = async (song) => {
        try{
            let response = await axios.delete('http://127.0.0.1:8000/music/' + song);
            console.log('This is working')
        }
        catch(err){
            console.log("error in Delete Song")
        }
        this.getAllSongs();
    }

// sum < number ? console.log("Yes it is") : console.log('naw')

  render(){
      return(
          <div>
              <h1>This is a test!</h1>
              {this.state.songs ? 
              <DisplaySong allSongs={this.state.songs} deleteSong={this.deleteSong}/>
              :
              null}
              <CreateSong createNewSong = {this.AddNewSong}></CreateSong>
          </div>
      )
  }
}

export default App;