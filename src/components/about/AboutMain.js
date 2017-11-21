import React from 'react'
import SubHeader from '../SubHeader'
import ClearFix from '../ClearFix'

export class IntroMain extends React.Component {
  render() {
    return (
      <div>
        <SubHeader title="Introduction" />
        <ClearFix />
        <div id="content">
          <div className="container">
            <div className="row">
              <div className="intro-container">
                <div className="intro-greeting">
                  Hi everyone.
                </div>
                <div className="intro-paragraph">
                  Thank you for visiting our homepage.
                </div>
                <div className="intro-paragraph">
                  <p>Loving Open Door Church is a presbyterian church that has joined \
                    the Korean American Presbyterian Church organization in the Northwest.  \
                    According to Ezekiel 47:8-12, just like the water flowing out from the \
                    temple and revived the Arabah dead sea, Loving Open Door church is a \
                    church that hopes and dreams of genuine reconciliation in individual, \
                    family and society through the word of God.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class MissionMain extends React.Component {
  render() {
    return (
      <div>
        <SubHeader title="Mission" />
        <ClearFix />
        <div className="container">
          {this.props.text}
        </div>
      </div>
    )
  }
}
