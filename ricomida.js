$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function(){
        alert('El correo fue enviado correctamente...');
    });

    $('#titulo h3').on('dblclick',function(){
        $(this).addClass('text-danger');
    });

    $('#recetasRelacionadas .card-title').on('click',function(){
        $('.card-text').toggle(2000);
    });
})