/**
 * Created by swisa on 14/10/2015.
 */
var express    = require('express');
var routers     = express.Router();

routers.get('/', function(req, res){
    res.render('index', {
    });
});

module.exports = routers;
