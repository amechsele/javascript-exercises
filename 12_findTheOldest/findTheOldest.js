const findTheOldest = function(array) {
	let oldest = {};
	let oldestAge = 0;
	array.forEach((person) => {
								let birth;
								let death;
								let age;

								if (person.yearOfDeath == undefined){
									death = new Date().getFullYear();
								}else{
									death = person.yearOfDeath;
								}
								age = death - person.yearOfBirth;
								console.log(`${person.name}\'s age is ${age}`)
								console.log(`Oldest age is ${oldestAge}`)
								if ( age > oldestAge ){
									oldestAge = age;
									oldest = person;
								}	
							   })
	return oldest;

};


// Do not edit below this line
module.exports = findTheOldest;
