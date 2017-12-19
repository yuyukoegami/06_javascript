var nombre ="Juana";

function variables(){
	console.log('Llamada a funcion variables');
	var numero = 4;
	console.log('El numero es ' + numero);
	numero =6;
	console.log('El numero es ' + numero);
	console.log('Te llamas ' + nombre);
	if(numero>=3) {
		var solucion = "ok";
	}
	console.log(solucion);
	var mensaje ="En un lugar \nde la \"Mancha\"";
	window.alert(mensaje);
}