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

 fs.writeFile('sai.txt',"saikrishna",(err)=>{
 })

fs.appendFile('sai.txt'," reddy",(err)=>{
  console.log(err)
})