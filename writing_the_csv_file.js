const fs= require('fs');
const dialogflow = require('dialogflow');
const uuid = require('uuid');
const sessionId = uuid.v4();
let data=[],query=[];
let projectId = 'sai-rvljcu';

fs.readFileSync('input_test.csv', 'utf-8').split(/\r?\n/).forEach(function(line){
     line=line.split(',');
     query.push(line[0])
     line.shift();
     line=line.toString();
     line=line.split('"');
     data.push(line[1])
})

loopedData();

async function loopedData(){
    for(var i=0;i<data.length;i++){
        await runSample(query[i],data[i])
    }
}


async function runSample(query,data) {
    // A unique identifier for the given session
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  
    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: query,
          // The language used by the client (en-US)
          languageCode: 'en-US',
        },
      },
    };
  
    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
   // console.log('Detected intent');
    const result = responses[0].queryResult;
   // console.log(`  Query: ${result.queryText}`);
   // console.log(`  Response: ${result.fulfillmentText}`);
   
   if(result.fulfillmentText===data){
       fs.appendFile('test_result.csv',query+',"'+result.fulfillmentText+'",'+'fail,false\n',(err)=>{
           console.log(err)
       })
   }else{
    fs.appendFile('test_result.csv',query+',"'+result.fulfillmentText+'",'+'fail,true\n',(err)=>{
        console.log(err)
    })
   }

    // if (result.intent) {
    //   console.log(`  Intent: ${result.intent.displayName}`);
    // } else {
    //   console.log(`  No intent matched.`);
    // }
  }
  
  