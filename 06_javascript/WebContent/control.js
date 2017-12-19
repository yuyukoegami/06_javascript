function comprobar() {
	var primo = window.prompt("Dime numero primo del 1 al 10");
	if (primo ==1 || primo ==2 || primo ==3)
		{ 
	window.alert("Lo has conseguido");
		}
	}

function viajar(){
	var ciudad = window.prompt("¿donde quieres ir?")
	switch (ciudad) { 
	case "Roma":
		console.log("Roma cuesta 500€");
		break;
	case "Paris":
		console.log("Paris cuesta 450€");
		break;
	case "Berlin":
		console.log("Berlin cuesta 387,56€");
		break;
	default:
		window.alert("No viajamos a esa ciudad, pide presupuesto");
	}
}
