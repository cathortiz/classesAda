/*

Ejercicio 1
Leer el nombre de un alumno y 5 calificaciones, obtener el promedio. 
mostrar el nombre del alumno con su promedio



var nombre = "Gia Castello";
var notas = [7,8,6,5,9];
var suma= 0;

console.log(notas.length);

for (var i = 0; i<notas.length ; i ++ ){
	suma = suma + notas[i]; 
	console.log(suma);
}

var resultado= suma/notas.length;
console.log(`El promedio de ${nombre} es: ${resultado}/10`);



// Ejercicio 2
Realizar un algoritmo para la conversiÛn de dÛlares a pesos,
ingresando el monto a convertir y la cotizacion del dia


var dolares = parseFloat(prompt("Ingrese la cantidad de dolares que desea cambiar:"));
var cotizacion = parseFloat(prompt("Ingrese la cotización del día:"));
var pesos = dolares*cotizacion;

alert(`Su monto en pesos es de AR$ ${pesos}.-`);



Ejercicio 3 
realice el calculo del sueldo de un empleado ingresando el sueldo neto y sabiendo 
que se le descuenta un 15 % por cargas sociales
y se le suma un 10% si tuvo asistencia perfecta (preguntar si  tuvo ausencias)




var sueldoNeto = parseFloat(prompt("Ingrese su sueldo neto:"));
var sueldoCargas = (sueldoNeto*15)/100;
var sueldoFinal = sueldoNeto - sueldoCargas;
var asistencia = prompt("Tuviste ausencias?");

if(asistencia == "si"){
	alert(`Tu sueldo es de: ${sueldoFinal}`);
} else {
	sueldoFinal = sueldoNeto + ((sueldoNeto*10)/100);
	alert(`Tienes un 10% de bono por asistencia perfecta! Tu sueldo es de: ${sueldoFinal}`)
}



Ejercicio 4

a)En una tienda de ropa se cobra con varios medios de pago pero tienen diferencia de recargos,
 en efectivo se cobra el precio normal, con debito un 5%, con credito un 10% y cheque un 20%

b) Para una contestadora telefonica programar las siguientes opciones: 
  		opcion						respuesta
	1. conocer su deudad			"su deuda es " ...
	2. comprar nuevos productos		"sera atendido en instantes"
	3. solicitar ayuda			"todos los operadores se encuentran ocupados"
	4. dar la baja				"opcion invalida"
	5. salir				"gracias por usar nuestro servicio"

c) se pide que la persona ingrese el monto a financiar y la cantidad de cuotas segun nuestra tabla
1 cuota 	0%
12 cuotas	20%
24 cuotas	45%
36 cuotas	70%
como ejemplo si alguien ingresa como monto 1000 le queda a abonar en 
1 cuota		1000
12 cuotas	100
24 cuotas	60,41
36 cuotas	47,22



/////////  A  //////////

alert("Bienvenido a Zara Barcelona");
var monto = parseFloat(prompt("Ingrese su monto final:"));
var formaDePago = prompt("Como prefiere pagar (ingrese el numero indicado): 1-Efectivo / 2-Tarjeta de Credito / 3-Tarjeta de Debito / 4-Cheque");

if (formaDePago == 1){
	alert(`Su monto final es de: $${monto}.-`);
} else if (formaDePago == 2){
	monto = monto + ((monto*5)/100);
	alert(`Tiene un 5% de recargo! Su monto final es de: $${monto}.-`);
} else if (formaDePago == 2){
	monto = monto + ((monto*10)/100);
	alert(`Tiene un 10% de recargo! Su monto final es de: $${monto}.-`);
} else {
	monto = monto + ((monto*20)/100);
	alert(`Tiene un 20% de recargo! Su monto final es de: $${monto}.-`);
}


/////////  B  //////////
*/

