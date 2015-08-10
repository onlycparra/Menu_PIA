function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function menu_siluetas() {
        Alloy.Globals.aux_juego = "Siluetas";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    function menu_encuentralos() {
        Alloy.Globals.aux_juego = "Encúentralos";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    function menu_objetos() {
        Alloy.Globals.aux_juego = "Objetos";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    function menu_diferencias() {
        Alloy.Globals.aux_juego = "Diferencias";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    function menu_memorice() {
        Alloy.Globals.aux_juego = "Memorice";
        var menu_nivel = Alloy.createController("menu_nivel").getView();
        menu_nivel.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu_tf";
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
    $.__views.menu_tf = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "menu_tf"
    });
    $.__views.menu_tf && $.addTopLevelView($.__views.menu_tf);
    $.__views.header_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        layout: "horizontal",
        id: "header_view"
    });
    $.__views.menu_tf.add($.__views.header_view);
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
    $.__views.menu_tf.add($.__views.view_body);
    $.__views.Button_siluetas = Ti.UI.createButton({
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
        backgroundColor: "#F79F81",
        title: "Siluetas",
        id: "Button_siluetas"
    });
    $.__views.view_body.add($.__views.Button_siluetas);
    menu_siluetas ? $.__views.Button_siluetas.addEventListener("click", menu_siluetas) : __defers["$.__views.Button_siluetas!click!menu_siluetas"] = true;
    $.__views.Button_encuentralos = Ti.UI.createButton({
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
        backgroundColor: "#F79F81",
        title: "Encuéntralos",
        id: "Button_encuentralos"
    });
    $.__views.view_body.add($.__views.Button_encuentralos);
    menu_encuentralos ? $.__views.Button_encuentralos.addEventListener("click", menu_encuentralos) : __defers["$.__views.Button_encuentralos!click!menu_encuentralos"] = true;
    $.__views.Button_objetos = Ti.UI.createButton({
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
        backgroundColor: "#F79F81",
        title: "Objetos",
        id: "Button_objetos"
    });
    $.__views.view_body.add($.__views.Button_objetos);
    menu_objetos ? $.__views.Button_objetos.addEventListener("click", menu_objetos) : __defers["$.__views.Button_objetos!click!menu_objetos"] = true;
    $.__views.Button_diferencias = Ti.UI.createButton({
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
        backgroundColor: "#F79F81",
        title: "Diferencias",
        id: "Button_diferencias"
    });
    $.__views.view_body.add($.__views.Button_diferencias);
    menu_diferencias ? $.__views.Button_diferencias.addEventListener("click", menu_diferencias) : __defers["$.__views.Button_diferencias!click!menu_diferencias"] = true;
    $.__views.Button_memorice = Ti.UI.createButton({
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
        backgroundColor: "#F79F81",
        title: "Memorice",
        id: "Button_memorice"
    });
    $.__views.view_body.add($.__views.Button_memorice);
    menu_memorice ? $.__views.Button_memorice.addEventListener("click", menu_memorice) : __defers["$.__views.Button_memorice!click!menu_memorice"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.aux_categoria = "Tolerancia a la Frustración";
    $.home_icon.addEventListener("click", function() {
        $.menu_tf.close();
    });
    $.menu_tf.open();
    __defers["$.__views.Button_siluetas!click!menu_siluetas"] && $.__views.Button_siluetas.addEventListener("click", menu_siluetas);
    __defers["$.__views.Button_encuentralos!click!menu_encuentralos"] && $.__views.Button_encuentralos.addEventListener("click", menu_encuentralos);
    __defers["$.__views.Button_objetos!click!menu_objetos"] && $.__views.Button_objetos.addEventListener("click", menu_objetos);
    __defers["$.__views.Button_diferencias!click!menu_diferencias"] && $.__views.Button_diferencias.addEventListener("click", menu_diferencias);
    __defers["$.__views.Button_memorice!click!menu_memorice"] && $.__views.Button_memorice.addEventListener("click", menu_memorice);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;