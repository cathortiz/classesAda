if (confirm("Estas dispuesto a caminar unas cuadras?") == true) {
    alert("Poder ir en subte y llegar en 40 min si caminas 10 cuadras.");
}

else {

        if (confirm("Que te priorizas? Tiempo = OK, Dinero = Cancelar")== true) {
            alert("Podes ir en colectivo. (Ahorras tiempo)");
        }
        else {
            alert("Podes ir caminando. (Ahorras dinero)");
        }
}

/*
if (confirm("Tenes dinero?") == true) {
    alert("Te vas en subte");
}

else {

        if (confirm("Que te importa mas? Tiempo = OK, Hacer deporte = Cancelar")== true) {
            alert("Te vas en Colectivo");
        }
        else {
            alert("Te vas en bici");
        }
}


if (confirm("Tenes tiempo?") == false) {
    alert("Te vas en subte");
}

else {

        if (confirm("Que te importa mas? Dinero = OK, Hacer deporte = Cancelar")== true) {
            alert("Te vas en bici");
        }
        else {
            alert("Te vas en Colectivo");
        }
}*/