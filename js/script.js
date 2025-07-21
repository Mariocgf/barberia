document.addEventListener('DOMContentLoaded', () => {
  // 1) Definir servicios y promociones
  const servicios = [
    new Servicio('Corte de pelo', 600),
    new Servicio('Perfilado y afeitado de barba', 450),
    new Servicio('Coloración capilar', 1000),
    new Servicio('Manicura masculina', 500),
    new Servicio('Pack Renovate (Corte + Barba)', 950),
    new Servicio('Pack Imagen Completa (Corte + Barba + Manicura)', 1350),
    new Servicio('Color + Corte', 1400)
  ];

  // 2) Definir barberos
  const barberos = [
    new Barbero('Juan Pérez',     'Especialista en cortes modernos'),
    new Barbero('Ana Gómez',      'Experta en perfilado de barba'),
    new Barbero('Carlos López',   'Maestro en degradados y estilos clásicos'),
    new Barbero('María Rodríguez','Profesional en coloración y diseño')
  ];

  // 3) Poblamos el <select> de servicios
  const selectServicio = document.getElementById('servicio-select');
  selectServicio.innerHTML = `<option selected value="">Elige un servicio</option>`;
  servicios.forEach(s => {
    const opt = document.createElement('option');
    opt.value       = s.nombre;
    opt.textContent = `${s.nombre} — $${s.precio}`;
    selectServicio.appendChild(opt);
  });

  // 4) Poblamos el <select> de barberos (filtro)
  const filterB = document.getElementById('filter-barbero');
  filterB.innerHTML = `<option value="">Todos</option>`;
  barberos.forEach(b => {
    const opt = document.createElement('option');
    opt.value       = b.nombre;
    opt.textContent = b.nombre;
    filterB.appendChild(opt);
  });

  // 5) Referencias al DOM
  const loader   = document.getElementById('loader');
  const content  = document.getElementById('reservas-content');
  const tbody    = document.getElementById('tbody-reservas');
  const btnOrden = document.getElementById('sort-fecha-asc');

  // 6) Reservas iniciales usando los barberos del array
  let reservas = [
    new Agenda('2025-07-20', servicios[0], 'Carlos', '099123456', 'carlos@mail.com', barberos[0]),
    new Agenda('2025-07-21', servicios[1], 'María',  '098654321', 'maria@mail.com',  barberos[1])
  ];

  // 7) Función de renderizado
  function render(lista) {
    tbody.innerHTML = '';
    lista.forEach(r => {
      tbody.insertAdjacentHTML('beforeend', `
        <tr>
          <td>${r.cliente.nombre}</td>
          <td>${r.barbero?.nombre || '—'}</td>
          <td>${r.fecha.toISOString().slice(0,10)}</td>
          <td>${r.fecha.toTimeString().slice(0,5)}</td>
          <td>${r.servicio.nombre}</td>
        </tr>`);
    });
  }

  // 8) Filtrar por barbero
  filterB.addEventListener('change', () => {
    const val = filterB.value;
    render(reservas.filter(r => !val || r.barbero?.nombre === val));
  });

  // 9) Ordenar ascendente por fecha
  btnOrden.addEventListener('click', () => {
    reservas.sort((a,b) => a.fecha - b.fecha);
    render(reservas);
  });

  // 10) Simular precarga (500 ms)
  setTimeout(() => {
    loader.classList.add('d-none');
    content.classList.remove('d-none');
    render(reservas);
  }, 500);
});
