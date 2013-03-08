// conexion
function isConnected()
{
	if(navigator.connection.type != Connection.NONE)
	{//return true; // si esta conectado
				return navigator.connection.type;// regresamos el tipo de conexion
	}	
	else
	{
		return  false;	
	}
}