

var person = [
    {name:"Virat Kholi", profession:"Cricketer"},
    {name:"Elon Musk", profession:"Enterpreneur"},
    {name:"Arijit Singh", profession:"Singer"},
];

person.push({name:"Modi",profession:"politician"});

console.log(person);

console.log(person.shift());

//console.log(person.unshift({name:"Rahul",profession:"still budding politician"}));

console.log(person);
console.log(person.unshift({name:"Rahul",profession:"still budding politician"},{name:"Carry Minati",profession:"youtuber"}));
console.log(person);

console.log(person.unshift());
console.log(person.unshift());
console.log(person.unshift());
console.log(person.unshift());

console.log(person.shift(0,1));

console.log(person);


// Creating a 2D array for a tic-tac-toe game board
var board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
  ];
  
  // Accessing and displaying the elements of the game board
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      console.log(board[i][j]);
    }
    console.log("\n");
  }
  








