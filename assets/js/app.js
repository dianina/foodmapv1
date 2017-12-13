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

/*
* Selección por filtros
*/
	$('.hmmpics').show();
	$('.pasabocas').hide();
	$('.ffood').hide();
	$('.gourmet').hide();
	$('.exotica').hide();
	$('.postres').hide();

});