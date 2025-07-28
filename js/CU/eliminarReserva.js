// eliminarReserva.js
document.addEventListener('DOMContentLoaded', () => {
    const tbody             = document.getElementById('tbody-reservas');
    const modalEl           = document.getElementById('confirmModal');
    const modalBody         = document.getElementById('confirmModalBody');
    const confirmDeleteBtn  = document.getElementById('confirmDeleteBtn');
    const bsModal           = new bootstrap.Modal(modalEl);
    let deleteIndex         = null;
  
    tbody.addEventListener('click', e => {
      const btn = e.target.closest('.delete-reserva');
      if (!btn) return;
  
      // Calcula el índice de la fila clicada
      const tr    = btn.closest('tr');
      const rows  = Array.from(tbody.children);
      const idx   = rows.indexOf(tr);
      if (idx === -1) return;
  
      deleteIndex = idx;
      const r = agendas[idx];
      const fecha = r.fecha.toISOString().slice(0,10);
      const hora  = r.fecha.toTimeString().slice(0,5);
      const cliente = r.cliente.nombre;
  
      // Personaliza el mensaje del modal
      modalBody.textContent = `¿Eliminar reserva de ${cliente} el ${fecha} a las ${hora}?`;
      bsModal.show();
    });
  
    // Cuando el usuario confirma en el modal
    confirmDeleteBtn.addEventListener('click', () => {
      if (deleteIndex === null) return;
      agendas.splice(deleteIndex, 1);
      render(agendas);         // vuelve a pintar la tabla
      deleteIndex = null;
      bsModal.hide();          // cierra el modal
    });
  });
  