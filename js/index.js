// Iteration 1: Names and Input
//1.1 Create a variable "hacker1" with the driver's name
let hacker1 = "Kilimanjaroto";
//1.2 Print `"The driver's name is XXXX"`
console.log(`The driver's name is ${hacker1}`);
//1.3 Create a variable `hacker2` with the navigator's name
let hacker2 = "Sara";
//1.4 Print `"The navigator's name is YYYY"`
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driverlength = hacker1.length;
let naviglength = hacker2.length;
if (driverlength > naviglength) {
    console.log(`The driver has the longest name, it has ${driverlength} characters`);
}
else if (driverlength < naviglength) {
    console.log(`It seems that the navigator has the longest name, it has ${naviglength}  characters`);
}
else {
    console.log(`Wow, you both have equally long names,${driverlength} characters`);
}


// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let capitalName = "";
for (let i = 0; i < driverlength; i++) {
    capitalName = capitalName + hacker1[i].toUpperCase() + " ";
}
console.log(capitalName.trim());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = "";

for (let j = naviglength - 1; j >= 0; j--) {
    reverseName = reverseName + hacker2[j];
}
console.log(reverseName);

console.log( hacker1.charCodeAt(0), hacker1.charCodeAt(1));

//3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

if(hacker1.localeCompare(hacker2)== -1){
  console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2)== 1){
    console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }

