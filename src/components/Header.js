import React, { Component } from 'react';
import C from '../data/Constants'; 

class Header extends Component {
  render() {
    return <h2>{C.HEADER.TITLE}</h2>;
  }
}

export default Header;
