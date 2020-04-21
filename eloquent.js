

for(var number= 1; number<=7 ;number++) {
  console.log(number("#"));
}

//
//
// // chessboard
// var size = 8; //this is the variable setting
//
// var board = "";//this is the empty string we're going to add either ' ' , '#' or newline
//
// for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
//   for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }
//
// // console.log(board);
//
//
// // question 1
//   let row = 7;
//  for (let i= 1 ; i <=row ; i++) {
//    for(let j=1 ; j<=i ; j++){
//      document.write("#");
//    }
//    document.write("<br>");
//  }
//
// // question 2
//   for (let num = 1 ; num <=100 ; num++) {
//   if (num % 3  == 0) {
//     document.write( num , "Fizz");
//
//   }
//   else if (num % 5 == 0) {
//     document.write (num , "Buzz") ;
//
//   }
//   else {
//     document.write (num , "FizzBuzz");
//   }
//
//   document.write("<br>");
// }
// // roll dice function from colt
//
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1 ;
//   console.log(`Rolled: ${roll}`);
// }
//
// //  password validator
// function isValidPassword(password, username) {
// if(password.length < 8) {
//   return false;
// }
//
// if(password.indexOf(" ") !== -1) {
//   return false;
// }
//
// if(password.indexOf(username) !== -1) {
//   return false;
// }
//
// return true ;
// }
//
// //  todo list
// // var todos = [];
// // var input = prompt("what would you like to do?");
// // while( input !== "quit") {
// // if(input === "list") {
// // console.log(todos);
// // }
// // else if(input === "new") {
// //
// //   var newTodo = prompt("Enter new todo");
// //   todos.push(newTodo);
// // }
// // else if(input === "delete") {
// //
// //   var newTodo = prompt("index of todos" + indexOf(todos));
// //   todos.slice(newTodo);
// // }
// // var input = prompt("what would you like to do?");
// //
// // }
// // console.log("Ok bye!");
//
// //  generate random cards and store in an object



function getCard() {
const cards = ["2","3","4","5","6","7","8","9","J","K","A"];
const newCard = Math.floor(Math.random() * cards.length);
const noCard = cards[newCard];

const style = ["heart" , "spades" , "diamonds" , "club"];
const newStyle = Math.floor(Math.random() * style.length);
const noStyle = style[newStyle];

return {value: noCard , style: noStyle};

}
