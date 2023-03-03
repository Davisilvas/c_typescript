// imports
import axios from "axios";

// getting elements from the html
const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

// google key
const GOOGLE_API_KEY = 'Not Goin to my github';

// custom type
type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number, lng: number}}}[];
    status: 'OK' | 'ZERO_RESULTS';
}

// declare
declare var google: any;

function searchAddressHandler(e: Event){
    e.preventDefault();
    const enteredAddress = addressInput.value;

    // send this to Google's API
    
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
    )}&key=${GOOGLE_API_KEY}`).then(
        response => {
            //console.log(response)
            if(response.data.status !== 'OK'){
                throw new Error('Could not fetch location')
            }
            const coordinates = response.data.results[0].geometry.location;
            const map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: 16
              });

              new google.maps.Marker({
                position: coordinates,
                map: map,
              });
        }
    ).catch(
        err => {
            alert(err.message);
            console.log(err)
        }
    )
}

form.addEventListener('submit', searchAddressHandler)