// initialize map
const locationHash = new Map();
locationHash.set("SSB", [34.7252, -86.6405]);
locationHash.set("NCH", [34.733717, -86.640018]);
locationHash.set("NUR", [34.730075, -86.638686]);
locationHash.set("OKT", [34.719024, -86.646399]);
locationHash.set("OPB", [34.722765, -86.638527]);
locationHash.set("ROB", [34.730913, -86.638731]);
locationHash.set("LIB", [34.729370, -86.639986]);
locationHash.set("SPR", [34.731265, -86.636767]);
locationHash.set("SST", [34.725790, -86.641162]);
locationHash.set("UFC", [34.726598, -86.636719]);
locationHash.set("WIL", [34.729230, -86.641442]);
locationHash.set("BAB", [34.728245, -86.641435]);
locationHash.set("BEV", [34.731218, -86.64289602]);
locationHash.set("CCH", [34.730006, -86.641792]);
locationHash.set("CTC", [34.7308, -86.641401]);
locationHash.set("CU", [34.72713, -86.640046]);
locationHash.set("CVA", [34.724393, -86.638828]);
locationHash.set("CVO", [34.724692, -86.638797]);
locationHash.set("ENG", [34.722606, -86.640502]);
locationHash.set("FF",[34.733272, -86.640775]);
locationHash.set("MOR",[34.733193, -86.641912]);
locationHash.set("MSB", [34.721949, -86.638094]);

var map = L.map('map',{zoomControl: false}).setView([34.7252, -86.6405], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// location markers
var ssb = L.marker([34.7252, -86.6405],
    {alt: 'SSB'}).addTo(map)
    .bindPopup('Student Services Building (SSB)<br>1 location');
var nch = L.marker([34.733717, -86.640018],
    {alt: 'NCH'}).addTo(map)
    .bindPopup('North Campus Housing (NCH)');
var nur = L.marker([34.730075, -86.638686],
    {alt: 'NUR'}).addTo(map)
    .bindPopup('Nursing Building (NUR)<br>locations not yet available');
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
    .bindPopup('Charger Union (CU)<br>2 locations');
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

 map.locate({setView: true, maxZoom:19});

map.on('locationfound',(e)=>{ //Callback for when the location is found 
    L.marker(e.latlng,{icon: L.icon({iconUrl: "./assets/youAreHere.png", iconSize: [21,21]})}).addTo(map).bindPopup("Your location");//Put you on the map :D
    userLocation = [e.latlng.lat,e.latlng.lng];//save the coordinates to a variable
    closest = "SSB";
    for(let [key, value] of locationHash){
        if(key==="SSB"){
            min = ((userLocation[0]-value[0])**2+(Math.abs(userLocation[1])-Math.abs(value[1]))**2)**(0.5);
        } 
        else{
            if(Math.min(min,((userLocation[0]-value[0])**2+(Math.abs(userLocation[1])-Math.abs(value[1]))**2)**(0.5))<min){
                min =((userLocation[0]-value[0])**2+((Math.abs(userLocation[1])-Math.abs(value[1]))**2))**(0.5);
                closest = key;
            }
        }
        console.log(closest);
        
    }  
    onClick(closest.toLowerCase());
});

map.on('locationerror',(e)=>alert(e.message));

ssb.on('click', function() {onClick("ssb")});
nch.on('click', function() {onClick("nch");});
nur.on('click', function() {onClick("nur");});
okt.on('click', function() {onClick("okt");});
opb.on('click', function() {onClick("opb")});
rob.on('click', function() {console.log("clicked rob");});
lib.on('click', function() {console.log("clicked lib");});
spr.on('click', function() {onClick("spr");});
sst.on('click', function() {console.log("clicked sst");});
ufc.on('click', function() {console.log("clicked ufc");});
wil.on('click', function() {onClick("wil");});
bev.on('click', function() {onClick("bev");});
cch.on('click', function() {onClick("cch");});
ctc.on('click', function() {onClick("ctc");});
cu.on('click', function() {onClick("cu");});
cva.on('click', function() {console.log("clicked cva");});
cvo.on('click', function() {console.log("clicked cvo");});
eng.on('click', function() {onClick("eng");});
ffh.on('click', function() {console.log("clicked ffh");});
mor.on('click', function() {onClick("mor");});
msb.on('click', function() {onClick("msb");});
bab.on('click', function() {onClick("bab");});

function onClick(name) {
    if (name === "ssb")
    {
        console.log("clicked ssb");
        var img = new Image();
        img.src = 'assets/station-photos/SSB1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Student Services Building</h3><br><b>First Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img);
    }
    else if (name === "cu")
    {
        console.log("clicked cu");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/CU1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Charger Union</h3><br><b>First Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img1);
        var img2 = document.createElement('img');
        img2.src = 'assets/station-photos/CU2.png';
        info_box.innerHTML += "<br><b>Second Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img2);
    }
    else if (name === "bab")
    {
        console.log("clicked bab");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/BAB1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Business Administration Building </h3><br><b>First Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img1);
        var img2 = document.createElement('img');
        img2.src = 'assets/station-photos/BAB2.png';
        info_box.innerHTML += "<br><b>Second Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img2);
    }
    else if (name === "bev")
    {
        console.log("clicked bev");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/BAB1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Bevill Center </h3><br><b>No Locations Yet</b>";
    }
    else if (name === "cch")
    {
        console.log("clicked cch");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/BAB1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Central Campus Residence Hall </h3><br><b>No Locations Yet</b>";
    }
    else if (name === "ctc")
    {
        console.log("clicked ctc");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/CTC-caf.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Conference Training Center </h3><br><b>First Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img1);
    }
    else if (name === "mor")
    {
        console.log("clicked mor");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/MOR0.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Morton Hall</h3><br><b>Basement</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img1);
        var img2 = document.createElement('img');
        img2.src = 'assets/station-photos/MOR1.png';
        info_box.innerHTML += "<br><b>First Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img2);
        var img3 = document.createElement('img');
        img3.src = 'assets/station-photos/MOR250.png';
        info_box.innerHTML += "<br><b>Second Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img3);
    }
    else if (name === "wil")
    {
        console.log("clicked wil");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/Wil1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Wilson Hall </h3><br><b>First Floor</b><br>Temperature: warm<br>Filter Status: green";
        info_box.appendChild(img1);
        var img2 = document.createElement('img');
        img2.src = 'assets/station-photos/Wil1.png';
        info_box.innerHTML += "<br><b>Second Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img2);
    }
    else if (name === "spr")
    {
        console.log("clicked spr");
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Spragins Hall</h3><br><b>No Locations Yet</b>";
    }
    else if (name === "nch")
    {
        console.log("clicked ctc");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/NORTH1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>North Campus Housing</h3><br><b>First Floor</b><br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img1);
    }

    else if (name ==="opb")
    {
        console.log("clicked opb");
        var img1 = document.createElement('img');
        img1.src= 'assets/station-photos/optics113.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Optics Building</h3><br><b>First floor near 113<br>Temperature: Warm<br>Filter Status: green";
        info_box.appendChild(img1);
        var img2 = document.createElement('img');
        img2.src = 'assets/station-photos/optics128.png';
        info_box.innerHTML += "<br><b>First floor near 128<br>Temperature:Warm<br>Filter Status: green";
        info_box.appendChild(img2)
    }
    else if (name==="msb")
    {
        console.log("clicked msb");
        var img1 = document.createElement('img');
        img1.src= 'assets/station-photos/MSB1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Material Science Building</h3><br><b>First floor<br>Temperature: Cool<br>Filter Status: green";
        info_box.appendChild(img1);
    }
    else if(name === "okt"){
        console.log("clicked okt");
        var img1 = document.createElement('img');
        img1.src= 'assets/station-photos/OKT104.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Olin B King Technology Hall</h3><br><b>First floor<br>Temperature: Cool<br>Filter Status: yellow";
        info_box.appendChild(img1);
    }
    else if(name==="eng"){
        console.log("clicked opb");
        var img1 = document.createElement('img');
        img1.src= 'assets/station-photos/ENG1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Engineering Building</h3><br><b>First floor<br>Temperature: cool<br>Filter Status: green";
        info_box.appendChild(img1);
    }
    else if(name==='nur'){
        console.log("clicked opb");
        var info_box = document.getElementById("info");
        info_box.innerHTML = "<h3>Nursing Building</h3><br><b>No locations Avaliable";
    }
    else if(name==='ff'){
        console.log("clicked ff");
        var img1 = document.createElement('img');
        img1.src = 'assets/station-photos/FRANZ1.png';
        var info_box = document.getElementById("info");
        info_box.innerHTML="<h3>Frank Franz Residence Hall</h3><br><b>First floor<br>Temperature: warm<br>Filter Status: green";
        
    }
    // other else if statements here
    map.on('click', function() {
        document.getElementById("info").innerHTML = "";
    })
}
