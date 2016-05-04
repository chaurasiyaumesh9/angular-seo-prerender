var express = require('express');

var app =  express();

//app.configure(function(){
  // Here we require the prerender middleware that will handle requests from Search Engine crawlers
  // We set the token only if we're using the Prerender.io service
  app.use(require('prerender-node').set('prerenderToken', 'fnu9gwOPhdT0b30IXLI8'));
  app.use(express.static("public"));
  //app.use(app.router);
//});

// This will ensure that all routing is handed over to AngularJS
app.get('*', function(req, res){
	res.sendfile('./public/index.html');
});

app.listen(8081);
console.log("Go Prerender Go!");

module.exports = app;