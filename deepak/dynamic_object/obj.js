var games = [
    {
        name:"Game 1",
        genere:"Old",
        releaseDate:"someDate"
    },
]

function bodyLoad(event)
{
    event.preventDefault();
    // Create a new <div> element
    const divElement = document.createElement('div');

    // Set the class attribute
    divElement.className = 'card gz-h25px flex-fill';

    // Set the ID attribute
    divElement.id = 'div1';
    //divElement.innerHTML = "<h5 class="modal-title">Modal title</h5>";
    divElement.innerHTML = `<h1>${games[0].name}</h1><p>${games[0].genere}</p>`;

    document.getElementById("fav_games").appendChild(divElement);
    
}
function add(event)
{
    event.preventDefault();
    console.log("Adding Games");
    let tmp = {
        name:"Game2",
        genere:"New",
        releaseDate:"someDate"
    }

    games.push(tmp);

    // Create a new <div> element
    const divElement = document.createElement('div');

    // Set the class attribute
    divElement.className = 'card gz-h25px flex-fill';

    // Set the ID attribute
    divElement.id = 'div1';
    //divElement.innerHTML = "<h5 class="modal-title">Modal title</h5>";
    divElement.innerHTML = `<h1>${tmp.name}</h1><p>${tmp.genere}</p>`;

    document.getElementById("fav_games").appendChild(divElement);
    console.log(games);
}



