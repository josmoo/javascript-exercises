const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
            return (calculateAge(oldest) > calculateAge(person)) ? oldest : person
        }
    );
};

const calculateAge = function(person) {
    return (person.yearOfDeath == null) 
    ? (new Date().getFullYear() - person.yearOfBirth)
    : (person.yearOfDeath - person.yearOfBirth);
}


// Do not edit below this line
module.exports = findTheOldest;
