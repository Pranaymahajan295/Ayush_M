let name = "Alice";
let age = 25;

// Function to check if a person is an adult
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Print the person's details and check if they are an adult
console.log("Name: " + name);
console.log("Age: " + age);

if (isAdult(age)) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is not an adult.");
}

// Loop to print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}