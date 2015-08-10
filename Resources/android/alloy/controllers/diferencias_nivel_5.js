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
                message: "¡Bien! ¡Vamos a siguiente nivel!",
                cancel: 1,
                buttonNames: [ "Vamos", "Cacelar" ]
            });
            dialog.show();
            Ti.App.Properties.removeProperty("TF_diferencias5");
            Ti.App.Properties.setBool("TF_diferencias5", true);
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var diferencias_nivel_6 = Alloy.createController("diferencias_nivel_6").getView();
                    diferencias_nivel_6.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var diferencias_nivel_6 = Alloy.createController("diferencias_nivel_6").getView();
                diferencias_nivel_6.open();
                clearInterval(change_view);
            }, 5e3);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_5";
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
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 5 - (5).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.pelo_iz = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "9%",
        left: "16%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pelo_iz"
    });
    $.__views.imagen.add($.__views.pelo_iz);
    $.__views.nariz_iz = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "27%",
        left: "30%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "nariz_iz"
    });
    $.__views.imagen.add($.__views.nariz_iz);
    $.__views.ropaarriba_iz = Ti.UI.createButton({
        width: "5%",
        height: "7%",
        top: "38%",
        left: "32%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ropaarriba_iz"
    });
    $.__views.imagen.add($.__views.ropaarriba_iz);
    $.__views.ropaabajo_iz = Ti.UI.createButton({
        width: "5%",
        height: "15%",
        top: "55%",
        left: "34%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ropaabajo_iz"
    });
    $.__views.imagen.add($.__views.ropaabajo_iz);
    $.__views.dedo_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "42%",
        left: "27%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "dedo_iz"
    });
    $.__views.imagen.add($.__views.dedo_iz);
    $.__views.cinta_iz = Ti.UI.createButton({
        width: "4%",
        height: "12%",
        top: "72%",
        left: "22.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cinta_iz"
    });
    $.__views.imagen.add($.__views.cinta_iz);
    $.__views.pelo_dr = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "9%",
        left: "59%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pelo_dr"
    });
    $.__views.imagen.add($.__views.pelo_dr);
    $.__views.nariz_dr = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "27%",
        left: "73%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "nariz_dr"
    });
    $.__views.imagen.add($.__views.nariz_dr);
    $.__views.ropaarriba_dr = Ti.UI.createButton({
        width: "5%",
        height: "7%",
        top: "38%",
        left: "75%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ropaarriba_dr"
    });
    $.__views.imagen.add($.__views.ropaarriba_dr);
    $.__views.ropaabajo_dr = Ti.UI.createButton({
        width: "5%",
        height: "15%",
        top: "55%",
        left: "77%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ropaabajo_dr"
    });
    $.__views.imagen.add($.__views.ropaabajo_dr);
    $.__views.dedo_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "42%",
        left: "70%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "dedo_dr"
    });
    $.__views.imagen.add($.__views.dedo_dr);
    $.__views.cinta_dr = Ti.UI.createButton({
        width: "4%",
        height: "12%",
        top: "72%",
        left: "65.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cinta_dr"
    });
    $.__views.imagen.add($.__views.cinta_dr);
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
        width: "8%",
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
    var aux_pelo_iz = false;
    var aux_pelo_dr = false;
    var aux_nariz_iz = false;
    var aux_nariz_dr = false;
    var aux_ropaarriba_iz = false;
    var aux_ropaarriba_dr = false;
    var aux_ropaabajo_iz = false;
    var aux_ropaabajo_dr = false;
    var aux_dedo_iz = false;
    var aux_dedo_dr = false;
    var aux_cinta_iz = false;
    var aux_cinta_dr = false;
    var punto = 0;
    $.pelo_iz.add.addEventListener("click", function() {
        if (false == aux_pelo_iz) {
            aux_pelo_iz = true;
            aux_pelo_dr = true;
            punto += 1;
            $.pelo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.pelo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.pelo_dr.add.addEventListener("click", function() {
        if (false == aux_pelo_dr) {
            aux_pelo_iz = true;
            aux_pelo_dr = true;
            punto += 1;
            $.pelo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.pelo_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
    $.ropaarriba_iz.add.addEventListener("click", function() {
        if (false == aux_ropaarriba_iz) {
            aux_ropaarriba_iz = true;
            aux_ropaarriba_dr = true;
            punto += 1;
            $.ropaarriba_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ropaarriba_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.ropaarriba_dr.add.addEventListener("click", function() {
        if (false == aux_ropaarriba_dr) {
            aux_ropaarriba_iz = true;
            aux_ropaarriba_dr = true;
            punto += 1;
            $.ropaarriba_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ropaarriba_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.ropaabajo_iz.add.addEventListener("click", function() {
        if (false == aux_ropaabajo_iz) {
            aux_ropaabajo_iz = true;
            aux_ropaabajo_dr = true;
            punto += 1;
            $.ropaabajo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ropaabajo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.ropaabajo_dr.add.addEventListener("click", function() {
        if (false == aux_ropaabajo_dr) {
            aux_ropaabajo_iz = true;
            aux_ropaabajo_dr = true;
            punto += 1;
            $.ropaabajo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ropaabajo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.dedo_iz.add.addEventListener("click", function() {
        if (false == aux_dedo_iz) {
            aux_dedo_iz = true;
            aux_dedo_dr = true;
            punto += 1;
            $.dedo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.dedo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.dedo_dr.add.addEventListener("click", function() {
        if (false == aux_dedo_dr) {
            aux_dedo_iz = true;
            aux_dedo_dr = true;
            punto += 1;
            $.dedo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.dedo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.cinta_iz.add.addEventListener("click", function() {
        if (false == aux_cinta_iz) {
            aux_cinta_iz = true;
            aux_cinta_dr = true;
            punto += 1;
            $.cinta_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.cinta_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.cinta_dr.add.addEventListener("click", function() {
        if (false == aux_cinta_dr) {
            aux_cinta_iz = true;
            aux_cinta_dr = true;
            punto += 1;
            $.cinta_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.cinta_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
        if (6 == punto || true == Ti.App.Properties.getBool("TF_diferencias5")) {
            var diferencias_nivel_6 = Alloy.createController("diferencias_nivel_6").getView();
            diferencias_nivel_6.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        if (6 == punto || true == Ti.App.Properties.getBool("TF_diferencias5")) {
            var diferencias_nivel_6 = Alloy.createController("diferencias_nivel_6").getView();
            diferencias_nivel_6.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;