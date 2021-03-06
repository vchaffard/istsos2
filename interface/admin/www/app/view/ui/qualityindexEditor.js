/*
 * File: app/view/ui/qualityindexEditor.js
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.qualityindexEditor', {
    extend: 'Ext.panel.Panel',

    border: 0,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'gridop',
                    margin: 8,
                    maxHeight: 250,
                    title: '',
                    forceFit: true,
                    store: 'qistore',
                    viewConfig: {

                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'code',
                            text: 'Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            text: 'Name'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'description',
                            text: 'Description'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnNew',
                                    text: 'New'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'btnRemove',
                                    text: 'Remove selected'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'form',
                    border: 0,
                    hidden: true,
                    id: 'frmQuality',
                    bodyPadding: 10,
                    title: '',
                    trackResetOnLoad: true,
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Quality index',
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'opCode',
                                    name: 'code',
                                    fieldLabel: 'Code',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'opName',
                                    name: 'name',
                                    fieldLabel: 'Name',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'description',
                                    fieldLabel: 'Description',
                                    anchor: '100%'
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            ui: 'footer',
                            dock: 'bottom',
                            layout: {
                                pack: 'center',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnForm',
                                    text: 'Insert'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});