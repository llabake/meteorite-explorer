import React, { Component } from 'react'
import SearchBar from './SearchBar';
import Meteorites from './Meteorites';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <SearchBar />
        <Meteorites />
      </div>
    );
  }
}
export default Main;