import React from "react";
import ReactDOM from "react-dom";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {defaults as defaultInteractions} from 'ol/interaction.js';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = null;
    this.olMap = null;
    this.setMapRef = element => {
      this.mapRef = element;
    };
  }

  render() {
    const styles = { height: "100%", width: "100%" };
    return <div style={styles} ref={this.setMapRef} />;
  }

  componentWillUpdate(nextProps) {
    const mapView = this.olMap.getView();
    mapView.animate({
      center: nextProps.currentLocation,
      duration: 20
    });
  }

  componentDidMount() {
    const mapDOMNode = ReactDOM.findDOMNode(this.mapRef);
    this.olMap = new Map({
      interactions: defaultInteractions({
        constrainResolution: true, mouseWheelZoom: false, dragPan: true
      }),
      target: mapDOMNode,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: this.props.currentLocation,
        zoom: 13
      })
    });
  }
}

export default MapComponent;
