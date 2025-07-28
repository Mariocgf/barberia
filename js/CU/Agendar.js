    const btnFormulario = document.getElementById("btnFormulario");

    
    const nombre = document.getElementById("name");
    const email = document.getElementById("emails");
    const servicio = document.getElementById("servicio-select");
    const fecha = document.getElementById("date");
    const hora = document.getElementById("inputHora");


    btnFormulario.addEventListener("click", () => {
        console.log(nombre.value, email.value, servicio.value, slcBarberosAgenda.value, fecha.value, hora.value)
        verificarAgenda();
    })

    function verificarAgenda() {
        
      if (nombre.value == "" || email.value == "" || servicio.value  == "" || fecha.value == "" || hora.value == "") {
        alert('Hay campos obligatorios');
        return;
      }

      console.log(nombre.value, email.value, servicio.value, slcBarberosAgenda.value, fecha.value, hora.value)

      console.log(fecha.value)

      const nuevaFecha = new Date(fecha.value)

      
      const horaTotal = hora.value.split(":")
      
      console.log(horaTotal)
      
      nuevaFecha.setHours(horaTotal[0])
      nuevaFecha.setMinutes(horaTotal[1])
      
    
    const existe = agendas.some(cita => {

        return (cita.fecha.getFullYear() == nuevaFecha.getFullYear() && cita.fecha.getMonth() == nuevaFecha.getMonth() && cita.fecha.getDate() == nuevaFecha.getDate() && cita.fecha.getHours() == nuevaFecha.getHours() && cita.fecha.getMinutes() == nuevaFecha.getMinutes())

    })

      if (existe) {
        alert('¡Esta fecha y hora ya está agendada!');
      } else {
        alert('Agendado');
        const nuevoAgenda = new Agenda(nuevaFecha, servicio.value, nombre.value, email.value, slcBarberosAgenda.value )
        agendas.push(nuevoAgenda)
      }
    }