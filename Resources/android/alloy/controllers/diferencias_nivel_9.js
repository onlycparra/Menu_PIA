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
            Ti.App.Properties.removeProperty("TF_diferencias9");
            Ti.App.Properties.setBool("TF_diferencias9", true);
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var diferencias_nivel_10 = Alloy.createController("diferencias_nivel_10").getView();
                    diferencias_nivel_10.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var diferencias_nivel_10 = Alloy.createController("diferencias_nivel_10").getView();
                diferencias_nivel_10.open();
                clearInterval(change_view);
            }, 5e3);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_9";
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
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 9 - (5).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.pelo_iz = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "15%",
        left: "22.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pelo_iz"
    });
    $.__views.imagen.add($.__views.pelo_iz);
    $.__views.ojo_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "22%",
        left: "21%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ojo_iz"
    });
    $.__views.imagen.add($.__views.ojo_iz);
    $.__views.nariz_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "25%",
        left: "19%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "nariz_iz"
    });
    $.__views.imagen.add($.__views.nariz_iz);
    $.__views.sombra_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "41%",
        left: "32%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "sombra_iz"
    });
    $.__views.imagen.add($.__views.sombra_iz);
    $.__views.guata_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "51%",
        left: "22.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "guata_iz"
    });
    $.__views.imagen.add($.__views.guata_iz);
    $.__views.pelo_dr = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "15%",
        left: "63%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pelo_dr"
    });
    $.__views.imagen.add($.__views.pelo_dr);
    $.__views.ojo_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "22%",
        left: "61.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ojo_dr"
    });
    $.__views.imagen.add($.__views.ojo_dr);
    $.__views.nariz_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "25%",
        left: "59.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "nariz_dr"
    });
    $.__views.imagen.add($.__views.nariz_dr);
    $.__views.sombra_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "41%",
        left: "72.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "sombra_dr"
    });
    $.__views.imagen.add($.__views.sombra_dr);
    $.__views.guata_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "51%",
        left: "63%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "guata_dr"
    });
    $.__views.imagen.add($.__views.guata_dr);
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
    var aux_pelo_iz = false;
    var aux_pelo_dr = false;
    var aux_ojo_iz = false;
    var aux_ojo_dr = false;
    var aux_nariz_iz = false;
    var aux_nariz_dr = false;
    var aux_sombra_iz = false;
    var aux_sombra_dr = false;
    var aux_guata_iz = false;
    var aux_guata_dr = false;
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
    $.ojo_iz.add.addEventListener("click", function() {
        if (false == aux_ojo_iz) {
            aux_ojo_iz = true;
            aux_ojo_dr = true;
            punto += 1;
            $.ojo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.ojo_dr.add.addEventListener("click", function() {
        if (false == aux_ojo_dr) {
            aux_ojo_iz = true;
            aux_ojo_dr = true;
            punto += 1;
            $.ojo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
    $.sombra_iz.add.addEventListener("click", function() {
        if (false == aux_sombra_iz) {
            aux_sombra_iz = true;
            aux_sombra_dr = true;
            punto += 1;
            $.sombra_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.sombra_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.sombra_dr.add.addEventListener("click", function() {
        if (false == aux_sombra_dr) {
            aux_sombra_iz = true;
            aux_sombra_dr = true;
            punto += 1;
            $.sombra_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.sombra_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.guata_iz.add.addEventListener("click", function() {
        if (false == aux_guata_iz) {
            aux_guata_iz = true;
            aux_guata_dr = true;
            punto += 1;
            $.guata_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.guata_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.guata_dr.add.addEventListener("click", function() {
        if (false == aux_guata_dr) {
            aux_guata_iz = true;
            aux_guata_dr = true;
            punto += 1;
            $.guata_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.guata_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias9")) {
            var diferencias_nivel_10 = Alloy.createController("diferencias_nivel_10").getView();
            diferencias_nivel_10.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias9")) {
            var diferencias_nivel_10 = Alloy.createController("diferencias_nivel_10").getView();
            diferencias_nivel_10.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;