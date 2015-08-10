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
    $.__views.home_view = Ti.UI.createView({
        top: "0%",
        left: "0%",
        width: "20%",
        height: "100%",
        id: "home_view"
    });
    $.__views.header_view.add($.__views.home_view);
    $.__views.home_icon = Ti.UI.createImageView({
        image: "/images/icon/home.png",
        top: "10%",
        left: "10%",
        height: "90%",
        id: "home_icon"
    });
    $.__views.home_view.add($.__views.home_icon);
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
        height: "90%",
        id: "sound_icon"
    });
    $.__views.sound_view.add($.__views.sound_icon);
    $.__views.view_body = Ti.UI.createView({
        layout: "vertical",
        height: "85%",
        id: "view_body"
    });
    $.__views.menu_hs.add($.__views.view_body);
    $.__views.Button_colorea = Ti.UI.createButton({
        top: "6%",
        height: "10%",
        width: "30%",
        borderRadius: 30,
        color: "white",
        font: {
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#58ACFA",
        title: "Colorea",
        id: "Button_colorea"
    });
    $.__views.view_body.add($.__views.Button_colorea);
    menu_colorea ? $.__views.Button_colorea.addEventListener("click", menu_colorea) : __defers["$.__views.Button_colorea!click!menu_colorea"] = true;
    $.__views.Button_selecciona = Ti.UI.createButton({
        top: "6%",
        height: "10%",
        width: "30%",
        borderRadius: 30,
        color: "white",
        font: {
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#58ACFA",
        title: "Selecciona",
        id: "Button_selecciona"
    });
    $.__views.view_body.add($.__views.Button_selecciona);
    menu_selecciona ? $.__views.Button_selecciona.addEventListener("click", menu_selecciona) : __defers["$.__views.Button_selecciona!click!menu_selecciona"] = true;
    $.__views.Button_acciones = Ti.UI.createButton({
        top: "6%",
        height: "10%",
        width: "30%",
        borderRadius: 30,
        color: "white",
        font: {
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#58ACFA",
        title: "Acciones",
        id: "Button_acciones"
    });
    $.__views.view_body.add($.__views.Button_acciones);
    menu_acciones ? $.__views.Button_acciones.addEventListener("click", menu_acciones) : __defers["$.__views.Button_acciones!click!menu_acciones"] = true;
    $.__views.Button_gestos = Ti.UI.createButton({
        top: "6%",
        height: "10%",
        width: "30%",
        borderRadius: 30,
        color: "white",
        font: {
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#58ACFA",
        title: "Gestos",
        id: "Button_gestos"
    });
    $.__views.view_body.add($.__views.Button_gestos);
    menu_gestos ? $.__views.Button_gestos.addEventListener("click", menu_gestos) : __defers["$.__views.Button_gestos!click!menu_gestos"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.aux_categoria = "Habilidades Sociales";
    $.home_icon.addEventListener("click", function() {
        $.menu_hs.close();
    });
    $.menu_hs.open();
    __defers["$.__views.Button_colorea!click!menu_colorea"] && $.__views.Button_colorea.addEventListener("click", menu_colorea);
    __defers["$.__views.Button_selecciona!click!menu_selecciona"] && $.__views.Button_selecciona.addEventListener("click", menu_selecciona);
    __defers["$.__views.Button_acciones!click!menu_acciones"] && $.__views.Button_acciones.addEventListener("click", menu_acciones);
    __defers["$.__views.Button_gestos!click!menu_gestos"] && $.__views.Button_gestos.addEventListener("click", menu_gestos);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;