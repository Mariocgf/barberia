// Clase para representar una calificación
class Calificacion {
    constructor(nombre, descripcion, puntaje) {
      this.nombre = nombre;           // quien califica
      this.descripcion = descripcion; // texto del comentario
      this.puntaje = puntaje;         // número (por ejemplo, 1–5)
    }
    añadirCalificacion(calif) {
    if (calif instanceof Calificacion) {
      this.calificaciones.push(calif);
    }
  }
  }
  
  // Clase para representar un servicio
  class Servicio {
    constructor(nombre, precio) {
      this.nombre = nombre;   // ej. "Corte de pelo"
      this.precio = precio;   // en la moneda que uses
      this.duracion = 30; // en minutos
    }
  }
  
  // Clase para representar un barbero
  class Barbero {
    constructor(nombre,descripcion) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.calificaciones = []; // aquí guardamos instancias de Calificacion
    }
  }
    
  
    
  // Clase para representar la agenda general
  class Agenda {
    
    constructor(fecha, servicio, nombreCliente, telefonoCliente, emailCliente, barbero = null) {
      this.fecha = typeof fecha === 'string' ? new Date(fecha) : fecha;
      this.servicio = servicio;
      this.barbero = barbero; // puede quedar null
      this.cliente = {
        nombre: nombreCliente,
        telefono: telefonoCliente,
        email: emailCliente
      };
    }
}
  
  
    