document.addEventListener("DOMContentLoaded", function () {
  const mapElement = document.getElementById('map');
  if (mapElement) {
    const map = L.map('map').setView([-34.9011, -56.1645], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-34.9011, -56.1645])
      .addTo(map)
      .bindPopup('Montevideo, Uruguay')
      .openPopup();
  }
});