

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

/*console.log(person.unshift());
console.log(person.unshift());
console.log(person.unshift());
console.log(person.unshift());

console.log(person.shift(0,1));

console.log(person);
console.log("\n");


// Creating a 2D array for a tic-tac-toe game board
var board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
  ];
  
  // Accessing and displaying the elements of the game board
  for (var i = 0; i < board.length; i++) {
    //for (var j = 0; j < board[i].length; j++) {
      console.log(board[i].flat());
    //}
    //console.log("\n");
  }
  console.log("\n");
  var num = [1,2,3,4,5];

  //here it returned the array
  console.log(num.map((item)=> item*item));

  console.log("\n");

  //it does not returned a array
  console.log("Even number only " + num.filter((item)=> item%2==0));

  var evenarr = num.filter((item)=> item%2==0);
  console.log(evenarr);
  evenarr[0]=9;
  console.log(evenarr);
  console.log(num);
  
  

  console.log("Even number only " + num.some((item)=> item%2==0));

  console.log("number 2 using find " + num.find((item)=> item==2));

  //console.log("number 2 using find " + num.reduce((item)=> item==2));

  //Self study array...

  //console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
//console.log(Object.keys(fruits)); // ['0', '1', '2', '5']

//we can add items at any index..in between items are empty..

num[9]=10;

console.log(num);
console.log(Object.keys(num));

// can reduce the lenght of array?
// Decreasing the length property does, however, delete elements.
num.length=2;
console.log(Object.keys(num));
/////////////shallow copy not clear...
//look into flat, flat(depth) and ... operator..
// looks for map, reduce, filter 

// reduce, and find...also,,
*/

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 50)); // 100
console.log([50].reduce(getMax, 100)); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

//[].reduce(getMax); // TypeError

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer,-1);

//sort, splice and slice...reverse, join...find..some findindex..every...

//objects.

















