function validar(){
 valor = document.getElementById("txtValor").value
 divResult = document.getElementById("divResult")
  if (isNaN(valor)){
      divResult.innerHTML = "O valor digitado não é um número!"
  }else if(valor < 1 || valor > 10){
      divResult.innerHTML = "O valor digitado não é permitido!"
  }else{
      divResult.innerHTML = "Valor permitido!"
  }
}

function limpar(){
 divResult = document.getElementById("divResult").innerHTML = ""
}

function mostrarMensagem(){
    alert("Ação finalizada!")
}

$("#divJquery").css("background", "#f0f")
$("#divJquery").css("color", "#00f")
$("#divJquery").html("Oi Pessoal <hr>")
$("#botao").on("click", function(){
    $("#divJquery").toggle(3000, mostrarMensagem)
})