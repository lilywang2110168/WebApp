import React from 'react';
import { withGoogleMap, GoogleMap,  Marker} from "react-google-maps";
import {default as MarkerClusterer} from 'react-google-maps/lib/addons/MarkerClusterer';


class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          data:''
        };

        this.onMouseOver = this.onMouseOver.bind(this);

    }

    onMouseOver(ev){
        //console.log(ev);
        let markers=ev.getMarkers();
        let data={lat:ev.center_.lat(), lng:ev.center_.lng()};
        this.setState({data:data});
        console.log(this.state.data);
        if(markers.length>10){

        for(let i=0; i<markers.length; i++){
            let lat=markers[i].position.lat();
            let lng=markers[i].position.lng();
            console.log(markers[i].getZIndex());

        }
    }
    }

  render() {
        let infoWindow;
        if(this.state.lng){
           infoWindow=<InfoWindow
               position={this.state.data}
           >
               <div><p>hello this is a message</p></div>
           </InfoWindow>
        }



      const GettingStartedGoogleMap = withGoogleMap(props => (
          <GoogleMap
              defaultZoom={3}
              defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
          >
              <MarkerClusterer
                  averageCenter
                  enableRetinaIcons
                  gridSize={60} onMouseOver={this.onMouseOver}>
              {this.props.markers.map((marker,index) => (
                  <Marker
                      position={{ lat: marker.lat, lng: marker.lng}}
                      key={index}  zIndex={12323}
                  />
              ))}

              </MarkerClusterer>
              {infoWindow}
          </GoogleMap>
              ));

    return <GettingStartedGoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        containerElement={
            <div style={{ height:`100%`}} />}
        mapElement={
            <div style={{ height: `100%`}} />}/>
  }
}

export default Map;