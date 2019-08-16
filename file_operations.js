var fs =require('fs')


  fs.readFile('app.js', function(err, data) {
   // console.log(data.toString())
  });

// try catch for handling the 
try
{
 var a= fs.readFileSync('app.js');
}
catch(err)
{
  console.log(err)
}

 //console.log(a.toString())
console.log("after err")

 fs.writeFile('sai.txt',"bbbbbbbbbb",(err)=>{
 })

fs.appendFile('sai.txt',"aaaaaaaaaaaaaaa",(err)=>{
  console.log(err)
})