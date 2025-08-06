const btnFormulario = document.getElementById("btnFormulario");

btnFormulario.addEventListener("click", () => {
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("emails").value;
  const servicio = document.getElementById("servicio-select").value;
  const fecha = document.getElementById("date").value;
  const hora = document.getElementById("inputHora").value;
  const slcBarberosAgenda = document.querySelector(".barberSelect").value;

  try {
    agendarCita(nombre, email, servicio, slcBarberosAgenda, fecha, hora);
  } catch (error) {
    alert(error.message);
  }
})



function agendarCita(nombre, email, servicio, slcBarberosAgenda, fecha, hora) {

  console.log(nombre, email, servicio, slcBarberosAgenda, fecha, hora)

  if (nombre == "" || email == "" || servicio == "" || fecha == "" || hora == "") {
    alert('Hay campos obligatorios');
    return;
  }


  const servicio1 = servicios.find(b => b.nombre == servicio);
  const barbero1 = barberos.find(b => b.nombre == slcBarberosAgenda);

  const nuevaFecha = new Date(fecha)
  const horaTotal = hora.split(":")

  nuevaFecha.setHours(horaTotal[0])
  nuevaFecha.setMinutes(horaTotal[1])

  const agenda = new Agenda(nuevaFecha, servicio1, nombre, email, barbero1);

  agendas.forEach(elem => {

    if (elem.fecha.getFullYear() == nuevaFecha.getFullYear() && elem.fecha.getMonth() == nuevaFecha.getMonth() && elem.fecha.getDate() == nuevaFecha.getDate()) {

      const fechaD = elem.fecha;
      fechaD.setMinutes(elem.fecha.getMinutes() + elem.servicio.duracion);

      if ( agenda.fecha < fechaD && elem.barbero != undefined && elem.barbero.nombre == agenda.barbero.nombre) {
        throw new Error("Barbero no disponible")
      }

      if (agenda.fecha < fechaD && agenda.cliente.email == elem.cliente.email ) {
        throw new Error("Ya estas agendado");
      }
      
    }

  })

  agendas.push(agenda);
  alert('Agendado');
  return 'OK'
}