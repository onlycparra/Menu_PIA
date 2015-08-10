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
            $.estrella_6.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (1 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_6.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (2 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_6.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (3 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_6.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (4 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
            $.estrella_6.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (5 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_6.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
        }
        if (6 == punto) {
            $.estrella_1.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_2.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_3.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_4.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_5.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            $.estrella_6.backgroundImage = "/images/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
            var dialog = Ti.UI.createAlertDialog({
                title: "Felicitaciones",
                message: "¡Bien! ¡Ya terminó todos los niveles!",
                cancel: 1,
                buttonNames: [ "OK", "Cacelar" ]
            });
            dialog.show();
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var inicio = Alloy.createController("index").getView();
                    inicio.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var inicio = Alloy.createController("index").getView();
                inicio.open();
                clearInterval(change_view);
            }, 5e3);
            var diferencias_felicidad = Alloy.createController("diferencias_felicidad").getView();
            diferencias_felicidad.open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_10";
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
        text: "Encúentre",
        id: "title"
    });
    $.__views.view_header.add($.__views.title);
    $.__views.diferencia = Ti.UI.createLabel({
        top: "50%",
        left: "4%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#4B088A",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        text: "Diferencia",
        id: "diferencia"
    });
    $.__views.view_header.add($.__views.diferencia);
    $.__views.view_body = Ti.UI.createView({
        height: "70%",
        width: "90%",
        id: "view_body"
    });
    $.__views.win.add($.__views.view_body);
    $.__views.imagen = Ti.UI.createView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 10 - (5).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.cata_bigote_iz = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "27%",
        left: "25.3%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cata_bigote_iz"
    });
    $.__views.imagen.add($.__views.cata_bigote_iz);
    $.__views.cata_cola_iz = Ti.UI.createButton({
        width: "5%",
        height: "22%",
        top: "26%",
        left: "39.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cata_cola_iz"
    });
    $.__views.imagen.add($.__views.cata_cola_iz);
    $.__views.pez_iz = Ti.UI.createButton({
        width: "4%",
        height: "9%",
        top: "37%",
        left: "3%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pez_iz"
    });
    $.__views.imagen.add($.__views.pez_iz);
    $.__views.perro_ojo_iz = Ti.UI.createButton({
        width: "7%",
        height: "5%",
        top: "57.5%",
        left: "22%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "perro_ojo_iz"
    });
    $.__views.imagen.add($.__views.perro_ojo_iz);
    $.__views.perro_cola_iz = Ti.UI.createButton({
        width: "4%",
        height: "8%",
        top: "67%",
        left: "6.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "perro_cola_iz"
    });
    $.__views.imagen.add($.__views.perro_cola_iz);
    $.__views.pelota_iz = Ti.UI.createButton({
        width: "9%",
        height: "12%",
        top: "76%",
        left: "2.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pelota_iz"
    });
    $.__views.imagen.add($.__views.pelota_iz);
    $.__views.cata_bigote_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "27%",
        left: "77.8%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cata_bigote_dr"
    });
    $.__views.imagen.add($.__views.cata_bigote_dr);
    $.__views.cata_cola_dr = Ti.UI.createButton({
        width: "6%",
        height: "23%",
        top: "43%",
        left: "92%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cata_cola_dr"
    });
    $.__views.imagen.add($.__views.cata_cola_dr);
    $.__views.pez_dr = Ti.UI.createButton({
        width: "4%",
        height: "9%",
        top: "37.5%",
        left: "56%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pez_dr"
    });
    $.__views.imagen.add($.__views.pez_dr);
    $.__views.perro_ojo_dr = Ti.UI.createButton({
        width: "7%",
        height: "5%",
        top: "57.5%",
        left: "74.7%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "perro_ojo_dr"
    });
    $.__views.imagen.add($.__views.perro_ojo_dr);
    $.__views.perro_cola_dr = Ti.UI.createButton({
        width: "6%",
        height: "13%",
        top: "61%",
        left: "57.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "perro_cola_dr"
    });
    $.__views.imagen.add($.__views.perro_cola_dr);
    $.__views.pelota_dr = Ti.UI.createButton({
        width: "9%",
        height: "12%",
        top: "76%",
        left: "55%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pelota_dr"
    });
    $.__views.imagen.add($.__views.pelota_dr);
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
        width: "8%",
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
        width: "8%",
        height: "40%",
        id: "estrella_3"
    });
    $.__views.view_footer.add($.__views.estrella_3);
    $.__views.estrella_4 = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png",
        width: "8%",
        height: "40%",
        id: "estrella_4"
    });
    $.__views.view_footer.add($.__views.estrella_4);
    $.__views.estrella_5 = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png",
        width: "8%",
        height: "40%",
        id: "estrella_5"
    });
    $.__views.view_footer.add($.__views.estrella_5);
    $.__views.estrella_6 = Ti.UI.createImageView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/Estrella_vacio.png",
        width: "8%",
        height: "40%",
        id: "estrella_6"
    });
    $.__views.view_footer.add($.__views.estrella_6);
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
    var aux_cata_bigote_iz = false;
    var aux_cata_bigote_dr = false;
    var aux_cata_cola_iz = false;
    var aux_cata_cola_dr = false;
    var aux_pez_iz = false;
    var aux_pez_dr = false;
    var aux_perro_ojo_iz = false;
    var aux_perro_ojo_dr = false;
    var aux_perro_cola_iz = false;
    var aux_perro_cola_dr = false;
    var aux_pelota_iz = false;
    var aux_pelota_dr = false;
    var punto = 0;
    $.cata_bigote_iz.add.addEventListener("click", function() {
        if (false == aux_cata_bigote_iz) {
            aux_cata_bigote_iz = true;
            aux_cata_bigote_dr = true;
            punto += 1;
            $.cata_bigote_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.cata_bigote_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.cata_bigote_dr.add.addEventListener("click", function() {
        if (false == aux_cata_bigote_dr) {
            aux_cata_bigote_iz = true;
            aux_cata_bigote_dr = true;
            punto += 1;
            $.cata_bigote_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.cata_bigote_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.cata_cola_iz.add.addEventListener("click", function() {
        if (false == aux_cata_cola_iz) {
            aux_cata_cola_iz = true;
            aux_cata_cola_dr = true;
            punto += 1;
            $.cata_cola_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.cata_cola_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.cata_cola_dr.add.addEventListener("click", function() {
        if (false == aux_cata_cola_dr) {
            aux_cata_cola_iz = true;
            aux_cata_cola_dr = true;
            punto += 1;
            $.cata_cola_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.cata_cola_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.pez_iz.add.addEventListener("click", function() {
        if (false == aux_pez_iz) {
            aux_pez_iz = true;
            aux_pez_dr = true;
            punto += 1;
            $.pez_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.pez_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.pez_dr.add.addEventListener("click", function() {
        if (false == aux_pez_dr) {
            aux_pez_iz = true;
            aux_pez_dr = true;
            punto += 1;
            $.pez_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.pez_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.perro_ojo_iz.add.addEventListener("click", function() {
        if (false == aux_perro_ojo_iz) {
            aux_perro_ojo_iz = true;
            aux_perro_ojo_dr = true;
            punto += 1;
            $.perro_ojo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.perro_ojo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.perro_ojo_dr.add.addEventListener("click", function() {
        if (false == aux_perro_ojo_dr) {
            aux_perro_ojo_iz = true;
            aux_perro_ojo_dr = true;
            punto += 1;
            $.perro_ojo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.perro_ojo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.perro_cola_iz.add.addEventListener("click", function() {
        if (false == aux_perro_cola_iz) {
            aux_perro_cola_iz = true;
            aux_perro_cola_dr = true;
            punto += 1;
            $.perro_cola_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.perro_cola_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.perro_cola_dr.add.addEventListener("click", function() {
        if (false == aux_perro_cola_dr) {
            aux_perro_cola_iz = true;
            aux_perro_cola_dr = true;
            punto += 1;
            $.perro_cola_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.perro_cola_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.pelota_iz.add.addEventListener("click", function() {
        if (false == aux_pelota_iz) {
            aux_pelota_iz = true;
            aux_pelota_dr = true;
            punto += 1;
            $.pelota_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.pelota_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.pelota_dr.add.addEventListener("click", function() {
        if (false == aux_pelota_dr) {
            aux_pelota_iz = true;
            aux_pelota_dr = true;
            punto += 1;
            $.pelota_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.pelota_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
        if (6 == punto) {
            var dialog_out = Ti.UI.createAlertDialog({
                title: "No hay más nivel",
                message: "¿Quiere volver a menú principal?",
                cancel: 1,
                buttonNames: [ "OK", "NO" ]
            });
            dialog_out.show();
            dialog_out.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) Ti.API.info("The cancel button was clicked"); else {
                    var inicio = Alloy.createController("index").getView();
                    inicio.open();
                }
            });
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        if (6 == punto) {
            var dialog_out = Ti.UI.createAlertDialog({
                title: "No hay más nivel",
                message: "¿Quiere volver a menú principal?",
                cancel: 1,
                buttonNames: [ "OK", "NO" ]
            });
            dialog_out.show();
            dialog_out.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) Ti.API.info("The cancel button was clicked"); else {
                    var inicio = Alloy.createController("index").getView();
                    inicio.open();
                }
            });
        } else alert("¡Todavía no terminas el juego!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;