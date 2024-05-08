const form = document.getElementById("log_in");
const errorMessage = document.getElementById("Password");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const User = document.getElementById("User").value;
  const password = document.getElementById("Password").value;

  if (username === '' || password === '') {
    errorMessage.innerText = '!!!!!Por favor, complete todos los campos¡¡¡¡¡¡';
    return;
  }

  if (password.length < 4) {
    errorMessage.innerText = '!!!!!!La contraseña debe tener al menos 4 caracteres¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡';
    return;
  }

   if (!/^[a-zA-Z0-9]+$/.test(username)) {
    errorMessage.innerText = '!!!!!!!!El usuario solo puede contener letras y números¡¡¡¡¡¡¡';
    return;
  }

  const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user', password: 'password456' }
  ];

  let isValid = false;
  for (const user of users) {
    if (user.username === username && user.password === password) {
      isValid = true;
      break;
    }
  }

  if (!isValid) {
    errorMessage.innerText = 'Usuario Incorrecto';
    return;
  }

  alert('Autenticación exitosa!');
});
