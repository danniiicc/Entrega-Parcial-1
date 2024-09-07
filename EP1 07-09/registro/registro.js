$(document).ready(function(){
    var regiones = [
        {nombre: "Región Metropolitana", comunas: ["Santiago", "Providencia", "Las Condes"]},
        {nombre: "Valparaíso", comunas: ["Viña del Mar", "Valparaíso", "Concón"]}
    ];
    
    regiones.forEach(elemento => {
        $("#region").append(`<option value="${elemento.nombre}">${elemento.nombre}</option>`);
    });

    $("#region").on("change", function(e){
        $('#comuna').find('option').not(':first').remove();
        var region = $(this).val();
        if(region !== ""){
            regiones.forEach(elemento => {
                if(elemento.nombre == region){
                    elemento.comunas.forEach(comuna => {
                        $("#comuna").append(`<option value="${comuna}">${comuna}</option>`);
                    });
                }
            });
        }
    });

    $.validator.addMethod("pwcheck", function(value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
    }, "La contraseña debe contener al menos una mayúscula, una minúscula y un número");

    $.validator.addMethod("validacionRUT", function(value) {
        return /^\d{7,8}-[k|K|\d]{1}$/.test(value);
    }, "El RUT no tiene el formato correcto (sin puntos y con guión)");

    $("#registroForm").validate({
        rules: {
            usuario: {
                required: true,
                minlength: 3
            },
            rut: {
                required: true,
                validacionRUT: true
            },
            email: {
                required: true,
                email: true
            },
            region: {
                required: true
            },
            comuna: {
                required: true
            },
            contrasenya: {
                required: true,
                minlength: 8,
                pwcheck: true
            },
            recontrasenya: {
                required: true,
                equalTo: "#contrasenya"
            },
            terminos: {
                required: true
            }
        },
        messages: {
            usuario: {
                required: "El nombre de usuario es requerido",
                minlength: "El nombre de usuario debe tener al menos 3 caracteres"
            },
            rut: {
                required: "El RUT es requerido"
            },
            email: {
                required: "El correo electrónico es requerido",
                email: "Por favor, introduce un correo electrónico válido"
            },
            region: {
                required: "La región es requerida"
            },
            comuna: {
                required: "La comuna es requerida"
            },
            contrasenya: {
                required: "La contraseña es requerida",
                minlength: "La contraseña debe tener al menos 8 caracteres"
            },
            recontrasenya: {
                required: "La confirmación de la contraseña es requerida",
                equalTo: "Las contraseñas no coinciden"
            },
            terminos: {
                required: "Debes aceptar los términos y condiciones"
            }
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.addClass('error');
            element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass('is-valid').removeClass('is-invalid');
        },
        submitHandler: function(form) {

            window.location.href = 'iniciarSesion.html';
        }
    });
});



