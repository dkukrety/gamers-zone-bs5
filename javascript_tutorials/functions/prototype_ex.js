function Player(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.game = "Cricket";
    this.details = function dummy() {
        return "He is a good player"
    };
}

let a = new Player("Mahendra", "Dhoni");
let b = new Player("Virat", "Kohli");
Player.prototype.getFullname = function () {
    return this.fname + " " + this.lname
}
console.log(b.getFullname())
console.log(a.getFullname())