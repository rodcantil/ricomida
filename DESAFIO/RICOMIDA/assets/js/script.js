// POPPOVERS
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




$(ingredientes).click(function() {
    $(this).css({'color': 'red'});
});

$(preparacion).click(function() {
    $(this).css({'color': 'red'});
});

$('#enviarcorreo').click(function () {
    alert("Su correo fue enviado exitosamente");
    
});


$('#titulocard1').dblclick(function () {
    $(this).toggle("slow");
    $('#imagencard1').toggle("slow");
    $('#cuerpocard1').toggle("slow");
    $('#imagencard2').toggle("slow");
    $('#titulocard2').toggle("slow");
    $('#cuerpocard2').toggle("slow");
    $('#imagencard3').toggle("slow");
    $('#titulocard3').toggle("slow");
    $('#cuerpocard3').toggle("slow");
    
});

$('#titulocard2').dblclick(function () {
    $(this).toggle("slow");
    $('#imagencard1').toggle("slow");
    $('#titulocard1').toggle("slow");
    $('#cuerpocard1').toggle("slow");
    $('#imagencard2').toggle("slow");
    $('#cuerpocard2').toggle("slow");
    $('#imagencard3').toggle("slow");
    $('#titulocard3').toggle("slow");
    $('#cuerpocard3').toggle("slow");
});

$('#titulocard3').dblclick(function () {
    $(this).toggle("slow");
    $('#imagencard1').toggle("slow");
    $('#titulocard1').toggle("slow");
    $('#cuerpocard1').toggle("slow");
    $('#imagencard2').toggle("slow");
    $('#titulocard2').toggle("slow");
    $('#cuerpocard2').toggle("slow");
    $('#imagencard3').toggle("slow");
    $('#cuerpocard3').toggle("slow");
   
});

