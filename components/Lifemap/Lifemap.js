import React, { Component} from 'react';
import './Lifemap.scss';

import { render } from 'react-dom';
//import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

//import L from 'leaflet'
//const isBrowser = typeof window !== 'undefined';
//const L = isBrowser ? require('leaflet') : undefined;

class Lifemap extends Component {

  constructor(props){
    super(props);
    this.state = {map : ''};
  }
    
  componentDidMount() {
    const L = require('leaflet');
    L.Icon.Default.imagePath = '../../node_modules/leaflet/dist/images';

    /* create leaflet map */
    var map = L.map(document.createElement('div')).setView([52, 4], 10);
      
      
    /* add default stamen tile layer */
    new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                minZoom: 0,
                maxZoom: 18,
                attribution: 'Map data © <a href="http://www.openstreetmap.org">OpenStreetMap contributors</a>'
    }).addTo(map);
    L.marker([52.5, 13.4]).addTo(map);

    this.setState({map: map});
  }

  render() {    
    console.log(this.state.map);
    return (
      <div>this.state.map</div>
    );
  }

}

export default Lifemap;
