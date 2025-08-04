const agendarCita = require("../js/CU/Agendar")

test("Test de agendar cita", function(){
    const nombre = "Gaston";
    const email ="gassjau@gmail.com";
    const servicio = "Corte de pelo";
    const slcBarberosAgenda = "Ana Gómez";
    const fecha = "2025-07-29";
    const hora = "11:15";

    const resultado = agendarCita(nombre, email, servicio, slcBarberosAgenda, fecha, hora);
    expect(resultado).toBe('OK')
})