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
            Ti.App.Properties.removeProperty("TF_diferencias6");
            Ti.App.Properties.setBool("TF_diferencias6", true);
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var diferencias_nivel_7 = Alloy.createController("diferencias_nivel_7").getView();
                    diferencias_nivel_7.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var diferencias_nivel_7 = Alloy.createController("diferencias_nivel_7").getView();
                diferencias_nivel_7.open();
                clearInterval(change_view);
            }, 5e3);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_6";
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
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 6 - (5).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.ojo1_iz = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "25.5%",
        left: "21%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ojo1_iz"
    });
    $.__views.imagen.add($.__views.ojo1_iz);
    $.__views.ojo2_iz = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "29%",
        left: "15%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ojo2_iz"
    });
    $.__views.imagen.add($.__views.ojo2_iz);
    $.__views.bigote1_iz = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "28%",
        left: "28%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "bigote1_iz"
    });
    $.__views.imagen.add($.__views.bigote1_iz);
    $.__views.bigote2_iz = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "40%",
        left: "12%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "bigote2_iz"
    });
    $.__views.imagen.add($.__views.bigote2_iz);
    $.__views.collar_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "43%",
        left: "24%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "collar_iz"
    });
    $.__views.imagen.add($.__views.collar_iz);
    $.__views.cola_iz = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "30%",
        left: "41%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cola_iz"
    });
    $.__views.imagen.add($.__views.cola_iz);
    $.__views.sombra_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "56%",
        left: "27.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "sombra_iz"
    });
    $.__views.imagen.add($.__views.sombra_iz);
    $.__views.ojo1_dr = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "25.5%",
        left: "61%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ojo1_dr"
    });
    $.__views.imagen.add($.__views.ojo1_dr);
    $.__views.ojo2_dr = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "29%",
        left: "55.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ojo2_dr"
    });
    $.__views.imagen.add($.__views.ojo2_dr);
    $.__views.bigote1_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "26.5%",
        left: "68%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "bigote1_dr"
    });
    $.__views.imagen.add($.__views.bigote1_dr);
    $.__views.bigote2_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "39%",
        left: "52%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "bigote2_dr"
    });
    $.__views.imagen.add($.__views.bigote2_dr);
    $.__views.collar_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "43%",
        left: "65%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "collar_dr"
    });
    $.__views.imagen.add($.__views.collar_dr);
    $.__views.cola_dr = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "30%",
        left: "81%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cola_dr"
    });
    $.__views.imagen.add($.__views.cola_dr);
    $.__views.sombra_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "56%",
        left: "67.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "sombra_dr"
    });
    $.__views.imagen.add($.__views.sombra_dr);
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
    var aux_ojo1_iz = false;
    var aux_ojo1_dr = false;
    var aux_ojo2_iz = false;
    var aux_ojo2_dr = false;
    var aux_bigote1_iz = false;
    var aux_bigote1_dr = false;
    var aux_bigote2_iz = false;
    var aux_bigote2_dr = false;
    var aux_collar_iz = false;
    var aux_collar_dr = false;
    var aux_sombra_iz = false;
    var aux_sombra_dr = false;
    var aux_cola_iz = false;
    var aux_cola_dr = false;
    var punto = 0;
    $.ojo1_iz.add.addEventListener("click", function() {
        if (false == aux_ojo1_iz) {
            aux_ojo1_iz = true;
            aux_ojo1_dr = true;
            aux_ojo2_iz = true;
            aux_ojo2_dr = true;
            punto += 1;
            $.ojo1_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo1_dr.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo2_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo2_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.ojo1_dr.add.addEventListener("click", function() {
        if (false == aux_ojo1_dr) {
            aux_ojo1_iz = true;
            aux_ojo1_dr = true;
            aux_ojo2_iz = true;
            aux_ojo2_dr = true;
            punto += 1;
            $.ojo1_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo1_dr.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo2_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo2_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.ojo2_iz.add.addEventListener("click", function() {
        if (false == aux_ojo2_iz) {
            aux_ojo1_iz = true;
            aux_ojo1_dr = true;
            aux_ojo2_iz = true;
            aux_ojo2_dr = true;
            punto += 1;
            $.ojo1_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo1_dr.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo2_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo2_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.ojo2_dr.add.addEventListener("click", function() {
        if (false == aux_ojo2_dr) {
            aux_ojo1_iz = true;
            aux_ojo1_dr = true;
            aux_ojo2_iz = true;
            aux_ojo2_dr = true;
            punto += 1;
            $.ojo1_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo1_dr.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo2_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.ojo2_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.bigote1_iz.add.addEventListener("click", function() {
        if (false == aux_bigote1_iz) {
            aux_bigote1_iz = true;
            aux_bigote1_dr = true;
            aux_bigote2_iz = true;
            aux_bigote2_dr = true;
            punto += 1;
            $.bigote1_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote1_dr.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote2_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote2_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.bigote1_dr.add.addEventListener("click", function() {
        if (false == aux_bigote1_dr) {
            aux_bigote1_iz = true;
            aux_bigote1_dr = true;
            aux_bigote2_iz = true;
            aux_bigote2_dr = true;
            punto += 1;
            $.bigote1_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote1_dr.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote2_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote2_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.bigote2_iz.add.addEventListener("click", function() {
        if (false == aux_bigote2_iz) {
            aux_bigote1_iz = true;
            aux_bigote1_dr = true;
            aux_bigote2_iz = true;
            aux_bigote2_dr = true;
            punto += 1;
            $.bigote1_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote1_dr.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote2_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote2_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.bigote2_dr.add.addEventListener("click", function() {
        if (false == aux_bigote2_dr) {
            aux_bigote1_iz = true;
            aux_bigote1_dr = true;
            aux_bigote2_iz = true;
            aux_bigote2_dr = true;
            punto += 1;
            $.bigote1_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote1_dr.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote2_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.bigote2_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.collar_iz.add.addEventListener("click", function() {
        if (false == aux_collar_iz) {
            aux_collar_iz = true;
            aux_collar_dr = true;
            punto += 1;
            $.collar_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.collar_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.collar_dr.add.addEventListener("click", function() {
        if (false == aux_collar_dr) {
            aux_collar_iz = true;
            aux_collar_dr = true;
            punto += 1;
            $.collar_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.collar_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias6")) {
            var diferencias_nivel_7 = Alloy.createController("diferencias_nivel_7").getView();
            diferencias_nivel_7.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias6")) {
            var diferencias_nivel_7 = Alloy.createController("diferencias_nivel_7").getView();
            diferencias_nivel_7.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;