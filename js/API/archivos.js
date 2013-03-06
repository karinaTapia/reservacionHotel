//Archivos
function subirArchivo(ruta){
	var ft = new FileTransfer();

	ft.upload(ruta,
		"http://igitsoft.com/pgtest.php",
		function(result) {
			pgAlert('Imagen subida',result.responseCode+'\n'+result.bytesSent);
			
			setData('usuario',$('#regNombre').val());
			setData('dispID', disp()['uuid']);
				//crear tabla de reservaciones
				transacciones(accesoBD('hotel', 100000),function (tx)
				{
					crearTabla(tx, 'reserva', 'rId, fecha, habitaciones, personas, estancia')	
				}, errorCB, successCB);
			
			
		},
		function(error) {
			pgAlert('Error al subir imagen',error.code);
		},
		{ fileKey:'archivo', fileName:'cliente.jpg' }
	);   
}