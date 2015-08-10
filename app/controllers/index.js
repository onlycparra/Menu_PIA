//if is necesary to remove all property variable 
/*
 if(Ti.App.Properties.hasProperty("HS_colorea0")){
	var props = Ti.App.Properties.listProperties();
	for (var i=0, ilen=props.length; i<ilen; i++){
	    var value = Ti.App.Properties.getString(props[i]);
	    Ti.API.info(props[i] + ' = ' + value+" removed");
	    Ti.App.Properties.removeProperty(props[i]);
	}
}
*/

/*
 * -----------------------------------------------------------------
 * --------------------------VARIABLES GLOBALES---------------------
 * -----------------------------------------------------------------
 * 
 * Indicador de que actualmente se están activando/desactivando los menus
 * 
 */

Alloy.Globals.setting_on=false;





/*
 * -----------------------------------------------------------------
 * ----------------VARIABLES DE ACTIVACIÓN DE NIVELES---------------
 * -----------------------------------------------------------------
 * 
 * Variables indicadores de cada nivel:
 * 
 * 		HS_colorea0
 * 		HS_colorea1
 * 		HS_colorea2
 * ...
 * 
 * Cada uno es verdadero o falso, indicando si el nivel está o no activo.
 * Para hacerlos verdaderos o falsos:
 * 	Ti.App.Properties.setBool("Nombre de la variable en comillas",true o false);
 */

if (!Ti.App.Properties.hasProperty("HS_colorea0")){
	for (var i=1; i < 4; i++) Ti.App.Properties.setBool("HS_colorea"+i,false);
	for (var i=1; i < 16; i++) Ti.App.Properties.setBool("HS_selecciona"+i,false);
	for (var i=1; i < 18; i++) Ti.App.Properties.setBool("HS_acciones"+i,false);
	for (var i=1; i < 15; i++) Ti.App.Properties.setBool("HS_gestos"+i,false);
	for (var i=1; i < 10; i++) Ti.App.Properties.setBool("TF_siluetas"+i,false);
	for (var i=1; i < 10; i++) Ti.App.Properties.setBool("TF_encuentralos"+i,false);
	for (var i=1; i < 11; i++) Ti.App.Properties.setBool("TF_objetos"+i,false);
	for (var i=1; i < 10; i++) Ti.App.Properties.setBool("TF_diferencias"+i,false);
	
	//Ti.App.Properties.setBool("HS_colorea0",true);
}



function menu_HS(e) {
    var menu_hs=Alloy.createController('menu_hs').getView();
	menu_hs.open();
}
function menu_TF(e) {
    var menu_tf=Alloy.createController('menu_tf').getView();
	menu_tf.open();
}
function menu_setting(e) {
    var input_pass=Alloy.createController('input_pass').getView();
	input_pass.open();
}

$.index.open();