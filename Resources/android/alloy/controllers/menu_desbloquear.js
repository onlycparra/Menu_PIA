function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function Button_CL() {
        $.menu_desbloquear.close();
    }
    function Button_SG() {
        if (true == aux) {
            Alloy.Globals.aux_categoria = $.Picker_CG.getSelectedRow(0).title;
            Alloy.Globals.aux_juego = $.Picker_JG.getSelectedRow(0).title;
            var menu_desbloquear_nivel = Alloy.createController("menu_desbloquear_nivel").getView();
            menu_desbloquear_nivel.open();
        } else alert("Elige una categoría de juego.");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu_desbloquear";
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
    $.__views.menu_desbloquear = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "menu_desbloquear"
    });
    $.__views.menu_desbloquear && $.addTopLevelView($.__views.menu_desbloquear);
    $.__views.header_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        layout: "horizontal",
        id: "header_view"
    });
    $.__views.menu_desbloquear.add($.__views.header_view);
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
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        width: "50%",
        top: "50%",
        left: "40%",
        text: "Bienvenido",
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
        width: "60%",
        hieght: "70%",
        id: "view_body"
    });
    $.__views.menu_desbloquear.add($.__views.view_body);
    $.__views.view_label = Ti.UI.createView({
        layout: "horizontal",
        height: "10%",
        top: "10%",
        id: "view_label"
    });
    $.__views.view_body.add($.__views.view_label);
    $.__views.Label_CG = Ti.UI.createLabel({
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        width: "50%",
        textAlign: "center",
        text: "Categoría",
        id: "Label_CG"
    });
    $.__views.view_label.add($.__views.Label_CG);
    $.__views.Label_JG = Ti.UI.createLabel({
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        width: "50%",
        textAlign: "center",
        text: "Juego",
        id: "Label_JG"
    });
    $.__views.view_label.add($.__views.Label_JG);
    $.__views.view_picker = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        id: "view_picker"
    });
    $.__views.view_body.add($.__views.view_picker);
    $.__views.Picker_CG = Ti.UI.createPicker({
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        width: "50%",
        id: "Picker_CG"
    });
    $.__views.view_picker.add($.__views.Picker_CG);
    var __alloyId4 = [];
    $.__views.column_CG = Ti.UI.createPickerColumn({
        id: "column_CG"
    });
    __alloyId4.push($.__views.column_CG);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "Habilidades Sociales",
        id: "__alloyId5"
    });
    $.__views.column_CG.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "Tolerancia a la Frustración",
        id: "__alloyId6"
    });
    $.__views.column_CG.addRow($.__views.__alloyId6);
    $.__views.Picker_CG.add(__alloyId4);
    $.__views.Picker_JG = Ti.UI.createPicker({
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        width: "50%",
        id: "Picker_JG",
        visible: "false"
    });
    $.__views.view_picker.add($.__views.Picker_JG);
    var __alloyId7 = [];
    $.__views.column_JG = Ti.UI.createPickerColumn({
        id: "column_JG"
    });
    __alloyId7.push($.__views.column_JG);
    $.__views.Picker_JG.add(__alloyId7);
    $.__views.view_button = Ti.UI.createView({
        layout: "horizontal",
        height: "25%",
        id: "view_button"
    });
    $.__views.view_body.add($.__views.view_button);
    $.__views.Button_CL = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
        },
        width: "50%",
        backgroundColor: "#F7819F",
        title: "Cancelar",
        id: "Button_CL"
    });
    $.__views.view_button.add($.__views.Button_CL);
    Button_CL ? $.__views.Button_CL.addEventListener("click", Button_CL) : __defers["$.__views.Button_CL!click!Button_CL"] = true;
    $.__views.Button_SG = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
        },
        width: "50%",
        backgroundColor: "#81DAF5",
        title: "Siguiente",
        id: "Button_SG"
    });
    $.__views.view_button.add($.__views.Button_SG);
    Button_SG ? $.__views.Button_SG.addEventListener("click", Button_SG) : __defers["$.__views.Button_SG!click!Button_SG"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data_HS = [ Ti.UI.createPickerRow({
        title: "Colorea"
    }), Ti.UI.createPickerRow({
        title: "Selecciona"
    }), Ti.UI.createPickerRow({
        title: "Acciones"
    }), Ti.UI.createPickerRow({
        title: "Gestos"
    }) ];
    var data_TF = [ Ti.UI.createPickerRow({
        title: "Siluetas"
    }), Ti.UI.createPickerRow({
        title: "Encúentralos"
    }), Ti.UI.createPickerRow({
        title: "Objetos"
    }), Ti.UI.createPickerRow({
        title: "Diferencias"
    }), Ti.UI.createPickerRow({
        title: "Memorice"
    }) ];
    var aux = false;
    $.Picker_CG.add.addEventListener("change", function(e) {
        $.Picker_JG.visible = "true";
        if ($.Picker_JG.columns[0]) {
            var _col = $.Picker_JG.columns[0];
            var len = _col.rowCount;
            for (var x = len - 1; x >= 0; x--) {
                var _row = _col.rows[x];
                _col.removeRow(_row);
            }
        }
        "Habilidades Sociales" == e.row.title && $.Picker_JG.add(data_HS);
        "Tolerancia a la Frustración" == e.row.title && $.Picker_JG.add(data_TF);
        aux = true;
    });
    $.menu_desbloquear.open();
    __defers["$.__views.Button_CL!click!Button_CL"] && $.__views.Button_CL.addEventListener("click", Button_CL);
    __defers["$.__views.Button_SG!click!Button_SG"] && $.__views.Button_SG.addEventListener("click", Button_SG);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;