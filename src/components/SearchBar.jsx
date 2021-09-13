import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchBar: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterSongs(this.state.searchBar)
    }

    

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Search Bar </label>
                <input type='text' name="searchBar" onChange={this.handleChange} value={this.state.searchBar} placeholder= 'Search' />
                <button type="submit">Search</button>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;