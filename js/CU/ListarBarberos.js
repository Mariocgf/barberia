// JS completo para cardBarbero con carrusel manual y flechas nativas
const cardBarbero = ({ nombre, descripcion, imgURL, calificaciones }, i) => {
    const carouselId = `carouselResenas-${i}`;
    const estrellas = ['★☆☆☆☆','★★☆☆☆','★★★☆☆','★★★★☆','★★★★★'];
  
    const items = calificaciones.map((c, idx) => `
      <div class="carousel-item ${idx === 0 ? 'active' : ''}">
        <div class="p-2">
          <strong>${c.nombre}</strong>
          <div class="text-warning mb-1">${estrellas[c.puntaje - 1]}</div>
          <p class="mb-0">${c.descripcion}</p>
        </div>
      </div>
    `).join('');
  
    return `
      <div class="col">
        <div class="blur card h-100">
          <div class="row g-0 flex-column flex-lg-row">
            <!-- Imagen -->
            <div class="col-12 col-lg-4">
              <img src="${imgURL}" class="img-fluid w-100 rounded-start" alt="${nombre}">
            </div>
            <!-- Contenido y carrusel -->
            <div class="col-12 col-lg-8 d-flex flex-column">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
              </div>
              <div class="px-3 pb-3">
                <h6>Reseñas</h6>
                <div id="${carouselId}" class="carousel slide" data-bs-interval="false">
                  <div class="carousel-inner">
                    ${items}
                  </div>
                  <!-- Flechas de Bootstrap -->
                  <button class="carousel-control-prev" type="button"
                          data-bs-target="#${carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                  </button>
                  <button class="carousel-control-next" type="button"
                          data-bs-target="#${carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  };
  
  const mostrarBarberos = () => {
    const cont = document.getElementById('container-barberos');
    cont.innerHTML = barberos.map((b, i) => cardBarbero(b, i)).join('');
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // Poblamos el select
    const sel = document.getElementById('inputCalificacionBarbero');
    barberos.forEach((b, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = b.nombre;
      sel.appendChild(opt);
    });
  
    // Renderizamos las cards
    mostrarBarberos();
  });
  