const person = {
  name: ['code', 'mafia'],
  age: 32,
  gender: 'free',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};
const ageKey ='age';
person[ageKey] = 12;
console.log(person.age);
person.getFullName();
