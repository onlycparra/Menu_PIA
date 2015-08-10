// -----------------------   HEADER   ---------------------------

function go_back(e) {
	$.win.close();
}

$.title_label.text=Alloy.Globals.aux_categoria+" - "+Alloy.Globals.aux_juego;

function go_sound(e) {
	alert("Instrucciones en Sonido...");
}

// -----------------------   BODY   ---------------------------
//Colores de administración
if(Alloy.Globals.setting_on){//si administrando
	$.main_body.backgroundImage="/images/icon/warning.png";
    $.main_body.backgroundRepeat="true";
}else{
	$.main_body.backgroundImage="";
	$.main_body.backgroundColor="#FFF";
}


var gris="#A4A4A4";
var verde="#81F79F";


var view_body= Ti.UI.createScrollView({
    contentHeight: Ti.UI.SIZE, // these lets the internal space fill up greater
    contentWidth: Ti.UI.SIZE,  // than the external space if required
    height: Ti.UI.FILL, // this is the actual height
    layout: 'horizontal',
    showHorizontalScrollIndicator: false,
    showVerticalScrollIndicator: true,
    width: "80%" // this is the actual width
});




if(Alloy.Globals.aux_categoria=="Habilidades Sociales"){
	
    /*##################################################################################################################
       COLOREA
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Colorea"){
    	var button=[];
        for (var i=1;i<=4;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("HS_colorea"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }

        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_colorea1")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_colorea1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_colorea1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_colorea1")==true){//si desbloqueado
                        /*#########################################################
                          ###   COLOREA 1
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_colorea2")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_colorea2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_colorea2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_colorea2")==true){//si desbloqueado
                        /*#########################################################
                          ###   COLOREA 2
                          #########################################################*/
                        alert("Vamos!");
                    }
            }
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_colorea3")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_colorea3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_colorea3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_colorea3")==true){//si desbloqueado{
                        /*#########################################################
                          ###   COLOREA 3
                          #########################################################*/
                        alert("Vamos!");
                    }
            }
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_colorea4")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_colorea4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_colorea4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_colorea4")==true){//si desbloqueado
                        /*#########################################################
                          ###   COLOREA 4
                          #########################################################*/
                        alert("Vamos!");
                    }
            }
        });
    }

    
    /*##################################################################################################################
       SELECCIONA
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Selecciona"){
        var button=[];
        for (var i=1;i<=16;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("HS_selecciona"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }
        
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona1")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona1")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 1
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona2")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona2")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 2
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona3")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona3")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 3
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona4")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona4")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 4
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona5")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona5")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 5
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona6")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona6")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 6
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona7")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona7")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 7
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona8")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona8")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 8
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona9")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona9")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 9
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[10].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona10")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona10",true);//desbloquea
                        button[10].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona10",false);//bloquea
                        button[10].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona10")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 10
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[11].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona11")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona11",true);//desbloquea
                        button[11].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona11",false);//bloquea
                        button[11].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona11")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 11
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[12].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona12")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona12",true);//desbloquea
                        button[12].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona12",false);//bloquea
                        button[12].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona12")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 12
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[13].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona13")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona13",true);//desbloquea
                        button[13].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona13",false);//bloquea
                        button[13].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona13")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 13
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[14].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona14")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona14",true);//desbloquea
                        button[14].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona14",false);//bloquea
                        button[14].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona14")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 14
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[15].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona15")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona15",true);//desbloquea
                        button[15].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona15",false);//bloquea
                        button[15].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona15")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 15
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[16].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_selecciona16")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_selecciona16",true);//desbloquea
                        button[16].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_selecciona16",false);//bloquea
                        button[16].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_selecciona16")==true){//si desbloqueado
                        /*#########################################################
                          ###   SELECCIONA 16
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
    }
    

	/*##################################################################################################################
       ACCIONES
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Acciones"){
        var button=[];
        for (var i=1;i<=18;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("HS_acciones"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }
        
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones1")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones1")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 1
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones2")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones2")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 2
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones3")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones3")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 3
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones4")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones4")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 4
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones5")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones5")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 5
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones6")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones6")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 6
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones7")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones7")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 7
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones8")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones8")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 8
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones9")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones9")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 9
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[10].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones10")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones10",true);//desbloquea
                        button[10].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones10",false);//bloquea
                        button[10].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones10")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 10
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[11].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones11")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones11",true);//desbloquea
                        button[11].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones11",false);//bloquea
                        button[11].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones11")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 11
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[12].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones12")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones12",true);//desbloquea
                        button[12].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones12",false);//bloquea
                        button[12].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones12")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 12
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[13].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones13")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones13",true);//desbloquea
                        button[13].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones13",false);//bloquea
                        button[13].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones13")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 13
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[14].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones14")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones14",true);//desbloquea
                        button[14].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones14",false);//bloquea
                        button[14].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones14")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 14
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[15].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones15")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones15",true);//desbloquea
                        button[15].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones15",false);//bloquea
                        button[15].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones15")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 15
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[16].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones16")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones16",true);//desbloquea
                        button[16].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones16",false);//bloquea
                        button[16].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones16")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 16
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[17].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones17")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones17",true);//desbloquea
                        button[17].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones17",false);//bloquea
                        button[17].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones17")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 17
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[18].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_acciones18")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_acciones18",true);//desbloquea
                        button[18].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_acciones18",false);//bloquea
                        button[18].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_acciones18")==true){//si desbloqueado
                        /*#########################################################
                          ###   ACCIONES 18
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
    }
    

	/*##################################################################################################################
       GESTOS
    ##################################################################################################################*/
    if(Alloy.Globals.aux_juego=="Gestos"){
        var button=[];
        for (var i=1;i<=15;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("HS_gestos"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }
        
        button[1].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos1")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos1",true);//desbloquea
                        button[1].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos1",false);//bloquea
                        button[1].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos1")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 1
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[2].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos2")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos2",true);//desbloquea
                        button[2].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos2",false);//bloquea
                        button[2].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos2")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 2
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[3].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos3")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos3",true);//desbloquea
                        button[3].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos3",false);//bloquea
                        button[3].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos3")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 3
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[4].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos4")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos4",true);//desbloquea
                        button[4].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos4",false);//bloquea
                        button[4].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos4")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 4
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[5].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos5")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos5",true);//desbloquea
                        button[5].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos5",false);//bloquea
                        button[5].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos5")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 5
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[6].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos6")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos6",true);//desbloquea
                        button[6].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos6",false);//bloquea
                        button[6].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos6")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 6
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[7].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos7")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos7",true);//desbloquea
                        button[7].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos7",false);//bloquea
                        button[7].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos7")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 7
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[8].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos8")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos8",true);//desbloquea
                        button[8].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos8",false);//bloquea
                        button[8].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos8")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 8
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[9].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos9")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos9",true);//desbloquea
                        button[9].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos9",false);//bloquea
                        button[9].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos9")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 9
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[10].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos10")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos10",true);//desbloquea
                        button[10].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos10",false);//bloquea
                        button[10].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos10")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 10
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[11].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos11")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos11",true);//desbloquea
                        button[11].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos11",false);//bloquea
                        button[11].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos11")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 11
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[12].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos12")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos12",true);//desbloquea
                        button[12].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos12",false);//bloquea
                        button[12].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos12")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 12
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[13].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos13")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos13",true);//desbloquea
                        button[13].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos13",false);//bloquea
                        button[13].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos13")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 13
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[14].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos14")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos14",true);//desbloquea
                        button[14].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos14",false);//bloquea
                        button[14].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos14")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 14
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
        button[15].addEventListener('click',function(e){
            if(Alloy.Globals.setting_on){//si administrando
                    if(Ti.App.Properties.getBool("HS_gestos15")==false){//si bloqueado
                        Ti.App.Properties.setBool("HS_gestos15",true);//desbloquea
                        button[15].backgroundColor=verde;
                    }else{
                        Ti.App.Properties.setBool("HS_gestos15",false);//bloquea
                        button[15].backgroundColor=gris;
                    }
            }else{//si jugando
                    if(Ti.App.Properties.getBool("HS_gestos15")==true){//si desbloqueado
                        /*#########################################################
                          ###   GESTOS 15
                          #########################################################*/
                        alert("Vamos!");
                    }
            } 
        });
    }
           
}


if(Alloy.Globals.aux_categoria=="Tolerancia a la Frustración"){
    if(Alloy.Globals.aux_juego=="Siluetas"){
        var button=[];
        for (var i=1;i<=9;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("TF_siluetas"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
    }
    //
    if(Alloy.Globals.aux_juego=="Encúentralos"){
        var button=[];
        for (var i=1;i<=10;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("TF_encuentralos"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
    }
    //
    if(Alloy.Globals.aux_juego=="Objetos"){
        var button=[];
        for (var i=1;i<=11;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("TF_objetos"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
             alert("Vamos!");
            }
        });
        button[10].addEventListener('click',function(e){
            if(button[10].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
             alert("Vamos!");
            }
        });
    }
    //
    if(Alloy.Globals.aux_juego=="Diferencias"){
        var button=[];
        for (var i=1;i<=10;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("TF_diferencias"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_1=Alloy.createController('diferencias_nivel_1').getView();
                diferencias_nivel_1.open();
             //alert("Vamos!");
            }
        });
        button[1].addEventListener('click',function(e){
            if(button[1].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_2=Alloy.createController('diferencias_nivel_2').getView();
                diferencias_nivel_2.open();
             //alert("Vamos!");
            }
        });
        button[2].addEventListener('click',function(e){
            if(button[2].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_3=Alloy.createController('diferencias_nivel_3').getView();
                diferencias_nivel_3.open();
             //alert("Vamos!");
            }
        });
        button[3].addEventListener('click',function(e){
            if(button[3].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_4=Alloy.createController('diferencias_nivel_4').getView();
                diferencias_nivel_4.open();
             //alert("Vamos!");
            }
        });
        button[4].addEventListener('click',function(e){
            if(button[4].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_5=Alloy.createController('diferencias_nivel_5').getView();
                diferencias_nivel_5.open();
             //alert("Vamos!");
            }
        });
        button[5].addEventListener('click',function(e){
            if(button[5].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_6=Alloy.createController('diferencias_nivel_6').getView();
                diferencias_nivel_6.open();
             //alert("Vamos!");
            }
        });
        button[6].addEventListener('click',function(e){
            if(button[6].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_7=Alloy.createController('diferencias_nivel_7').getView();
                diferencias_nivel_7.open();
             //alert("Vamos!");
            }
        });
        button[7].addEventListener('click',function(e){
            if(button[7].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_8=Alloy.createController('diferencias_nivel_8').getView();
                diferencias_nivel_8.open();
             //alert("Vamos!");
            }
        });
        button[8].addEventListener('click',function(e){
            if(button[8].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_9=Alloy.createController('diferencias_nivel_9').getView();
                diferencias_nivel_9.open();
             //alert("Vamos!");
            }
        });
        button[9].addEventListener('click',function(e){
            if(button[9].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                var diferencias_nivel_10=Alloy.createController('diferencias_nivel_10').getView();
                diferencias_nivel_10.open();
             //alert("Vamos!");
            }
        });
    }
    //
    if(Alloy.Globals.aux_juego=="Memorice"){
    	
    	var button=[];
        for (var i=1;i<=1;i++){
            button[i]=Titanium.UI.createButton({
                height: "90dip",
                width:  "90dip",
                top: "6%",
                left: "6%",
                font: {
			        fontSize: 46,
			        color:"#000",
			        fontWeight:"bold",
			        textAlign:"center"
			    },
                title: (i)
            });
            if(Ti.App.Properties.getBool("TF_memorice"+i)==false) button[i].backgroundColor=gris;
            else                                                 button[i].backgroundColor=verde;
            view_body.add(button[i]);
        }
        
        button[0].addEventListener('click',function(e){
            if(button[0].backgroundColor=="#A4A4A4"){
                alert("Todavia no puede jugar este nivel");
            }
            else{
                alert("Vamos!");
            }
        });
    }
}
$.main_body.add(view_body);

