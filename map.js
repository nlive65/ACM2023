var map = L.map('map').setView([34.7252, -86.6405], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([34.7252, -86.6405],
{alt: 'UAH'}).addTo(map)
.bindPopup('UAH');