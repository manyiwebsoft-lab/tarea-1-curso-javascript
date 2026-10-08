


// Nombre y Apellido: Manyi isabel Fonseca
// DNI: 96186185


const prompt = require("prompt-sync")();


//Clasificación de Número Entero
let numero = Number(prompt("Ingrese un número entero: "));

if (numero > 0) {
    console.log("El número es Positivo");
} else if (numero < 0) {
    console.log("El número es Negativo");
} else {
    console.log("El número es Cero");
}


//Determinar Tipo de Triángulo


let lado1 = Number(prompt("Ingrese el lado 1: "));
let lado2 = Number(prompt("Ingrese el lado 2: "));
let lado3 = Number(prompt("Ingrese el lado 3: "));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es Isósceles");
} else {
    console.log("El triángulo es Escaleno");
}


//Clasificación de Edad


let edad = Number(prompt("Ingrese su edad: "));

if (edad < 12) {
    console.log("Sos un Niño");
} else if (edad >= 12 && edad <= 17) {
    console.log("Sos un Adolescente");
} else if (edad >= 18 && edad <= 64) {
    console.log("Sos un Adulto");
} else {
    console.log("Sos un Adulto mayor");
}

// Determinar si un Número es Par o Impar


let numParImpar = Number(prompt("Ingrese un número: "));

if (numParImpar % 2 === 0) {
    console.log("Es Par");
} else {
    console.log("Es Impar");
}


// Calculo de notas


let calificacion = Number(prompt("Ingrese su calificación (0-100): "));

if (calificacion >= 90 && calificacion <= 100) {
    console.log("Equivalencia: A");
} else if (calificacion >= 80 && calificacion <= 89) {
    console.log("Equivalencia: B");
} else if (calificacion >= 70 && calificacion <= 79) {
    console.log("Equivalencia: C");
} else if (calificacion >= 60 && calificacion <= 69) {
    console.log("Equivalencia: D");
} else {
    console.log("Equivalencia: F");
}


// Número Mayor

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));

if (num1 > num2) {
    console.log("El número mayor es: " + num1);
} else if (num2 > num1) {
    console.log("El número mayor es: " + num2);
} else {
    console.log("Ambos números son iguales");
}

