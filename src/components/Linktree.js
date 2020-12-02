import React from 'react';
import { withTranslation } from 'react-i18next';

const LinkTree = ({ t }) => {
  const paddingBottom = { paddingBottom: '30px' };
  const buttonStyling = { width: '80%', paddingTop:'10px', paddingBottom:'10px', fontWeight: '600' };
  const links = t('links', { returnObjects: true });
  const formatLinks = () => {
    return links.map((link) => {
      return (
        <div style={paddingBottom} key={link.link_description}>
          <button
            className="btn btn-outline-light"
            style={buttonStyling}
            onClick={() => {
              window.open(link.link_location);
            }}
          >
          {link.link_description}
          </button>
        </div>
      )
    });
  };

  return (
    <div className="container">
      <div className="col-xs-12">
        <div className="text-center">{formatLinks()}</div>
      </div>
    </div>
  )
};
export default withTranslation()(LinkTree);
