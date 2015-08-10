function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var view_header = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.SIZE,
        height: "10%",
        layout: "horizontal"
    });
    var view_body = Ti.UI.createView({
        height: "90%",
        width: Ti.UI.SIZE,
        layout: "horizontal"
    });
    var title = Titanium.UI.createLabel({
        color: "#000",
        text: Alloy.Globals.aux_categoria + " - " + Alloy.Globals.aux_juego,
        top: "50%",
        font: {
            fontSize: 18,
            color: "#000",
            fontweight: "bold",
            textAlign: "center"
        },
        left: "10%"
    });
    var anterior = Titanium.UI.createImageView({
        image: "/images/icon/anterior.png",
        top: "40%",
        left: "10%",
        height: "60%"
    });
    anterior.addEventListener("click", function() {
        $.win.close();
    });
    var audio = Titanium.UI.createImageView({
        image: "/images/icon/sound.png",
        top: "40%",
        right: "0%",
        height: "60%"
    });
    view_header.add(anterior);
    view_header.add(title);
    view_header.add(audio);
    var button = [];
    if ("Habilidades Sociales" == Alloy.Globals.aux_categoria) {
        if ("Colorea" == Alloy.Globals.aux_juego) {
            for (var i = 0; 4 > i; i++) {
                if (false == Ti.App.Properties.getBool("HS_colorea" + i)) {
                    button[i] = Titanium.UI.createButton({
                        title: "Nivel " + (i + 1),
                        height: "90",
                        top: "6%",
                        left: "6%",
                        width: "90",
                        backgroundColor: "#A4A4A4"
                    });
                    Ti.API.info(i);
                } else button[i] = Titanium.UI.createButton({
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#81F79F"
                });
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
        }
        if ("Selecciona" == Alloy.Globals.aux_juego) {
            for (var i = 0; 16 > i; i++) {
                button[i] = Titanium.UI.createButton(false == Ti.App.Properties.getBool("HS_selecciona" + i) ? {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#A4A4A4"
                } : {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#81F79F"
                });
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
            button[15].addEventListener("click", function() {
                alert("#A4A4A4" == button[15].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
        }
        if ("Acciones" == Alloy.Globals.aux_juego) {
            for (var i = 0; 18 > i; i++) {
                button[i] = Titanium.UI.createButton(false == Ti.App.Properties.getBool("HS_acciones" + i) ? {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#A4A4A4"
                } : {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#81F79F"
                });
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
            button[15].addEventListener("click", function() {
                alert("#A4A4A4" == button[15].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[16].addEventListener("click", function() {
                alert("#A4A4A4" == button[16].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
            button[17].addEventListener("click", function() {
                alert("#A4A4A4" == button[17].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
        }
        if ("Gestos" == Alloy.Globals.aux_juego) {
            for (var i = 0; 15 > i; i++) {
                button[i] = Titanium.UI.createButton(false == Ti.App.Properties.getBool("HS_gestos" + i) ? {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#A4A4A4"
                } : {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#81F79F"
                });
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
            for (var i = 0; 10 > i; i++) {
                button[i] = Titanium.UI.createButton(false == Ti.App.Properties.getBool("TF_siluetas" + i) ? {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#A4A4A4"
                } : {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#81F79F"
                });
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
            for (var i = 0; 10 > i; i++) {
                button[i] = Titanium.UI.createButton(false == Ti.App.Properties.getBool("TF_encuentralos" + i) ? {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#A4A4A4"
                } : {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#81F79F"
                });
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
            for (var i = 0; 11 > i; i++) {
                button[i] = Titanium.UI.createButton(false == Ti.App.Properties.getBool("TF_objetos" + i) ? {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#A4A4A4"
                } : {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#81F79F"
                });
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
            for (var i = 0; 10 > i; i++) {
                button[i] = Titanium.UI.createButton(false == Ti.App.Properties.getBool("TF_diferencias" + i) ? {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#A4A4A4"
                } : {
                    title: "Nivel " + (i + 1),
                    height: "90",
                    top: "6%",
                    left: "6%",
                    width: "90",
                    backgroundColor: "#81F79F"
                });
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
            button[0] = Titanium.UI.createButton(false == Ti.App.Properties.getBool("TF_memorice0") ? {
                title: "Nivel 1",
                height: "90",
                top: "6%",
                left: "6%",
                width: "90",
                backgroundColor: "#A4A4A4"
            } : {
                title: "Nivel 1",
                height: "90",
                top: "6%",
                left: "6%",
                width: "90",
                backgroundColor: "#81F79F"
            });
            view_body.add(button[0]);
            button[0].addEventListener("click", function() {
                alert("#A4A4A4" == button[0].backgroundColor ? "Todavia no puede jugar este nivel" : "Vamos!");
            });
        }
    }
    $.win.add(view_header);
    $.win.add(view_body);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;