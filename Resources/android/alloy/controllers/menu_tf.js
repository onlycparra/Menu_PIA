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
    $.__views.menu_tf.add($.__views.view_body);
    $.__views.scrollView = Ti.UI.createScrollView({
        width: "100%",
        layout: "vertical",
        showVerticalScrollIndicator: "true",
        id: "scrollView"
    });
    $.__views.view_body.add($.__views.scrollView);
    $.__views.__alloyId12 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#F9D",
        title: "Siluetas",
        id: "__alloyId12"
    });
    $.__views.scrollView.add($.__views.__alloyId12);
    menu_siluetas ? $.__views.__alloyId12.addEventListener("click", menu_siluetas) : __defers["$.__views.__alloyId12!click!menu_siluetas"] = true;
    $.__views.__alloyId13 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#F9D",
        title: "Encuéntralos",
        id: "__alloyId13"
    });
    $.__views.scrollView.add($.__views.__alloyId13);
    menu_encuentralos ? $.__views.__alloyId13.addEventListener("click", menu_encuentralos) : __defers["$.__views.__alloyId13!click!menu_encuentralos"] = true;
    $.__views.__alloyId14 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#F9D",
        title: "Objetos",
        id: "__alloyId14"
    });
    $.__views.scrollView.add($.__views.__alloyId14);
    menu_objetos ? $.__views.__alloyId14.addEventListener("click", menu_objetos) : __defers["$.__views.__alloyId14!click!menu_objetos"] = true;
    $.__views.__alloyId15 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#F9D",
        title: "Diferencias",
        id: "__alloyId15"
    });
    $.__views.scrollView.add($.__views.__alloyId15);
    menu_diferencias ? $.__views.__alloyId15.addEventListener("click", menu_diferencias) : __defers["$.__views.__alloyId15!click!menu_diferencias"] = true;
    $.__views.__alloyId16 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#F9D",
        title: "Memorice",
        id: "__alloyId16"
    });
    $.__views.scrollView.add($.__views.__alloyId16);
    menu_memorice ? $.__views.__alloyId16.addEventListener("click", menu_memorice) : __defers["$.__views.__alloyId16!click!menu_memorice"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    if (Alloy.Globals.setting_on) {
        $.view_body.backgroundImage = "/images/icon/warning.png";
        $.view_body.backgroundRepeat = "true";
    } else $.view_body.backgroundColor = "#FFF";
    $.back_icon.addEventListener("click", function() {
        $.menu_tf.close();
    });
    $.menu_tf.open();
    __defers["$.__views.__alloyId12!click!menu_siluetas"] && $.__views.__alloyId12.addEventListener("click", menu_siluetas);
    __defers["$.__views.__alloyId13!click!menu_encuentralos"] && $.__views.__alloyId13.addEventListener("click", menu_encuentralos);
    __defers["$.__views.__alloyId14!click!menu_objetos"] && $.__views.__alloyId14.addEventListener("click", menu_objetos);
    __defers["$.__views.__alloyId15!click!menu_diferencias"] && $.__views.__alloyId15.addEventListener("click", menu_diferencias);
    __defers["$.__views.__alloyId16!click!menu_memorice"] && $.__views.__alloyId16.addEventListener("click", menu_memorice);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;