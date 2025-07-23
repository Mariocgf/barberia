document.addEventListener('DOMContentLoaded', () => {


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
    // setTimeout(() => {
    //   loader.classList.add('d-none');
    //   content.classList.remove('d-none');
    //   render(agendas);
    // }, 500);
  });
  
  
  