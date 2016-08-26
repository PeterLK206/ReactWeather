var names = ['Peter', 'Samantha', 'Sofia'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Peter'));

var person = {
  name: 'Peter',
  greet: function() {
  names.forEach((name) => {
  console.log(this.name + ' says hi to' + name);
});
}
};

person.greet();
