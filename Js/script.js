let confirmacion;
let resultado;
let ingreseDireccion = "Pedido completado ingrese su direccion:";
let metodoDePago = "Ingresa 1 si pagas con efectivo o 2 si pagas con trasferencia";
let vacio = " ";
const resta = (a, b) => a - b;


let bienvenida = prompt("Ingrese su nombre")
let menu = parseInt(prompt("Hola" + vacio + bienvenida + vacio + "este es el menu de inicio: 1-Ingresa 1 si queres comprar comida 2-Ingresa 2 si queres comprar bebida"))

switch (menu) {
    case 1:
        alert("Bienvenido a la venta de comida")

        let papas = parseInt(prompt("Cuantas papas queres comprar 1, 2 o 3?"))
        let hamburguesa = parseInt(prompt("Cuantas hamburguesas queres comprar 1, 2 o 3?"))
        let nugget = parseInt(prompt("Cuantos nuggets queres comprar 1, 2 o 3?"))

        confirmacion = prompt("Tu pedido total es de" + vacio + papas + vacio + "papas," + vacio + hamburguesa + vacio + "hamburguesas y" + vacio + nugget + vacio + "nuggets. Ingresa 1 si es correcto o 2 si es incorrecto");

        if (confirmacion == 1) {
            alert("Buenisimo, ya casi terminamos")

            direccion = prompt(ingreseDireccion);

            prompt(metodoDePago)

            let finalizacion = alert("Listo" + vacio + bienvenida + vacio + "tu pedido llegara pronto a:" + vacio + direccion + vacio + "muchas gracias por tu compra.")

        }
        else {
            alert("ERROR! Intente nuevamente")
        };

        break;
    case 2:

        let ingreseEdad = parseInt(prompt("Ingresa tu anio de nacimiento para confirmar que seas mayor"))

        let mayorDeEdad = alert("Tu edad es de" + vacio + resta(2024, ingreseEdad) + vacio + "anios")

        if (ingreseEdad <= 2006) {
            alert("Bienvenido a la venta de bebidas")
        } else {
            alert("ACESO DENEGADO")
            break;
        }


        let agua = parseInt(prompt("Cuantas aguas queres comprar 1, 2 o 3?"));
        let gaseosa = parseInt(prompt("Cuantas gaseosas queres comprar 1, 2 o 3?"));
        let cerveza = parseInt(prompt("Cuantas cervezas queres comprar 1, 2 o 3?"));

        confirmacion = prompt("Tu pedido total es de" + vacio + agua + vacio + "aguas," + vacio + gaseosa + vacio + "gaseosas y" + vacio + cerveza + vacio + "cerveza. Ingresa 1 si es correcto o 2 si es incorrecto")

        if (confirmacion == 1) {
            alert("Buenisimo, ya casi terminamos")
            direccion = prompt(ingreseDireccion);

            prompt(metodoDePago);

            finalizacion = alert("Listo" + vacio + bienvenida + vacio + "tu pedido llegara pronto a:" + vacio + direccion + vacio + "muchas gracias por tu compra.");

        }
        else {
            alert("ERROR! Intente nuevamente")
        };

        break;
    default:
        alert("ERROR! Intente nuevamente")
        break;
};

