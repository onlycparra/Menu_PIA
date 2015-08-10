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
            Ti.App.Properties.removeProperty("TF_diferencias4");
            Ti.App.Properties.setBool("TF_diferencias4", true);
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var diferencias_nivel_5 = Alloy.createController("diferencias_nivel_5").getView();
                    diferencias_nivel_5.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var diferencias_nivel_5 = Alloy.createController("diferencias_nivel_5").getView();
                diferencias_nivel_5.open();
                clearInterval(change_view);
            }, 5e3);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_4";
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
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 4 - (7).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.sol_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "24.5%",
        left: "22.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "sol_iz"
    });
    $.__views.imagen.add($.__views.sol_iz);
    $.__views.piramide_iz = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "50%",
        left: "15%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "piramide_iz"
    });
    $.__views.imagen.add($.__views.piramide_iz);
    $.__views.sombrero_iz = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "54.5%",
        left: "10.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "sombrero_iz"
    });
    $.__views.imagen.add($.__views.sombrero_iz);
    $.__views.zapato_iz = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "75%",
        left: "16%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "zapato_iz"
    });
    $.__views.imagen.add($.__views.zapato_iz);
    $.__views.cola_iz = Ti.UI.createButton({
        width: "3%",
        height: "9%",
        top: "55%",
        left: "43%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cola_iz"
    });
    $.__views.imagen.add($.__views.cola_iz);
    $.__views.sol_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "26%",
        left: "72.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "sol_dr"
    });
    $.__views.imagen.add($.__views.sol_dr);
    $.__views.piramide_dr = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "50%",
        left: "65%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "piramide_dr"
    });
    $.__views.imagen.add($.__views.piramide_dr);
    $.__views.sombrero_dr = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "54.5%",
        left: "60.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "sombrero_dr"
    });
    $.__views.imagen.add($.__views.sombrero_dr);
    $.__views.zapato_dr = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "75%",
        left: "66%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "zapato_dr"
    });
    $.__views.imagen.add($.__views.zapato_dr);
    $.__views.cola_dr = Ti.UI.createButton({
        width: "3%",
        height: "9%",
        top: "55%",
        left: "93%",
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
    var aux_sol_iz = false;
    var aux_sol_dr = false;
    var aux_piramide_iz = false;
    var aux_piramide_dr = false;
    var aux_sombrero_iz = false;
    var aux_sombrero_dr = false;
    var aux_zapato_iz = false;
    var aux_zapato_dr = false;
    var aux_cola_iz = false;
    var aux_cola_dr = false;
    var punto = 0;
    $.sol_iz.add.addEventListener("click", function() {
        if (false == aux_sol_iz) {
            aux_sol_iz = true;
            aux_sol_dr = true;
            punto += 1;
            $.sol_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.sol_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.sol_dr.add.addEventListener("click", function() {
        if (false == aux_sol_dr) {
            aux_sol_iz = true;
            aux_sol_dr = true;
            punto += 1;
            $.sol_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.sol_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.piramide_iz.add.addEventListener("click", function() {
        if (false == aux_piramide_iz) {
            aux_piramide_iz = true;
            aux_piramide_dr = true;
            punto += 1;
            $.piramide_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.piramide_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.piramide_dr.add.addEventListener("click", function() {
        if (false == aux_piramide_dr) {
            aux_piramide_iz = true;
            aux_piramide_dr = true;
            punto += 1;
            $.piramide_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.piramide_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.sombrero_iz.add.addEventListener("click", function() {
        if (false == aux_sombrero_iz) {
            aux_sombrero_iz = true;
            aux_sombrero_dr = true;
            punto += 1;
            $.sombrero_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.sombrero_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.sombrero_dr.add.addEventListener("click", function() {
        if (false == aux_sombrero_dr) {
            aux_sombrero_iz = true;
            aux_sombrero_dr = true;
            punto += 1;
            $.sombrero_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.sombrero_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.zapato_iz.add.addEventListener("click", function() {
        if (false == aux_zapato_iz) {
            aux_zapato_iz = true;
            aux_zapato_dr = true;
            punto += 1;
            $.zapato_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.zapato_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.zapato_dr.add.addEventListener("click", function() {
        if (false == aux_zapato_dr) {
            aux_zapato_iz = true;
            aux_zapato_dr = true;
            punto += 1;
            $.zapato_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.zapato_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias4")) {
            var diferencias_nivel_5 = Alloy.createController("diferencias_nivel_5").getView();
            diferencias_nivel_5.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias4")) {
            var diferencias_nivel_5 = Alloy.createController("diferencias_nivel_5").getView();
            diferencias_nivel_5.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;