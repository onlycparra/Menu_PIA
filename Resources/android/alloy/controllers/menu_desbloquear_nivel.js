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
    this.__controllerPath = "menu_desbloquear_nivel";
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
        height: "10%",
        layout: "vertical"
    });
    var view_body = Ti.UI.createView({
        height: "90%",
        width: Ti.UI.SIZE
    });
    var view_body_left = Ti.UI.createView({
        layout: "horizontal",
        left: 0,
        width: Alloy.CFG.leftWidth,
        height: Ti.UI.FILL
    });
    var view_body_right = Ti.UI.createView({
        layout: "vertical",
        left: Alloy.CFG.leftWidth,
        width: "20%",
        height: Ti.UI.FILL
    });
    Ti.Gesture.addEventListener("orientationchange", function() {
        var width = .8 * Ti.Platform.displayCaps.platformWidth;
        view_body_left.width = width;
        view_body_right.left = width;
    });
    var title = Titanium.UI.createLabel({
        color: "#000",
        text: Alloy.Globals.aux_categoria + " - " + Alloy.Globals.aux_juego,
        top: "50%",
        font: {
            fontSize: 24,
            color: "#000",
            fontweight: "bold",
            textAlign: "center"
        },
        width: "auto",
        height: "auto"
    });
    view_header.add(title);
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
                view_body_left.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[1].addEventListener("click", function() {
                button[1].backgroundColor = "#A4A4A4" == button[1].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[2].addEventListener("click", function() {
                button[2].backgroundColor = "#A4A4A4" == button[2].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[3].addEventListener("click", function() {
                button[3].backgroundColor = "#A4A4A4" == button[3].backgroundColor ? "#81F79F" : "#A4A4A4";
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
                view_body_left.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[1].addEventListener("click", function() {
                button[1].backgroundColor = "#A4A4A4" == button[1].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[2].addEventListener("click", function() {
                button[2].backgroundColor = "#A4A4A4" == button[2].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[3].addEventListener("click", function() {
                button[3].backgroundColor = "#A4A4A4" == button[3].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[4].addEventListener("click", function() {
                button[4].backgroundColor = "#A4A4A4" == button[4].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[5].addEventListener("click", function() {
                button[5].backgroundColor = "#A4A4A4" == button[5].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[6].addEventListener("click", function() {
                button[6].backgroundColor = "#A4A4A4" == button[6].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[7].addEventListener("click", function() {
                button[7].backgroundColor = "#A4A4A4" == button[7].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[8].addEventListener("click", function() {
                button[8].backgroundColor = "#A4A4A4" == button[8].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[9].addEventListener("click", function() {
                button[9].backgroundColor = "#A4A4A4" == button[9].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[10].addEventListener("click", function() {
                button[10].backgroundColor = "#A4A4A4" == button[10].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[11].addEventListener("click", function() {
                button[11].backgroundColor = "#A4A4A4" == button[11].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[12].addEventListener("click", function() {
                button[12].backgroundColor = "#A4A4A4" == button[12].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[13].addEventListener("click", function() {
                button[13].backgroundColor = "#A4A4A4" == button[13].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[14].addEventListener("click", function() {
                button[14].backgroundColor = "#A4A4A4" == button[14].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[15].addEventListener("click", function() {
                button[15].backgroundColor = "#A4A4A4" == button[15].backgroundColor ? "#81F79F" : "#A4A4A4";
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
                view_body_left.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[1].addEventListener("click", function() {
                button[1].backgroundColor = "#A4A4A4" == button[1].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[2].addEventListener("click", function() {
                button[2].backgroundColor = "#A4A4A4" == button[2].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[3].addEventListener("click", function() {
                button[3].backgroundColor = "#A4A4A4" == button[3].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[4].addEventListener("click", function() {
                button[4].backgroundColor = "#A4A4A4" == button[4].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[5].addEventListener("click", function() {
                button[5].backgroundColor = "#A4A4A4" == button[5].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[6].addEventListener("click", function() {
                button[6].backgroundColor = "#A4A4A4" == button[6].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[7].addEventListener("click", function() {
                button[7].backgroundColor = "#A4A4A4" == button[7].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[8].addEventListener("click", function() {
                button[8].backgroundColor = "#A4A4A4" == button[8].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[9].addEventListener("click", function() {
                button[9].backgroundColor = "#A4A4A4" == button[9].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[10].addEventListener("click", function() {
                button[10].backgroundColor = "#A4A4A4" == button[10].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[11].addEventListener("click", function() {
                button[11].backgroundColor = "#A4A4A4" == button[11].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[12].addEventListener("click", function() {
                button[12].backgroundColor = "#A4A4A4" == button[12].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[13].addEventListener("click", function() {
                button[13].backgroundColor = "#A4A4A4" == button[13].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[14].addEventListener("click", function() {
                button[14].backgroundColor = "#A4A4A4" == button[14].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[15].addEventListener("click", function() {
                button[15].backgroundColor = "#A4A4A4" == button[15].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[16].addEventListener("click", function() {
                button[16].backgroundColor = "#A4A4A4" == button[16].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[17].addEventListener("click", function() {
                button[17].backgroundColor = "#A4A4A4" == button[17].backgroundColor ? "#81F79F" : "#A4A4A4";
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
                view_body_left.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[1].addEventListener("click", function() {
                button[1].backgroundColor = "#A4A4A4" == button[1].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[2].addEventListener("click", function() {
                button[2].backgroundColor = "#A4A4A4" == button[2].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[3].addEventListener("click", function() {
                button[3].backgroundColor = "#A4A4A4" == button[3].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[4].addEventListener("click", function() {
                button[4].backgroundColor = "#A4A4A4" == button[4].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[5].addEventListener("click", function() {
                button[5].backgroundColor = "#A4A4A4" == button[5].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[6].addEventListener("click", function() {
                button[6].backgroundColor = "#A4A4A4" == button[6].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[7].addEventListener("click", function() {
                button[7].backgroundColor = "#A4A4A4" == button[7].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[8].addEventListener("click", function() {
                button[8].backgroundColor = "#A4A4A4" == button[8].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[9].addEventListener("click", function() {
                button[9].backgroundColor = "#A4A4A4" == button[9].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[10].addEventListener("click", function() {
                button[10].backgroundColor = "#A4A4A4" == button[10].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[11].addEventListener("click", function() {
                button[11].backgroundColor = "#A4A4A4" == button[11].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[12].addEventListener("click", function() {
                button[12].backgroundColor = "#A4A4A4" == button[12].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[13].addEventListener("click", function() {
                button[13].backgroundColor = "#A4A4A4" == button[13].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[14].addEventListener("click", function() {
                button[14].backgroundColor = "#A4A4A4" == button[14].backgroundColor ? "#81F79F" : "#A4A4A4";
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
                view_body_left.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[1].addEventListener("click", function() {
                button[1].backgroundColor = "#A4A4A4" == button[1].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[2].addEventListener("click", function() {
                button[2].backgroundColor = "#A4A4A4" == button[2].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[3].addEventListener("click", function() {
                button[3].backgroundColor = "#A4A4A4" == button[3].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[4].addEventListener("click", function() {
                button[4].backgroundColor = "#A4A4A4" == button[4].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[5].addEventListener("click", function() {
                button[5].backgroundColor = "#A4A4A4" == button[5].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[6].addEventListener("click", function() {
                button[6].backgroundColor = "#A4A4A4" == button[6].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[7].addEventListener("click", function() {
                button[7].backgroundColor = "#A4A4A4" == button[7].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[8].addEventListener("click", function() {
                button[8].backgroundColor = "#A4A4A4" == button[8].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[9].addEventListener("click", function() {
                button[9].backgroundColor = "#A4A4A4" == button[9].backgroundColor ? "#81F79F" : "#A4A4A4";
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
                view_body_left.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[1].addEventListener("click", function() {
                button[1].backgroundColor = "#A4A4A4" == button[1].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[2].addEventListener("click", function() {
                button[2].backgroundColor = "#A4A4A4" == button[2].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[3].addEventListener("click", function() {
                button[3].backgroundColor = "#A4A4A4" == button[3].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[4].addEventListener("click", function() {
                button[4].backgroundColor = "#A4A4A4" == button[4].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[5].addEventListener("click", function() {
                button[5].backgroundColor = "#A4A4A4" == button[5].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[6].addEventListener("click", function() {
                button[6].backgroundColor = "#A4A4A4" == button[6].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[7].addEventListener("click", function() {
                button[7].backgroundColor = "#A4A4A4" == button[7].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[8].addEventListener("click", function() {
                button[8].backgroundColor = "#A4A4A4" == button[8].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[9].addEventListener("click", function() {
                button[9].backgroundColor = "#A4A4A4" == button[9].backgroundColor ? "#81F79F" : "#A4A4A4";
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
                view_body_left.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[1].addEventListener("click", function() {
                button[1].backgroundColor = "#A4A4A4" == button[1].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[2].addEventListener("click", function() {
                button[2].backgroundColor = "#A4A4A4" == button[2].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[3].addEventListener("click", function() {
                button[3].backgroundColor = "#A4A4A4" == button[3].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[4].addEventListener("click", function() {
                button[4].backgroundColor = "#A4A4A4" == button[4].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[5].addEventListener("click", function() {
                button[5].backgroundColor = "#A4A4A4" == button[5].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[6].addEventListener("click", function() {
                button[6].backgroundColor = "#A4A4A4" == button[6].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[7].addEventListener("click", function() {
                button[7].backgroundColor = "#A4A4A4" == button[7].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[8].addEventListener("click", function() {
                button[8].backgroundColor = "#A4A4A4" == button[8].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[9].addEventListener("click", function() {
                button[9].backgroundColor = "#A4A4A4" == button[9].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[10].addEventListener("click", function() {
                button[10].backgroundColor = "#A4A4A4" == button[10].backgroundColor ? "#81F79F" : "#A4A4A4";
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
                view_body_left.add(button[i]);
            }
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[1].addEventListener("click", function() {
                button[1].backgroundColor = "#A4A4A4" == button[1].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[2].addEventListener("click", function() {
                button[2].backgroundColor = "#A4A4A4" == button[2].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[3].addEventListener("click", function() {
                button[3].backgroundColor = "#A4A4A4" == button[3].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[4].addEventListener("click", function() {
                button[4].backgroundColor = "#A4A4A4" == button[4].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[5].addEventListener("click", function() {
                button[5].backgroundColor = "#A4A4A4" == button[5].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[6].addEventListener("click", function() {
                button[6].backgroundColor = "#A4A4A4" == button[6].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[7].addEventListener("click", function() {
                button[7].backgroundColor = "#A4A4A4" == button[7].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[8].addEventListener("click", function() {
                button[8].backgroundColor = "#A4A4A4" == button[8].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
            button[9].addEventListener("click", function() {
                button[9].backgroundColor = "#A4A4A4" == button[9].backgroundColor ? "#81F79F" : "#A4A4A4";
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
            view_body_left.add(button[0]);
            button[0].addEventListener("click", function() {
                button[0].backgroundColor = "#A4A4A4" == button[0].backgroundColor ? "#81F79F" : "#A4A4A4";
            });
        }
    }
    var button_GD = Titanium.UI.createButton({
        title: "Guardar",
        top: "6%",
        height: "50",
        width: "100",
        backgroundColor: "#9DF"
    });
    var button_AT = Titanium.UI.createButton({
        title: "Atrás",
        top: "50%",
        height: "50",
        width: "100",
        backgroundColor: "#9DF"
    });
    button_GD.addEventListener("click", function() {
        for (var i = 0; i < button.length; i++) {
            if ("Habilidades Sociales" == Alloy.Globals.aux_categoria) {
                if ("Colorea" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("HS_colorea" + i);
                    Ti.App.Properties.setBool("HS_colorea" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("HS_colorea" + i);
                    Ti.App.Properties.setBool("HS_colorea" + i, true);
                }
                if ("Selecciona" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("HS_selecciona" + i);
                    Ti.App.Properties.setBool("HS_selecciona" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("HS_selecciona" + i);
                    Ti.App.Properties.setBool("HS_selecciona" + i, true);
                }
                if ("Acciones" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("HS_acciones" + i);
                    Ti.App.Properties.setBool("HS_acciones" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("HS_acciones" + i);
                    Ti.App.Properties.setBool("HS_acciones" + i, true);
                }
                if ("Gestos" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("HS_gestos" + i);
                    Ti.App.Properties.setBool("HS_gestos" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("HS_gestos" + i);
                    Ti.App.Properties.setBool("HS_gestos" + i, true);
                }
                if ("Gestos" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("HS_gestos" + i);
                    Ti.App.Properties.setBool("HS_gestos" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("HS_gestos" + i);
                    Ti.App.Properties.setBool("HS_gestos" + i, true);
                }
            }
            if ("Tolerancia a la Frustración" == Alloy.Globals.aux_categoria) {
                if ("Siluetas" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("TF_siluetas" + i);
                    Ti.App.Properties.setBool("TF_siluetas" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("TF_siluetas" + i);
                    Ti.App.Properties.setBool("TF_siluetas" + i, true);
                }
                if ("Encúentralos" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("TF_encuentralos" + i);
                    Ti.App.Properties.setBool("TF_encuentralos" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("TF_encuentralos" + i);
                    Ti.App.Properties.setBool("TF_encuentralos" + i, true);
                }
                if ("Objetos" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("TF_objetos" + i);
                    Ti.App.Properties.setBool("TF_objetos" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("TF_objetos" + i);
                    Ti.App.Properties.setBool("TF_objetos" + i, true);
                }
                if ("Diferencias" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("TF_diferencias" + i);
                    Ti.App.Properties.setBool("TF_diferencias" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("TF_diferencias" + i);
                    Ti.App.Properties.setBool("TF_diferencias" + i, true);
                }
                if ("Memorice" == Alloy.Globals.aux_juego) if ("#A4A4A4" == button[i].backgroundColor) {
                    Ti.App.Properties.removeProperty("TF_memorice" + i);
                    Ti.App.Properties.setBool("TF_memorice" + i, false);
                } else {
                    Ti.App.Properties.removeProperty("TF_memorice" + i);
                    Ti.App.Properties.setBool("TF_memorice" + i, true);
                }
            }
        }
        alert("Cambio guardado");
        Titanium.API.info("You clicked the button_GD");
    });
    button_AT.addEventListener("click", function() {
        $.win.close();
    });
    view_body_right.add(button_GD);
    view_body_right.add(button_AT);
    view_body.add(view_body_left);
    view_body.add(view_body_right);
    $.win.add(view_header);
    $.win.add(view_body);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;