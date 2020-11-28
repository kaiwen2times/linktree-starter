import React from 'react'

const LinkTree = () => {
  const paddingBottom = {paddingBottom: '30px'};
  const buttonStyling = {width: '80%', paddingTop:'10px', paddingBottom:'10px', fontWeight: '600'};
  return (
    <div className="container">
      <div className="col-xs-12">
        <div className="text-center">
          <div style={paddingBottom}>
            <button
              className="btn btn-outline-light shake"
              style={buttonStyling}
            >
            15% OFF Instagram Growth
            </button>
          </div>
          <div style={paddingBottom}>
            <button
              className="btn btn-outline-light" 
              style={buttonStyling}
            >
              Guide: Increasing Your Engagement
            </button>
          </div>
          <div style={paddingBottom}>
            <button
              className="btn btn-outline-light"
              style={buttonStyling}
            >
              View My YouTube Channel
            </button>
          </div>
          <div style={paddingBottom}>
            <button
              className="btn btn-outline-light"
              style={buttonStyling}
            >
              Connect On LinkedIn
            </button>
          </div>
          <div style={paddingBottom}>
            <button
              className="btn btn-outline-light"
              style={buttonStyling}
            >
              My Personal Website
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LinkTree;
