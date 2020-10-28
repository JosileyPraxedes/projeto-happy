const options = {
  dragging: false,
  touchZoom: false,
  doubleClick: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([-22.8757, -43.08], 14);

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

L.marker([-22.8757, -43.08], { icon: myIcon }).addTo(map); // Orfanato Santo Antônio

// image gallery

function selectImage(event) {
  const button = event.currentTarget;

  // remove todas as classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  // selecionando a image clicada por
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // atualizando o container de imagem
  imageContainer.src = image.src

  // adicionando a classe .active para o botão clicado
  button.classList.add("active");
}












// exemplos
// // Lar da criança Padre Franz Neumair
// var marker = L.marker([-22.8993, -43.0795]).addTo(map);

// // Quintal da Ana
// var marker = L.marker([-22.9144, -43.0855]).addTo(map);

// // Sempre criança - Ponto de encontro
// var marker = L.marker([-22.9039, -43.0975]).addTo(map);
