
var aux_sol_iz=false;
var aux_sol_dr=false;
var aux_piramide_iz=false;
var aux_piramide_dr=false;
var aux_sombrero_iz=false;
var aux_sombrero_dr=false;
var aux_zapato_iz=false;
var aux_zapato_dr=false;
var aux_cola_iz=false;
var aux_cola_dr=false;

var punto=0;

function estrella (punto) {
	if(punto==0){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==1){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==2){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==3){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==4){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==5){
		$.estrella_1.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		var dialog = Ti.UI.createAlertDialog({
			title: 'Felicitaciones',
			message: '¡Bien! ¡Vamos a siguiente nivel!',
			cancel: 1,
    		buttonNames: ['Vamos', 'Cacelar']
		});
		dialog.show();
		//Desbloquear siguiente nivel.
		Ti.App.Properties.removeProperty("TF_diferencias4");
		Ti.App.Properties.setBool("TF_diferencias4",true);
		
		dialog.addEventListener('click', function(e){
			var aux_click=e.text;
			Ti.API.info(aux_click);
			if (e.index === e.source.cancel){
				clearInterval(change_view);
		      	Ti.API.info('The cancel button was clicked');
		    }
			else{
				var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
				diferencias_nivel_5.open();
			}	
		});
		var change_view=setInterval(function(){
			dialog.hide();
			var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
			diferencias_nivel_5.open();
			clearInterval(change_view);
		},5000);
	}
}
$.sol_iz.add.addEventListener('click',function(e){
	if(aux_sol_iz==false){
		aux_sol_iz=true;
		aux_sol_dr=true;
		punto=punto+1;
		$.sol_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.sol_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.sol_dr.add.addEventListener('click',function(e){
	if(aux_sol_dr==false){
		aux_sol_iz=true;
		aux_sol_dr=true;
		punto=punto+1;
		$.sol_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.sol_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.piramide_iz.add.addEventListener('click',function(e){
	if(aux_piramide_iz==false){
		aux_piramide_iz=true;
		aux_piramide_dr=true;
		punto=punto+1;
		$.piramide_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.piramide_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.piramide_dr.add.addEventListener('click',function(e){
	if(aux_piramide_dr==false){
		aux_piramide_iz=true;
		aux_piramide_dr=true;
		punto=punto+1;
		$.piramide_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.piramide_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.sombrero_iz.add.addEventListener('click',function(e){
	if(aux_sombrero_iz==false){
		aux_sombrero_iz=true;
		aux_sombrero_dr=true;
		punto=punto+1;
		$.sombrero_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.sombrero_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.sombrero_dr.add.addEventListener('click',function(e){
	if(aux_sombrero_dr==false){
		aux_sombrero_iz=true;
		aux_sombrero_dr=true;
		punto=punto+1;
		$.sombrero_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.sombrero_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.zapato_iz.add.addEventListener('click',function(e){
	if(aux_zapato_iz==false){
		aux_zapato_iz=true;
		aux_zapato_dr=true;
		punto=punto+1;
		$.zapato_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.zapato_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.zapato_dr.add.addEventListener('click',function(e){
	if(aux_zapato_dr==false){
		aux_zapato_iz=true;
		aux_zapato_dr=true;
		punto=punto+1;
		$.zapato_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.zapato_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});

//
$.cola_iz.add.addEventListener('click',function(e){
	if(aux_cola_iz==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cola_dr.add.addEventListener('click',function(e){
	if(aux_cola_dr==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
//

$.label_AT.add.addEventListener('click',function(e){
	$.win.close();
});
$.anterior.add.addEventListener('click',function(e){
	$.win.close();
});
$.label_SG.add.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias4")==true){
		var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
		diferencias_nivel_5.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	if(punto==5||Ti.App.Properties.getBool("TF_diferencias4")==true){
		var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
		diferencias_nivel_5.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
