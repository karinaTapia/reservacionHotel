// almacenamiento

//**NOTA: variable "tx" predefinida a partir de db.transaction

function accesoBD(nombre,tamaño)
{
/*	//acceso   a la BD
	var db = window.openDatabase(nombre,//nombre BD
	 "1.0", //version
	  nombre, //nombre a mostrar
	   tamaño);// tamaño
	   */
	   var db=window.openDatabase("bdhotel", "1.0","hotel", 200000);
	   return db;

}


function iniciarBd()
{
	var db=window.openDatabase("bdhotel", "1.0","hotel", 200000);
	alert("solo entras");
	
/*	db.transaction(function(tx){
		tx.executeSql('DROP TABLE IF EXISTS reserva');
		tx.executeSql('CREATE TABLE IF NOT EXISTS historial (hId, fecha, habitaciones, personas, estancia)');
		tx.executeSql('CREATE TABLE IF NOT EXISTS reserva (rId, fecha, habitaciones, personas, estancia)');
		tx.executeSql('insert into  reserva (rId, fecha, habitaciones, personas, estancia)values(1,"2013-03-06",2,2,4)');
		}, function(err){
				alert(err.code);
			}, function (){
				 //alert('ok Base d etatos creada');
				 window.localStorage.setItem('Usuario',$('#regNombre').val());
				 window.localStorage.setItem('id',dispositivi()['id']);
				 pgAlert("Reservas","Has sido registrado");
				 window.location.href="#page";
				});*/
}

function leerHistorial()
{
	var db=window.openDatabase("database", "1.0","hotel", 200000);
	  db.transaction(function(tx) 
	  			{
       				 tx.executeSql('SELECT * FROM historial',
					 	[], //inicia query succes
						function(tx, results) {
										for (var i=0; i<results.rows.length; i++){
											alert("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
										}
									}
								,//fin_query succes 
						
							function(err) {
									alert("Error processing SQL Historial: "+err.code);
								}
							);
    			},
	   
	  
	  function(err) {
					alert("Error processing SQL Historal 2: "+err.code);
				}
			);//parametro 2

}


function leerReserva()
{
	//alert("hola");
	var db=window.openDatabase("database", "1.0","hotel", 200000);
	  db.transaction(function(tx) 
	  			{
       				 tx.executeSql('SELECT * FROM reserva',
					 	[], //inicia query succes
						function(tx, results) {
										for (var i=0; i<results.rows.length; i++){
											alert("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
										}
									}
								,//fin_query succes 
						
							function(err) {
									alert("Error processing SQL reservas 1: "+err.code);
								}
							);
    			},
	   
	  
	  function(err) {
					alert("Error processing SQL Revervas 2: "+err.code);
				}
			);//parametro 2

}


function transacciones(db, ejecuciones, error, ok)
{
	db.transaction(ejecuciones,error, ok);
	//ejecuciones se define a traez del objeto tx : function(tx)


}


function saveReserva()
{
	var tipoHabitacion=$('#nr1').attr('th');
	var habit=$('#nr2 ul[data-role=listview]li:eq(1)').children('select').val();
	var pers=$('#nr2 ul[data-role=listview]li:eq(2)').children('select').val();
	var dias=$('#nr2 ul[data-role=listview]li:eq(3)').children('select').val();
	
	accesoBD().transaction(function(tx){
		tx.executeSQL('insert into reserva (rId, fecha, habitaciones, personas, estancia) values (1,"'+fecha.getDate()+'/'+fecha.getMonth()+'/'+fecha.getFullYear()+ '", "'+habit+'","'+pers+'","'+dias+'")')
		},function (err){
			pgAlert('Error guaradr  reservas:', err.code);
			},function(){
				pgAlert('Guardado localmente','esperando por conexion al servidor');
				});
	
	
}


/*



function crearTabla(tx,nombre, campos)
{
	//funcion que crea tablas
	tx.executeSql('CREATE TABLE IF NOT EXISTS '+nombre+' ('+campos+')');
}

function eliminarTabla(tx,nombre)
{
	//funcion que crea tablas
	tx.executeSql('drop TABLE IF  EXISTS '+nombre+' ('+campos+')');
}


//error al crar tabla

function errorCB(err) {
        alert("error al crear BD "+err);
    }

//exito al crear tabla
function successCB() {
        alert("BD Creada!");
    }



function setData(nombre, valor)
{
	window.localStorage.setItem(nombre, valor);

}
	
function getData(nombre)
{
	window.localStorage.getItem(nombre); // solo pide el nombre de la llave
}


function isLogin() // regresa falso   para la  funcion de logeo
{
	if(getData('nombre')!=undefined && getData(dispID)!=undefined)
	{
		return true;
	}
	else
	{
	return false;
	}
}

*/