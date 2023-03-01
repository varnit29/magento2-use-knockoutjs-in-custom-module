define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'UseKnockoutjs_Knock/knockout-tests'
        },
        initialize: function () {
           this.customerName = ko.observableArray([]);
           this.customerData = ko.observable('');
            this._super();
        },
        addNewCustomer: function () {
            this.customerName.push({name:this.customerData()});
            this.customerData('');
        }
    });
}
);