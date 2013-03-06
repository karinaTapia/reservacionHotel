// almacenamiento

//**NOTA: variable "tx" predefinida a partir de db.transaction


function iniciarBd()
{
	var db=window.openDatabase("database", "1.0","hotel", 200000);
	
	db.transaction(function(tx){
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS reserva (rId, fecha, habitaciones, personas, estancia)');
		}, function(err){
				alert(err.code);
			}, function (){
				 alert('ok');
				});
}




/*function accesoBD(nombre,tamaño)
{
	//acceso   a la BD
	var db = window.openDatabase(nombre,//nombre BD
	 "1.0", //version
	  nombre, //nombre a mostrar
	   tamaño);// tamaño
	   
	   return db;

}


function transacciones(db, ejecuciones, error, ok)
{
	db.transaction(ejecuciones,error, ok);
	//ejecuciones se define a traez del objeto tx : function(tx)


}


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