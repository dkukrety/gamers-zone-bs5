let levels = [
    { level: 0, name: "noobs" },
    { level: 1, name: "beginner" },
    { level: 2, name: "amateur" },
    { level: 3, name: "intermediate" },
    { level: 4, name: "expert" }
]

for (let level of levels) {
    // console.log(levels[level])
    for (let temp in level) {
        console.log(level[temp])
    }
}


// for (let level of levels) {
//     console.log(level)
// }

// for (let level = 0; level < levels.length; level = level + 1) {
//     console.log(levels[level].name)
// }

// let temp = 0;
// while (temp < levels.length) {
//     console.log(levels[temp].name)
//     temp++;
// }

// let temp2 = 0;
// do {
//     console.log(levels[temp2].name)
//     temp2++;
// } while (temp2 < levels.length);

// let games = [
//     "Call of Duty",
//     "Fortnite",
//     "Assasians Creed"
// ]