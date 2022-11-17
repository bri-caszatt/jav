let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}) .addTo(nycMap);

nycMap.setView([40.7128, -74.0060], 16);

// creating neighborhood boundary layer and add some fill color to the map
//L.geoJSON(nyc, {
//    style: function(feature) {
//        return {
//            color: "blue",
//            fillColor: "green",
//            fillOpacity: 0.5
//        };
//    }
// }).addTo(nycMap);

// making neighborhoods in Manhattan red, Queens purple, others green
L.geoJSON(nyc, {
    style: function(feature) {
        if (feature.properties.borough === "Manhattan"){
            return {
                color: "blue",
                fillColor: "red",
                fillOpacity: 0.5
            };
        }
        else if (feature.properties.borough === "Queens"){
            return {
                color: "blue",
                fillColor: "purple",
                fillOpacity: 0.5
            };
        }
        else {
            return {
                color: "blue",
                fillColor: "green",
                fillOpacity: 0.5
            };
        };
    }
}).addTo(nycMap);

// show each borough on the map
L.geoJSON(nyc, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.borough + "</h3> <hr> <h3>" + feature.properties.neighborhood + "</h3>");
    }
}).addTo(nycMap);

// using jQuery to check for click event on Woodside button
$("#pan-to-woodside").click(function() {
    // find woodside neighborhood property in the dataset
    let woodside = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Woodside";
    });
    console.log(woodside);
    // find the coordiantes of the woodside property
    let coordinates = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Woodside";
    }).geometry.coordinates;
    console.log(coordinates);
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
});

// using jQuery to check for click event on Flatbush button
$("#pan-to-flatbush").click(function() {
    // find flatbush neighborhood property in the dataset
    let flatbush = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Flatbush";
    });
    console.log(flatbush);
    // find the coordiantes of the flatbush property
    let coordinates = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Flatbush";
    }).geometry.coordinates;
    console.log(coordinates);
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
});

// get a list of all neighborhoods in the dataset
let neighborhoods = nyc.features.map(function(feature) {
    return feature.properties.neighborhood;
}).filter(function(neighborhood) {
    return neighborhood !== "";
}).sort();
console.log(neighborhoods);

// display all the neighborhoods in the neighborhoods div
neighborhoods.forEach(function(neighborhood) {
    $("#neighborhoods").append("<a href'#'><li>" + neighborhood + "</li></a>");
    // display in columns
    if (neighborhoods.indexOf(neighborhood) % 4 === 0) {
        $("#neighborhoods").append("<br>");
    }
});

// if the neighborhood is clicked, find the neighborhood on the map and pan to it
$("#neighborhoods").on("click", "li", function() {
    let neighborhoodText = $(this).text(); // get the text of the neighborhood
    let coordinates = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === neighborhoodText; // check if the text matches the neighborhood in the dataset
    }).geometry.coordinates; // get the coordinates of the neighborhood
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
    nycMap.setZoom(16); //zoom in
    // add marker to the neighborhood polygon
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).addTo(nycMap);
    // add a popup to the marker
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + neighborhoodText + "</h3>").addTo(nycMap);
});

// Draw some polylines to connect the boundaries of different neighborhoods.
// I'm going to concat Sunnyside and Woodside, and then filter out the coordinates they share in common

let sunnyside = nyc.features.find(function(feature) {
    return feature.properties.neighborhood === "Sunnyside";
});
console.log(sunnyside);
// find the coordiantes of the sunnyside property
let coordinatesSun = nyc.features.find(function(feature) {
    return feature.properties.neighborhood === "Sunnyside";
}).geometry.coordinatesSun;
console.log(coordinatesSun);

let sunny = [[-73.91189, 40.74871500000023],
    [-73.911642, 40.748685000000236],
    [-73.9124489999999, 40.74592],
    [-73.912131, 40.74588700000019],
    [-73.912822, 40.74248600000016],
    [-73.90750606448664, 40.741861758283356],
    [-73.90855, 40.73793000000014],
    [-73.91068899999985, 40.73347100000015],
    [-73.912008, 40.729945],
    [-73.911869, 40.72955300000016],
    [-73.9121, 40.72760900000025],
    [-73.91797, 40.72850100000016],
    [-73.91742, 40.731132],
    [-73.91898, 40.731729],
    [-73.922726, 40.73435600000019],
    [-73.921271, 40.734784],
    [-73.920447, 40.73485000000021],
    [-73.923118, 40.735458],
    [-73.92487900000012, 40.73603200000013],
    [-73.934996, 40.737869],
    [-73.93463, 40.73943],
    [-73.93483, 40.739797],
    [-73.934576, 40.739677],
    [-73.93347, 40.745152000000125],
    [-73.934401, 40.74603500000018],
    [-73.92732, 40.747485],
    [-73.926353, 40.747551],
    [-73.920798, 40.746891],
    [-73.920342, 40.749159],
    [-73.915406, 40.75011],
    [-73.913484, 40.750199],
    [-73.91162474414156, 40.749980206042615],
    [-73.91189, 40.74871500000023]];

// I already get the woodside coordinates in the console log when I click Pan to Woodside button
let wood = [[-73.90086625651662, 40.75767359345876],
    [-73.90014, 40.75615],
    [-73.898697, 40.75411],
    [-73.897699, 40.75236500000025],
    [-73.89728, 40.75041800000018],
    [-73.896938, 40.7505010000003],
    [-73.894338, 40.746580000000236],
    [-73.89145700000012, 40.746870000000165],
    [-73.8910946825089, 40.74504032111727],
    [-73.89071600000017, 40.74312800000017],
    [-73.890875, 40.743106000000125],
    [-73.89054700000014, 40.741513000000126],
    [-73.89021171251302, 40.7407695813653],
    [-73.88989800000017, 40.740074],
    [-73.889742, 40.73911500000013],
    [-73.89015653762357, 40.7391920865165],
    [-73.89016, 40.739199000000156],
    [-73.89147138976158, 40.73943659356507],
    [-73.89866, 40.74077300000018],
    [-73.89929621421317, 40.74085427120026],
    [-73.90050900000017, 40.74107400000022],
    [-73.90750600000018, 40.741862],
    [-73.90750606448664, 40.741861758283356],
    [-73.912822, 40.74248600000016],
    [-73.912131, 40.74588700000019],
    [-73.9124489999999, 40.74592],
    [-73.911642, 40.748685000000236],
    [-73.91189, 40.74871500000023],
    [-73.91162474414156, 40.749980206042615],
    [-73.90971, 40.749755],
    [-73.909483, 40.75056],
    [-73.909556, 40.751037],
    [-73.91058, 40.752984],
    [-73.91351921222132, 40.75349596596567],
    [-73.911764, 40.75557300000021],
    [-73.911568, 40.75548000000015],
    [-73.911294, 40.75581400000026],
    [-73.910618, 40.75547600000017],
    [-73.90907, 40.757565000000184],
    [-73.907828, 40.75699900000025],
    [-73.90737, 40.75698800000022],
    [-73.90086625651662, 40.75767359345876]];

let sunnyWood = sunny.concat(wood);
console.log(sunnyWood); // this yields an array of 75 items, which is 33 (sunnyside) + 42 (woodside)

// sort the array so only unique values appear using a function
function unique(array) {
    return (array || []).sort().filter(
      (item, index, _arr) => !index || item != _arr[index - 1]
    );
  }

let sunnyWoodFiltered = sunnyWood.filter(unique);
console.log(sunnyWoodFiltered); // this is still giving me 75 items

const polyline = L.polyline(sunnyWood, {
    color: 'black'
}).addTo(nycMap);