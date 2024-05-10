function validarCampos() {
  let campos = document.querySelectorAll(".form-control");
  for (let i = 0; i < campos.length; i++) {
    if (campos[i].value == "") {
      document.querySelector("#error").innerHTML = "!Campos vacios¡";
      return false;
    }

  }
  return true;
}

function validarUser() {
  let input = document.querySelector("#User");
  if (input.value.length >= 10) {
    input.classList.add("correct");
    input.classList.remove("incorrect");
    document.querySelector("#error-user").innerHTML = "&nbsp;";


  } else {
    input.classList.add("incorrect");
    input.classList.remove("correct");
    document.querySelector("#error-user").innerHTML
      = "Error, ingrese minimo 10 caracteres!.";
  }
}

