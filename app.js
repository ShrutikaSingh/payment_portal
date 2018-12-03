
const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/nodekb');
let db=mongoose.connection;

//chck connection
db.once('open',function() {
  console.log('connectd to mongodb');
});
//check for database reeor
db.on('error',function(err){
  console.log(err);
});

//init app      8551866252
const app=express();


//bring in models
let Article=require('./models/article') //for bringing article file in here

//load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//home route
app.get('/',(req,res)=>{
/*let articles=[
  {
    id:1,
    title:'article1',
    author:'shrutika',
    body:"this is article 1"
  },
  {
    id:1,
    title:'article2',
    author:'arya',
    body:"this is article 1"
  },
  {
    id:1,
    title:'article3',
    author:'nemo',
    body:"this is article 1"
  },
];
*/
Article.find({},function(err,articles){  //{}for all articcles anf (in err,articles is the response here)
if(err){
  console.log(err);
}else{
  res.render("index",{
    title : 'workshop',
    articles:articles,
    body:"meje"
  });
}
});

});

//add route
app.get('/workshop/payment',(req,res)=>{let mongoose=require('mongoose');

  res.render('add_payment',
{
  title:'add payment',
});
});

//start server
app.listen('3030',()=>{
  console.log('listening to port 3030...');
});
