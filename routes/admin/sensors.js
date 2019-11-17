var express = require('express');
var router = express.Router();
var sensorsService = require('../../services/sensorsService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next) {
    var sensors = sensorsService.getSensors();

    var data = {
        sensors: sensors
    };

    res.render('admin/sensors/index', data);
});

router.get('/create', function(req, res, next) {

    res.render('admin/sensors/create');
});
// muadar a variavel post depois
router.post('/create', upload.single('image'), function(req, res, next) {
    var sensors = sensorsService.getSensors();

    var newId = sensors.length + 1;

    var newSensor = {};
    newSensor.id = newId;
    newSensor.title = req.body.title;
    newSensor.image = req.file.filename;
    newSensor.description = req.body.description;
    newSensor.body = req.body.postBody;

    sensorsService.saveSensor(newSensor);

    res.redirect('/admin/sensors');
});

module.exports = router;