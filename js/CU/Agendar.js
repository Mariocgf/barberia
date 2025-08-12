const btnFormulario = document.getElementById("btnFormulario");

btnFormulario.addEventListener("click", () => {
  try {
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("emails").value.trim();
    const servicio = document.getElementById("servicio-select").value;
    const fecha = document.getElementById("date").value;
    const hora = document.getElementById("inputHora").value;
    const barberoSeleccionado = document.querySelector(".barberSelect").value;

    if (!nombre || !email || !servicio || !fecha || !hora || !barberoSeleccionado) {
      throw new Error('Todos los campos son obligatorios');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Por favor ingresa un email válido');
    }

    const resultado = agendarCita(nombre, email, servicio, barberoSeleccionado, fecha, hora);
    
    if (resultado === 'OK') {
      alert('Cita agendada con éxito');
    }
  } catch (error) {
    alert(error.message);
  }
});

function agendarCita(nombre, email, servicioNombre, nombreBarbero, fechaStr, horaStr) {

  if (!servicios || !barberos || !agendas) {
    throw new Error('Error en la configuración del sistema');
  }

  const servicio = servicios.find(s => s.nombre === servicioNombre);
  const barbero = barberos.find(b => b.nombre === nombreBarbero);

  if (!servicio) throw new Error('Servicio no encontrado');
  if (!barbero) throw new Error('Barbero no encontrado');

  const fechaCita = new Date(fechaStr);
  const [horas, minutos] = horaStr.split(":").map(Number);
  
  if (isNaN(horas) || isNaN(minutos) || horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
    throw new Error('Hora inválida');
  }

  fechaCita.setHours(horas, minutos, 0, 0);

  if (fechaCita < new Date()) {
    throw new Error('No se pueden agendar citas en fechas pasadas');
  }

  const finCita = new Date(fechaCita);
  finCita.setMinutes(finCita.getMinutes() + servicio.duracion);

  for (const citaExistente of agendas) {

    if (citaExistente.fecha.toDateString() === fechaCita.toDateString()) {
      const inicioExistente = new Date(citaExistente.fecha);
      const finExistente = new Date(inicioExistente);
      finExistente.setMinutes(finExistente.getMinutes() + citaExistente.servicio.duracion);

      if (citaExistente.barbero?.nombre === barbero.nombre) {
        if ((fechaCita >= inicioExistente && fechaCita < finExistente) ||
            (finCita > inicioExistente && finCita <= finExistente) ||
            (fechaCita <= inicioExistente && finCita >= finExistente)) {
          throw new Error(`El barbero ${barbero.nombre} ya tiene una cita de ${citaExistente.servicio.nombre} entre ${inicioExistente.toLocaleTimeString()} y ${finExistente.toLocaleTimeString()}`);
        }
      }

      if (citaExistente.cliente.email === email) {
        if ((fechaCita >= inicioExistente && fechaCita < finExistente) ||
            (finCita > inicioExistente && finCita <= finExistente) ||
            (fechaCita <= inicioExistente && finCita >= finExistente)) {
          throw new Error(`Ya tienes una cita agendada para ${citaExistente.servicio.nombre} entre ${inicioExistente.toLocaleTimeString()} y ${finExistente.toLocaleTimeString()}`);
        }
      }
    }
  }

  const nuevaCita = new Agenda(fechaCita, servicio, nombre, email, barbero);
  agendas.push(nuevaCita);
  
  return 'OK';
}