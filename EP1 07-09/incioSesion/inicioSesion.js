$(document).ready(function(){
    $("#inicioSesionForm").validate({
        rules: {
            usuario: {
                required: true,
                minlength: 3
            },
            contrasenya: {
                required: true,
                minlength: 8
            },
            rol: {
                required: true
            }
        },
        messages: {
            usuario: {
                required: "Por favor, ingrese su nombre de usuario o correo electrónico",
                minlength: "El nombre de usuario debe tener al menos 3 caracteres"
            },
            contrasenya: {
                required: "Por favor, ingrese su contraseña",
                minlength: "La contraseña debe tener al menos 8 caracteres"
            },
            rol: {
                required: "Por favor, seleccione un rol"
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
            var rolSeleccionado = $("#rol").val();
            if (rolSeleccionado === "veterinario") {
                window.location.href = 'menuMascotaVet.html';
            } else if (rolSeleccionado === "paciente") {
                window.location.href = 'menuMascota.html';
            } else {
                alert("Por favor, seleccione un rol válido.");
            }
        }
    });
});