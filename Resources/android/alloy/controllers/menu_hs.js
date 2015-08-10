function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function menu_colorea() {
        Alloy.Globals.aux_juego = "Colorea";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    function menu_selecciona() {
        Alloy.Globals.aux_juego = "Selecciona";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    function menu_acciones() {
        Alloy.Globals.aux_juego = "Acciones";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    function menu_gestos() {
        Alloy.Globals.aux_juego = "Gestos";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu_hs";
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
    $.__views.menu_hs = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "menu_hs"
    });
    $.__views.menu_hs && $.addTopLevelView($.__views.menu_hs);
    $.__views.header_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        layout: "horizontal",
        id: "header_view"
    });
    $.__views.menu_hs.add($.__views.header_view);
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
    $.__views.view_body = Ti.UI.createView({
        layout: "vertical",
        id: "view_body"
    });
    $.__views.menu_hs.add($.__views.view_body);
    $.__views.scrollView = Ti.UI.createScrollView({
        width: "100%",
        layout: "vertical",
        showVerticalScrollIndicator: "true",
        id: "scrollView"
    });
    $.__views.view_body.add($.__views.scrollView);
    $.__views.__alloyId8 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#9DF",
        title: "Colorea las Emociones",
        id: "__alloyId8"
    });
    $.__views.scrollView.add($.__views.__alloyId8);
    menu_colorea ? $.__views.__alloyId8.addEventListener("click", menu_colorea) : __defers["$.__views.__alloyId8!click!menu_colorea"] = true;
    $.__views.__alloyId9 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#9DF",
        title: "Selecciona la Emoción",
        id: "__alloyId9"
    });
    $.__views.scrollView.add($.__views.__alloyId9);
    menu_selecciona ? $.__views.__alloyId9.addEventListener("click", menu_selecciona) : __defers["$.__views.__alloyId9!click!menu_selecciona"] = true;
    $.__views.__alloyId10 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#9DF",
        title: "Clasifica las Acciones",
        id: "__alloyId10"
    });
    $.__views.scrollView.add($.__views.__alloyId10);
    menu_acciones ? $.__views.__alloyId10.addEventListener("click", menu_acciones) : __defers["$.__views.__alloyId10!click!menu_acciones"] = true;
    $.__views.__alloyId11 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#9DF",
        title: "Gestos y Palabras",
        id: "__alloyId11"
    });
    $.__views.scrollView.add($.__views.__alloyId11);
    menu_gestos ? $.__views.__alloyId11.addEventListener("click", menu_gestos) : __defers["$.__views.__alloyId11!click!menu_gestos"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    if (Alloy.Globals.setting_on) {
        $.view_body.backgroundImage = "/images/icon/warning.png";
        $.view_body.backgroundRepeat = "true";
    } else $.view_body.backgroundColor = "#FFF";
    Alloy.Globals.aux_categoria = "Habilidades Sociales";
    $.back_icon.addEventListener("click", function() {
        $.menu_hs.close();
    });
    $.menu_hs.open();
    __defers["$.__views.__alloyId8!click!menu_colorea"] && $.__views.__alloyId8.addEventListener("click", menu_colorea);
    __defers["$.__views.__alloyId9!click!menu_selecciona"] && $.__views.__alloyId9.addEventListener("click", menu_selecciona);
    __defers["$.__views.__alloyId10!click!menu_acciones"] && $.__views.__alloyId10.addEventListener("click", menu_acciones);
    __defers["$.__views.__alloyId11!click!menu_gestos"] && $.__views.__alloyId11.addEventListener("click", menu_gestos);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;