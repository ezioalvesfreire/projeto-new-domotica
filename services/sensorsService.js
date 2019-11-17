var fs = require('fs');

var sensorsFilePath = 'db/sensors.json';

var loadFileSensors = function() {
    var fileData = fs.readFileSync(sensorsFilePath, 'utf8');
    var sensors = JSON.parse(fileData);

    return sensors;
}

var saveFileSensors = function(sensors) {
    var data = JSON.stringify(sensors);
    fs.writeFileSync(sensorsFilePath, data, 'utf-8');
}

var getSensors = function() {
    var sensors = loadFileSensors();
    return sensors;
}

var saveSensors = function(newSensors) {
    var sensors = loadFileSensors();
    sensors.push(newSensors);
    saveFileSensors(sensors);
}

module.exports = {
    getSensors: getSensors,
    saveSensors: saveSensors
}