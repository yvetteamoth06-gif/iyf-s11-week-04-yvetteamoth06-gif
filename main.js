// Variable declarations
let name = "Yvette Amoth";
let age = 22;
const birthYear = 2005;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

// Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

let firstName = "Yvette";
let lastName = "Amoth";

// Concatenation
let fullName = Yvette+ " Akinyi" + Amoth;

// Template literals (preferred)
let greeting = `Hello, ${Yvette}!`;
let message = `Your name has ${Yvette.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Yvette"));

// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Function declaration
function greet(name) {
    return `Hello, ${Yvette}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
// Function Declaration
function calculateArea(width, height) {
    return width * height;
}

// Example usage:
console.log(calculateArea(5, 10)); // Output: 50

// Arrow Function
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// Example usage:
console.log(celsiusToFahrenheit(0));   // Output: 32
console.log(celsiusToFahrenheit(100)); // Output: 212

// Function Expression
const isEven = function(number) {
    return number % 2 === 0;
};

// Example usage:
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// Function Expression
const isEven = function(number) {
    return number % 2 === 0;
};

// Example usage:
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// Arrow Function with Body
const getInitials = (fullName) => {
    return fullName
        .split(" ")                  // Splits "John Doe" into ["John", "Doe"]
        .map(word => word.charAt(0)) // Gets ["J", "D"]
        .join("")                    // Joins them to "JD"
        .toUpperCase();              // Normalizes to uppercase
};

// Example usage:
console.log(getInitials("John Doe"));         // Output: "JD"
console.log(getInitials("yvette skylar amoth")); // Output: "YSA"

  // Function Declaration
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

// Function with a Default Parameter
const calculateTip = (bill, tipPercent = 15) => {
    return bill * (tipPercent / 100);
};

// Example usage:
console.log(calculateTip(100));       // Output: 15  (uses default 15%)
console.log(calculateTip(100, 20));   // Output: 20  (uses custom 20%)
console.log(calculateTip(50, 10));    // Output: 5   (uses custom 10%)

Here are the solutions for the next steps under **Task 7.4: Control Flow**, moving from your `if/else` grade example into **Switch Statements**, **Loops**, and the **four practice programs**!

---

### Exercise 2: Switch Statements

This is perfect for when you have a single variable comparing against multiple specific, static values. Let's complete the `getDayName` function:

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

// Example usage:
console.log(getDayName(0)); // Output: Sunday
console.log(getDayName(4)); // Output: Thursday
console.log(getDayName(7)); // Output: Invalid day
#### 1.Print new numbers 1-100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

#### 2. Print only even numbers 1-50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

#### 3. FizzBuzz (1-100)

For each number, we check if it is divisible by both 3 and 5 first (using `% 15 === 0` or `% 3 === 0 && % 5 === 0`), then check them individually.
```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

```
#### 4. Print a triangle of stars

To print a triangle of stars (e.g., 5 rows high), we can use a loop that builds a string of stars step-by-step.

``javascript
const rows = 5;
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}

/* 
Output:
*
**
***
****
*****
*/

```


// 1. Core Math Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    // Prevent division by zero
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// 2. Main Calculator Router
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// --- Test Cases ---
console.log(calculate(10, "+", 5));  // Output: 15
console.log(calculate(10, "-", 5));  // Output: 5
console.log(calculate(10, "*", 5));  // Output: 50
console.log(calculate(10, "/", 5));  // Output: 2
console.log(calculate(10, "/", 0));  // Output: Error: Cannot divide by zero

Task 8.1: Arrays 🟢
Time: 40 minutes

Exercise 1: Array Basics

Here are the complete solutions for the **Build** challenges in **Task 8.1: Arrays**, utilizing the core array methods (`map`, `filter`, `find`, and `reduce`) you just reviewed!

---

### 1. Double all numbers in an array

We use `.map()` to transform each element by multiplying it by $2$.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); 
// Output: [2, 4, 6, 8, 10]

```

---

### 2. Filter out negative numbers

We use `.filter()` to keep only the numbers that are greater than or equal to $0$ (which effectively removes negative numbers).

```javascript
const mixedNumbers = [10, -5, 3, -1, 0, 8];

const positiveNumbers = mixedNumbers.filter(num => num >= 0);

console.log(positiveNumbers); 
// Output: [10, 3, 0, 8]

```

---

### 3. Find the first number greater than 10

We use `.find()` to return the very first element in the array that matches our condition.

```javascript
const scores = [4, 9, 17, 2, 25, 8];

const firstGreaterThanTen = scores.find(num => num > 10);

console.log(firstGreaterThanTen); 
// Output: 17

```

---

### 4. Calculate the product of all numbers

We use `.reduce()` to multiply each number together sequentially. Note that we set our initial value parameter to $1$ (since multiplying by $0$ would result in $0$).

```javascript
const factors = [1, 2, 3, 4, 5];

const product = factors.reduce((accumulator, num) => accumulator * num, 1);

console.log(product); 
// Output: 120 (1 * 2 * 3 * 4 * 5)

```
You’ve got a solid grasp of how objects, methods, and object iteration work in JavaScript! Let's put these concepts directly to use by jumping into the next exercise of your study plan.

Here are **three practice challenges** designed to test your knowledge of **Task 8.2: Objects**!

---

### Challenge 1: Create a Book Object

Create a `book` object with properties for `title`, `author`, `yearPublished`, and `genres` (an array). Then:

1. Log the book's title and its first genre.
2. Update the `yearPublished` to a new year.
3. Add a new property `isBestSeller` set to `true`.

```javascript
// 1. Creating the object
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937,
    genres: ["Fantasy", "Adventure"]
};

// Accessing properties
console.log(book.title);              // Output: The Hobbit
console.log(book.genres[0]);          // Output: Fantasy

// 2. Modifying properties
book.yearPublished = 1938;

// 3. Adding a new property
book.isBestSeller = true;

console.log(book);

```

---

### Challenge 2: Object Methods & `this`

Create a `user` object with `name` and `score` properties, and a method `incrementScore` that increases their score by $1$ and prints a message.

> **Note on `this`:** Remember that shorthand methods (like `incrementScore() {}`) have access to the object's context via `this`, while arrow functions do not!

```javascript
const user = {
    name: "Alex",
    score: 10,
    
    // Method using shorthand syntax
    incrementScore() {
        this.score += 1;
        console.log(`${this.name}'s new score is ${this.score}`);
    }
};

user.incrementScore(); // Output: Alex's new score is 11

```

---

### Challenge 3: Iterating & Summing Up Properties

Using the `scores` object provided in your exercise, let's write a quick function that calculates the average of all the scores using `Object.values()`.

```javascript
const scores = {
    math: 95,
    english: 88,
    science: 92
};

function calculateAverageScore(scoreObj) {
    const scoreValues = Object.values(scoreObj); // [95, 88, 92]
    
    // Sum them up using reduce
    const total = scoreValues.reduce((sum, score) => sum + score, 0);
    
    // Return average
    return total / scoreValues.length;
}

console.log(calculateAverageScore(scores).toFixed(2)); // Output: 91.67

```
Here is the completed code for **Task 8.3: Array of Objects (Working with Real Data)**! All the array method callbacks are fully implemented.

```javascript
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
// Output: ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
/* Output: 
[
  { name: "Alice", age: 22, grade: 85, major: "CS" },
  { name: "Charlie", age: 23, grade: 90, major: "CS" },
  { name: "Diana", age: 21, grade: 88, major: "Physics" },
  { name: "Eve", age: 22, grade: 95, major: "CS" }
]
*/

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
// Output: { name: "Charlie", age: 23, grade: 90, major: "CS" }

// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
// Output: 86

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");

// 6. Sort by grade (highest first)
// Note: [...students] creates a shallow copy so we don't mutate the original array.
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
// Output: true (Eve has 95)

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
// Output: true

```

---

### Key Points:

* **`.reduce()` Average:** We sum up the grades starting from `0`, and then divide the final sum by `students.length` (which is `5`).
* **`.sort()` Copying:** Using the spread operator `[...students]` is a great practice here! It prevents `.sort()` from altering the order of your original `students` array.

Here is the complete and robust implementation of your **Student Grade Tracker** mini-project. It covers all requirements, utilizing objects, arrays, helper methods, iteration, and template strings to match the expected outputs exactly!

```javascript
const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        // grades is an object: { math: 85, english: 90, ... }
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        // Return student object or null if not found
        return this.students.find(student => student.name.toLowerCase() === name.toLowerCase()) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return 0;
        
        const gradesArray = Object.values(student.grades);
        if (gradesArray.length === 0) return 0;
        
        const sum = gradesArray.reduce((acc, grade) => acc + grade, 0);
        const avg = sum / gradesArray.length;
        
        // Return as a number rounded to two decimal places
        return Math.round(avg * 100) / 100;
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;
        
        this.students.forEach(student => {
            // Support case-insensitive subject lookup (e.g., "math" vs "Math")
            const matchKey = Object.keys(student.grades).find(key => key.toLowerCase() === subject.toLowerCase());
            if (matchKey !== undefined) {
                total += student.grades[matchKey];
                count++;
            }
        });
        
        if (count === 0) return 0;
        const avg = total / count;
        return Math.round(avg * 100) / 100;
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;
        
        let topStudent = null;
        let highestAverage = -1;
        
        this.students.forEach(student => {
            const avg = this.getStudentAverage(student.name);
            if (avg > highestAverage) {
                highestAverage = avg;
                topStudent = student;
            }
        });
        
        return topStudent ? topStudent.name : null;
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => {
            return this.getStudentAverage(student.name) < 70;
        });
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student "${name}" not found.`;
        
        let report = `==============================\n`;
        report += `REPORT CARD: ${student.name.toUpperCase()}\n`;
        report += `==============================\n`;
        
        for (const [subject, score] of Object.entries(student.grades)) {
            const letter = this.getLetterGrade(score);
            // Pad the subject name for cleaner formatting alignment
            const paddedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
            report += `${paddedSubject}: ${score} (${letter})\n`;
        }
        
        const overallAverage = this.getStudentAverage(name);
        const overallLetter = this.getLetterGrade(overallAverage);
        
        report += `------------------------------\n`;
        report += `Overall Average: ${overallAverage} (${overallLetter})\n`;
        report += `==============================`;
        
        return report;
    }
};

// --- Test Implementation ---
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(`Alice's Average:`, gradeTracker.getStudentAverage("Alice"));       // Output: 91.67
console.log(`Math Class Average:`, gradeTracker.getSubjectAverage("math"));     // Output: 75.67
console.log(`Top Student:`, gradeTracker.getTopStudent());                      // Output: Alice
console.log(`Struggling Students:`, gradeTracker.getStrugglingStudents().map(s => s.name)); // Output: ["Charlie"]

console.log("\n" + gradeTracker.generateReportCard("Alice"));

```

---

### Highlights of this design:

* **Precision Rounding:** Methods like `getStudentAverage` and `getSubjectAverage` use `Math.round(val * 100) / 100` rather than `.toFixed(2)` so that they return clean numbers rather than strings.
* **Case Insensitivity:** Both `getStudent` and `getSubjectAverage` normalize text inputs using `.toLowerCase()` so that looking up `"Alice"` or `"math"` works gracefully even with different cases.
* **Clean Report Card Layout:** `generateReportCard` capitalizes subject names dynamically and formats grades alongside their calculated letter counterparts inside a console-friendly layout box.
Here are the complete implementations and solutions for your **Daily Challenges (Days 1 to 5)** from [Week 4 JS Fundamentals](https://github.com/Chacha-A-Chacha/IYF-weekend_academy/blob/main/season-11/tasks/week-04-js-fundamentals/README.md#daily-challenges)!

---

## Day 1: FizzBuzz 🟢

Prints numbers from $1$ to $100$ with substitution rules for multiples of $3$, $5$, or both.

```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

```

---

## Day 2: Reverse a String 🟢

Two different ways to reverse a string in JavaScript:

### Approach A: Built-in Methods

An elegant, one-line solution that converts the string to an array, reverses it, and joins it back.

```javascript
const reverseStringBuiltIn = (str) => str.split("").reverse().join("");

console.log(reverseStringBuiltIn("hello")); // Output: "olleh"

```

### Approach B: Decrementing Loop

Loops through the string backward from the last character to the first, building a new string.

```javascript
function reverseStringLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseStringLoop("hello")); // Output: "olleh"

```

---

## Day 3: Find Largest Number 🟢

Finds the largest number in an array without using `Math.max()`.

### Approach A: Standard Loop

Tracks the maximum value found so far as it iterates through the array.

```javascript
function findLargestLoop(arr) {
    if (arr.length === 0) return null;
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findLargestLoop([1, 5, 3, 9, 2])); // Output: 9

```

### Approach B: Using `.reduce()`

A more functional programming approach that compares the running accumulator with each element.

```javascript
const findLargestReduce = (arr) => {
    if (arr.length === 0) return null;
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
};

console.log(findLargestReduce([1, 5, 3, 9, 2])); // Output: 9

```

---

## Day 4: Remove Duplicates 🟡

Two approaches to filter out duplicate elements from an array.

### Approach A: Using `Set`

The cleanest and most modern approach. A `Set` naturally stores unique values only. We then spread it back into a standard array.

```javascript
const removeDuplicatesSet = (arr) => [...new Set(arr)];

console.log(removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

```

### Approach B: Using `.filter()`

Keeps elements only if their *first* occurrence index matches their current position index.

```javascript
const removeDuplicatesFilter = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

```

---

## Day 5: Palindrome Checker 🟡

This function checks if a word or phrase reads the same backward as forward. It sanitizes the string by converting it to lowercase and stripping away all non-alphanumeric characters (like spaces and punctuation).

```javascript
function isPalindrome(str) {
    // Convert to lowercase and remove spaces/non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Reverse the clean string
    const reversedStr = cleanStr.split("").reverse().join("");
    
    // Check if they match
    return cleanStr === reversedStr;
}

console.log(isPalindrome("racecar"));                      // Output: true
console.log(isPalindrome("hello"));                        // Output: false
console.log(isPalindrome("A man a plan a canal Panama"));  // Output: true

```
