import {filterB } from '/js/variables.js'


document.addEventListener('DOMContentLoaded', () => {

  // 5) Referencias al DOM
  const loader = document.getElementById('loader');
  const content = document.getElementById('reservas-content');
  const tbody = document.getElementById('tbody-reservas');
  const btnOrden = document.getElementById('sort-fecha-asc');

  // 6) Reservas iniciales usando los barberos del array
  let reservas = [
    new Agenda('2025-07-20', servicios[0], 'Carlos', '099123456', 'carlos@mail.com', barberos[0]),
    new Agenda('2025-07-21', servicios[1], 'María', '098654321', 'maria@mail.com', barberos[1])
  ];

  // 7) Función de renderizado
  function render(lista) {
    tbody.innerHTML = '';
    lista.forEach(r => {
      tbody.insertAdjacentHTML('beforeend', `
        <tr>
          <td>${r.cliente.nombre}</td>
          <td>${r.barbero?.nombre || '—'}</td>
          <td>${r.fecha.toISOString().slice(0, 10)}</td>
          <td>${r.fecha.toTimeString().slice(0, 5)}</td>
          <td>${r.servicio.nombre}</td>
        </tr>`);
    });
  }

  // 8) Filtrar por barbero
  filterB.addEventListener('change', () => {
    const val = filterB.value;
    render(agendas.filter(r => !val || r.barbero?.nombre === val));
  });

  // 9) Ordenar ascendente por fecha
  btnOrden.addEventListener('click', () => {
    agendas.sort((a, b) => a.fecha - b.fecha);
    render(agendas);
  });

  // 10) Simular precarga (500 ms)
  setTimeout(() => {
    loader.classList.add('d-none');
    content.classList.remove('d-none');
    render(agendas);
  }, 500);
});


