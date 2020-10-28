const options = {
  dragging: false,
  touchZoom: false,
  doubleClick: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([-22.89119, -43.09189], 13);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map);


L.marker([-22.8757, -43.08], { icon: myIcon }).addTo(map); // Orfanato Santo Antônio











// exemplos
// // Lar da criança Padre Franz Neumair
// var marker = L.marker([-22.8993, -43.0795]).addTo(map);

// // Quintal da Ana
// var marker = L.marker([-22.9144, -43.0855]).addTo(map);

// // Sempre criança - Ponto de encontro
// var marker = L.marker([-22.9039, -43.0975]).addTo(map);
