const prompt = require("prompt-sync")();

// 1. Convertimos la entrada de texto a número usando Number()
let producto1 = Number(prompt("PRECIO DE PRODUCTO 1: "));
let producto2 = Number(prompt("PRECIO DE PRODUCTO 2: "));
let producto3 = Number(prompt("PRECIO DE PRODUCTO 3: "));

// 2. Pedimos el dinero disponible que tiene la persona
let dineroDisponible = Number(prompt("CANTIDAD DE DINERO DISPONIBLE: "));

// 3. Calculamos el total a pagar (suma de los 3 productos)
let totalAPagar = producto1 + producto2 + producto3;

// 4. Calculamos el vuelto (dinero disponible menos total a pagar)
let vuelto = dineroDisponible - totalAPagar;

// 5. Imprimimos los resultados por consola
console.log("-----------------------------------");
console.log("Precio Producto 1: ", producto1);
console.log("Precio Producto 2: ", producto2);
console.log("Precio Producto 3: ", producto3);
console.log("Total a pagar: ", totalAPagar);
console.log("Dinero entregado: ", dineroDisponible);
console.log("Su vuelto es: ", vuelto);
console.log("-----------------------------------");
