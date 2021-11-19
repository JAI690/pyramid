const helpers = {};

const hb = require('handlebars');

const moment = require("moment");



hb.registerHelper('status', function (value) {
    if(value == '1'){
        return true;
    }else{
        return false;
    }

});


module.exports = helpers;

