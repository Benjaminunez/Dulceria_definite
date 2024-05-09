function validarCampos(){
  let campos = document.querySelectorAll(".form-control");
  for(let i=0; i<campos.length; i++){
    if(campos[i].value == ""){
      document.querySelector("#error").innerHTML = "!Campos vacios¡";
      return false;
    }

  }
  return true;
}
