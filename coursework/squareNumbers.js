// / This function is defined to calculate the square of numbers  from 1 to 10.
// //  It starts a for loop that iterates from 1 to 10 using the variable i.
// Inside the loop:
//  It calls the square() function with the current value of i.
//  It assigns the result of square(i) to the variable squared
// // It logs a message to the console indicating the square of the current number (i) and its result. 
// // This function takes a number (num) as an argument.
// It calculates and returns the square of the input number by 
// multiplying it by itself (num * num).
function squareNumbers() {
    for (let i = 1; i <= 10; i++) {
    let squared = square(i);
    console.log("The square of " + i + " is: " + squared);
}
}
function square(num) {
    return num * num;
}
squareNumbers();
// // Call the function to square numbers and display the result
    