var game = {
    name:"Manoj",
    games:['Call of duty','GTA','Assasin creed'],
};

console.log(Object.values(game));
console.log(Object.keys(game));


for (const [key, value] of Object.entries(game)) {
    console.log(`${key}: ${value}`);
  }

  //Object.entries(game).forEach((game)=>console.log(`${game[0]}  ${game[1]}`));

  // console.log(Object.entries(game));

  var temp = Object.entries(game);

  console.log(temp);

  // Check object destrucring...

  //Object.assign

  //object in operator..
  // [] to add new key...
  // "also to create new key"

  //Object.defineproperties....
