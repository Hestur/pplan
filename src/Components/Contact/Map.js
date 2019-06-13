import React, {Component} from 'react';
import MapComponent from './MapComponent';
import {fromLonLat} from 'ol/proj.js';


const LocationsSelect = (props) => {
    const locations = props.locations.map((item, index) => 
    <option key={index} value={item.coords} className="dd-locations">{item.name} </option>
    );
    return(
        <div>
             <select onChange={props.onSelectLocation}>
                {locations}
            </select>
        </div>
    )
  }
  
  
  
  export default class Map extends Component {
    constructor () {
      super();
      this.locations = [
        {name: 'Kannikegade', coords: fromLonLat([10.210101, 56.155998])},
        {name: 'København', coords: fromLonLat([12.568337, 55.676098])},
        {name: 'Berlin', coords: fromLonLat([13.404954, 52.520008])}
      ]
      this.state = {
        currentLocation : fromLonLat([10.210101, 56.155998])
      }
      this.panToLocation = this.panToLocation.bind(this);
    }
  
    panToLocation(e) {
      const selectedIndex = e.target.selectedOptions[0].index;
      const selectedLocation = this.locations[selectedIndex].coords;
      this.setState(() => {
        return {
          currentLocation : selectedLocation
        }
      });
    }
  render(){
      return(
          <div className="MapComponent">
          <LocationsSelect locations={this.locations} onSelectLocation={this.panToLocation}/>
          <MapComponent currentLocation={this.state.currentLocation}/>
          </div>
  )
  }}