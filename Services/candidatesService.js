let candidates = require('../candidatesStorage');


const findCandidateBySkills = (skills) => {
    
    let candidatesGrades = [];
    for(let i = 0; i < candidates.length; i++) {
        let grade = 0;
        for(let j = 0; j < skills.length; j++) {
            if(candidates[i].skills.includes(skills[j]))
                grade++;               
        }
        if(grade === skills.length)
            return candidates[i];

        candidatesGrades.push({ candidate: candidates[i], grade: grade });    
    }
    
    // Find candidates with the highest grade - he has the best match
    let bestCandidateGrades = candidatesGrades.reduce((prev, current) => (prev.grade > current.grade) ? prev : current)
    if(bestCandidateGrades)
        return bestCandidateGrades.candidate;
    else
        return null    
};

const addNewCandidate = (candidate) => {
    candidates.push(candidate);
}

module.exports.findCandidateBySkills = findCandidateBySkills;
module.exports.addNewCandidate = addNewCandidate;
