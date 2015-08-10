function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function estrella(punto) {
        if (0 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (1 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (2 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (3 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (4 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (5 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            var dialog = Ti.UI.createAlertDialog({
                title: "Felicitaciones",
                message: "¡Bien! ¡Vamos a siguiente nivel!",
                cancel: 1,
                buttonNames: [ "Vamos", "Cacelar" ]
            });
            dialog.show();
            Ti.App.Properties.removeProperty("TF_diferencias7");
            Ti.App.Properties.setBool("TF_diferencias7", true);
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var diferencias_nivel_8 = Alloy.createController("diferencias_nivel_8").getView();
                    diferencias_nivel_8.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var diferencias_nivel_8 = Alloy.createController("diferencias_nivel_8").getView();
                diferencias_nivel_8.open();
                clearInterval(change_view);
            }, 5e3);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_7";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.view_header = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: "15%",
        layout: "horizontal",
        id: "view_header"
    });
    $.__views.win.add($.__views.view_header);
    $.__views.title = Ti.UI.createLabel({
        top: "50%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 24
        },
        text: "Encúentre la diferencia",
        id: "title"
    });
    $.__views.view_header.add($.__views.title);
    $.__views.view_body = Ti.UI.createView({
        height: "70%",
        width: "90%",
        id: "view_body"
    });
    $.__views.win.add($.__views.view_body);
    $.__views.imagen = Ti.UI.createView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 7 - (5).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.rueda_iz = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "37%",
        left: "36.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "rueda_iz"
    });
    $.__views.imagen.add($.__views.rueda_iz);
    $.__views.puerta_iz = Ti.UI.createButton({
        width: "7%",
        height: "18%",
        top: "22.5%",
        left: "17.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "puerta_iz"
    });
    $.__views.imagen.add($.__views.puerta_iz);
    $.__views.carro_iz = Ti.UI.createButton({
        width: "17%",
        height: "15%",
        top: "37%",
        left: "0%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "carro_iz"
    });
    $.__views.imagen.add($.__views.carro_iz);
    $.__views.aveja_iz = Ti.UI.createButton({
        width: "15%",
        height: "15.5%",
        top: "62%",
        left: "32%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "aveja_iz"
    });
    $.__views.imagen.add($.__views.aveja_iz);
    $.__views.flor_iz = Ti.UI.createButton({
        width: "5%",
        height: "8%",
        top: "69%",
        left: "2%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "flor_iz"
    });
    $.__views.imagen.add($.__views.flor_iz);
    $.__views.rueda_dr = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "37%",
        left: "88%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "rueda_dr"
    });
    $.__views.imagen.add($.__views.rueda_dr);
    $.__views.puerta_dr = Ti.UI.createButton({
        width: "7%",
        height: "18%",
        top: "22.5%",
        left: "69%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "puerta_dr"
    });
    $.__views.imagen.add($.__views.puerta_dr);
    $.__views.carro_dr = Ti.UI.createButton({
        width: "17%",
        height: "15%",
        top: "37%",
        left: "51.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "carro_dr"
    });
    $.__views.imagen.add($.__views.carro_dr);
    $.__views.aveja_dr = Ti.UI.createButton({
        width: "15%",
        height: "15.5%",
        top: "62%",
        left: "83.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "aveja_dr"
    });
    $.__views.imagen.add($.__views.aveja_dr);
    $.__views.flor_dr = Ti.UI.createButton({
        width: "5%",
        height: "8%",
        top: "69%",
        left: "53.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "flor_dr"
    });
    $.__views.imagen.add($.__views.flor_dr);
    $.__views.view_footer = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "view_footer"
    });
    $.__views.win.add($.__views.view_footer);
    $.__views.anterior = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/anterior.png",
        width: "5%",
        height: "20%",
        id: "anterior"
    });
    $.__views.view_footer.add($.__views.anterior);
    $.__views.label_AT = Ti.UI.createLabel({
        text: "Anterior",
        id: "label_AT"
    });
    $.__views.view_footer.add($.__views.label_AT);
    $.__views.estrella_1 = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png",
        left: "10%",
        width: "10%",
        height: "40%",
        id: "estrella_1"
    });
    $.__views.view_footer.add($.__views.estrella_1);
    $.__views.estrella_2 = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png",
        width: "10%",
        height: "40%",
        id: "estrella_2"
    });
    $.__views.view_footer.add($.__views.estrella_2);
    $.__views.estrella_3 = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png",
        width: "10%",
        height: "40%",
        id: "estrella_3"
    });
    $.__views.view_footer.add($.__views.estrella_3);
    $.__views.estrella_4 = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png",
        width: "10%",
        height: "40%",
        id: "estrella_4"
    });
    $.__views.view_footer.add($.__views.estrella_4);
    $.__views.estrella_5 = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png",
        width: "10%",
        height: "40%",
        id: "estrella_5"
    });
    $.__views.view_footer.add($.__views.estrella_5);
    $.__views.label_SG = Ti.UI.createLabel({
        left: "10%",
        text: "Siguiente",
        id: "label_SG"
    });
    $.__views.view_footer.add($.__views.label_SG);
    $.__views.siguiente = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/siguiente.png",
        width: "5%",
        height: "20%",
        id: "siguiente"
    });
    $.__views.view_footer.add($.__views.siguiente);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var aux_rueda_iz = false;
    var aux_rueda_dr = false;
    var aux_puerta_iz = false;
    var aux_puerta_dr = false;
    var aux_carro_iz = false;
    var aux_carro_dr = false;
    var aux_aveja_iz = false;
    var aux_aveja_dr = false;
    var aux_flor_iz = false;
    var aux_flor_dr = false;
    var punto = 0;
    $.rueda_iz.add.addEventListener("click", function() {
        if (false == aux_rueda_iz) {
            aux_rueda_iz = true;
            aux_rueda_dr = true;
            punto += 1;
            $.rueda_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.rueda_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.rueda_dr.add.addEventListener("click", function() {
        if (false == aux_rueda_dr) {
            aux_rueda_iz = true;
            aux_rueda_dr = true;
            punto += 1;
            $.rueda_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.rueda_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.puerta_iz.add.addEventListener("click", function() {
        if (false == aux_puerta_iz) {
            aux_puerta_iz = true;
            aux_puerta_dr = true;
            punto += 1;
            $.puerta_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.puerta_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.puerta_dr.add.addEventListener("click", function() {
        if (false == aux_puerta_dr) {
            aux_puerta_iz = true;
            aux_puerta_dr = true;
            punto += 1;
            $.puerta_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.puerta_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.carro_iz.add.addEventListener("click", function() {
        if (false == aux_carro_iz) {
            aux_carro_iz = true;
            aux_carro_dr = true;
            punto += 1;
            $.carro_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.carro_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.carro_dr.add.addEventListener("click", function() {
        if (false == aux_carro_dr) {
            aux_carro_iz = true;
            aux_carro_dr = true;
            punto += 1;
            $.carro_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.carro_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.aveja_iz.add.addEventListener("click", function() {
        if (false == aux_aveja_iz) {
            aux_aveja_iz = true;
            aux_aveja_dr = true;
            punto += 1;
            $.aveja_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.aveja_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.aveja_dr.add.addEventListener("click", function() {
        if (false == aux_aveja_dr) {
            aux_aveja_iz = true;
            aux_aveja_dr = true;
            punto += 1;
            $.aveja_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.aveja_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.flor_iz.add.addEventListener("click", function() {
        if (false == aux_flor_iz) {
            aux_flor_iz = true;
            aux_flor_dr = true;
            punto += 1;
            $.flor_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.flor_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.flor_dr.add.addEventListener("click", function() {
        if (false == aux_flor_dr) {
            aux_flor_iz = true;
            aux_flor_dr = true;
            punto += 1;
            $.flor_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.flor_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.label_AT.add.addEventListener("click", function() {
        $.win.close();
    });
    $.anterior.add.addEventListener("click", function() {
        $.win.close();
    });
    $.label_SG.add.addEventListener("click", function() {
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias7")) {
            var diferencias_nivel_8 = Alloy.createController("diferencias_nivel_8").getView();
            diferencias_nivel_8.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias7")) {
            var diferencias_nivel_8 = Alloy.createController("diferencias_nivel_8").getView();
            diferencias_nivel_8.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;