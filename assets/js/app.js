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
*función que muestra y oculta las imagenes segun el filtro
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
/**
*funciones mouseover que cambia las imagenes del filtro precio
*esta cambia de restorant a comida y viceversa
*/
$('.elarbol').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio5.jpg')
            ? 'assets/img/arbolfood.jpg'
            : 'assets/img/precio5.jpg';
         $(this).attr('src', src);
    }
});
$('.alemana').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/abierto3.jpg')
            ? 'assets/img/lafuentefood.jpg'
            : 'assets/img/abierto3.jpg';
         $(this).attr('src', src);
    }
});
$('.curry').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio4.jpg')
            ? 'assets/img/curryfood.jpg'
            : 'assets/img/precio4.jpg';
         $(this).attr('src', src);
    }
});
$('.piccola').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/abierto2.jpg')
            ? 'assets/img/lapiccolafood.jpg'
            : 'assets/img/abierto2.jpg';
         $(this).attr('src', src);
    }
});
$('.cuisine').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio1.jpg')
            ? 'assets/img/lacuisinefood.jpg'
            : 'assets/img/precio1.jpg';
         $(this).attr('src', src);
    }
});
/**
*funciones mouseover para el filtro valoración
*/
$('.ancla').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio2.jpg')
            ? 'assets/img/elanclafood.jpg'
            : 'assets/img/precio2.jpg';
         $(this).attr('src', src);
    }
});
/**
*funciones mouseover para el filtro orden alfabetico
*/
$('.bara').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio3.jpg')
            ? 'assets/img/Barandiaranfood.jpg'
            : 'assets/img/precio3.jpg';
         $(this).attr('src', src);
    }
});
$('.ibis').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/abierto1.jpg')
            ? 'assets/img/ibisfood.jpg'
            : 'assets/img/abierto1.jpg';
         $(this).attr('src', src);
    }
});
});