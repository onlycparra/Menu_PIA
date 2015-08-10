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
            Ti.App.Properties.removeProperty("TF_diferencias3");
            Ti.App.Properties.setBool("TF_diferencias3", true);
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var diferencias_nivel_4 = Alloy.createController("diferencias_nivel_4").getView();
                    diferencias_nivel_4.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var diferencias_nivel_4 = Alloy.createController("diferencias_nivel_4").getView();
                diferencias_nivel_4.open();
                clearInterval(change_view);
            }, 5e3);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_3";
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
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 3 - (5).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.boca_iz = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "42%",
        left: "23%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "boca_iz"
    });
    $.__views.imagen.add($.__views.boca_iz);
    $.__views.nariz_iz = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "26.5%",
        left: "30%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "nariz_iz"
    });
    $.__views.imagen.add($.__views.nariz_iz);
    $.__views.caneta_iz = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "62%",
        left: "36%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "caneta_iz"
    });
    $.__views.imagen.add($.__views.caneta_iz);
    $.__views.rueda_iz = Ti.UI.createButton({
        width: "6%",
        height: "6%",
        top: "74%",
        left: "35%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "rueda_iz"
    });
    $.__views.imagen.add($.__views.rueda_iz);
    $.__views.cola_iz = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "61%",
        left: "11%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cola_iz"
    });
    $.__views.imagen.add($.__views.cola_iz);
    $.__views.boca_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "41%",
        left: "67.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "boca_dr"
    });
    $.__views.imagen.add($.__views.boca_dr);
    $.__views.nariz_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "26%",
        left: "74.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "nariz_dr"
    });
    $.__views.imagen.add($.__views.nariz_dr);
    $.__views.caneta_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "62%",
        left: "80.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "caneta_dr"
    });
    $.__views.imagen.add($.__views.caneta_dr);
    $.__views.rueda_dr = Ti.UI.createButton({
        width: "6%",
        height: "6%",
        top: "74%",
        left: "79.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "rueda_dr"
    });
    $.__views.imagen.add($.__views.rueda_dr);
    $.__views.cola_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "61%",
        left: "55.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cola_dr"
    });
    $.__views.imagen.add($.__views.cola_dr);
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
    var aux_boca_iz = false;
    var aux_boca_dr = false;
    var aux_nariz_iz = false;
    var aux_nariz_dr = false;
    var aux_caneta_iz = false;
    var aux_caneta_dr = false;
    var aux_rueda_iz = false;
    var aux_rueda_dr = false;
    var aux_cola_iz = false;
    var aux_cola_dr = false;
    var punto = 0;
    $.boca_iz.add.addEventListener("click", function() {
        if (false == aux_boca_iz) {
            aux_boca_iz = true;
            aux_boca_dr = true;
            punto += 1;
            $.boca_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.boca_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.boca_dr.add.addEventListener("click", function() {
        if (false == aux_boca_dr) {
            aux_boca_iz = true;
            aux_boca_dr = true;
            punto += 1;
            $.boca_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.boca_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.nariz_iz.add.addEventListener("click", function() {
        if (false == aux_nariz_iz) {
            aux_nariz_iz = true;
            aux_nariz_dr = true;
            punto += 1;
            $.nariz_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.nariz_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.nariz_dr.add.addEventListener("click", function() {
        if (false == aux_nariz_dr) {
            aux_nariz_iz = true;
            aux_nariz_dr = true;
            punto += 1;
            $.nariz_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.nariz_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.caneta_iz.add.addEventListener("click", function() {
        if (false == aux_caneta_iz) {
            aux_caneta_iz = true;
            aux_caneta_dr = true;
            punto += 1;
            $.caneta_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.caneta_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.caneta_dr.add.addEventListener("click", function() {
        if (false == aux_caneta_dr) {
            aux_caneta_iz = true;
            aux_caneta_dr = true;
            punto += 1;
            $.caneta_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.caneta_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
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
    $.cola_iz.add.addEventListener("click", function() {
        if (false == aux_cola_iz) {
            aux_cola_iz = true;
            aux_cola_dr = true;
            punto += 1;
            $.cola_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.cola_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.cola_dr.add.addEventListener("click", function() {
        if (false == aux_cola_dr) {
            aux_cola_iz = true;
            aux_cola_dr = true;
            punto += 1;
            $.cola_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.cola_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias3")) {
            var diferencias_nivel_4 = Alloy.createController("diferencias_nivel_4").getView();
            diferencias_nivel_4.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias3")) {
            var diferencias_nivel_4 = Alloy.createController("diferencias_nivel_4").getView();
            diferencias_nivel_4.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;