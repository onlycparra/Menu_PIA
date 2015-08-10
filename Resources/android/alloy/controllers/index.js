function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function menu_HS() {
        var menu_hs = Alloy.createController("menu_hs").getView();
        menu_hs.open();
    }
    function menu_TF() {
        var menu_tf = Alloy.createController("menu_tf").getView();
        menu_tf.open();
    }
    function menu_setting() {
        var input_pass = Alloy.createController("input_pass").getView();
        input_pass.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        layout: "horizontal",
        id: "header_view"
    });
    $.__views.index.add($.__views.header_view);
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
        height: "70%",
        id: "view_body"
    });
    $.__views.index.add($.__views.view_body);
    $.__views.Button_HS = Ti.UI.createButton({
        top: "6%",
        height: "40%",
        width: "60%",
        borderRadius: 40,
        color: "white",
        font: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#81DAF5",
        title: "Habilidades Sociales",
        id: "Button_HS"
    });
    $.__views.view_body.add($.__views.Button_HS);
    menu_HS ? $.__views.Button_HS.addEventListener("click", menu_HS) : __defers["$.__views.Button_HS!click!menu_HS"] = true;
    $.__views.Button_TF = Ti.UI.createButton({
        top: "6%",
        height: "40%",
        width: "60%",
        borderRadius: 40,
        color: "white",
        font: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#F7819F",
        title: "Tolerancia a la Frustración",
        id: "Button_TF"
    });
    $.__views.view_body.add($.__views.Button_TF);
    menu_TF ? $.__views.Button_TF.addEventListener("click", menu_TF) : __defers["$.__views.Button_TF!click!menu_TF"] = true;
    $.__views.footer_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        id: "footer_view"
    });
    $.__views.index.add($.__views.footer_view);
    $.__views.setting_view = Ti.UI.createView({
        bottom: "0%",
        right: "0%",
        width: "20%",
        height: "100%",
        id: "setting_view"
    });
    $.__views.footer_view.add($.__views.setting_view);
    $.__views.setting_icon = Ti.UI.createImageView({
        image: "/images/icon/gear.png",
        bottom: "10%",
        right: "10%",
        height: "100%",
        id: "setting_icon"
    });
    $.__views.setting_view.add($.__views.setting_icon);
    menu_setting ? $.__views.setting_icon.addEventListener("click", menu_setting) : __defers["$.__views.setting_icon!click!menu_setting"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.setting_on = false;
    if (!Ti.App.Properties.hasProperty("HS_colorea0")) {
        for (var i = 1; 4 > i; i++) Ti.App.Properties.setBool("HS_colorea" + i, false);
        for (var i = 1; 16 > i; i++) Ti.App.Properties.setBool("HS_selecciona" + i, false);
        for (var i = 1; 18 > i; i++) Ti.App.Properties.setBool("HS_acciones" + i, false);
        for (var i = 1; 15 > i; i++) Ti.App.Properties.setBool("HS_gestos" + i, false);
        for (var i = 1; 10 > i; i++) Ti.App.Properties.setBool("TF_siluetas" + i, false);
        for (var i = 1; 10 > i; i++) Ti.App.Properties.setBool("TF_encuentralos" + i, false);
        for (var i = 1; 11 > i; i++) Ti.App.Properties.setBool("TF_objetos" + i, false);
        for (var i = 1; 10 > i; i++) Ti.App.Properties.setBool("TF_diferencias" + i, false);
    }
    $.index.open();
    __defers["$.__views.Button_HS!click!menu_HS"] && $.__views.Button_HS.addEventListener("click", menu_HS);
    __defers["$.__views.Button_TF!click!menu_TF"] && $.__views.Button_TF.addEventListener("click", menu_TF);
    __defers["$.__views.setting_icon!click!menu_setting"] && $.__views.setting_icon.addEventListener("click", menu_setting);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;