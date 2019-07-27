var fs =require('fs')


  fs.readFile('app.js', function(err, data) {
   // console.log(data.toString())
  });

 var a= fs.readFileSync('app.js');

 //console.log(a.toString())


 fs.writeFile('sai.txt',"saikrishna",(err)=>{
 })

fs.appendFile('sai.txt'," reddy",(err)=>{
  console.log(err)
})