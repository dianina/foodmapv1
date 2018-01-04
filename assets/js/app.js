
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

/**
*función que muestra y oculta las 
imagenes segun el filtro
*/

$(function() {
/**
*Muestra sólo imag generales
*/
  $('#pasabocas').hide();
  $('#ffood').hide();
  $('#gour').hide();
  $('#exo').hide();
  $('#post').hide();
 
/**
*Muestra cada categoría con la función
*/
  $('#choices').change(function(){
    if($('#choices').val() == 'pasa'){
      $('#pasabocas').show();
      $('.hmmpics').hide();
    } else {
      $('#pasabocas').hide();
    }
    
  });
  $('#choices').change(function(){
    if($('#choices').val() == 'ffoody'){
      $('#ffood').show();
      $('.hmmpics').hide();
    } else {
      $('#ffood').hide();
    }
    
  });
  $('#choices').change(function(){
    if($('#choices').val() == 'gourmet'){
      $('#gour').show();
      $('.hmmpics').hide();
    } else {
      $('#gour').hide();
    }
    
  });
    $('#choices').change(function(){
    if($('#choices').val() == 'exot'){
      $('#exo').show();
      $('.hmmpics').hide();
    } else {
      $('#exo').hide();
    }
    
  });
     $('#choices').change(function(){
    if($('#choices').val() == 'postre'){
      $('#post').show();
      $('.hmmpics').hide();
    } else {
      $('#post').hide();
    }
    
  });

});
});