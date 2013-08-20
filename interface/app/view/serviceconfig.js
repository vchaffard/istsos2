/*
 * File: app/view/serviceconfig.js
 * Date: Tue Apr 17 2012 17:03:01 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('istsos.view.serviceconfig', {
    extend: 'istsos.view.ui.serviceconfig',

    initComponent: function() {
        var me = this;
        me.callParent(arguments);
    },
    operationLoad: function () {
        if (Ext.isEmpty(this.mask)) {
            this.mask = new Ext.LoadMask(this.body, {
                msg:"Please wait..."
            });
        }
        this.mask.show();
        var url = Ext.String.format('{0}/istsos/services/{1}/configsections', wa.url,this.servicename);
        Ext.Ajax.request({
            url: url,
            scope: this,
            method: "GET",
            success: function(response){
                try {
                    var json = Ext.decode(response.responseText);
                    var data = {};
                    for (var key in json['data']) {
                        data = Ext.apply(data, json['data'][key]);
                    }
                    json['data'] = data;
                    this.istForm.loadRecord(json);
                } catch (exception) {
                    console.error(exception);
                }
                this.mask.hide();
                this.fireEvent("operationGet",json);
            }
        });
    },
    operationPost: function () {
        if (Ext.isEmpty(this.mask)) {
            this.mask = new Ext.LoadMask(this.body, {
                msg:"Please wait..."
            });
        }
        this.mask.show();
        var jsonData = {};
        var custom = false;
        var valid = true;
        var formItems = this.istForm.items.items;
        for (var i in formItems) {
            if (Ext.getClassName(formItems[i])=="Ext.form.FieldSet") {
                if(!formItems[i].collapsed){
                    custom = true;
                    jsonData[formItems[i].getId()] = {};
                    var fieldSetItems = formItems[i].items.items;
                    for (var m in fieldSetItems) {
                        if (Ext.getClassName(fieldSetItems[m])=="Ext.form.field.Text" || Ext.getClassName(fieldSetItems[m])=="Ext.form.field.Number") {
                            var field = fieldSetItems[m];
                            jsonData[formItems[i].getId()][field.getName()] = field.getValue();
                            if (!field.isValid()) {
                                valid = false;
                            }               
                        }
                    }
                }
            }
        }
        if (!valid) {
            this.mask.hide();
            Ext.Msg.alert('Validation error', 'Please correct the invalid values');
        } else if (valid && custom) {
            var url = Ext.String.format('{0}/istsos/services/{1}/configsections', wa.url,this.servicename);
            Ext.Ajax.request({
                url: url,
                scope: this,
                method: "PUT",
                jsonData: jsonData,
                success: function(response){
                    try {
                        var json = Ext.decode(response.responseText);
                        var data = {};
                        for (var key in json['data']) {
                            data = Ext.apply(data, json['data'][key]);
                        }
                        json['data'] = data;
                        this.istForm.loadRecord(json);
                    } catch (exception) {
                        console.error(exception);
                    }
                    this.mask.hide();
                    this.fireEvent("operationSubmit",json);
                }
            });
        }else{
            this.mask.hide();
            this.fireEvent("operationSubmit",{
                "success": true
            });
        }
    }
});