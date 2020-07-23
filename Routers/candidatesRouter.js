const express = require('express');
const bodyParser = require("body-parser");
const candidatesService = require('../Services/candidatesService');

const candidatesRouter = express.Router();
candidatesRouter.use(bodyParser.json());
candidatesRouter.use(bodyParser.urlencoded({ extended: true }));


candidatesRouter.get('/search', function (request, response) {
    if(request.query.skills) {
        let requestedSkills = request.query.skills.split(',');
        let candidate = candidatesService.findCandidateBySkills(requestedSkills);
        if(candidate){
          response.status(200);
          response.setHeader('Content-Type', 'application/json');
          response.send(candidate);
        }
        else {
          response.status(404);
        }
    }
    else {
      response.status(404);
      response.send("Bad request");
    }
    
  });

candidatesRouter.post('/', function(request, response){
  if(request.body.id && request.body.name && request.body.skills){
    candidatesService.addNewCandidate(
      {
        id: request.body.id,
        name: request.body.name,
        skills: request.body.skills  
      }
    );
    response.status(200);
  }    
  else {
      response.status(404);
      response.send("Bad request");
  }  
 
});  

  module.exports = candidatesRouter;