const turtle = {
    name: "Shelby",
    legs: 4,
    type: "amphibious",
    meal: 10,
    diet: "berries"
};

//bad code
function feed(animal) {
    return console.log(`Feed ${animal.name} ${animal.meal} times a day with ${animal.diet}.`)
}

feed(turtle);

//good code
function goodFeed(animal) {
    const { name, meal, diet } = animal;

    return console.log(`Feed ${name} ${meal}x a day with their food of choice which is ${diet}`)
}

goodFeed(turtle);