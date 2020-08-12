let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();
chai.use(chaiHttp);

describe('/GET book', () => {
    
  it('it should GET all the books', (done) => {
      chai.request(server)
          .get('/candidates/search?skills=mongo')
          .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
            done();
          });
    });
});