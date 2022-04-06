import React, { FC, useEffect, useState } from 'react'
import { MapContainer, Polyline, TileLayer, useMap } from 'react-leaflet'

import { RideModel, LatLng, Ride } from '../assets/model'
import axios from "axios";

import '../Styles/DashboardMap.css'


const Map: FC = (props: any) => {
  //const [rides, setRides] = useState<Ride[]>([]);
  const [book, setBook] = useState<LatLng[][]>([])

  const limeOptions = { color: 'blue' }

  //const [data, setData] = React.useState();
  //const map = useMap();

  const getRepo = async () =>
    (axios
      .get<Ride[]>('http://localhost:3001/trips'))
      .then(value => {
        console.log(value)
        //setRides(value.data) 
        const book = value.data.map(item => item.segments[0].path)
        console.log(book)
        setBook(book)
      })

      .catch(() => setBook([]));


  useEffect(() => {    //for clarity purposes: getRepo=get response; myRepo=my response
    console.log('use effect')
    getRepo();

  }, [])



  return (
    <div className='map-container'>
      <MapContainer
        preferCanvas={true}
        center={[55.6126, 12.0756]}
        zoom={11}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={limeOptions} positions={book} />;

      </MapContainer>
    </div>

  )
}

export default Map