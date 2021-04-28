// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov

const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

// - Have a prompt that adds your last name to the array

names.push(prompt("Enter your name"))

// - Have an output that has the names sorted alphabetically

names.sort()

// - Have an output that tells you what is the position of your name in the sorted array

let last_element = names[names.length - 1];

// - Have an output that Uppercase's all names in the array

string = names.join(' ').toUpperCase();

