define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "text!app/wijit/templates/TemplatedWidget.html",
    "i18n!app/wijit/nls/colors"
], function(declare, _WidgetBase, _TemplatedMixin, template, colors) {

    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "templatedWidget",
        templateString: template,
        color: colors.blue
        //  your custom code goes here
    });

});
