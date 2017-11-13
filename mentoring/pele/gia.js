var alumno = "pepe"; //nombre
var notas = [3, 5, 7, 9, 10]; //notas
var promedio = 0; //promedio que se llena con el for
var len = notas.length;

console.log(`tengo esta cantidad de notas: ${len}`); // items en el array

for (var i = 0; i < notas.length; i++) { // recorre el array -tabla 1-
	promedio = notas[i] + promedio  // cada vez que i se mueve, promedio va a cambiar de valor a la suma de i anteriores
}

console.log(promedio);

promedio = promedio / notas.length;

console.log()

