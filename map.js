var map = L.map('map').setView([34.7252, -86.6405], 14);
var userLocation = [];
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.locate({setView: true,maxZoom:19});
var marker = L.marker([34.7252, -86.6405],
{alt: 'UAH'}).addTo(map)
.bindPopup('UAH');

map.on('locationfound',(e)=>{
    L.marker(e.latlng,{icon: L.icon({iconUrl: "./Assets/youAreHere.png", iconSize: [21,21]})}).addTo(map).bindPopup("Your location");
    userLocation = e.latlng;
});
map.on('locationerror',(e)=>alert(e.message));