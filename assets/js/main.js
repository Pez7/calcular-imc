function calcularImc(peso,estatura){
  var peso = document.getElementById("peso").value;
  var estatura = document.getElementById("estatura").value;
  var altura  = parseInt(estatura)/100;
  var imc = (peso / (altura*altura)).toFixed(0);

  if (imc > 40) {
    alert("Tienes un índice de: "+ imc + " Debes cuidar tu salud!");
  } else alert("Tienes un índice de: "+ imc);
}

/* funcion Valentina Toledo
function calculadora(){
	var peso = parseInt(prompt("Ingresa tu peso"));
	var altura = parseInt(prompt("Ingresa tu altura"))/100;
	var calculo = (peso/(altura*altura)).toFixed(1);
	return alert("Tu IMC es de: " + calculo);

}*/ 
