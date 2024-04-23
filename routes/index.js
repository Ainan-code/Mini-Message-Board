var express = require('express');
var router = express.Router();

 

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messages Board', messages: messages });
});

/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New message', messages: messages });
});

router.post('/new' , function(req, res, next) {
    var body = req.body 
  
   var newMessages =  messages.push({text: body.message, user: body.author, added: new Date()});
   console.log(newMessages)
  res.redirect('/');
});

 
module.exports = router;
