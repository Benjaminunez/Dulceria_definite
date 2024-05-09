function validarUser(){
    let input=document.querySelector("#User");
    if(input.value.length >= 10){
        input.classList.add("correct");
        input.classList.remove("incorrect");
        document.querySelector("#error-User").innerHTML = "&nbsp;" ;
        
        
    }else{
        input.classList.add("incorrect");
        input.classList.remove("correct");
        document.querySelector("#error-user").innerHTML
         = "Error, ingrese minimo 10 caracteres!.";
    }
}
