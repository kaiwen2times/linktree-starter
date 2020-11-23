import React, { Component } from 'react';
import { TITLE } from 'constant/constant'

class Home extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    if (document) {
      document.title = document.title || TITLE;
    }
  };

  render() {
    return(null);
  };
}
export default Home;