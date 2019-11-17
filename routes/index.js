var express = require('express');
var router = express.Router();
var actuadorsService = require('../services/actuadorsService');
var moviesService = require('../services/moviesService');
var sobreService = require('../services/sobreService');
var trabalheconoscoService = require('../services/trabalheconoscoService'); // trabalheconosco
//var cardsService = require('../services/cardsService');

/* GET home page. */
router.get('/', function(req, res, next) {
    var actuadors = actuadorsService.getActuadors(); //posts 
    var movies = moviesService.getProjects();
    res.render('index', { title: 'Home page', actuadors: actuadors, projects: movies });
});

/* GET cards page. */
router.get('/cards', function(req, res, next) {
    var actuadors = actuadorsService.getActuadors(); //posts
    var movies = moviesService.getProjects();
    res.render('cards', { title: 'Meus cards', actuadors: actuadors, projects: movies });
});

router.get('/actuador', function(req, res, next) {
    var actuadors = actuadorsService.getActuadors(); //posts
    res.render('actuador', { title: 'Home page', actuadors: actuadors });
});

router.get('/actuadors/:actuadorId', function(req, res, next) {
    var actuadorId = req.params.actuadorId;
    var actuadors = actuadorsService.getActuadors(); //posts
    var actuador = actuadors.filter((actuador) => actuador.id == actuadorId)[0];
    res.render('actuador', { title: actuador.title, actuador: actuador });
});

//Mostra lista de projects no menu Projects
router.get('/cards', function(req, res, next) {
    var lprojects = cardsService.getProjects()
    res.render('cards', { title: 'Meus cards', lista_projects: lprojects });
});

//Mostra lista de movies no menu
router.get('/movies', function(req, res, next) {
    var lprojects = moviesService.getProjects()
    res.render('movies', { title: 'Meus vídeos', lista_projects: lprojects });
});

//Mostra lista de projects no menu Projects
router.get('/sobre', function(req, res, next) {
    var lprojects = sobreService.getProjects()
    res.render('sobre', { title: 'Sobre', lista_projects: lprojects });
});

//Mostra lista de vagas de emprego no menu projects
router.get('/trabalheconosco', function(req, res, next) {
    var lprojects = trabalheconoscoService.getTrabalheconosco()
    res.render('trabalheconosco', { title: 'trabalheconosco', lista_projects: lprojects });
});

module.exports = router;