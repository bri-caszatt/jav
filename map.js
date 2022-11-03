// Create a new Leaflet map
let poemMap;
poemMap = L.map("map");

// Adding the tile layer (the map itself)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 16);

// Adding a marker to show where Times Square is located
const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);

// Adding popup to Times Square marker
timesSquare.bindPopup("<b>Times Square</b>");

// Adding a red circle to the map
const circle = L.circle([40.7580, -73.9855], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);

// Adding a polyline from Times Square to the Grad Center
const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'blue'
}).addTo(poemMap);

// Adding popups for the line and circle
polyline.bindPopup("<b>Times Square to the Graduate Center</b>");
circle.bindPopup("I'm a circle!");

// Adding lat and long to Times Square
const latLng = timesSquare.getLatLng();
console.log(latLng.lat);
console.log(latLng.lng);

// Shifting map's view to Times Square
poemMap.panTo(timesSquare.getLatLng());

// Function to log the lat and long where people click
poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});

// Add favorite restaurant to map
const greekRes = L.marker([40.77641448335401, -73.91589933603895]).addTo(poemMap);
greekRes.bindPopup("<b>Gregory's Corner Taverna is EXCELLENT!</b>");

// Add polylines to represent the walk from fav restaurant to nearest subway stop
const polyline2 = L.polyline([
    [40.77641448335401, -73.91589933603895],
    [40.774403624114534, -73.91291671976494]
], {
    color: 'purple'
}).addTo(poemMap);

const polyline3 = L.polyline([
    [40.774403624114534, -73.91291671976494],
    [40.77500790386126, -73.91210937486562]
], {
    color: 'purple'
}).addTo(poemMap);