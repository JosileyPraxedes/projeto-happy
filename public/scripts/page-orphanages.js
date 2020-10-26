// create map
const map = L.map("mapid").setView([-22.89119, -43.09189], 14);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map);

// create icon
const myIcon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  maxWidth: 240,
}).setContent(
  'Orfanato Santo Antônio <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>'
);

L.marker([-22.8757, -43.08], { icon: myIcon })
  .addTo(map) // Orfanato Santo Antônio
  .bindPopup(popup);



















// exemplos
// // Lar da criança Padre Franz Neumair
// var marker = L.marker([-22.8993, -43.0795]).addTo(map);

// // Quintal da Ana
// var marker = L.marker([-22.9144, -43.0855]).addTo(map);

// // Sempre criança - Ponto de encontro
// var marker = L.marker([-22.9039, -43.0975]).addTo(map);
