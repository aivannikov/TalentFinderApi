const mongoose = require('mongoose');
const CandidateModel = require('./Models/CandidateModel'); 

/*
    Should be called once in app.js.
    Does connection to mongo db server and registers models  to schemas.
    All new schemas should be included in registerSchemasForModels() function  
*/
// process.env.MONGO_CONNECTION_STRING mongodb://127.0.0.1:27017/talent_finder
const MongoSetup = () => {
    mongoose.connection
      .on('error', console.log)
      .on('disconnected', MongoSetup);
      //.once('open', registerSchemasForModels);
    mongoose.connect("mongodb://127.0.0.1:27017/talent_finder", {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
  }

  


  

  module.exports = MongoSetup;
  