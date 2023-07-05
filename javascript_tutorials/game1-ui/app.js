let today = new Date();
let games = [{
    name: "Game 1",
    genre: "Old",
    releaseDate: today.getFullYear() + " - " + today.getMonth() + " - " + today.getDay()
}]
// Generate game cards dynamically
var gameCardContainer = document.getElementById("gameCardContainer");

games.forEach(addGames);
function addGames(game) {
    var card = document.createElement("div");
    card.className = "col-md-4";

    var cardContent = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${game.name}</h5>
            <p class="card-text"><strong>Genre:</strong> ${game.genre}</p>
            <p class="card-text"><strong>Release Date:</strong> ${game.releaseDate}</p>
          </div>
        </div>
      `;

    card.innerHTML = cardContent;
    gameCardContainer.appendChild(card);
}

document.getElementById("add-game").addEventListener("click", addGame);

const form = document.getElementById("gameForm");
function addGame() {

    console.log("add game called")
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add('was-validated')
    let name = document.getElementById("gameName").value;
    let genre = document.getElementById("genre").value;
    let releaseDate = document.getElementById("releaseDate").value;
    let game = { name, genre, releaseDate }
    games.push(game)
    addGames(game)
    // Clear the form fields
    document.getElementById("gameForm").reset();
    // Close the modal
    const modal = document.getElementById("addGameModal");
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();

}


form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
}, false)
