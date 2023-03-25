// initialize map
var map = L.map('map').setView([34.7252, -86.6405], 14);
var userLocation = [];
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// location markers
var ssb = L.marker([34.7252, -86.6405],
    {alt: 'SSB'}).addTo(map)
    .bindPopup('Student Services Building (SSB)');
var nch = L.marker([34.733717, -86.640018],
    {alt: 'NCH'}).addTo(map)
    .bindPopup('North Campus Housing (NCH)');
var nur = L.marker([34.730075, -86.638686],
    {alt: 'NUR'}).addTo(map)
    .bindPopup('Nursing Building (NUR)');
var okt = L.marker([34.719024, -86.646399],
    {alt: 'OKT'}).addTo(map)
    .bindPopup('Olin B. King Technology Hall (OKT)');
var opb = L.marker([34.722765, -86.638527],
    {alt: 'OPB'}).addTo(map)
    .bindPopup('Optics Building (OPB)');
var rob = L.marker([34.730913, -86.638731],
    {alt: 'ROB'}).addTo(map)
    .bindPopup('Roberts Hall (ROB)');
var lib = L.marker([34.729370, -86.639986],
    {alt: 'LIB'}).addTo(map)
    .bindPopup('Salmon Library (LIB)');
var spr = L.marker([34.731265, -86.636767],
    {alt: 'SPR'}).addTo(map)
    .bindPopup('Spragins Hall (SPR)');
var sst = L.marker([34.725790, -86.641162],
    {alt: 'SST'}).addTo(map)
    .bindPopup('Shelby Center for Science and Technology Hall (SST)');
var ufc = L.marker([34.726598, -86.636719],
    {alt: 'UFC'}).addTo(map)
    .bindPopup('University Fitness Center (UFC)');
var wil = L.marker([34.729230, -86.641442],
    {alt: 'WIL'}).addTo(map)
    .bindPopup('Wilson Hall (WIL)');
var bab = L.marker([34.728245, -86.641435],
    {alt: 'BAB'}).addTo(map)
    .bindPopup('Business Administration Building (BAB)');
var bev = L.marker([34.731218, -86.64289602],
    {alt: 'BEV'}).addTo(map)
    .bindPopup('Bevill Center (BEV)');
var cch = L.marker([34.730006, -86.641792],
    {alt: 'CCH'}).addTo(map)
    .bindPopup('Cental Campus Residence Hall (CCH)');
var ctc = L.marker([34.7308, -86.641401],
    {alt: 'CTC'}).addTo(map)
    .bindPopup('Conference Training Center (CTC)');
var cu = L.marker([34.72713, -86.640046],
    {alt: 'CU'}).addTo(map)
    .bindPopup('Charger Union (CU)');
var cva = L.marker([34.724393, -86.638828],
    {alt: 'CVA'}).addTo(map)
    .bindPopup('Charger Village Aditional (CVA)');
var cvo = L.marker([34.724692, -86.638797],
    {alt: 'CVO'}).addTo(map)
    .bindPopup('Charger Village Original (CVO)');
var eng = L.marker([34.722606, -86.640502],
    {alt: 'ENG'}).addTo(map)
    .bindPopup('Engineering Building (ENG)');
var ffh = L.marker([34.733272, -86.640775],
    {alt: 'FFH'}).addTo(map)
    .bindPopup('Frank Franz Residence Hall (FFH)');
var mor = L.marker([34.733193, -86.641912],
    {alt: 'MOR'}).addTo(map)
    .bindPopup('Morton Hall (MOR)');
var msb = L.marker([34.721949, -86.638094],
    {alt: 'MSB'}).addTo(map)
    .bindPopup('Material Science Building (MSB)');

map.locate({setView: true, maxZoom:18});

map.on('locationfound',(e)=>{
    L.marker(e.latlng,{icon: L.icon({iconUrl: "./assets/youAreHere.png", iconSize: [21,21]})}).addTo(map).bindPopup("Your location");
    userLocation = e.latlng;
});

map.on('locationerror',(e)=>alert(e.message));

ssb.on('click', function() {console.log("clicked ssb");});
nch.on('click', function() {console.log("clicked nch");});
nur.on('click', function() {console.log("clicked nur");});
okt.on('click', function() {console.log("clicked okt");});
opb.on('click', function() {console.log("clicked opb");});
rob.on('click', function() {console.log("clicked rob");});
lib.on('click', function() {console.log("clicked lib");});
spr.on('click', function() {console.log("clicked spr");});
sst.on('click', function() {console.log("clicked sst");});
ufc.on('click', function() {console.log("clicked ufc");});
wil.on('click', function() {console.log("clicked wil");});
bev.on('click', function() {console.log("clicked bev");});
cch.on('click', function() {console.log("clicked cch");});
ctc.on('click', function() {console.log("clicked ctc");});
cu.on('click', function() {console.log("clicked cu");});
cva.on('click', function() {console.log("clicked cva");});
cvo.on('click', function() {console.log("clicked cvo");});
eng.on('click', function() {console.log("clicked eng");});
ffh.on('click', function() {console.log("clicked ffh");});
mor.on('click', function() {console.log("clicked mor");});
msb.on('click', function() {console.log("clicked msb");});
