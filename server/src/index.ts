
import express, { request } from 'express';

import cors from 'cors';




import { RideModel, LatLng, Trips, isCom, MetaData, Ride} from './model'


const app = express();
app.use(cors());



const port = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json({
  type: ['application/json', 'text/plain']
}))



const trip1: Trips = [
  {path: [
    {lat: 55.6126, lng: 12.0757}, 
    {lat: 55.5300, lng: 12.1251}
  ],
  measurement: isCom.Yes
  },
]

const firstMeta: MetaData = { 
    time: 15, 
    distance: 15,
    start_time: new Date(2022, 0O7, 0O7, 17, 23, 42, 11).toLocaleString(),
    end_time: new Date(2022, 0O7, 0O7, 17, 55, 12, 11).toLocaleString(),
    }


const firstRide: Ride = { segments: trip1, meta: firstMeta }


/* app.get('/book', (req, res)=>{   //test
    res.send('hello world cup');

});
 */

const trip2: Trips = [

    { path: [
        {lat: 55.6100, lng: 12.0472}, 
        {lat: 55.5821, lng: 12.0370}
      ],
      measurement: isCom.No
      },
]

const secondMeta: MetaData = { 
    time: 25, 
    distance: 25,
    start_time: new Date(2022, 0O4, 0O7, 12, 33, 42, 11).toLocaleString(),
    end_time: new Date(2022, 0O4, 0O7, 16, 55, 15, 11).toLocaleString(),
    }

const secondRide: Ride = { segments: trip2, meta: firstMeta }

//Requests


app.get('/trips', (req, res)=>{
    const data: RideModel = [ firstRide, secondRide ]    //NB:
    console.log(data[0].segments[0].path);

    res.json(data); 

});


/* app.post('/map', function (req, res) {   //work on post command
    res.send('POST request to homepage')
  }) */





//PORT
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});


