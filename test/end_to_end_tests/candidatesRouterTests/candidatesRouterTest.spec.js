let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../../app');
let mongoose = require('mongoose');
let { insertCandidateWithSkill, insertSkill, clearData } = require('../dbTestHelpers/dbOperations');
const { insert } = require('../../../data/knexObject');

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('/GET /candidates/search', () => {
   let Candidate = mongoose.model('Candidates');   
   let skillNamesToInsert = ["javascript", "es6", "python"];
   before(async () => {
      
      let candidate = new Candidate({ firstname:'John', lastname: 'Smith', email: 'js@email.com', skills: skillNamesToInsert });
      await candidate.save();
   });
   

  it('it should GET all the candidates with the requested parameters', (done) => {
      

      chai.request(server)
          .get(`/candidates?skills=${skillNamesToInsert.join(',')}`)
          .end((err, res) => {
                console.log("here");
                res.should.have.status(200);
               
            done();
          });
    });
   
    it('it should trim GET parameters', (done) => {
      chai.request(server)
          .get(`/candidates?skills=${skillNamesToInsert.join(' , ')}`)
          .end((err, res) => {
                res.should.have.status(200);
                res.body["data"].should.be.a('array').to.deep.contain({attributes: {firstName: "John" }});
            done();
          });
    });



    

    it('it should return 400 responce if skills get parameter not exist', (done) => {
      chai.request(server)
          .get('/candidates')
          .end((err, res) => {
                res.should.have.status(400);
                expect(res.body.errors[0].msg).to.equal("Invalid value");
                expect(res.body.errors[0].param).to.equal("skills");
                done();
          });
    });

    it('it should return 400 responce if skills get parameter is empty', (done) => {
      chai.request(server)
          .get('/candidates?skills')
          .end((err, res) => {
                res.should.have.status(400);
                expect(res.body.errors[0].msg).to.equal("Invalid value");
                expect(res.body.errors[0].param).to.equal("skills");
                done();
          });
    });

    
});