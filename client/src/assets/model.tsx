import { type } from "os";

export interface LatLng {
    lat: number,
    lng: number
  }


export enum isCom {   //isComputed: ref pg 5 of DB manual (Is boolean true or false and tells weather or not the measurement is computed.)
    'Yes', 'No'
  }

export interface Trip {
    path: LatLng[],
    measurement: isCom
}

export type Trips = Trip[];

export interface MetaData {
  time: number,
  distance: number
  start_time: string,
  end_time: string

}

// represents one ride: a model + meta data of the ride
export interface Ride {
  segments: Trips,
  meta: MetaData
}



export type RideModel = Ride[];


//export type Paths = RideModel[]; //nt oo sure


//export type MeasurementsModel = string[];
