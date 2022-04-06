
import React, { FC } from "react";
import { Polyline } from 'react-leaflet'


import {Trips, Trip} from '../assets/model'



type Props = {
    roadSegments: Trips;
  };
  
  const Roads: FC<Props> = ( { roadSegments } ) => {  
      return <> { 
          roadSegments.map( (seg: Trip, i: number) => {			
              return <Polyline 
                          key={`line${i}`} 
                          pathOptions={i ? {color: 'lime'} : {color: 'yellow'}} 
                          positions={seg.path}>	
                      </Polyline>
          } ) } </>
  }
  
  export default Roads;
  