const btnFormulario = document.getElementById("btnFormulario");

btnFormulario.addEventListener("click", () => {
  try {
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("emails").value.trim();
    const servicio = document.getElementById("servicio-select").value;
    const fecha = document.getElementById("date").value;
    const hora = document.getElementById("inputHora").value;
    const barberoSeleccionado = document.querySelector(".barberSelect").value;

    if (!nombre || !email || !servicio || !fecha || !hora) {
      throw new Error('Nombre, email, servicio, fecha y hora son obligatorios');
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
  if (!servicios || !agendas) {
    throw new Error('Error en la configuración del sistema');
  }

  const servicio = servicios.find(s => s.nombre === servicioNombre);
  if (!servicio) throw new Error('Servicio no encontrado');

  // Solo buscar barbero si se proporcionó un nombre
  const barbero = nombreBarbero && nombreBarbero.trim() !== "" ? 
                 barberos.find(b => b.nombre === nombreBarbero) : 
                 null;


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

      // Solo verificar conflicto con barbero si hay barbero en la cita existente y en la nueva
      if (barbero && citaExistente.barbero) {
        if (citaExistente.barbero.nombre === barbero.nombre) {
          if ((fechaCita >= inicioExistente && fechaCita < finExistente) ||
              (finCita > inicioExistente && finCita <= finExistente) ||
              (fechaCita <= inicioExistente && finCita >= finExistente)) {
            throw new Error(`El barbero ${barbero.nombre} ya tiene una cita de ${citaExistente.servicio.nombre} entre ${inicioExistente.toLocaleTimeString()} y ${finExistente.toLocaleTimeString()}`);
          }
        }
      }

      // Verificar conflicto con el cliente (email)
      if (citaExistente.cliente.email === email) {
        if ((fechaCita >= inicioExistente && fechaCita < finExistente) ||
            (finCita > inicioExistente && finCita <= finExistente) ||
            (fechaCita <= inicioExistente && finCita >= finExistente)) {
          throw new Error(`Ya tienes una cita agendada para ${citaExistente.servicio.nombre} entre ${inicioExistente.toLocaleTimeString()} y ${finExistente.toLocaleTimeString()}`);
        }
      }
    }
  }

  const nuevaCita = new Agenda(fechaCita, servicio, nombre, email, barbero || null);
  agendas.push(nuevaCita);
  
  return 'OK';
}