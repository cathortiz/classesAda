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


// ---------------------------------------------- 

Ejercicio 2
Realizar un algoritmo para la conversiÛn de dÛlares a pesos,
ingresando el monto a convertir y la cotizacion del dia


var dolares = parseFloat(prompt("Ingrese la cantidad de dolares que desea cambiar:"));
var cotizacion = parseFloat(prompt("Ingrese la cotización del día:"));
var pesos = dolares*cotizacion;

alert(`Su monto en pesos es de AR$ ${pesos}.-`);



// ----------------------------------------------- 

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


// ------------------------------------------------ 

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


var opcion = prompt("Ingrese una opción del 1 al 5:");

switch(opcion){
	case "1":
	alert("Su deuda es ... ");
	break;
	case "2":
	alert("Será atendido en instantes");
	break;
	case "3":
	alert("Todos los operadores se encuentran ocupados");
	break;
	case "4":
	alert("Opción invalida");
	break;
	case "5":
	alert("Gracias por usar nuestro servicio");
	break;
}



/////////  C  //////////

var cuotas = prompt("En cuántas cuotas desea pagar: 1, 12, 24 o 36 ?");
var total = 1000;
var cadaCuota = 0;

switch(cuotas){
	case "1":
	alert(`Usted no posee recargo. Su saldo a pagar es de ${total.toFixed(2)}`);
	break;
	case "12":
	cadaCuota = total/12;
	total = ((cadaCuota*20)/100)+cadaCuota;
	alert(`Usted no posee recargo. Su saldo a pagar es de ${total.toFixed(2)}`);
	break;
	case "24":
	cadaCuota = total/24;
	total = ((cadaCuota*45)/100)+cadaCuota;
	alert(`Usted no posee recargo. Su saldo a pagar es de ${total.toFixed(2)}`);
	break;
	case "36":
	cadaCuota = total/36;
	total = ((cadaCuota*70)/100)+cadaCuota;
	alert(`Usted no posee recargo. Su saldo a pagar es de ${total.toFixed(2)}`);
	break;
}


// --------------------------------------------------- 

Ejercicio 5
pedirle a la persona un numero de 1 al 10
y luego mostrar por pantalla los numeros siguientes hasta llegar a 10. 
Ejemplo si escribibio 6, mostrar 7, 8, 9, 10.


var numero = parseInt(prompt("Ingrese un numero del 1 al 10"));

for (var i = numero; i <=10 ; i++){
	console.log(i);
}


// --------------------------------------------------- 

Ejercicio 6 
Leé numeros ingresados por el usuario ingresando 0 para terminar.
Emití, al finalizar, cuantos fueron mayores a 10, cu·ntos menores o iguales a 10.


var arr = [];
var num;

while(num != 0 ){
	num = parseInt(prompt("Ingresa un numero"));
	arr.push(num);
}

console.log(`El array generado es: ${arr}`);

var menores = 0;
var mayores = 0;

for (var i = 0 ; i < arr.length ; i ++){
	if (arr[i]<=10){
		menores++;
	} else {
		mayores++;
	}
}

console.log(`Los numeros del array menores o iguales a 10 son: ${menores}`);
console.log(`Los numeros del array mayores a 10 son: ${mayores}`);


// --------------------------------------------------- 

Ejercicio 7
realizar un algoritmo que muestre la tabla de multiplicar del 1 al 10, 
de un numero ingresado por el usuario ejemplo si ingreso 2 que muestre
2 x 1 = 2
2 x 2 = 4


var num = parseInt(prompt("Ingresa un numero del 1 al 10"));
var multiplicar = 0;

for (var i = 1; i <=10; i++){
	multiplicar = num * i;
	console.log(`${num} x ${i} = ${multiplicar}`);
}


// --------------------------------------------------- 

Ejercicio 8
Se escriben el promedio y el nombre de 10 alumnos, al finalizar muestre el nombre 
y promedio del mejor.


var nombres = ["Laura","Priscila","Luciana","Gia","Paola","Agustina","Belen","Camila"];
var promedio = [7.5,6.5,8,8.5,9,8,9.5,6];
var max =0;
var alumno;

console.log(`Este es el array de promedios: ${promedio}`);

for(var i=0; i<promedio.length; i++){
	if (promedio[i]>promedio[i+1]){
		max = promedio[i];
		alumno = nombres[i];
	}
}

console.log(`El promedio máximo es ${max}/10 y es de ${alumno}`);



// --------------------------------------------------- 

Ejercicio 10. 
calcular la suma total del precio de 10 articulos


var articulos = [20,25,40,30,100,102,40,55,15,44,30];
var suma = 0;

for ( var i = 0; i<articulos.length;i++){
	suma = suma + articulos[i];
	console.log(suma);
}



// --------------------------------------------------- 

Ejercicio 11 
mostrar por pantalla todos los numeros pares entre 2 y 50


for(var i = 3; i<=49; i++){
	console.log(i);
}
*/


// --------------------------------------------------- 

Ejercicio 14  
se le pide a la persona que ingrese un nunero y 
le informa si ese numero es primo o no






