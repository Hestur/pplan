import React, {Component} from 'react';
import ReactMapGL,{NavigationControl} from 'react-map-gl';

export default class Map extends Component {

  state = {
    viewport: {
      width: 1920,
      height: 880,
      latitude: 56.155998,
      longitude: 10.210101,
      zoom: 5
    }
  };

  render() {
    const {viewport} = this.state;
    return (
      <ReactMapGL {...viewport}
      mapStyle='mapbox://styles/hestur/cjx0441vd0w8d1cpkhqr94mzq'
        width="1920px"
        height="94vh"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={'pk.eyJ1IjoiaGVzdHVyIiwiYSI6ImNqeDAzN3c2dDBjbWg0OW51eXV5OWwzb2cifQ.HyZ-qFVe7tTQad9jX2CRbw'}>
        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl />
        </div>
      </ReactMapGL>
      
    );
  }
}
