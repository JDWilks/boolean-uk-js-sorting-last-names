// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov

const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

// - Have a prompt that adds your last name to the array

names.push(prompt("Enter your name"))

// - Have an output that has the names sorted alphabetically

names.sort()

// alert(names.sort())

console.log(names.sort())

// - Have an output that tells you what is the position of your name in the sorted array

names.indexOf("Jonathon")

alert(names.indexOf("Jonathon"))

alert("Your index is " + names.indexOf("Jonathon"))

// - Have an output that Uppercase's all names in the array

const uppercased = names.map(name => name.toUpperCase());

alert(uppercased)

// for use loop

// Let's take it a step further and group each sorted name with its upper-cased one in a sub-array, which in its turn will go inside another array to group it all together. 

// It should look like this in your output:

// [  ["Surname A", "SURNAME A"], ["Surname B", "SURNAME B"] ...other names ]

// Output the result to the console.



// >>>>>>>>> below works but not correct / not flexible <<<<<<<<<

// let newArray = [[],[],[],[],[],[]]

// for(var i = 0; i < newArray.length; i++){
//     newArray[i].push(uppercased[i]);
//     newArray[i].push(names[i]);
// }

// console.log(newArray)

// >>>>>>>>>> the below works thanks to Rico <<<<<<<<<<<<

let mainArray = [] 

// creating outer array

for(var i = 0; i < names.length; i++){

    let tempArray = []

    // creating temporary array to store each variable in

    tempArray.push(uppercased[i]);

    // pushing the first item in uppercased to tempArray

    tempArray.push(names[i]);

    // pushing the first item in names to tempArray

    mainArray.push(tempArray);

    // pushing tempArray into mainArray
}

console.log(mainArray)

    // loggin the mainArray



// >>>>>>> giving me 2 arrays

let newArray = [];
newArray.push(names);
newArray.push(uppercased);
console.log(newArray);

// >>>>>>>> giving me 2 arrays

let newArray = [];
newArray.push(names,uppercased);
console.log(newArray);

// >>>>>>>> giving me 2 arrays

