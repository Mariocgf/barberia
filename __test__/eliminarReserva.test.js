const eliminarReserva = require("../js/CU/eliminarReserva.js");
const { agendas }      = require("../js/data.js");
describe("CU: eliminarReserva", () => {
  test("debe eliminar la primera reserva y devolver mensaje de éxito", () => {
    // clonacion de reseva real
    const reservaOriginal = agendas[0];
    const { fecha, servicio, barbero, cliente } = reservaOriginal;
    const mensaje = eliminarReserva(fecha, servicio.nombre, barbero.nombre, cliente.nombre);
    expect(mensaje).toBe("Eliminado con exito");
    expect(agendas).not.toContain(reservaOriginal);
  });
  test("cuando no existe la reserva, devuelve mensaje de no encontrada", () => {
    const fechaFalsa     = new Date("2000-01-01");
    const mensaje        = eliminarReserva(fechaFalsa, "Foo", "Bar", "Baz");
    expect(mensaje).toBe("Reserva no encontrada");
  });
});
