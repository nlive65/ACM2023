var map = L.map('map').setView([34.7252, -86.6405], 14);
var userLocation = [];
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([34.7252, -86.6405],
{alt: 'SSB'}).addTo(map)
.bindPopup('Student Services Building (SSB)');
//north
var marker = L.marker([34.733717, -86.640018],
{alt: 'NCH'}).addTo(map)
.bindPopup('North Campus Housing (NCH)');
//nursing 
var marker = L.marker([34.730075, -86.638686],
{alt: 'NUR'}).addTo(map)
.bindPopup('Nursing Building (NUR)');
//OKT
var marker = L.marker([34.719024, -86.646399],
{alt: 'OKT'}).addTo(map)
.bindPopup('Olin B. King Technology Hall (OKT)');
// optics 
var marker = L.marker([34.722765, -86.638527],
{alt: 'OPB'}).addTo(map)
.bindPopup('Optics Building (OPB)');
//ROB 
var marker = L.marker([34.730913, -86.638731],
{alt: 'ROB'}).addTo(map)
.bindPopup('Roberts Hall (ROB)');
//salmon library 
var marker = L.marker([34.729370, -86.639986],
{alt: 'LIB'}).addTo(map)
.bindPopup('Salmon Library (LIB)');
//spragins hall 
var marker = L.marker([34.731265, -86.636767],
{alt: 'SPR'}).addTo(map)
.bindPopup('Spragins Hall (SPR)');
//sst 
var marker = L.marker([34.725790, -86.641162],
{alt: 'SST'}).addTo(map)
.bindPopup('Shelby Center for Science and Technology Hall (SST)');
//UFC do
var marker = L.marker([34.726598, -86.636719],
{alt: 'UFC'}).addTo(map)
.bindPopup('University Fitness Center (UFC)');
//wilson do
var marker = L.marker([34.729230, -86.641442],
{alt: 'WIL'}).addTo(map)
.bindPopup('Wilson Hall (WIL)');
//emi part
var marker = L.marker([34.728245, -86.641435],
{alt: 'UAH'}).addTo(map)
.bindPopup('Business Administration Building (BAB)');
var marker = L.marker([34.731218, -86.64289602],
{alt: 'UAH'}).addTo(map)
.bindPopup('Bevill Center (BEV)');
var marker = L.marker([34.730006, -86.641792],
{alt: 'UAH'}).addTo(map)
.bindPopup('Cental Campus Residence Hall (CCH)');
var marker = L.marker([34.7308, -86.641401],
{alt: 'UAH'}).addTo(map)
.bindPopup('Conference Training Center (CTC)');
var marker = L.marker([34.72713, -86.640046],
{alt: 'UAH'}).addTo(map)
.bindPopup('Charger Union (CU)');
var marker = L.marker([34.724393, -86.638828],
{alt: 'UAH'}).addTo(map)
.bindPopup('Charger Village Aditional (CVA)');
var marker = L.marker([34.724692, -86.638797],
{alt: 'UAH'}).addTo(map)
.bindPopup('Charger Village Original (CVO)');
var marker = L.marker([34.722606, -86.640502],
{alt: 'UAH'}).addTo(map)
.bindPopup('Engineering Building (ENG)');
var marker = L.marker([34.733272, -86.640775],
{alt: 'UAH'}).addTo(map)
.bindPopup('Frank Franz Residence Hall (FF)');
var marker = L.marker([34.733193, -86.641912],
{alt: 'UAH'}).addTo(map)
.bindPopup('Morton Hall (MOR)');
var marker = L.marker([34.721949, -86.638094],
{alt: 'UAH'}).addTo(map)
.bindPopup('Material Science Building (MSB)');


map.locate({setView: true,maxZoom:19});
var marker = L.marker([34.7252, -86.6405],
{alt: 'UAH'}).addTo(map)
.bindPopup('UAH');

map.on('locationfound',(e)=>{
    L.marker(e.latlng,{icon: L.icon({iconUrl: "./Assets/youAreHere.png", iconSize: [21,21]})}).addTo(map).bindPopup("Your location");
    userLocation = e.latlng;
});
map.on('locationerror',(e)=>alert(e.message));