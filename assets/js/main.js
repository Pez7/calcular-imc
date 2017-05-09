function calcularImc(peso,estatura){
  var peso = document.getElementById("peso").value;
  var estatura = document.getElementById("estatura").value;
  var altura  = parseInt(estatura)/100;
  var imc = (peso / (altura*altura)).toFixed(0);

  if (imc > 40) {
    alert("Tienes un índice de: "+ imc + " Debes cuidar tu salud!");
  } else alert("Tienes un índice de: "+ imc);


}