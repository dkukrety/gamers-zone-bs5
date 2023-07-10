let hasEnoughHealth = true;
let hasEnoughAmmo = true;
let canProceed = hasEnoughHealth && hasEnoughAmmo;
console.log("Can proceed? " + canProceed);

let hasEnoughLives = true;
let hasEnoughCurrency = false;
let canContinue = hasEnoughLives || hasEnoughCurrency;
console.log("Can continue playing? " + canContinue);

let isInvincible = false;
let isVulnerable = !isInvincible;
console.log("Is vulnerable? " + isVulnerable);

let hasKey = true;
let hasAccess = true;
let canEnter = hasKey && hasAccess;
console.log("Can enter the room? " + canEnter);

let hasShield = false;
let hasHealthPotion = true;
let canHeal = hasShield || hasHealthPotion;
console.log("Can heal? " + canHeal);

let hasSword = true;
let noSword = !hasSword;
console.log("Do not have a sword? " + noSword);

