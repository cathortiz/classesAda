var cont= 0;
var nombre, pass;


function contador(form) {
	if (form.name.value == "doctor"  form.pass.value == "1234" && cont<3){
		alert("Bienvenido!");
	} else if (form.namevalue != "doctor" || form.pass.value != "1234" && cont<3){
		cont++;
		alert("Error!"+cont+"de 3");
	} while (cont==3){
		alert("You shall not pass!");
	}
}