
import { fetchData } from './apiCalls'
import Trip from './Trip.js';
import Traveler from './Traveler.js'


//querySelectors
let name = document.querySelector('.name');
// let pastTrips = document.querySelector('.pastTrips');
let articleCards = document.querySelector('.articles');
let totalCost = document.querySelector('.total-cost');
let dateInput = document.querySelector('#dateInput');
let durationAmt = document.querySelector('#durationAmount');
let numTravelers = document.querySelector('#numTravelers');
let dropdownSelection = document.querySelector('.data-entry-type-selection');
let inputSection = document.querySelector('input-section')
let tripButton = document.querySelector('#submitTrip');

let travelers;
let trips;
let destination1;
let trip;
let singleTraveler;
let currentDate;

function getData() {
  Promise.all([fetchData("travelers"),fetchData("trips"),fetchData("destinations"),])
  .then((value) => {
    console.log(value)
    travelers = value[0].travelers;
    trips = value[1].trips;
    destination1 = value[2].destinations;
    trip = new Trip(trips, destination1)
    singleTraveler = new Traveler(travelers[43]);
    currentDate = new Date().toJSON().slice(0, 10);
    console.log('newTrip', trip)
  
    welcomeUser()
    showDestinationDropdownSelections()
  });
}

window.addEventListener('load', getData);

function handleButtons(event) {
  switch (event.target.className) {
    case "select-data-btn":
      
      break;
    case "":
    
      break;
    case "":
    
      break;
    case "":
  
      break;
      case "":

          break;
    default:
      break;
  }
};

const welcomeUser = () => {
  console.log('singleTraveler', singleTraveler)
 
  displayName()
  displayTotalCost()
  displayDestinationTripCards()
 
  
};

  function displayName() {
    name.innerText = `Welcome! \u00a0 ${singleTraveler.travelerName()}`;
  }

  function displayTotalCost() {
    totalCost.innerText = `${trip.findTotalTravelCostsThisYear(singleTraveler.id, currentDate)}`
  }
  
   
 function displayDestinationTripCards() {
  articleCards.innerHTML += ` <article class="article">
  <p class="destination-name">${singleTraveler.travelerName().split(' ').splice(0, 1)}'s Past Trips</p>
  <p class="date">${trip.getPastTrips(singleTraveler.id, currentDate)}</p>
  <p class="past"></p>
</article>
<article class="article">
  <p class="destination-name">${singleTraveler.travelerName().split(' ').splice(0, 1)}'s Pending Trips</p>
  <p class="date">${trip.getPendingTrips(singleTraveler.id, currentDate)}</p>
  <p class="past"></p>
</article>
<article class="article">
  <p class="destination-name">${singleTraveler.travelerName().split(' ').splice(0, 1)}'s Upcoming Trips</p>
  <p class="date">${trip.getUpcomingTrips(singleTraveler.id, currentDate)}</p>
  <p class="past"></p>
</article>
`

}

function showDestinationDropdownSelections() {
let dropdownIteration = destination1.map(dest => `<option>${dest.destination}</option>`)
console.log(dropdownIteration)
  dropdownSelection.innerHTML = ` <label for="data-location-slection">Select Data Type:</label>
<select id="dropdownSelection" name="data-type-selection" class="data-entry-type-selection" required>
${dropdownIteration.sort()}
</select> ` 

}

  

  

 



 






// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file

import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/ocean.jpg'
import './images/plane.svg'


console.log('This is the JavaScript entry file - your code begins here.');
