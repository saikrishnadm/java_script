var express=require('express');

var app=express();

var bodyParser=require('body-parser')
app.use(bodyParser.json())

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database:"saikrishna"
});
 
connection.connect();
 
var admin =require("./admin.js")
var user=require("./user.js")

app.use('/admin',admin)
app.use("/user",user)

app.post('/',(req,res)=>{
 //   console.log(req.query)
   // res.send('hello world');
    var insertquery=`insert into  shop (pants,shirts,shoes,tshirts,country) values("${req.body.pants}","${req.body.shirts}","${req.body.shoes}","${req.body.tshirts}","${req.body.country}")`;
    console.log(insertquery)
    connection.query(insertquery, function (error, results, fields) {
        if (error) {throw error}else{
        res.send(JSON.stringify(results));}
      });
})



app.post('/user',(req,res)=>{
     


    connection.query('select * from shop ', function (error, results, fields) {
        if (error) {throw error}
        else
        {
          var a="";
          for(i=0;i<results.length;i++){
            a=a+" "+results[i];
          }
        res.send(JSON.stringify(results));
      }
      });
    
    
})


app.listen(4000,()=>{
    console.log("running on port"+4000)
})