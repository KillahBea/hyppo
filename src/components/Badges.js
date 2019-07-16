import React, { Component } from 'react'
import badges from '../stylings/badges.css'

class Badges extends Component {
  render() {
    return (
      <>
        <section className="badges">
          {this.props.currentPops.length >= 2 ? (
            <div>
              <img src={require('../assets/popImages/pop1.png')} />
            </div>
          ) : (
            <div className="blankBadge">&nbsp;</div>
          )}
          {this.props.currentPops.length >= 4 ? (
            <div>
              <img src={require('../assets/popImages/pop2.png')} />
            </div>
          ) : (
            <div className="blankBadge">&nbsp;</div>
          )}
          {this.props.currentPops.length >= 6 ? (
            <div>
              <img src={require('../assets/popImages/pop3.png')} />
            </div>
          ) : (
            <div className="blankBadge">&nbsp;</div>
          )}
          {this.props.currentPops.length >= 8 ? (
            <div>
              <img src={require('../assets/popImages/pop4.png')} />
            </div>
          ) : (
            <div className="blankBadge">&nbsp;</div>
          )}
          {this.props.currentPops.length >= 10 ? (
            <div>
              <img src={require('../assets/popImages/pop5.png')} />
            </div>
          ) : (
            <div className="blankBadge">&nbsp;</div>
          )}
          {this.props.currentPops.length >= 12 ? (
            <div>
              <img src={require('../assets/popImages/pop6.png')} />
            </div>
          ) : (
            <div className="blankBadge">&nbsp;</div>
          )}
          {this.props.currentPops.length >= 14 ? (
            <div>
              <img src={require('../assets/popImages/pop7.png')} />
            </div>
          ) : (
            <div className="blankBadge">&nbsp;</div>
          )}
        </section>
      </>
    )
  }
}

export default Badges
