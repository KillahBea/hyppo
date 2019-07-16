import React, { Component } from 'react'
import locations from '../stylings/locations.css'

class Locations extends Component {
  render() {
    return (
      <>
        <div>
          <div className="LocationImage">
            <img src={require('../assets/StAug.png')} />
          </div>
          <div className="LocationDetails">
            <div className="BuildingImage">
              <img src={require('../assets/StAugBuilding.png')} />
            </div>
            <div>
              <p>Charlotte Street</p>
              <p>48 Charlotte Street</p>
              <p>Saint Augustine, FL 32084</p>
              <p>(904)217-7853</p>
              <p className="hours">Hours:</p>
              <p>Mon - Thu 11am - 10pm</p>
              <p>FRI 11am - 11pm</p>
              <p>SAT 11am - 11pm</p>
              <p>SUN 11am - 10pm</p>
            </div>
          </div>
          <div className="LocationDetails">
            <div>
              <p>Saint George Street</p>
              <p>70 Saint George Street</p>
              <p>Saint Augustine, FL 32084</p>
              <p>(904) 547-2980</p>
              <p className="hours">Hours:</p>
              <p>MON - THU 11am - 10pm</p>
              <p>FRI 11am - 11pm</p>
              <p>SAT 11am - 11pm</p>
              <p>SUN 11am - 10pm</p>
            </div>
            <div className="BuildingImage">
              <img src={require('../assets/StGeorge.png')} />
            </div>
          </div>
          <div className="LocationImage">
            <img src={require('../assets/Jacksonville.png')} />
          </div>
          <div className="LocationDetails">
            <div className="BuildingImage">
              <img src={require('../assets/JacksonvilleBuilding.png')} />
            </div>
            <div>
              <p>Riverside</p>
              <p>90 Riverside Ave STE 605</p>
              <p>Jacksonville, FL 32202</p>
              <p>(904) 551-0361</p>
              <p className="hours">Hours:</p>
              <p>Mon - Thu 11am - 9pm</p>
              <p>FRI 11am - 10pm</p>
              <p>SAT 11am - 10pm</p>
              <p>SUN 11am - 9pm</p>
            </div>
          </div>
          <div className="LocationImage">
            <img src={require('../assets/StPete.png')} />
          </div>
          <div className="LocationDetails">
            <div className="BuildingImage">
              <img src={require('../assets/StPeteBuilding.png')} />
            </div>
            <div>
              <p>St Pete Hyppo</p>
              <p>627 Central Ave</p>
              <p>Saint Petersburg, FL 33701</p>
              <p>(727) 498-6536</p>
              <p className="hours">Hours:</p>
              <p>SUN - THU 11am - 10pm</p>
              <p>FRI 11am - 11pm</p>
              <p>SAT 11am - 11pm</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Locations
