function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function go_back() {
        $.win.close();
    }
    function go_sound() {
        alert("Instrucciones en Sonido...");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu_nivel";
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
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.header_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        layout: "horizontal",
        id: "header_view"
    });
    $.__views.win.add($.__views.header_view);
    $.__views.back_view = Ti.UI.createView({
        top: "0%",
        left: "0%",
        width: "20%",
        height: "100%",
        id: "back_view"
    });
    $.__views.header_view.add($.__views.back_view);
    $.__views.back_icon = Ti.UI.createImageView({
        image: "/images/icon/back.png",
        top: "10%",
        left: "10%",
        height: "80%",
        id: "back_icon"
    });
    $.__views.back_view.add($.__views.back_icon);
    go_back ? $.__views.back_icon.addEventListener("click", go_back) : __defers["$.__views.back_icon!click!go_back"] = true;
    $.__views.title_view = Ti.UI.createView({
        width: "60%",
        id: "title_view"
    });
    $.__views.header_view.add($.__views.title_view);
    $.__views.title_label = Ti.UI.createLabel({
        top: "50%",
        text: "Bienvenido",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        id: "title_label"
    });
    $.__views.title_view.add($.__views.title_label);
    $.__views.sound_view = Ti.UI.createView({
        top: "0%",
        right: "0%",
        width: "20%",
        height: "100%",
        id: "sound_view"
    });
    $.__views.header_view.add($.__views.sound_view);
    $.__views.sound_icon = Ti.UI.createImageView({
        image: "/images/icon/sound.png",
        top: "10%",
        right: "10%",
        height: "80%",
        id: "sound_icon"
    });
    $.__views.sound_view.add($.__views.sound_icon);
    go_sound ? $.__views.sound_icon.addEventListener("click", go_sound) : __defers["$.__views.sound_icon!click!go_sound"] = true;
    $.__views.main_body = Ti.UI.createView({
        layout: "vertical",
        height: "85%",
        id: "main_body"
    });
    $.__views.win.add($.__views.main_body);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.title_label.text = Alloy.Globals.aux_categoria + " - " + Alloy.Globals.aux_juego;
    if (Alloy.Globals.setting_on) {
        $.main_body.backgroundImage = "/images/icon/warning.png";
        $.main_body.backgroundRepeat = "true";
    } else {
        $.main_body.backgroundImage = "";
        $.main_body.backgroundColor = "#FFF";
    }
    var gris = "#A4A4A4";
    var verde = "#81F79F";
    var view_body = Ti.UI.createScrollView({
        contentHeight: "85%",
        contentWidth: Ti.UI.SIZE,
        height: "120%",
        layout: "horizontal",
        showHorizontalScrollIndicator: false,
        showVerticalScrollIndicator: true,
        width: "80%"
    });
    if ("Habilidades Sociales" == Alloy.Globals.aux_categoria) {
        if ("Colorea" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 4 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("HS_colorea" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[1].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_colorea1")) {
                    Ti.App.Properties.setBool("HS_colorea1", true);
                    button[1].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_colorea1", false);
                    button[1].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_colorea1") && alert("Vamos!");
            });
            button[2].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_colorea2")) {
                    Ti.App.Properties.setBool("HS_colorea2", true);
                    button[2].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_colorea2", false);
                    button[2].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_colorea2") && alert("Vamos!");
            });
            button[3].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_colorea3")) {
                    Ti.App.Properties.setBool("HS_colorea3", true);
                    button[3].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_colorea3", false);
                    button[3].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_colorea3") && alert("Vamos!");
            });
            button[4].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_colorea4")) {
                    Ti.App.Properties.setBool("HS_colorea4", true);
                    button[4].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_colorea4", false);
                    button[4].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_colorea4") && alert("Vamos!");
            });
        }
        if ("Selecciona" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 16 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("HS_selecciona" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[1].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona1")) {
                    Ti.App.Properties.setBool("HS_selecciona1", true);
                    button[1].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona1", false);
                    button[1].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona1") && alert("Vamos!");
            });
            button[2].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona2")) {
                    Ti.App.Properties.setBool("HS_selecciona2", true);
                    button[2].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona2", false);
                    button[2].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona2") && alert("Vamos!");
            });
            button[3].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona3")) {
                    Ti.App.Properties.setBool("HS_selecciona3", true);
                    button[3].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona3", false);
                    button[3].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona3") && alert("Vamos!");
            });
            button[4].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona4")) {
                    Ti.App.Properties.setBool("HS_selecciona4", true);
                    button[4].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona4", false);
                    button[4].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona4") && alert("Vamos!");
            });
            button[5].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona5")) {
                    Ti.App.Properties.setBool("HS_selecciona5", true);
                    button[5].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona5", false);
                    button[5].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona5") && alert("Vamos!");
            });
            button[6].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona6")) {
                    Ti.App.Properties.setBool("HS_selecciona6", true);
                    button[6].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona6", false);
                    button[6].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona6") && alert("Vamos!");
            });
            button[7].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona7")) {
                    Ti.App.Properties.setBool("HS_selecciona7", true);
                    button[7].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona7", false);
                    button[7].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona7") && alert("Vamos!");
            });
            button[8].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona8")) {
                    Ti.App.Properties.setBool("HS_selecciona8", true);
                    button[8].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona8", false);
                    button[8].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona8") && alert("Vamos!");
            });
            button[9].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona9")) {
                    Ti.App.Properties.setBool("HS_selecciona9", true);
                    button[9].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona9", false);
                    button[9].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona9") && alert("Vamos!");
            });
            button[10].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona10")) {
                    Ti.App.Properties.setBool("HS_selecciona10", true);
                    button[10].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona10", false);
                    button[10].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona10") && alert("Vamos!");
            });
            button[11].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona11")) {
                    Ti.App.Properties.setBool("HS_selecciona11", true);
                    button[11].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona11", false);
                    button[11].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona11") && alert("Vamos!");
            });
            button[12].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona12")) {
                    Ti.App.Properties.setBool("HS_selecciona12", true);
                    button[12].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona12", false);
                    button[12].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona12") && alert("Vamos!");
            });
            button[13].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona13")) {
                    Ti.App.Properties.setBool("HS_selecciona13", true);
                    button[13].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona13", false);
                    button[13].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona13") && alert("Vamos!");
            });
            button[14].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona14")) {
                    Ti.App.Properties.setBool("HS_selecciona14", true);
                    button[14].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona14", false);
                    button[14].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona14") && alert("Vamos!");
            });
            button[15].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona15")) {
                    Ti.App.Properties.setBool("HS_selecciona15", true);
                    button[15].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona15", false);
                    button[15].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona15") && alert("Vamos!");
            });
            button[16].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_selecciona16")) {
                    Ti.App.Properties.setBool("HS_selecciona16", true);
                    button[16].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_selecciona16", false);
                    button[16].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_selecciona16") && alert("Vamos!");
            });
        }
        if ("Acciones" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 18 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("HS_acciones" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[1].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_acciones1")) {
                    Ti.App.Properties.setBool("HS_acciones1", true);
                    button[1].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_acciones1", false);
                    button[1].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_acciones1") && alert("Vamos!");
            });
            button[2].addEventListener("click", function() {
                if (Alloy.Globals.setting_on) if (false == Ti.App.Properties.getBool("HS_acciones2")) {
                    Ti.App.Properties.setBool("HS_acciones2", true);
                    button[2].backgroundColor = verde;
                } else {
                    Ti.App.Properties.setBool("HS_acciones2", false);
                    button[2].backgroundColor = gris;
                } else true == Ti.App.Properties.getBool("HS_acciones2") && alert("Vamos!");
            });
        }
        if ("Gestos" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 15 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("HS_gestos" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                alert("#A4A4A4" == button[0].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[1].addEventListener("click", function() {
                alert("#A4A4A4" == button[1].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[2].addEventListener("click", function() {
                alert("#A4A4A4" == button[2].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[3].addEventListener("click", function() {
                alert("#A4A4A4" == button[3].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[4].addEventListener("click", function() {
                alert("#A4A4A4" == button[4].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[5].addEventListener("click", function() {
                alert("#A4A4A4" == button[5].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[6].addEventListener("click", function() {
                alert("#A4A4A4" == button[6].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[7].addEventListener("click", function() {
                alert("#A4A4A4" == button[7].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[8].addEventListener("click", function() {
                alert("#A4A4A4" == button[8].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[9].addEventListener("click", function() {
                alert("#A4A4A4" == button[9].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[10].addEventListener("click", function() {
                alert("#A4A4A4" == button[10].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[11].addEventListener("click", function() {
                alert("#A4A4A4" == button[11].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[12].addEventListener("click", function() {
                alert("#A4A4A4" == button[12].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[13].addEventListener("click", function() {
                alert("#A4A4A4" == button[13].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[14].addEventListener("click", function() {
                alert("#A4A4A4" == button[14].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
        }
    }
    if ("Tolerancia a la Frustración" == Alloy.Globals.aux_categoria) {
        if ("Siluetas" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 9 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("TF_siluetas" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                alert("#A4A4A4" == button[0].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[1].addEventListener("click", function() {
                alert("#A4A4A4" == button[1].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[2].addEventListener("click", function() {
                alert("#A4A4A4" == button[2].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[3].addEventListener("click", function() {
                alert("#A4A4A4" == button[3].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[4].addEventListener("click", function() {
                alert("#A4A4A4" == button[4].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[5].addEventListener("click", function() {
                alert("#A4A4A4" == button[5].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[6].addEventListener("click", function() {
                alert("#A4A4A4" == button[6].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[7].addEventListener("click", function() {
                alert("#A4A4A4" == button[7].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[8].addEventListener("click", function() {
                alert("#A4A4A4" == button[8].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[9].addEventListener("click", function() {
                alert("#A4A4A4" == button[9].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
        }
        if ("Encúentralos" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 10 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("TF_encuentralos" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                alert("#A4A4A4" == button[0].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[1].addEventListener("click", function() {
                alert("#A4A4A4" == button[1].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[2].addEventListener("click", function() {
                alert("#A4A4A4" == button[2].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[3].addEventListener("click", function() {
                alert("#A4A4A4" == button[3].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[4].addEventListener("click", function() {
                alert("#A4A4A4" == button[4].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[5].addEventListener("click", function() {
                alert("#A4A4A4" == button[5].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[6].addEventListener("click", function() {
                alert("#A4A4A4" == button[6].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[7].addEventListener("click", function() {
                alert("#A4A4A4" == button[7].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[8].addEventListener("click", function() {
                alert("#A4A4A4" == button[8].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[9].addEventListener("click", function() {
                alert("#A4A4A4" == button[9].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
        }
        if ("Objetos" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 11 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("TF_objetos" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                alert("#A4A4A4" == button[0].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[1].addEventListener("click", function() {
                alert("#A4A4A4" == button[1].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[2].addEventListener("click", function() {
                alert("#A4A4A4" == button[2].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[3].addEventListener("click", function() {
                alert("#A4A4A4" == button[3].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[4].addEventListener("click", function() {
                alert("#A4A4A4" == button[4].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[5].addEventListener("click", function() {
                alert("#A4A4A4" == button[5].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[6].addEventListener("click", function() {
                alert("#A4A4A4" == button[6].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[7].addEventListener("click", function() {
                alert("#A4A4A4" == button[7].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[8].addEventListener("click", function() {
                alert("#A4A4A4" == button[8].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[9].addEventListener("click", function() {
                alert("#A4A4A4" == button[9].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[10].addEventListener("click", function() {
                alert("#A4A4A4" == button[10].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
        }
        if ("Diferencias" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 10 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("TF_diferencias" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                if ("#A4A4A4" == button[0].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_1 = Alloy.createController("diferencias_nivel_1").getView();
                    diferencias_nivel_1.open();
                }
            });
            button[1].addEventListener("click", function() {
                if ("#A4A4A4" == button[1].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_2 = Alloy.createController("diferencias_nivel_2").getView();
                    diferencias_nivel_2.open();
                }
            });
            button[2].addEventListener("click", function() {
                if ("#A4A4A4" == button[2].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_3 = Alloy.createController("diferencias_nivel_3").getView();
                    diferencias_nivel_3.open();
                }
            });
            button[3].addEventListener("click", function() {
                if ("#A4A4A4" == button[3].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_4 = Alloy.createController("diferencias_nivel_4").getView();
                    diferencias_nivel_4.open();
                }
            });
            button[4].addEventListener("click", function() {
                if ("#A4A4A4" == button[4].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_5 = Alloy.createController("diferencias_nivel_5").getView();
                    diferencias_nivel_5.open();
                }
            });
            button[5].addEventListener("click", function() {
                if ("#A4A4A4" == button[5].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_6 = Alloy.createController("diferencias_nivel_6").getView();
                    diferencias_nivel_6.open();
                }
            });
            button[6].addEventListener("click", function() {
                if ("#A4A4A4" == button[6].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_7 = Alloy.createController("diferencias_nivel_7").getView();
                    diferencias_nivel_7.open();
                }
            });
            button[7].addEventListener("click", function() {
                if ("#A4A4A4" == button[7].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_8 = Alloy.createController("diferencias_nivel_8").getView();
                    diferencias_nivel_8.open();
                }
            });
            button[8].addEventListener("click", function() {
                if ("#A4A4A4" == button[8].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_9 = Alloy.createController("diferencias_nivel_9").getView();
                    diferencias_nivel_9.open();
                }
            });
            button[9].addEventListener("click", function() {
                if ("#A4A4A4" == button[9].backgroundColor) alert("Todavia no puede jugar este nivel"); else {
                    var diferencias_nivel_10 = Alloy.createController("diferencias_nivel_10").getView();
                    diferencias_nivel_10.open();
                }
            });
        }
        if ("Memorice" == Alloy.Globals.aux_juego) {
            var button = [];
            for (var i = 1; 1 >= i; i++) {
                button[i] = Titanium.UI.createButton({
                    height: "90dip",
                    width: "90dip",
                    top: "6%",
                    left: "6%",
                    font: {
                        fontSize: 46,
                        color: "#000",
                        fontWeight: "bold",
                        textAlign: "center"
                    },
                    title: i
                });
                button[i].backgroundColor = false == Ti.App.Properties.getBool("TF_memorice" + i) ? gris : verde;
                view_body.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                alert("#A4A4A4" == button[0].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
        }
    }
    $.main_body.add(view_body);
    __defers["$.__views.back_icon!click!go_back"] && $.__views.back_icon.addEventListener("click", go_back);
    __defers["$.__views.sound_icon!click!go_sound"] && $.__views.sound_icon.addEventListener("click", go_sound);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;