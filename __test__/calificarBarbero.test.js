const calificar = require('../js/CU/CalificarBarbero');


test("Test de calificar barbero", function(){
    const cliente = "Juan";
    const barbero = "Ana Gómez";
    const resena = "Corta con la tijera oxidada";
    const rating = 5;
    const resultado = calificar(rating, resena, barbero, cliente);
    expect(resultado).toEqual("Calificado con exito");

})
test("Test de calificar barbero - error", function(){
    const cliente = "Juan";
    let barbero = "Ana Gómez";
    const resena = "Corta con la tijera oxidada";
    const rating = 5;
    let resultado = calificar(rating, resena, barbero, cliente);
    expect(resultado).toEqual("Calificado con exito");
    barbero = 0;
    resultado = calificar(rating, resena, barbero, cliente);
    expect(resultado).toEqual("Barbero no encontrado");
})