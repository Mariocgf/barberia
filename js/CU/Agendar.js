    const btnFormulario = document.getElementById("btnFormulario");

    
    


    btnFormulario.addEventListener("click", () => {
      const nombre = document.getElementById("name").value;
      const email = document.getElementById("emails").value;
      const servicio = document.getElementById("servicio-select").value;
      const fecha = document.getElementById("date").value;
      const hora = document.getElementById("inputHora").value;
      const slcBarberosAgenda = document.querySelector(".barberSelect").value;

      agendarCita(nombre, email, servicio, slcBarberosAgenda, fecha, hora);
    })

    export default function agendarCita(nombre, email, servicio, slcBarberosAgenda, fecha, hora) {
      
      console.log(nombre, email, servicio, slcBarberosAgenda, fecha, hora)  

      if (nombre == "" || email == "" || servicio  == "" || fecha == "" || hora == "") {
        alert('Hay campos obligatorios');
        return;
      }

      const nuevaFecha = new Date(fecha)

      
      const horaTotal = hora.split(":")
      
      console.log(agendas)
      
      nuevaFecha.setHours(horaTotal[0])
      nuevaFecha.setMinutes(horaTotal[1])
      
    
    const existe = agendas.some(cita => {

      console.log(cita.barbero == slcBarberosAgenda)  
      return ((cita.barbero == slcBarberosAgenda || cita.cliente.email == email) && cita.fecha.getFullYear() == nuevaFecha.getFullYear() && cita.fecha.getMonth() == nuevaFecha.getMonth() && cita.fecha.getDate() == nuevaFecha.getDate() && cita.fecha.getHours() == nuevaFecha.getHours() && cita.fecha.getMinutes() == nuevaFecha.getMinutes())

    })

      if (existe) {
        alert('¡Esta fecha y hora ya está agendada!');
        return 'No OK'
      } else {

        if(servicio == 'Corte de pelo'){

        const nuevoAgenda1 = new Agenda(nuevaFecha, servicio, nombre, email, slcBarberosAgenda )
        
        const nuevaFecha2 = new Date(nuevaFecha.getTime());
        nuevaFecha2.setMinutes(nuevaFecha2.getMinutes() + 15);

        const nuevoAgenda2 = new Agenda(nuevaFecha2, servicio, nombre, email, slcBarberosAgenda )
        agendas.push(nuevoAgenda1)
        agendas.push(nuevoAgenda2)

        }else if(servicio == 'Perfilado y afeitado de barba'){
          const nuevoAgenda1 = new Agenda(nuevaFecha, servicio, nombre, email, slcBarberosAgenda )
          agendas.push(nuevoAgenda1)
        }else if(servicio == 'Coloración capilar'){

          const nuevoAgenda1 = new Agenda(nuevaFecha, servicio, nombre, email, slcBarberosAgenda )
        
          const nuevaFecha2 = new Date(nuevaFecha.getTime());
          nuevaFecha2.setMinutes(nuevaFecha2.getMinutes() + 15);
          const nuevoAgenda2 = new Agenda(nuevaFecha2, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha3 = new Date(nuevaFecha2.getTime());
          nuevaFecha3.setMinutes(nuevaFecha3.getMinutes() + 15);
          const nuevoAgenda3 = new Agenda(nuevaFecha3, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha4 = new Date(nuevaFecha3.getTime());
          nuevaFecha4.setMinutes(nuevaFecha4.getMinutes() + 15);
          const nuevoAgenda4 = new Agenda(nuevaFecha4, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha5 = new Date(nuevaFecha4.getTime());
          nuevaFecha5.setMinutes(nuevaFecha5.getMinutes() + 15);
          const nuevoAgenda5 = new Agenda(nuevaFecha5, servicio, nombre, email, slcBarberosAgenda )

          agendas.push(nuevoAgenda1)
          agendas.push(nuevoAgenda2)
          agendas.push(nuevoAgenda3)
          agendas.push(nuevoAgenda4)
          agendas.push(nuevoAgenda5)
        }else if(servicio == 'Manicura masculina'){
          const nuevoAgenda1 = new Agenda(nuevaFecha, servicio, nombre, email, slcBarberosAgenda )
        
          const nuevaFecha2 = new Date(nuevaFecha.getTime());
          nuevaFecha2.setMinutes(nuevaFecha2.getMinutes() + 15);
          const nuevoAgenda2 = new Agenda(nuevaFecha2, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha3 = new Date(nuevaFecha2.getTime());
          nuevaFecha3.setMinutes(nuevaFecha3.getMinutes() + 15);
          const nuevoAgenda3 = new Agenda(nuevaFecha3, servicio, nombre, email, slcBarberosAgenda )

          agendas.push(nuevoAgenda1)
          agendas.push(nuevoAgenda2)
          agendas.push(nuevoAgenda3)
        }else if(servicio == 'Pack Renovate (Corte + Barba)'){
          const nuevoAgenda1 = new Agenda(nuevaFecha, servicio, nombre, email, slcBarberosAgenda )
        
          const nuevaFecha2 = new Date(nuevaFecha.getTime());
          nuevaFecha2.setMinutes(nuevaFecha2.getMinutes() + 15);
          const nuevoAgenda2 = new Agenda(nuevaFecha2, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha3 = new Date(nuevaFecha2.getTime());
          nuevaFecha3.setMinutes(nuevaFecha3.getMinutes() + 15);
          const nuevoAgenda3 = new Agenda(nuevaFecha3, servicio, nombre, email, slcBarberosAgenda )

          agendas.push(nuevoAgenda1)
          agendas.push(nuevoAgenda2)
          agendas.push(nuevoAgenda3)
        }else if(servicio == 'Pack Imagen Completa (Corte + Barba + Manicura)'){
          
          const nuevoAgenda1 = new Agenda(nuevaFecha, servicio, nombre, email, slcBarberosAgenda )
        
          const nuevaFecha2 = new Date(nuevaFecha.getTime());
          nuevaFecha2.setMinutes(nuevaFecha2.getMinutes() + 15);
          const nuevoAgenda2 = new Agenda(nuevaFecha2, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha3 = new Date(nuevaFecha2.getTime());
          nuevaFecha3.setMinutes(nuevaFecha3.getMinutes() + 15);
          const nuevoAgenda3 = new Agenda(nuevaFecha3, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha4 = new Date(nuevaFecha3.getTime());
          nuevaFecha4.setMinutes(nuevaFecha4.getMinutes() + 15);
          const nuevoAgenda4 = new Agenda(nuevaFecha4, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha5 = new Date(nuevaFecha4.getTime());
          nuevaFecha5.setMinutes(nuevaFecha5.getMinutes() + 15);
          const nuevoAgenda5 = new Agenda(nuevaFecha5, servicio, nombre, email, slcBarberosAgenda )

          const nuevaFecha6 = new Date(nuevaFecha5.getTime());
          nuevaFecha6.setMinutes(nuevaFecha6.getMinutes() + 15);
          const nuevoAgenda6 = new Agenda(nuevaFecha6, servicio, nombre, email, slcBarberosAgenda )


          agendas.push(nuevoAgenda1)
          agendas.push(nuevoAgenda2)
          agendas.push(nuevoAgenda3)
          agendas.push(nuevoAgenda4)
          agendas.push(nuevoAgenda5)
          agendas.push(nuevoAgenda6)

        }else if(servicio.value == 'Color + Corte' ){
          const nuevoAgenda1 = new Agenda(nuevaFecha, servicio.value, nombre.value, email.value, slcBarberosAgenda.value )
        
          const nuevaFecha2 = new Date(nuevaFecha.getTime());
          nuevaFecha2.setMinutes(nuevaFecha2.getMinutes() + 15);
          const nuevoAgenda2 = new Agenda(nuevaFecha2, servicio.value, nombre.value, email.value, slcBarberosAgenda.value )

          const nuevaFecha3 = new Date(nuevaFecha2.getTime());
          nuevaFecha3.setMinutes(nuevaFecha3.getMinutes() + 15);
          const nuevoAgenda3 = new Agenda(nuevaFecha3, servicio.value, nombre.value, email.value, slcBarberosAgenda.value )

          const nuevaFecha4 = new Date(nuevaFecha3.getTime());
          nuevaFecha4.setMinutes(nuevaFecha4.getMinutes() + 15);
          const nuevoAgenda4 = new Agenda(nuevaFecha4, servicio.value, nombre.value, email.value, slcBarberosAgenda.value )

          const nuevaFecha5 = new Date(nuevaFecha4.getTime());
          nuevaFecha5.setMinutes(nuevaFecha5.getMinutes() + 15);
          const nuevoAgenda5 = new Agenda(nuevaFecha5, servicio.value, nombre.value, email.value, slcBarberosAgenda.value )

          const nuevaFecha6 = new Date(nuevaFecha5.getTime());
          nuevaFecha6.setMinutes(nuevaFecha6.getMinutes() + 15);
          const nuevoAgenda6 = new Agenda(nuevaFecha6, servicio.value, nombre.value, email.value, slcBarberosAgenda.value )

          const nuevaFecha7 = new Date(nuevaFecha6.getTime());
          nuevaFecha7.setMinutes(nuevaFecha7.getMinutes() + 15);
          const nuevoAgenda7 = new Agenda(nuevaFecha7, servicio.value, nombre.value, email.value, slcBarberosAgenda.value )


          agendas.push(nuevoAgenda1)
          agendas.push(nuevoAgenda2)
          agendas.push(nuevoAgenda3)
          agendas.push(nuevoAgenda4)
          agendas.push(nuevoAgenda5)
          agendas.push(nuevoAgenda6)
          agendas.push(nuevoAgenda7)
        }
        alert('Agendado');
        return 'OK'
      }
    }