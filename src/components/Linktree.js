import React from 'react'

const LinkTree = () => {
  const paddingBottom = {paddingBottom: '30px'};
  return (
    <div className="container">
      <div className="col-xs-12">
        <div className="text-center">
          <div style={paddingBottom}>
            <button
              onclick="location.href='http://bit.ly/2IZURI7'"
              className="btn btn-outline-light shake"
              style="width: 80%; padding-top:10px; padding-bottom:10px; font-weight: 800;"
            >
            15% OFF Instagram Growth
            </button>
          </div>
          <div style={paddingBottom}>
            <button
              onclick="location.href='http://bit.ly/2SVZXES'" 
              className="btn btn-outline-light" 
              style={{width: '80%', paddingTop:'10px', paddingBottom:'10px', fontWeight: '600'}}>
              Guide: Increasing Your Engagement
            </button>
          </div>
          <div style="padding-bottom: 30px;">
            <button onclick="location.href='#'" className="btn btn-outline-light" style="width: 80%; padding-top:10px; padding-bottom:10px; font-weight: 600;">View My YouTube Channel</button>
          </div>
          <div style="padding-bottom: 30px;">
            <button onclick="location.href='#'" className="btn btn-outline-light" style="width: 80%; padding-top:10px; padding-bottom:10px; font-weight: 600;">Connect On LinkedIn</button>
          </div>
          <div style="padding-bottom: 30px;">
            <button onclick="location.href='#'" className="btn btn-outline-light" style="width: 80%; padding-top:10px; padding-bottom:10px; font-weight: 600;">My Personal Website</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LinkTree;
