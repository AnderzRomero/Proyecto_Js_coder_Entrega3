function convertir() {
	// Obtener el monto en USD y la moneda de destino
	let usd = document.getElementById("usd-input").value;
	let divisa = document.getElementById("divisa-seleccionada").value;

	// Calcular la tasa de cambio según la moneda de destino
	let cambioTasa;
	switch (divisa) {
		case "MXN":
			cambioTasa = 20.14; // Tasa de cambio USD/MXN
			break;
		case "EUR":
			cambioTasa = 0.85; // Tasa de cambio USD/EUR
			break;
		case "JPY":
			cambioTasa = 110.84; // Tasa de cambio USD/JPY
			break;
	}

	// Convertir el monto a la moneda de destino y mostrar el resultado
	let result = usd * cambioTasa;
	document.getElementById("resultado").innerHTML = result.toFixed(2) + " " + divisa;
}
