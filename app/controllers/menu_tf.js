//Colores de administración
if(Alloy.Globals.setting_on){//si administrando
	$.view_body.backgroundImage="/images/icon/warning.png";
    $.view_body.backgroundRepeat="true";
}else{
	$.view_body.backgroundColor="#FFF";
}

function menu_siluetas(e) {
	Alloy.Globals.aux_juego="Siluetas";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_encuentralos(e) {
	Alloy.Globals.aux_juego="Encúentralos";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_objetos(e) {
	Alloy.Globals.aux_juego="Objetos";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_diferencias(e) {
	Alloy.Globals.aux_juego="Diferencias";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
function menu_memorice(e) {
	Alloy.Globals.aux_juego="Memorice";
	var menu_nivel=Alloy.createController('menu_nivel').getView();
	menu_nivel.open();
}
$.back_icon.addEventListener('click', function(e) {
	$.menu_tf.close();
});
$.menu_tf.open();
