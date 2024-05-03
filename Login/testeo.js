document.getElementById('myForm').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Realiza las validaciones
    if (username === '') {
        alert('Por favor ingresa un nombre de usuario.');
        return;
    }

    if (email === '') {
        alert('Por favor ingresa un email.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Por favor ingresa un email válido.');
        return;
    }

    if (password === '') {
        alert('Por favor ingresa una contraseña.');
        return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario
    alert('Formulario enviado correctamente!');
});

// Función para validar el formato de email
function isValidEmail(email) {
    // Expresión regular para validar email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
