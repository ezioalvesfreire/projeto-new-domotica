var express = require('express');
var router = express.Router();
var actuadorsService = require('../../services/actuadorsService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next) {
    var actuadors = actuadorsService.getActuadors();

    var data = {
        actuadors: actuadors
    };

    res.render('admin/dispositivs/index', data); // palpite views   (if routes = actuadors ou if views = dispositivs)
});

router.get('/create', function(req, res, next) {

    res.render('admin/dispositivs/create'); //palpite views     (if routes = actuadors ou if views = dispositivs)
});

router.post('/create', upload.single('image'), function(req, res, next) {
    var actuadors = actuadorsService.getActuadors();

    var newId = actuadors.length + 1;

    var newActuador = {};
    newActuador.id = newId;
    newActuador.title = req.body.title;
    newActuador.image = req.file.filename;
    newActuador.description = req.body.description;
    newActuador.body = req.body.actuadorBody;

    actuadorsService.saveActuador(newActuador);

    res.redirect('/admin/actuador'); //routes se for em services é apenas actuador - singular
});

module.exports = router;