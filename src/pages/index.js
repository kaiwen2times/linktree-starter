import React, { Component } from 'react';
import { TITLE } from 'constant/constant';
import Profile from 'components/Profile';
import Linktree from 'components/Linktree';

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
    return(
      <div>
        <Profile />
        <Linktree />
      </div>
    );
  };
}
export default Home;