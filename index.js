// Numbers
// var number1 = 35;
// var number2 = 40;
// alert('My fav num is ' + number1 + number2);

// variable can contain letters, numbers, underscores, dollar sign
// can not start with number
// case sensitive

// // camel case
// var myFavoriteNumber
// // partial case
// var myFavoriteNumber
// // underscore - snake case
// var my_favorite_number

// var colors = ['red', 'blue', 'green'];
// var colors = new Array('red', 'blue', 'green');
// colors.push('orange');
// alert(colors);

// var numbers = [5, 77, 6, 43];
// alert(numbers.reverse());

// loops
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// var numbers = [33, 54, 76, 34, 2, 6];

// numbers.forEach(function(number) {
//   console.log(number);
// });
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// conditionals
// var var1 = 3;
// var var2 = 4;
// if (var1 == var2 || var1 == 3) {
//   console.log('this is true');
// } else {
//   console.log('seriously?');
// }
// var fruit = 'pony';

// switch (fruit) {
//   case 'banana':
//     alert('Kace hates bananas');
//     break;
//   case 'apple':
//     alert('Kace loves apples');
//     break;
//   case 'orange':
//     alert('Kace kinda likes oranges');
//     break;
//   default:
//     alert('Is that even a fruit?');
// }

// objects
// object literal
// var person = {
//   firstName: 'Jim',
//   lastName: 'Bob',
//   age: 87,
//   children: ['Jim', 'Jimmy', 'James', 'Bozo'],
//   addres: {
//     street: '555 Redneck Way',
//     city: 'Podunk',
//     state: 'AL'
//   },
//   fullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };

// console.log(person.fullName());

// object constructor
// var apple = new Object();
// apple.color = 'red';
// apple.shape = 'square';

// apple.describe = function() {
//   return (
//     'An apple is the color ' + this.color + ' and is the shape ' + this.shape
//   );
// };

// console.log(apple.describe());

// constructor pattern
// function Fruit(name, color, shape) {
//   this.name = name;
//   this.color = color;
//   this.shape = shape;

//   this.describe = function() {
//     return (
//       'A ' +
//       this.name +
//       ' is the color ' +
//       this.color +
//       ' and is the shape ' +
//       this.shape
//     );
//   };
// }

// var apple = new Fruit('apple', 'red', 'round');
// var melon = new Fruit('melon', 'green', 'oval');
// console.log(melon.describe());

// var users = [
//   {
//     name: 'Jim Bob',
//     age: 87
//   },
//   {
//     name: 'Mark Smith',
//     age: 44
//   },
//   {
//     name: 'Shelly Williams',
//     age: 20
//   }
// ];

// console.log(users[0].name);
// function doClick() {
//   alert('ouch');
// }

// function changeText(id) {
//   var heading = document.getElementById('heading');
//   heading.innerHTML = 'You clicked';
// }

// function showDate() {
//   var time = document.getElementById('time');
//   time.innerHTML = Date();
// }

// function clearDate() {
//   var time = document.getElementById('time');
//   time.innerHTML = '';
// }

// forms
function changeBackground(x) {
  var heading = document.getElementById('heading');
  heading.style.color = x.value;
}

function validateForm() {
  var firstName = document.forms['myForm']['firstName'].value;
  if (firstName == null || firstName == '') {
    alert('First Name is required');
    return false;
  }
  if (firstName.length < 3) {
    alert('First Name too short');
    return false;
  }
}
