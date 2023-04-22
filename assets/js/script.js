const vehiculo = {
	marca: 'Peakauto',
	modelo: 'Goenx',
	motor: {
		tipo: '4 CILINDROS EN LÍNEA',
		bloque: 'Aleación/Aluminio',
		desplazamiento: '1.99/1996',
		caballos: '155 @ 6500',
		lineaRoja: 6700,
		inyeccionCombustible: 'PUNTOS MÚLTIPLES',
	},
};
// Array de cada propiedad del objeto vehiculo, que las evalúa una
let mostrarEnConsola = [
	(marca = vehiculo.marca),
	(modelo = vehiculo.modelo),
	(tipoMotor = vehiculo.motor.tipo ??= vehiculo.motor.tipo),
	(presionMotor = vehiculo.motor.presion),
	(bloqueMotor = vehiculo.motor.bloque ??= vehiculo.motor.bloque),
	(desplazamientoMotor = vehiculo.motor.desplazamiento ??=
		vehiculo.motor.desplazamiento),
	(caballosMotor = vehiculo.motor.caballos ??= vehiculo.motor.caballos),
	(lineaRojaMotor = vehiculo.motor.lineaRoja ??= vehiculo.motor.lineaRoja),
	(smartMotor = vehiculo.motor.smartAssist ??= vehiculo.motor.smartAssist),
	(inyeccionMotor = vehiculo.motor.inyeccionCombustible ??=
		vehiculo.motor.inyeccionCombustible),
	(encendidoMotor = vehiculo.motor.encendidoRemoto ??=
		vehiculo.motor.encendidoRemoto),
];
mostrarEnConsola.forEach((propiedad) => console.log(propiedad));
