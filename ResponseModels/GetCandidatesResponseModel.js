class GetCandidateResponseModel {
    type;
    id;
    attributes;
    constructor(paramObj) {
        
            this.type = 'candidates',
            this.id = paramObj._id,
            this.attributes = {
                firstName: paramObj.firstName,
                lastName: paramObj.lastName,
                email: paramObj.email,
                skills: paramObj.skills
            }
        }
    }

 

module.exports = GetCandidateResponseModel; 