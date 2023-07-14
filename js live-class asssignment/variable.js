// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

// let data = ["amit", 25, true, 56, false, "ankit"];
// for (let i in data){
//     console.log(`${i}. ${data[i]} : ${typeof data[i]}`);
//  }



//2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// let firstname = "Amit";
// let lastname = "Prajapati";
// let maritalstatus = "Unmarried";
// let country = "India";
// let age = 25;
// console.log(`My Name is ${firstname} ${lastname}`);
// console.log(`I'm from ${country}`);
// console.log(`I'm ${age} year old and my marital status is ${maritalstatus}`);


// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

// const courses = ["python", "java", "html", "css", "javascript", "react"];
// const newcourses = [];
// for (let i in courses){
//     newcourses.push(courses[i].toUpperCase());
// }
// console.log(newcourses);

// 4. Check if the string contains a word Script using includes() method.

// const courses = ["python", "java", "html", "css", "javascript", "react"];
// console.log(courses.includes("html"));
// console.log(courses.includes("css"));
// console.log(courses.includes("c++"));

// const names = ["amit", "ankit", "anurag", "anupam"];
// for(let i in names){
//     console.log(names[i].includes('i'));
// }


// 5. Split the string into an array using split() method

// const courses = "my name is Amit Prajapati";
// console.log(courses.split(""));


// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// const link ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(link.split(','));


// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

// const link ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(link.lastIndexOf("Google"));

// const courses = "my name is Amit Prajapati";
// console.log(courses.lastIndexOf("Amit"));


// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end  a sentence with because is a conjunction'.

// let sentence = 'Use search to find the position of the first occurrence of the word because in the following sentence You cannot end a sentence with because is a conjunction.'
// console.log(sentence.search("the"));

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

// let myname = "               Amit kumar Prajapati           ";
// console.log(myname);
// console.log(myname.trim());


// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.

// var loggedin = false;
// loggedin ? console.log("home page") : console.log("login first")

// var user = false;
// user ? console.log("user found") : console.log("user not found")

// var loggedin = true;
// loggedin ? console.log("home page") : console.log("login first")

// var user = true;
// user ? console.log("user found") : console.log("user not found")


// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

// -4 > 3 ? console.log("truthy statement") : console.log("falsy statement")
// -4 >= 3 ? console.log("truthy statement") : console.log("falsy statement")
// -4 < 3 ? console.log("truthy statement") : console.log("falsy statement")
// -4 <= 3 ? console.log("truthy statement") : console.log("falsy statement")
// -4 == 4 ? console.log("truthy statement") : console.log("falsy statement")
// -4 === 4 ? console.log("truthy statement") : console.log("falsy statement")
// -4 != 4 ? console.log("truthy statement") : console.log("falsy statement")
// -4 !== 4 ? console.log("truthy statement") : console.log("falsy statement")
// -4 != '4' ? console.log("truthy statement") : console.log("falsy statement")
// -4 !== '4' ? console.log("truthy statement") : console.log("falsy statement")
// -4 === '4' ? console.log("truthy statement") : console.log("falsy statement")

// let var1 = "python";
// let var2 = "jagron";
// console.log(`length of variable 1 is; ${var1.length}`)
// console.log(`length of variable 2 is; ${var2.length}`)

// var1.length > 7 ? console.log("Truthy value") : console.log("Falsy value")
// var2.length > 7 ? console.log("Truthy value") : console.log("Falsy value")
//  var2.length != var1.length ? console.log("Truthy value") : console.log("Falsy value")

// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.


// let now = new Date();
// console.log(now.getYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now);
// console.log(now.toString());

// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// function add(a, b){
//     let sum = a + b;
//     console.log(sum)
// }
// add(5 ,9);

// function triangle(b, h){
//     let area = 0.5 * b * h;
//     console.log(area);
// }
// triangle(10, 5);

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// function slope(x1, x2, y1, y2){
//     let m = (y2-y1)/(x2-x1);
//     console.log(m);
// }
// slope(2, 6, 2, 10);

// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2



// let i = 0;
// while(i % 2 == 0){
//     console.log(i);
//     i = i + 1;
// }



// let arr =[11, 12 ,13, 14, 15 ,16]
// for (let num of arr){
//     console.log(num);
// }


// let con = ["India", "Sweden", "Norway", "Iceland"] 
// for (let cont of con){
//     console.log(cont);
// }

// let con = ["India", "Sweden", "Norway", "Iceland"] 
// let con2 = []
// for (let cont of con){
//     con2.push(cont.toUpperCase());
// }
// console.log(con2);























