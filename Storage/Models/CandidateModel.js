const mongoose = require('mongoose');




/*
    Registers Candidate Model.
    Is called once in MongoSetup.js
*/

    const Schema = mongoose.Schema;
    const CandidateSchema = new Schema({
        firstname: { type: String, required: [true, 'Please specify the candidate firstname'] },
        lastname: { type: String, required: [true, 'Please specify the candidate lastname'] },
        email: { type: String, required: [true, 'Please specify the candidate email'] },
        skills: { type: [String], required: [true, 'Please specify the candidate skills'] } 
    });
module.exports = mongoose.model("Candidates", CandidateSchema);


