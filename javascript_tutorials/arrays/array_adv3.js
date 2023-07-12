// Multi dimensional array
let leaderboard = [
    ["Player 1", 1000],
    ["Player 2", 800],
    ["Player 3", 1200],
    ["Player 4", 950],
    ["Player 5", 1100]
];

console.log(leaderboard[0][0]); // Output: "Player 1"
console.log(leaderboard[2][1]); // Output: 1200

let threeDArray = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
console.log(threeDArray[0][1][0]); // Output: 3
console.log(threeDArray[1][0][1]); // Output: 6
threeDArray[0][1][0] = 9;
console.log(threeDArray);


let gameWorld = [
    // Zone 1
    [
        ["Player 1", [10, 20, 30]],
        ["Player 2", [15, 25, 35]]
    ],
    // Zone 2
    [
        ["Player 3", [50, 60, 70]],
        ["Player 4", [55, 65, 75]],
        ["Player 5", [45, 55, 65]]
    ],
    // Zone 3
    [
        ["Player 6", [80, 90, 100]]
    ]
];

console.log(gameWorld[0][1][0]); // Output: "Player 2"
console.log(gameWorld[1][2][1]); // Output: [45, 55, 65]
