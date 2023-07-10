let hasShield = 1;  // Represented in binary as 0001
let hasSword = 2;   // Represented in binary as 0010
let hasBoth = hasShield & hasSword;
console.log("Has both shield and sword? " + Boolean(hasBoth));

let permission1 = 0b110; // Binary representation: 110
let permission2 = 0b101; // Binary representation: 101
let result = permission1 & permission2;
console.log("Result: " + result.toString(2)); // Binary representation: 100

let hasAttackAbility = 1;     // Represented in binary as 0001
let hasDefenseAbility = 2;    // Represented in binary as 0010
let hasHealingAbility = 4;    // Represented in binary as 0100

let overallAbilities = hasAttackAbility | hasDefenseAbility | hasHealingAbility;
console.log("Overall abilities: " + overallAbilities);

let permission3 = 0b110; // Binary representation: 110
let permission4 = 0b101; // Binary representation: 101
let result2 = permission3 | permission4;
console.log("Result: " + result2.toString(2)); // Binary representation: 111


let hasBow = 1;         // Represented in binary as 0001
let hasCrossbow = 2;    // Represented in binary as 0010
let hasEither = hasBow ^ hasCrossbow;
console.log("Has either bow or crossbow? " + Boolean(hasEither));

let permission5 = 0b110; // Binary representation: 110
let permission6 = 0b101; // Binary representation: 101
let result3 = permission5 ^ permission6;
console.log("Result: " + result3.toString(2)); // Binary representation: 011

let currentHealth = 100;
let complementHealth = ~currentHealth;
console.log("Complement of current health: " + complementHealth);

let permission = 0b110; // Binary representation: 110
let result4 = ~permission;
console.log("Result: " + result4.toString(2)); // Binary representation: -111 (in two's complement form)

let attackPower = 10;   // Represented in binary as 00001010
let upgradedAttack = attackPower << 2;   // Shifted left by 2 positions: 00101000
console.log("Upgraded attack power: " + upgradedAttack);

let value = 0b101; // Binary representation: 101
let shiftAmount = 2;
let result5 = value << shiftAmount;
console.log("Result: " + result5.toString(2)); // Binary representation: 10100


let levelDifficulty = 12;   // Represented in binary as 00001100
let decreasedDifficulty = levelDifficulty >> 2;   // Shifted right by 2 positions: 00000011
console.log("Decreased level difficulty: " + decreasedDifficulty);

let value2 = 0b10101; // Binary representation: 10101
let shiftAmount2 = 2;
let result6 = value2 >> shiftAmount2;
console.log("Result: " + result6.toString(2)); // Binary representation: 101


let score = -500;
let absoluteScore = score >>> 0;
console.log("Absolute score: " + absoluteScore);

let value3 = 0b10101; // Binary representation: 10101
let shiftAmount3 = 2;
let result7 = value >>> shift
console.log("Result: " + result7.toString(2)); // Binary representation: 101

