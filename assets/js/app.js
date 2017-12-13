$(document).ready(function(){

/*
*Loader
*/
 $('.loader').delay(2000).fadeOut("slow");

/*
*Paso de screen splash a contenido
*/
setTimeout(function(){
    $('.loader').show();
    }, 2000);

/*
*Filtro de búsqueda
*/

	$("#pasabocas").show();
	$("#ffood").hide();
	$("#gourmet").hide();
	$("#exotica").hide();
	$("#postres").hide();

	$("#chile").click(function(){
		$(".chilena").show();
		$("#varias").hide();
		$(".colombianas").hide();
		$(".mexicanas").hide();
	
	})

	$("#colombia").click(function(){
		$(".chilena").hide();
		$("#varias").hide();
		$(".colombianas").show();
		$(".mexicanas").hide();
	
	})

	$("#mexico").click(function(){
		$(".chilena").hide();
		$("#varias").hide();
		$(".colombianas").hide();
		$(".mexicanas").show();
	
	})

});