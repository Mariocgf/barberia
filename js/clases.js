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
    constructor(nombre, precio, duracion, imgURL) {
      this.nombre = nombre;   // ej. "Corte de pelo"
      this.precio = precio;   // en la moneda que uses
      this.duracion = duracion || 30; // en minutos
      this.imgURL = imgURL
    }
  }
  
  // Clase para representar un barbero
  class Barbero {
    constructor(nombre,descripcion, imgURL) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.calificaciones = []; // aquí guardamos instancias de Calificacion
      this.imgURL = imgURL;
    }
  }
    
  
    
  // Clase para representar la agenda general
  class Agenda {
    
    constructor(fecha, servicio, nombreCliente, emailCliente, barbero = null) {
      this.fecha = typeof fecha === 'string' ? new Date(fecha) : fecha;
      this.servicio = servicio;
      this.barbero = barbero; // puede quedar null
      this.cliente = {
        nombre: nombreCliente,
        email: emailCliente
      };
    }
}
  
  
module.exports = {Calificacion, Servicio, Barbero, Agenda}