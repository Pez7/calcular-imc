function calculadora(){
	var peso = parseInt(prompt("Ingresa tu peso"));
	var altura = parseInt(prompt("Ingresa tu altura"))/100;
	var calculo = (peso/(altura*altura)).toFixed(1);
	return alert("Tu IMC es de: " + calculo);
}