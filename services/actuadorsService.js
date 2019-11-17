var fs = require('fs');

var actuadorsFilePath = 'db/actuadors.json';

var loadFileActuadors = function() {
    var fileData = fs.readFileSync(actuadorsFilePath, 'utf8');
    var actuadors = JSON.parse(fileData);

    return actuadors;
}

var saveFileActuadors = function(actuadors) {
    var data = JSON.stringify(actuadors);
    fs.writeFileSync(actuadorsFilePath, data, 'utf-8');
}

var getActuadors = function() {
    var actuadors = loadFileActuadors();
    return actuadors;
}

var saveActuador = function(newActuador) {
    var actuadors = loadFileActuadors();
    actuadors.push(newActuador);
    saveFileActuadors(actuadors);
}

module.exports = {
    getActuadors: getActuadors,
    saveActuador: saveActuador
}