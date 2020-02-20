import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './suggestions';
const usdaKey = require('../../config/keys').secondKey;

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: [],
    }

    this.getInfo = this.getInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  } 

 getInfo = () => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/search?api_key=${usdaKey}\&generalSearchInput=${this.state.query}`)
    .then(({ data }) => {
      this.setState({
        results: data.foods               
      })
    })
}

handleInputChange = () => {
  this.setState({
    query: this.search.value
  }, () => {
    if (this.state.query && this.state.query.length > 1) {
      if (this.state.query.length % 2 === 0) {
        this.getInfo()
      }
    } 
  })
}

 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <div>
         <Suggestions props={this.state.results}/>
         </div>
     </form>
   )
 }
}

export default Search