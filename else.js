/**********************************
 * if
 * Nested if
 * multiple if
 **********************************/

a = "maths"
b = "science"
c = "english"
d = "social"


if (a === "maths") {
    if (b !== "science") {
        console.log("inside b")
        if (c === "english") {
            console.log("inside all of them")
        } else {
            console.log("not inside all of them")
        }
    } else {
        console.log("not inside b")
    }
}

var n1 = 10
var n2 = 20
var n3 = 30

if (n1 && n2 > n3) {
    console.log("n3 is greater")

} else if (n1 && n3 < n2) {
    console.log("n2 is lesser")

} else if (n2 && n3 > n1) {
    console.log("n2 is greater")
}



/////////////////////////////////

//*****   Switch Case    *****///

/////////////////////////////////



var grade = 'D';
console.log("Entering switch block");
switch (grade) {

    case 'A':
        console.log("Good job");
        break;

    case 'B':
        console.log("Pretty good");
        break;

    case 'C':
        console.log("Passed");
        break;

    case 'D':
        console.log("Not so good");
        break;

    case 'F':
        console.log("Failed");
        break;

    default:
        console.log("Unknown grade");
        break;

}
console.log("Exiting switch block");





/********************************** 
 * For loop
 * For In
 * While loop
 * Do While
 * Map
 * Filter
 * Find
 ***********************************/



 /******
 * 
 * WHILE
 * 
 *******/


var array = [0, 4, 5, 4564, 6564, 7, 746, 8, 4564]
var count = 0, sum = 0;
while (count < array.length) {
    sum = sum + array[count];
    console.log(sum + "     " + array[count]);
    count++;
}


/***********
 * 
 * For in is only for objects
 * 
 *************/

var person = {fname:"John", lname:"Doe", age:25}; 
  
  var text = "";
  var x;
  for (x in person) {
    text += person[x] + " ";
   
  }
  
/////////////////////////////////


/******
 * 
 * Do While
 * 
 *******/

sum = 0;
count = 0;


do {
    sum = sum + array[count];
    console.log(sum + "     " + array[count]);
    count++;
} while (count < array.length)


/******
 * For Loop
 *******/


sum = 0;
count = 0;

for (var count = 0; count < array.length; count++) {
    sum = sum + array[count];
    console.log(sum + "     " + array[count]);
}


/******
 * 
 * Map
 * 
 *******/


sum = 0;

array.map((a) => {
    sum = sum + a;
    console.log(sum + "     " + a);
})

/******
 * 
 * Filter
 * 
 *******/

var a = array.filter((a, i) => {
    return a === 4564
})
console.log(a)


/******
 * 
 * Find
 * 
 *******/

var a = array.find((a, i) => {
    return a === 4564;
})
console.log(a)