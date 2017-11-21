
$(document).ready(function(){
	$('.btnEdit').on('click',function(){ // se usa una clase para poder reusar el html
		var btnID =  $(this).prop('id'); // forma vieja = $(this).attr('id');
		
		// $(this).toggleClass('pink');
		alert(`El id de este boton es: ${btnID}`);

	});
});




/* 
	$(document).ready(function(){
	
	});

	$('.display').click(function(){
		$(this).hide(); // el contrario es .show(tiene dos parametros)
	});

	$('.caption').click(function(){ 
		$(this).toggleClass('negro');
	});
	
	//.addClass('nombreClase');
	//.removeClass('nombreClase');

	// .css({"color":"blue";});
	// .prop("diplay":none);

	$('#enviar').on('click', function(){ // = a doc.getElementByI(id).addEventListener('evento',function())
		// funcion 
	});

	// Las funciones pueden estar hechas aparte y llamadas en la funcion de callback
	
	// $('#btn1,#btn2').on('click',function(){
		$(this).toggleClass('pink');
		alert("Estas seguro que quieres editar?");
	});
*/