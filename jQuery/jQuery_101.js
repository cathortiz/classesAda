
var info = [["Belen","Alegre","30"],
			["Gia","Castello","25"],
			["Luciana","Mendez","27"]]; 

function loadTable(){
	for(var i = 0 ; i < info.length ; i++){
		var tr = '<tr id="rg_'+i+'">'+'<td>'+'<input type="text" id="name1" class="disable fila'+i+'" value="'+info[i][0]+'" disabled>'+'</td>'+'<td>'+'<input type="text" id="name1" class="disable fila'+i+'" value="'+info[i][1]+'" disabled>'+'</td>'+'<td>'+'<input type="text" id="name1" class="disable fila'+i+'" value="'+info[i][2]+'" disabled>'+'</td>'+'<td>'+'<button class="btnEdit" id="btn1" data-rg=".fila'+i+'">'+ '&#9999;' +'</button>'+'<button class="btnErase" id="1" data-rg="#rg_'+i+'">'+'x'+'</button>'+'</td>'+'</tr>';
	$('#tabla-imp').append(tr);
	}
}			

$(document).ready(function(){

	loadTable();

	$('.btnErase').on('click',function(){ 
		var data =  $(this).data("rg"); 	 
		$(data).hide(100,function(){
			alert("El registro se borró correctamente!");
		});
	});

	$('.btnEdit').on('click',function(){
		var btnData =  $(this).data("rg");
		$('input').prop("disabled",true);
		$(btnData).prop("disabled",false);
	});

	$('#add').on('click',function(){
		var nuevo = [];
		var n = $('#nn').val();
		nuevo.push(n);
		nuevo.push($('#ap').val());
		nuevo.push($('#ed').val());
		console.log(nuevo);
		info.push(nuevo);
		console.log(info);
		loadTable();
	});
	/* $('.btnEdit').on('click',function(){ // se usa una clase para poder reusar el html
		var btnID =  $(this).prop('id'); // forma vieja = $(this).attr('id');
		var btnData =  $(this).data("rg");
		
		// $(this).toggleClass('pink');
		alert(`El id de este boton es: ${btnID}`);
		$('input').prop("disabled",true);
		$(btnData).prop("disabled",false);
		
	});

	$('.btnErase').on('click',function(){ // se usa una clase para poder reusar el html
		var btnData =  $(this).data("rg"); // forma vieja = $(this).attr('id');
		//var trID = "#fila" + btnID;
		$(btnData).hide(100,function(){
			alert("El registro se borró correctamente!");
		});
	}); */
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