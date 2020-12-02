import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { TITLE } from 'constant/constant';
import Profile from 'components/Profile';
import Linktree from 'components/Linktree';

class Home extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const { t } = this.props;
    if (document) {
      document.title = document.title || t('title');
    }
  };

  render() {
    return(
      <div className="content">
        <Profile />
        <Linktree />
      </div>
    );
  };
}
export default withTranslation()(Home);