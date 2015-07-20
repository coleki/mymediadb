var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

// serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));

//look for view html in the views directory
app.set('views', path.join(__dirname, 'views'));

// use ejs to render
app.set('view engine', 'ejs');

//setup routes
app.use('/', index);


module.exports = app;

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});

//Mongoose test stuff
mongoose.connect('mongodb://localhost/test');

var productSchema = new mongoose.Schema({
  prdId: String,
  name: { type: String }, 
  price: Number
})

var Product = mongoose.model('Product', productSchema);

app.get('/add', function(req,res) {
    res.render('addProduct.ejs');
});

app.post('/new', function(req, res){
  new Product({
    prdId : req.body.ProductId,
    name  : req.body.ProductName,
    price   : req.body.ProductPrice
  }).save(function(err, prd){
    if(err) res.json(err);
    else    res.send("Product Successfully Added !");
  });
});