import React, { Component, FC, useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker, GeoJSON, useMap } from "react-leaflet";
import L, { polyline } from "leaflet";
import { RideModel, LatLng, Ride } from '../assets/model'
import axios from "axios";


const Rides: FC = () => {
  const [ rides, setRides ] = useState<Ride[] | null>(null);
  const [data, setData] = React.useState();
  const map = useMap();


  //const [ rides, setRides ] = useState([]);


  useEffect(() => {     //for clarity purposes: getRepo=get response; myRepo=my response
    const getRepo = async () => {
      //try {
        (axios.get<Ride[]>('http://localhost:3001/trips')).then(value => setRides(value.data)).catch(() => setRides([]));

/*
        const response = await axios.get('http://localhost:3001/trips');  

        console.log(response);
        const myRepo = response.data;
        setRides(myRepo);
        
      } catch (error) {
        console.log(error);
        
      }
    };
    getRepo(); */
  }})


  if (data) {
    // These next 3 lines purely for debuggins:
    const geojsonObject = L.geoJSON(data);
    map.fitBounds(geojsonObject.getBounds());
    console.log(geojsonObject);
    // end debugging

    return <GeoJSON data={data} />;
  } else {
    return null;
  }

}

const Map = (props: any) => {

return (
  <div className='map-container'>
    <MapContainer
      style={{ height: "100vh", width: "100vw" }}
      center={[55.6126, 12.0756]}
      zoom={11}
      doubleClickZoom={false}
      id="mapId"
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/*<Polyline color="lime" positions={rides} /> */}


    </MapContainer>

   {/* <Polyline color="lime" positions={rides} /> */}


</div>
);
}

export default Rides;

