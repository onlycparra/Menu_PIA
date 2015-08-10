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
            Ti.App.Properties.removeProperty("TF_diferencias1");
            Ti.App.Properties.setBool("TF_diferencias1", true);
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var diferencias_nivel_2 = Alloy.createController("diferencias_nivel_2").getView();
                    diferencias_nivel_2.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var diferencias_nivel_2 = Alloy.createController("diferencias_nivel_2").getView();
                diferencias_nivel_2.open();
                clearInterval(change_view);
            }, 5e3);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_1";
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
    $.__views.diferencias_nivel_1 = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "diferencias_nivel_1"
    });
    $.__views.diferencias_nivel_1 && $.addTopLevelView($.__views.diferencias_nivel_1);
    $.__views.view_header = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: "15%",
        layout: "horizontal",
        id: "view_header"
    });
    $.__views.diferencias_nivel_1.add($.__views.view_header);
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
    $.__views.diferencias_nivel_1.add($.__views.view_body);
    $.__views.imagen = Ti.UI.createView({
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 1 - (5).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.ojo_iz = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "29%",
        left: "18%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ojo_iz"
    });
    $.__views.imagen.add($.__views.ojo_iz);
    $.__views.ojo_dr = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "29%",
        left: "70%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "ojo_dr"
    });
    $.__views.imagen.add($.__views.ojo_dr);
    $.__views.circulo_iz = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "32.5%",
        left: "25.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "circulo_iz"
    });
    $.__views.imagen.add($.__views.circulo_iz);
    $.__views.circulo_dr = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "32.5%",
        left: "77.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "circulo_dr"
    });
    $.__views.imagen.add($.__views.circulo_dr);
    $.__views.cola_iz = Ti.UI.createButton({
        width: "3%",
        height: "6%",
        top: "37%",
        left: "33.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cola_iz"
    });
    $.__views.imagen.add($.__views.cola_iz);
    $.__views.cola_dr = Ti.UI.createButton({
        width: "3%",
        height: "6%",
        top: "37%",
        left: "85.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "cola_dr"
    });
    $.__views.imagen.add($.__views.cola_dr);
    $.__views.fuego_iz = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "39%",
        left: "37%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "fuego_iz"
    });
    $.__views.imagen.add($.__views.fuego_iz);
    $.__views.fuego_dr = Ti.UI.createButton({
        width: "3%",
        height: "3%",
        top: "39%",
        left: "89%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "fuego_dr"
    });
    $.__views.imagen.add($.__views.fuego_dr);
    $.__views.nube_iz = Ti.UI.createButton({
        width: "13%",
        height: "13%",
        top: "63%",
        left: "27.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "nube_iz"
    });
    $.__views.imagen.add($.__views.nube_iz);
    $.__views.nube_dr = Ti.UI.createButton({
        width: "13%",
        height: "13%",
        top: "63%",
        left: "67%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "nube_dr"
    });
    $.__views.imagen.add($.__views.nube_dr);
    $.__views.view_footer = Ti.UI.createView({
        height: "15%",
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "view_footer"
    });
    $.__views.diferencias_nivel_1.add($.__views.view_footer);
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
    var aux_ojo_iz = false;
    var aux_ojo_dr = false;
    var aux_circulo_iz = false;
    var aux_circulo_dr = false;
    var aux_cola_iz = false;
    var aux_cola_dr = false;
    var aux_fuego_iz = false;
    var aux_fuego_dr = false;
    var aux_nube_iz = false;
    var aux_nube_dr = false;
    var punto = 0;
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
    $.circulo_iz.add.addEventListener("click", function() {
        if (false == aux_circulo_iz) {
            aux_circulo_iz = true;
            aux_circulo_dr = true;
            punto += 1;
            $.circulo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.circulo_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.circulo_dr.add.addEventListener("click", function() {
        if (false == aux_circulo_dr) {
            aux_circulo_iz = true;
            aux_circulo_dr = true;
            punto += 1;
            $.circulo_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.circulo_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
    $.fuego_iz.add.addEventListener("click", function() {
        if (false == aux_fuego_iz) {
            aux_fuego_iz = true;
            aux_fuego_dr = true;
            punto += 1;
            $.fuego_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.fuego_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.fuego_dr.add.addEventListener("click", function() {
        if (false == aux_fuego_dr) {
            aux_fuego_iz = true;
            aux_fuego_dr = true;
            punto += 1;
            $.fuego_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.fuego_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.nube_iz.add.addEventListener("click", function() {
        if (false == aux_nube_iz) {
            aux_nube_iz = true;
            aux_nube_dr = true;
            punto += 1;
            $.nube_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.nube_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.nube_dr.add.addEventListener("click", function() {
        if (false == aux_nube_dr) {
            aux_nube_iz = true;
            aux_nube_dr = true;
            punto += 1;
            $.nube_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.nube_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.label_AT.add.addEventListener("click", function() {
        var inicio = Alloy.createController("index").getView();
        inicio.open();
    });
    $.anterior.add.addEventListener("click", function() {
        var inicio = Alloy.createController("index").getView();
        inicio.open();
    });
    $.label_SG.add.addEventListener("click", function() {
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias1")) {
            var diferencias_nivel_2 = Alloy.createController("diferencias_nivel_2").getView();
            diferencias_nivel_2.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        Ti.API.info("valor :" + Ti.App.Properties.getBool("TF_diferencias1"));
        if (5 == punto || true == Ti.App.Properties.getBool("TF_diferencias1")) {
            var diferencias_nivel_2 = Alloy.createController("diferencias_nivel_2").getView();
            diferencias_nivel_2.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.diferencias_nivel_1.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;