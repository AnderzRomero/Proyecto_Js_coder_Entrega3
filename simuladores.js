//Menu de Simuladores

// 1.... Simulador de Creditos Bancarios

//Simulador de Creditos Bancarios

// También podrías definir un array que funciones como historial de conversiones ó de solicitudes de créditos.

//Solicitamos los datos necesarios para realizar la simulacion del credito
// let montoPrestamo = parseFloat(prompt("Ingrese el monto de dinero que necesitas"));
// let plazoEnMeses = parseInt(prompt("Ingrese ¿A cuantos meses? requiere el prestamo"));
// const tasaInteresAnual = 12;


// function calcularPagosMensuales(monto, tasaInteresAnual, plazoEnMeses) {
// 	// Convertimos la tasa de interés anual a una tasa de interés mensual decimal
// 	const tasaInteresMensual = (tasaInteresAnual / 12) / 100;
// 	console.log(tasaInteresMensual);

// 	// Calculamos el pago mensual utilizando la fórmula de pagos uniformes
// 	const numerador = monto * tasaInteresMensual * Math.pow(1 + tasaInteresMensual, plazoEnMeses);
// 	const denominador = Math.pow(1 + tasaInteresMensual, plazoEnMeses) - 1;
// 	console.log(numerador, "Intereses");
// 	const pagoMensual = numerador / denominador;
// 	console.log(pagoMensual, "Precio mensual");

// 	// Redondeamos el pago mensual a dos decimales
// 	return Math.round(((pagoMensual * 100) / 100), 1);
// }

// const pagoMensual = calcularPagosMensuales(montoPrestamo, tasaInteresAnual, plazoEnMeses);

// alert(`El pago mensual es de ${pagoMensual} pesos.`);


// 2....  Simulador de convertidor de divisas  

function convertirMoneda(cantidad, tasa) {
	return cantidad * tasa;
}

function convertir() {	          

	// Crear Clase modena
	class Moneda {
		constructor(nombre, id) {
			this.nombre = nombre
			this.id = id
		}
	}

	// definimos un array para contener los objetos con la información de las divisas.            
	const divisas = [];
	divisas.push(new Moneda('Dolares Americanos', 'USD'));
	divisas.push(new Moneda('Euros', 'EUR'));
	divisas.push(new Moneda('Libras Esterlinas', 'GBP'));
	divisas.push(new Moneda('Yenes Japoneses', 'JPY'));
	divisas.push(new Moneda('Pesos Mexicanos', 'MXN'));

	// Obtener la moneda origen, la moneda de destino y el monto a cambiar	
	let monedaOrigen = document.getElementById("divisa-origen").value;
	let monedaDestino = document.getElementById("divisa-destino").value;
	let cantidad = document.getElementById("monto").value;

	//variable para condicion de moneda correcta
	let escogioMoneda = false
	let infMonedaEscogida;

	while (escogioMoneda === false) {
		if (monedaOrigen === "USD") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('USD'))
		} else if (monedaOrigen === "EUR") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('EUR'))
		} else if (monedaOrigen === "GBP") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('GBP'))
		} else if (monedaOrigen === "JPY") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('JPY'))
		} else if (monedaOrigen === "MXN") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('MXN'))
		} else {
			break
		}
	}

	// console.log("Divisa escogida es: " + infMonedaEscogida[0].nombre);

	//variable para condicion de moneda correcta
	let escogidaConvertir = false
	let infMonedaConvertir;

	while (escogidaConvertir === false) {
		if (monedaDestino === "USD") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('USD'))
		} else if (monedaDestino === "EUR") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('EUR'))
		} else if (monedaDestino === "GBP") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('GBP'))
		} else if (monedaDestino === "JPY") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('JPY'))
		} else if (monedaDestino === "MXN") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('MXN'))
		} else {
			break;
		}
	}
	// console.log('Divisa escogida es:  ' + infMonedaConvertir[0].nombre);

	// Definimos las tasas de conversión
	let tasa;

	if (monedaOrigen === "USD" && monedaDestino === "EUR") {
		tasa = 0.94;
	} else if (monedaOrigen === "USD" && monedaDestino === "JPY") {
		tasa = 135.84;
	} else if (monedaOrigen === "USD" && monedaDestino === "GBP") {
		tasa = 0.83;
	} else if (monedaOrigen === "USD" && monedaDestino === "MXN") {
		tasa = 17.96;
	} else if (monedaOrigen === "EUR" && monedaDestino === "USD") {
		tasa = 1.07;
	} else if (monedaOrigen === "EUR" && monedaDestino === "JPY") {
		tasa = 144.67;
	} else if (monedaOrigen === "EUR" && monedaDestino === "GBP") {
		tasa = 0.88;
	} else if (monedaOrigen === "EUR" && monedaDestino === "MXN") {
		tasa = 19.09;
	} else if (monedaOrigen === "JPY" && monedaDestino === "USD") {
		tasa = 0.0074;
	} else if (monedaOrigen === "JPY" && monedaDestino === "EUR") {
		tasa = 0.0069;
	} else if (monedaOrigen === "JPY" && monedaDestino === "GBP") {
		tasa = 0.0061;
	} else if (monedaOrigen === "JPY" && monedaDestino === "MXN") {
		tasa = 0.13;
	} else if (monedaOrigen === "GBP" && monedaDestino === "USD") {
		tasa = 1.20;
	} else if (monedaOrigen === "GBP" && monedaDestino === "EUR") {
		tasa = 1.13;
	} else if (monedaOrigen === "GBP" && monedaDestino === "JPY") {
		tasa = 163.43;
	} else if (monedaOrigen === "GBP" && monedaDestino === "MXN") {
		tasa = 21.61;
	} else if (monedaOrigen === "MXN" && monedaDestino === "USD") {
		tasa = 0.056;
	} else if (monedaOrigen === "MXN" && monedaDestino === "EUR") {
		tasa = 0.052;
	} else if (monedaOrigen === "MXN" && monedaDestino === "GBP") {
		tasa = 0.046;
	} else if (monedaOrigen === "MXN" && monedaDestino === "JPY") {
		tasa = 7.57;
	}

	const resultado = convertirMoneda(cantidad, tasa);

	let contenedor = document.createElement("div");		
	contenedor.setAttribute('class','convertidor convertidor__resultado');

	//Definimos el innerHTML del elemento con una plantilla de texto
	contenedor.innerHTML = `<h2> Resultado es: </h2>
							<p> <b>${cantidad}</b>   ${infMonedaEscogida[0].nombre} = <b>${resultado.toFixed(2)}</b>    ${infMonedaConvertir[0].nombre}</p>`;

	//Agregamos el contenedor creado al main
	document.getElementById("principal").appendChild(contenedor);
}

// 3.... Simulador Venta de productos

//Tienda Tecnologica

// let menuTienda = prompt("Bienvenidos a HeroSystems" + "\n" +
// 	"Selecciona la opción a realizar: " + "\n" +
// 	"1. Ingresar Producto" + "\n" +
// 	"2. Modificar Producto" + "\n" +
// 	"3. Eliminar Producto" + "\n" +
// 	"4. Mostrar Producto" + "\n" +
// 	"5. Buscar producto" + "\n" +
// 	"6. Salir"
// );

// while (menuTienda != "6") {
// 	switch (menuTienda) {
// 		case "1":

// 			break;

// 		case "2":
// 			break;
// 		case "3":
// 			break;
// 		case "4":
// 			break;
// 		case "5":
// 			break;
// 		case "6":
// 			break;
// 	}
// }


