const calificar = require('../js/CU/CalificarBarbero');


test("Test de calificar barbero", function(){
    const cliente = "Juan";
    const barbero = "Ana Gómez";
    const resena = "Corta con la tijera oxidada";
    const rating = 5;
    const resultado = calificar(rating, resena, barbero, cliente);
    expect(resultado).toEqual("Calificado con exito");
})