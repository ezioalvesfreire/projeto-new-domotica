var express = require('express');
var router = express.Router();
var sensorsTempService = require('../../services/sensorsTempService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next) {
    var sensorsTemp = sensorsTempService.getSensorsTemp();

    var data = {
        sensorsTemp: sensorsTemp
    };

    res.render('admin/sensorsTemp/index', data);
});

router.get('/create', function(req, res, next) {

    res.render('admin/sensorsTemp/create');
});
// muadar a variavel post depois
router.post('/create', upload.single('image'), function(req, res, next) {
    var sensorsTemp = sensorsTempService.getSensorsTemp();

    var newId = sensorsTemp.length + 1;

    var newSensorTemp = {};
    newSensorTemp.id = newId;
    newSensorTemp.title = req.body.title;
    newSensorTemp.image = req.file.filename;
    newSensorTemp.description = req.body.description;
    newSensorTemp.body = req.body.postBody;

    sensorsTempService.saveSensorTemp(newSensorTemp);

    res.redirect('/admin/sensorsTemp');
});

module.exports = router;