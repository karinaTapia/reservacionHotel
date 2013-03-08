//Eventos
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		if(!isLogin())
			window.location.href = "#login";
		//Funcionalidad de tomar foto
		$('#regFoto').tap(function(){
			capturaImg();
		});
		//Funcionalidad Login
		$('#regSubmit').tap(function(){
			if($('#regNombre').val()!='' && $('#regLugar').val()!='' && $('#regEmail').val()!='' && $('#regTel').val()!=''){
				var nom=$('#regNombre').val();
				var lug=$('#regLugar').val();
				var ema=$('#regEmail').val();
				var tel=$('#regTel').val();
				
				//pgAlert("Valores",nom+'\n'+lug+'\n'+ema+'\n'+tel);
				logSend(nom,lug,ema,tel);
			}else{
				pgAlert("Error",'Todos los campos son requeridos.');
			}
		});
		$('#pruebaSQL').tap(function(){
			//leerReserva();
			});
			reservar();
	}, false);
});

function isLogin(){
	return false;
}


function reservar()
{
	alert("reserva");
/*	//todos los elemetos ocn clse OPc que esten dentro d ela lista, al darles click  muestra un alert con el index del elemento
	$('#nr1 ul[data-role=listview].opc').click(function(){
			//alert($(this).index());
			switch($(this).index())
			{
				case  1:
					$('#nr1').attr('th','1');//agregamos un  atributo y un valor
				
					break;
				
				case  2:
					$('#nr1').attr('th','2');//agregamos un  atributo y un valor
					break;
				
				case  3:
					$('#nr1').attr('th','3');//agregamos un  atributo y un valor
					break;	
			}// fin switch
			
			window.location.href='#nr2';
		});
		
		$('#nr2 #enviar').tap(function(){
			//pregunta si esta conecatdo a  internet, si esta ke  envie la info al  server, si no  que la guarde de manera local para que despues de  sincronize
				if(!isConnected())
				{//guaradr en BD local
						saveReserva();
				}
				else
				{//enviar info al server
						
				}
			});*/
}