// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

function verificarPasswords() {

    // Ontenemos los valores de los campos de contraseñas 
    var password = document.getElementById('password');
    var passwordConf = document.getElementById('passwordConf');

    // Verificamos si las constraseñas no coinciden

    if (password.value == "") {
        // Si las constraseñas están vacías mostramos un mensaje 
        document.getElementById("empty").classList.add("mostrar");
        

        return false;
    } else {

        if (password.value != passwordConf.value) {

            // Si las constraseñas no coinciden mostramos un mensaje 
            document.getElementById("error").classList.add("mostrar");

            // Si las contraseñas ya no están vacías ocultamos el mensaje de error
            document.getElementById("empty").classList.remove("mostrar");

            return false;

        } else {

            // Si las contraseñas coinciden ocultamos el mensaje de error
            document.getElementById("error").classList.remove("mostrar");

            // Mostramos un mensaje mencionando que las Contraseñas coinciden 
            document.getElementById("ok").classList.remove("ocultar");

            // Desabilitamos el botón de login 
            document.getElementById("signUp").disabled = true;

            // Refrescamos la página (Simulación de envío del formulario) 
            setTimeout(function () {
                location.reload();
            }, 2000);

            return true;
        }
    }
}