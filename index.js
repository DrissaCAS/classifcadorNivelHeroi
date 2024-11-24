let nameHero = prompt("Enter the hero is name: ")
let xpHero = prompt("Enter hero experience level: ")

let level = " "

if (xpHero <= 1000 ) {
    level = 'iron';
} else if (xpHero <= 2000) {
    level = 'bronze';
} else if (xpHero <= 5000) {
    level = 'silver';
} else if (xpHero <= 7000) {
    level = 'gold';
} else if (xpHero <= 8000) {
    level = 'platinum';
} else if (xpHero <= 9000) {
    level = 'ascendant';
} else if (xpHero <= 10000) {
    level = 'immortal';
} else {
    level = 'radiant';
}

console.log("The hero " + nameHero + " is at " + level + " level.");
