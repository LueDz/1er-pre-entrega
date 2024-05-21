
let resultado;
let vacio = " ";    

function hacerSuma(art1, art2, art3) {
    resultado = art1 + art2 + art3;
    return resultado;
};

let menu = parseInt(prompt("Menu de inicio: 1-Ingresa 1 si queres comprar comida 2-Ingresa 2 si queres comprar bebida"))


switch (menu) {
    case 1:
        alert("Bienvenido a la venta de comida")

        let papas = parseInt(prompt("Cuantas papas queres comprar 1, 2 o 3?"))
        let hamburguesa = parseInt(prompt("Cuantas hamburguesas queres comprar 1, 2 o 3?"))
        let nugget = parseInt(prompt("Cuantos nuggets queres comprar 1, 2 o 3?"))


        hacerSuma(papas,hamburguesa,nugget)
        alert("Tu pedido total es de" + vacio + resultado + vacio + "platos ");
        
        break;  
    case 2:
        alert("Bienvenido a la venta bebida")

        let agua = parseInt(prompt("Cuantas aguas queres comprar 1, 2 o 3?"));
        let gaseosa = parseInt(prompt("Cuantas gaseosas queres comprar 1, 2 o 3?"));
        let cerveza = parseInt(prompt("Cuantas cervezas queres comprar 1, 2 o 3?"));

        hacerSuma(agua,gaseosa,cerveza)
        alert("Tu pedido total es de" + vacio + resultado + vacio + "platos.");




        let metodoDePago = prompt("Pagas con efectivo o transferencia?");

        if (metodoDePago = "efectivo" || "transferencia"){
            alert ("Buenisimo, ya casi terminamos")
            let confirmacion = prompt ("Tu pedido total es de"+vacio+agua+vacio+"aguas,"+vacio+gaseosa+vacio+"gaseosas y"+vacio+cerveza+vacio+"cervezas. Confirmas que este correcto?? (Si o No)")
            
        }else {
            alert("ERROR! Intente nuevamente")
        };

        




        break;
    default:
        alert("ERROR! Intente nuevamente")
        
        break;
};


