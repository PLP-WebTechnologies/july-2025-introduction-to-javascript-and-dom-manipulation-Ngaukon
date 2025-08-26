//Part 1: Mastering JavaScript Basics


//Grade evaluator
function checkGrade() {
    let marks = document.getElementById("marks").value;
    let message = "";

    if (marks > 90) {
        message = "Grade A";
    }
    else if (marks >= 75) {
        message = "Grade B"
    }
    else if (marks >= 50) {
        message = "Grade C"
    }
    else {
        message = "Grade F: (Fail)"
    }

    document.getElementById("grade").innerText = message;
}

//Part 1: Example 2 --> Age Checker
function checkAge() {
    let age = document.getElementById("ageInput").value;

    if (age >= 18) {
        document.getElementById("output").innerText = "You are an Adult.";
    }
    else {
        document.getElementById("output").innerText = "You are a Minor.";
    }
}



//Part 2: Example 1: Sum an array of numbers
function sumArray(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Usage
console.log(sumArray([1, 2, 3, 4, 5])); // 15

//part 2: Example 2: Reusable greeting
function greet(name, timeOfDay = "day") {
  return `Good ${timeOfDay}, ${name}!`;
}

// Usage
console.log(greet("Ngaukon", "morning")); // "Good morning, Ngaukon!"
console.log(greet("Paul"));              // "Good day, Paul!"



//part 3: Example 1: Iterating through an array with for
let fruits = ["apple", "banana", "cherry", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit #" + (i + 1) + ": " + fruits[i]);
}

//part 3: Example 2: Countdown with while
let count = 5;

while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

console.log("Blast off!");


//part 3: Example 3: Using forEach to generate dynamic content
let animals = ["Dog", "Cat", "Elephant", "Tiger"];
  let list = document.getElementById("list");

  animals.forEach(animal => {
    let li = document.createElement("li");
    li.textContent = animal;
    list.appendChild(li);
});// A (<ul id="list"></ul>) is needed in html side

