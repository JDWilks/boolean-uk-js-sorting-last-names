// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov

const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

// - Have a prompt that adds your last name to the array

names.push(prompt("Enter your name"))

// - Have an output that has the names sorted alphabetically

names.sort()

alert(names.sort())

// - Have an output that tells you what is the position of your name in the sorted array

names.indexOf("Jonathon")

alert(names.indexOf("Jonathon"))

// - Have an output that Uppercase's all names in the array

const uppercased = names.map(name => name.toUpperCase());

// Let's take it a step further and group each sorted name with its upper-cased one in a sub-array, which in its turn will go inside another array to group it all together. 

// It should look like this in your output:

// [  ["Surname A", "SURNAME A"], ["Surname B", "SURNAME B"] ...other names ]

// Output the result to the console.

let newArray = [[],[],[],[],[],[]]

for(var i = 0; i < newArray.length; i++){
    newArray[i].push(uppercased[i]);
    newArray[i].push(names[i]);
}