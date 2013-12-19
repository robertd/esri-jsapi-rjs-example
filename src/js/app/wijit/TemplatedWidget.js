define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "text!app/wijit/templates/TemplatedWidget.html"
], function(declare, _WidgetBase, _TemplatedMixin, template) {

    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "templatedWidget",
        templateString: template
        //  your custom code goes here
    });

});
