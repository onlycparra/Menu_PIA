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
            Ti.App.Properties.removeProperty("TF_diferencias8");
            Ti.App.Properties.setBool("TF_diferencias8", true);
            dialog.addEventListener("click", function(e) {
                var aux_click = e.text;
                Ti.API.info(aux_click);
                if (e.index === e.source.cancel) {
                    clearInterval(change_view);
                    Ti.API.info("The cancel button was clicked");
                } else {
                    var diferencias_nivel_9 = Alloy.createController("diferencias_nivel_9").getView();
                    diferencias_nivel_9.open();
                }
            });
            var change_view = setInterval(function() {
                dialog.hide();
                var diferencias_nivel_9 = Alloy.createController("diferencias_nivel_9").getView();
                diferencias_nivel_9.open();
                clearInterval(change_view);
            }, 5e3);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diferencias_nivel_8";
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
        backgroundImage: "/images/Tolerancia a la frustración/Diferencias/diferencia 8 - (5).png",
        width: "100%",
        height: "100%",
        id: "imagen"
    });
    $.__views.view_body.add($.__views.imagen);
    $.__views.maliposa_iz = Ti.UI.createButton({
        width: "8%",
        height: "8%",
        top: "9%",
        left: "19%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "maliposa_iz"
    });
    $.__views.imagen.add($.__views.maliposa_iz);
    $.__views.chinita_iz = Ti.UI.createButton({
        width: "8%",
        height: "8%",
        top: "35%",
        left: "14%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "chinita_iz"
    });
    $.__views.imagen.add($.__views.chinita_iz);
    $.__views.pelo_iz = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "58.5%",
        left: "39.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pelo_iz"
    });
    $.__views.imagen.add($.__views.pelo_iz);
    $.__views.hojas_iz = Ti.UI.createButton({
        width: "8%",
        height: "10%",
        top: "58.5%",
        left: "4%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "hojas_iz"
    });
    $.__views.imagen.add($.__views.hojas_iz);
    $.__views.tierra_iz = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "87.5%",
        left: "37%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "tierra_iz"
    });
    $.__views.imagen.add($.__views.tierra_iz);
    $.__views.caracol_iz = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "58.5%",
        left: "28%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "caracol_iz"
    });
    $.__views.imagen.add($.__views.caracol_iz);
    $.__views.maliposa_dr = Ti.UI.createButton({
        width: "8%",
        height: "8%",
        top: "11%",
        left: "68%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "maliposa_dr"
    });
    $.__views.imagen.add($.__views.maliposa_dr);
    $.__views.chinita_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "83%",
        left: "92%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "chinita_dr"
    });
    $.__views.imagen.add($.__views.chinita_dr);
    $.__views.pelo_dr = Ti.UI.createButton({
        width: "4%",
        height: "4%",
        top: "59.5%",
        left: "88.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "pelo_dr"
    });
    $.__views.imagen.add($.__views.pelo_dr);
    $.__views.hojas_dr = Ti.UI.createButton({
        width: "8%",
        height: "11%",
        top: "57.5%",
        left: "53.5%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "hojas_dr"
    });
    $.__views.imagen.add($.__views.hojas_dr);
    $.__views.tierra_dr = Ti.UI.createButton({
        width: "5%",
        height: "5%",
        top: "89%",
        left: "86%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "tierra_dr"
    });
    $.__views.imagen.add($.__views.tierra_dr);
    $.__views.caracol_dr = Ti.UI.createButton({
        width: "7%",
        height: "7%",
        top: "60.5%",
        left: "78%",
        backgroundColor: "transparent",
        borderRadius: "10",
        id: "caracol_dr"
    });
    $.__views.imagen.add($.__views.caracol_dr);
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
    var aux_maliposa_iz = false;
    var aux_maliposa_dr = false;
    var aux_chinita_iz = false;
    var aux_chinita_dr = false;
    var aux_pelo_iz = false;
    var aux_pelo_dr = false;
    var aux_hojas_iz = false;
    var aux_hojas_dr = false;
    var aux_tierra_iz = false;
    var aux_tierra_dr = false;
    var aux_caracol_iz = false;
    var aux_caracol_dr = false;
    var punto = 0;
    $.maliposa_iz.add.addEventListener("click", function() {
        if (false == aux_maliposa_iz) {
            aux_maliposa_iz = true;
            aux_maliposa_dr = true;
            punto += 1;
            $.maliposa_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.maliposa_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.maliposa_dr.add.addEventListener("click", function() {
        if (false == aux_maliposa_dr) {
            aux_maliposa_iz = true;
            aux_maliposa_dr = true;
            punto += 1;
            $.maliposa_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.maliposa_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.chinita_iz.add.addEventListener("click", function() {
        if (false == aux_chinita_iz) {
            aux_chinita_iz = true;
            aux_chinita_dr = true;
            punto += 1;
            $.chinita_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.chinita_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.chinita_dr.add.addEventListener("click", function() {
        if (false == aux_chinita_dr) {
            aux_chinita_iz = true;
            aux_chinita_dr = true;
            punto += 1;
            $.chinita_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.chinita_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
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
    $.hojas_iz.add.addEventListener("click", function() {
        if (false == aux_hojas_iz) {
            aux_hojas_iz = true;
            aux_hojas_dr = true;
            punto += 1;
            $.hojas_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.hojas_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.hojas_dr.add.addEventListener("click", function() {
        if (false == aux_hojas_dr) {
            aux_hojas_iz = true;
            aux_hojas_dr = true;
            punto += 1;
            $.hojas_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.hojas_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.tierra_iz.add.addEventListener("click", function() {
        if (false == aux_tierra_iz) {
            aux_tierra_iz = true;
            aux_tierra_dr = true;
            punto += 1;
            $.tierra_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.tierra_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.tierra_dr.add.addEventListener("click", function() {
        if (false == aux_tierra_dr) {
            aux_tierra_iz = true;
            aux_tierra_dr = true;
            punto += 1;
            $.tierra_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.tierra_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.caracol_iz.add.addEventListener("click", function() {
        if (false == aux_caracol_iz) {
            aux_caracol_iz = true;
            aux_caracol_dr = true;
            punto += 1;
            $.caracol_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.caracol_dr.backgroundColor = "rgba(255,0,0,0.5)";
            estrella(punto);
        }
    });
    $.caracol_dr.add.addEventListener("click", function() {
        if (false == aux_caracol_dr) {
            aux_caracol_iz = true;
            aux_caracol_dr = true;
            punto += 1;
            $.caracol_iz.backgroundColor = "rgba(255,0,0,0.5)";
            $.caracol_dr.backgroundColor = "rgba(255,0,0,0.5)";
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
        if (6 == punto || true == Ti.App.Properties.getBool("TF_diferencias8")) {
            var diferencias_nivel_9 = Alloy.createController("diferencias_nivel_9").getView();
            diferencias_nivel_9.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    $.siguiente.add.addEventListener("click", function() {
        if (6 == punto || true == Ti.App.Properties.getBool("TF_diferencias8")) {
            var diferencias_nivel_9 = Alloy.createController("diferencias_nivel_9").getView();
            diferencias_nivel_9.open();
        } else alert("¡Todavía no terminas el juego!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;