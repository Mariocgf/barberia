document.addEventListener('DOMContentLoaded', () => {
  const desktopBody = document.getElementById('tbody-reservas-desktop');
  const mobileList  = document.getElementById('list-reservas-mobile');

  function render(lista) {
    // --- Desktop: tabla ---
    desktopBody.innerHTML = '';
    lista.forEach((r, idx) => {
      desktopBody.insertAdjacentHTML('beforeend', `
        <tr data-idx="${idx}">
          <td>${r.cliente.nombre}</td>
          <td>${r.barbero?.nombre || '—'}</td>
          <td>${r.fecha.toISOString().slice(0,10)}</td>
          <td>${r.fecha.toTimeString().slice(0,5)}</td>
          <td>${r.servicio.nombre}</td>
          <td>
            <button
              type="button"
              class="btn btn-sm btn-outline-danger delete-reserva"
              data-idx="${idx}"
              title="Eliminar reserva">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>`);
    });

    // --- Móvil: cards ---
    mobileList.innerHTML = '';
    lista.forEach((r, idx) => {
      mobileList.insertAdjacentHTML('beforeend', `
        <div class="card mb-3" data-idx="${idx}">
          <div class="card-body">
            <h5 class="card-title">${r.cliente.nombre}</h5>
            <p class="mb-1"><strong>Barbero:</strong> ${r.barbero?.nombre || '—'}</p>
            <p class="mb-1"><strong>Fecha:</strong> ${r.fecha.toISOString().slice(0,10)}</p>
            <p class="mb-1"><strong>Hora:</strong> ${r.fecha.toTimeString().slice(0,5)}</p>
            <p class="mb-3"><strong>Servicios:</strong> ${r.servicio.nombre}</p>
            <button
              type="button"
              class="btn btn-sm btn-outline-danger delete-reserva w-100"
              data-idx="${idx}">
              <i class="bi bi-trash"></i> Eliminar
            </button>
          </div>
        </div>`);
    });
  }

  // inicializa render:
  render(agendas);

  // filtros y orden siguen igual:
  filterB.addEventListener('change', () => {
    const val = filterB.value;
    render(agendas.filter(r => !val || r.barbero?.nombre === val));
  });
  btnOrden.addEventListener('click', () => {
    agendas.sort((a,b) => a.fecha - b.fecha);
    render(agendas);
  });

  // lógica de eliminación (reutiliza el modal existente)
  const modalEl          = document.getElementById('confirmModal');
  const modalBody        = document.getElementById('confirmModalBody');
  const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
  const bsModal          = new bootstrap.Modal(modalEl);
  let toDeleteIdx        = null;

  // delegación en document: pillar clicks de ambos desktop y mobile
  document.addEventListener('click', e => {
    const btn = e.target.closest('.delete-reserva');
    if (!btn) return;
    toDeleteIdx = Number(btn.dataset.idx);
    const r = agendas[toDeleteIdx];

    const fecha   = r.fecha.toISOString().slice(0,10);
    const hora    = r.fecha.toTimeString().slice(0,5);
    modalBody.textContent = `¿Eliminar reserva de ${r.cliente.nombre} el ${fecha} a las ${hora}?`;
    bsModal.show();
  });

  confirmDeleteBtn.addEventListener('click', () => {
    if (toDeleteIdx === null) return;
    agendas.splice(toDeleteIdx, 1);
    render(agendas);
    bsModal.hide();
    toDeleteIdx = null;
  });
});
