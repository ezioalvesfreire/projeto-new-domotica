var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var moviesService = require('../services/moviesService');
var sobreService = require('../services/sobreService');
var trabalheconoscoService = require('../services/trabalheconoscoService'); // trabalheconosco
//var cardsService = require('../services/cardsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts();
  var movies = moviesService.getProjects();
  res.render('index', {title: 'Home page', posts: posts, projects: movies });
});

/* GET cards page. */
router.get('/cards', function(req, res, next) {
  var posts = postsService.getPosts();
  var movies = moviesService.getProjects();
  res.render('cards', {title: 'Meus cards', posts: posts, projects: movies });
});

router.get('/posts', function(req, res, next){
  var posts = postsService.getPosts();
  res.render('posts', {title: 'Home page', posts: posts});
});

router.get('/posts/:postId', function(req, res, next){
  var postId = req.params.postId;
  var posts = postsService.getPosts();
  var post = posts.filter((post) => post.id == postId ) [0];
 res.render('post', {title: post.title, post: post});
});

//Mostra lista de projects no menu Projects
router.get('/cards', function(req, res, next){
  var lprojects = cardsService.getProjects()
  res.render('cards', { title: 'Meus cards', lista_projects: lprojects});
});

//Mostra lista de movies no menu
router.get('/movies', function(req, res, next){
  var lprojects = moviesService.getProjects()
  res.render('movies', { title: 'Meus vídeos', lista_projects: lprojects});
});

//Mostra lista de projects no menu Projects
router.get('/sobre', function(req, res, next){
  var lprojects = sobreService.getProjects()
  res.render('sobre', { title: 'Sobre', lista_projects: lprojects});
});

//Mostra lista de vagas de emprego no menu projects
router.get('/trabalheconosco', function(req, res, next){
  var lprojects = trabalheconoscoService.getTrabalheconosco()
  res.render('trabalheconosco', { title: 'trabalheconosco', lista_projects: lprojects});
});

module.exports = router;
