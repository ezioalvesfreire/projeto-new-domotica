var fs = require('fs');

var postsFilePath = 'db/sensorsTemp.json';

var loadFileSensorsTemp = function() {
    var fileData = fs.readFileSync(sensorsTempFilePath, 'utf8');
    var sensorsTemp = JSON.parse(fileData);

    return sensorsTemp;
}

var saveFileSensorsTemp = function(sensorsTemp) {
    var data = JSON.stringify(sensorsTemp);
    fs.writeFileSync(sensorsTempFilePath, data, 'utf-8');
}

var getSensorsTemp = function() {
    var sensorsTemp = loadFileSensorsTemp();
    return sensorsTemp;
}

var saveSensorsTemp = function(newSensorsTemp) {
    var sensorsTemp = loadFileSensorsTemp();
    sensorsTemp.push(newSensorsTemp);
    saveFileSensorsTemp(sensorsTemp);
}

module.exports = {
    getSensorsTemp: getSensorsTemp,
    saveSensorsTemp: saveSensorsTemp
}