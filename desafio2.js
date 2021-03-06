// Saludo inicial
alert("Buenvenido a Tu Hotel. \nEstarás entrado a nuestro motor de reservas.");

// Definición de las categorías de las habitaciones
class Habitacion{
    constructor(nombre, ubicacion, superficie, disponibilidad)
    {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.superficie = superficie;
        this.disponibilidad = disponibilidad;
    }
}
const standard = new Habitacion("Standard", "30 metros cuadrados", "Pisos inferiores", 20);
const superior = new Habitacion("Superior", "35 metros cuadrados", "Pisos superiores", 10);
const suite = new Habitacion("Standard", "50 metros cuadrados", "Pisos inferiores", 2);

// Calendario
const meses = [1,2,3,4,5,6,7,8,9,10,11,12];
const dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

// Solicitar fechas de estadía (supone que todos los meses tienen 30 días)

// Fecha In
let mesIn;
let diaIn;
function ingresarFechaIn ()
{
    do
    {
    let fechaIn = prompt("Ingrese la fecha de ingreso. \n(Formato DDMM)");
    diaIn = parseInt(fechaIn[0] + fechaIn[1]);
    mesIn = parseInt(fechaIn[2] + fechaIn[3]);
    if(mesIn > 12 || mesIn < 0)
    {
        alert("Por favor, ingrese una fecha válida");
    }
    }
    while((mesIn > 12) || (mesIn < 0));
    console.log("Día check-in: " + diaIn);
    console.log("Mes check-in: " + mesIn);
}

// Fecha Out
let mesOut;
let diaOut;
function ingresarFechaOut ()
{
do
{
let fechaOut = prompt("Ingrese la fecha de salida. \n(Formato DDMM)");
diaOut = parseInt(fechaOut[0] + fechaOut[1]);
mesOut = parseInt(fechaOut[2] + fechaOut[3]);
if(mesOut > 12 || mesOut < 0)
{
    alert("Por favor, ingrese una fecha válida");
}
}
while(mesOut > 12 || mesOut < 0);
console.log("Día check-out: " + diaOut);
console.log("Mes check-out: " + mesOut);
}

// Duración estadía
let duracionEstadia;
function calcularDuracion()
{
if(mesOut == mesIn)
{
    duracionEstadia = diaOut - diaIn;
}
else if(mesOut > mesIn)
{
    duracionEstadia = (30 - diaIn) + diaIn;
}
console.log("La duración de su estadía es de: " + duracionEstadia + " noches");
}

// Elegir Categoría de habitaciones
let categoria;
function elegirCategoria ()
{
alert("Nuestro hotel cuenta con tres categorías de habitaciones: \nStandard \nSuperior \nSuite");
categoria = prompt("Elige la categoría de habitación en la que quieres hospedarte");
categoria = categoria.toLowerCase();
}


// Log de reservas
class Reserva{
    constructor(nombre, nacionalidad, email, vigente)
    {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.email = email;
        this.vigente = vigente;
    }
}
const alvarez = new Reserva("Julián Álvarez", "Argentina", "alvarez@riverplate.com", true);
const cruz = new Reserva("Nicolás de la Cruz", "Uruguaya", "delacruz@riverplate.com", true);
const perez = new Reserva("Enzo Pérez", "Argentina", "perez@riverplate.com", false);

const logReservas = [alvarez, cruz, perez];
console.table(logReservas);

// Calcular precio total de la reserva
let totalReserva;
let precioNoche;
function calcularPrecioEstadia ()
{
    switch (mesIn)
    {
        case 1: precioNoche = 100; break;
        case 2: precioNoche = 110; break;
        case 3: precioNoche = 150; break;
        case 4: precioNoche = 145; break;
        case 5: precioNoche = 115; break;
        case 6: precioNoche = 108; break;
        case 7: precioNoche = 112; break;
        case 8: precioNoche = 147; break;
        case 9: precioNoche = 150; break;
        case 10: precioNoche = 155; break;
        case 11: precioNoche = 160; break;
        case 12: precioNoche = 180; break;
    }

    if(categoria == "superior")
    {
        precioNoche = precioNoche * 1.1;
    }
    else if (categoria == "suite")
    {
        precioNoche = precioNoche * 1.3;
    }
    else
    {
        precioNoche = precioNoche;
    }
    
    console.log("El precio por noche es de: " + precioNoche);
    totalReserva = precioNoche * duracionEstadia;
    console.log("Total reserva: " + totalReserva);
}


// Confirmar reserva
let confirma;
function confirmarReserva()
{
    alert("Datos de su reserva: \nCheck In: " + diaIn + "/" + mesIn + "\nCheck Out: " + diaOut + "/" + mesOut + "\nTotal Noches: " + duracionEstadia
    + "\nPrecio total: " + totalReserva);
    confirma = prompt("Ingrese S para confirmar o N para cancelar");
    confirma = confirma.toLowerCase();
    if(confirma == "s")
    {
        crearNuevaReserva();
    }
    else
    {
        alert("Quedamos a la espera de su reserva en un futuro cercano");
    }
}

// Ingresar reserva
function crearNuevaReserva ()
{
alert("Muchas gracias por su reserva");
const nuevaReserva = new Reserva(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su nacionalidad"),
    prompt("Ingrese su email"),
    true
)
logReservas.push(nuevaReserva);
console.table(logReservas);
}

// Llamado a las funciones
do
{
ingresarFechaIn();
ingresarFechaOut();
calcularDuracion();

if(duracionEstadia < 1)
{
    alert("Por favor, ingrese nuevamente las fechas de estadía");
}
}
while(duracionEstadia < 1);

elegirCategoria();
calcularPrecioEstadia();
confirmarReserva();