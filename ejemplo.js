const prompt = require("prompt-sync")();

let notaLengua = prompt("NOTA DE LENGUA: ");
let notaCiencia = prompt("NOTA DE CIENCIA: ");
let notaMatematica = prompt("NOTA DE MATEMATICA: ");
let educacionFisica = prompt("NOTA DE ED FISICA: ");
let asistencia = prompt("ASISTENCIA: ");

//1
let criterioNotas = (educacionFisica >= 7) && (notaLengua >= 7) && (notaCiencia >= 7) && (notaMatematica >= 7);

//2
let promedio = (notaLengua + notaCiencia + notaMatematica + educacionFisica) / 4;
let criterioPromedio = promedio >= 7;

//3
let asistenciaAprobada = asistencia >= 80;

let aproboElCurso = criterioNotas && criterioPromedio && asistenciaAprobada;

console.log("Promedio del alumno: ", promedio);
console.log("Aprobo todas las materias con 7 o mas?: ", criterioNotas);
console.log("Cumplio con la asistencia?: ", asistenciaAprobada);
console.log("Aprobo el curso? ", aproboElCurso);