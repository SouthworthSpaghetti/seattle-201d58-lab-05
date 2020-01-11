'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  var total = a + b;
  return [total, "The sum of " + a + ' and ' + b +
    ' is ' + total + "."];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
//console.log(sum(3,2));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  var total = a * b;
  return [total, "The product of " + a + ' and ' + b +
    ' is ' + total + "."];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
var x = sum(a,b);
var y = sum(x[0],c);
var jk = multiply(a,b);//_1Element
var kk = multiply(jk[0], c);//_2Element
  //var array = [String(_1Element), _2Element, _3Element, _4Element]
var _1Element = y[0];
var _2Element = kk[0];

  var _3Element = String(a + ' and ' + b + ' and ' + c + ' sum to ' + _1Element + '.');
  var _4Element = String('The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + _2Element + '.');
//console.log(_3Element);
//console.log(_4Element);
//console.log(y[0]);
//console.log(kk[0]);
//console.log([_1Element, _2Element, _3Element, _4Element])
return [_1Element, _2Element, _3Element, _4Element];
  
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);
//sumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4, 5, 6, 7, 9]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  //first element is the sum of the numbers in the array, and the second element is a string
  //for(i = 0; i < sumArr.length -1; i = i + 2)//SueTarazi
 
  console.log(sumArr);
 
  var iterativeTicker = 0;
  var j = 0;
  var totalsTicker = 0;
  for(var i = 0; i < sumArr.length; i = i + 2){
    if (i + 1 < sumArr.length){
      console.log(i);
      iterativeTicker = sum(sumArr[i], sumArr[i + 1])
      totalsTicker = totalsTicker + iterativeTicker[0];
      console.log(totalsTicker);
      } else {
        j = i;
      console.log(j + '= i');//this is the 'leftovers' from the array; the one element that will need to be added to the others which will be added together in a loop, pivoting on the 'sum' function
      }

    }
  iterativeTicker = sum(totalsTicker, sumArr[j]);
  totalsTicker = iterativeTicker[0];
  console.log(totalsTicker);
  console.log([totalsTicker, arrayZipper(sumArr) + ' was passed in as an array of numbers, and ' + totalsTicker + ' is their sum.']);
  //return [totalsTicker, arrayZipper(sumArr) + ' was passed in as an array of numbers, and ' + totalsTicker + ' is their sum.'];
}
function arrayZipper(unwrapArray){
  var zip = unwrapArray.pull;
  for(var i = 0; i < unwrapArray.length; i++){
    return (unwrapArray[i] + ', ' + zip);
  }
}

//sum (results of for, array[j];

// Here is the test for sumArray(); uncomment it to run it

//testSumArray(testArray);
sumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
