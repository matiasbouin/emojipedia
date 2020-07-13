import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const mapNumbers = numbers.map(x => x * x);
console.log(mapNumbers);

//////Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(x => x < 10);
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var reduceNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(reduceNumber);

////Find - find the first item that matches from an array.
const findNumber = numbers.find(x => x > 10);
console.log(findNumber);

////FindIndex - find the index of the first item that matches.
const findIndexNumber = numbers.findIndex(x => x > 10);
console.log(findIndexNumber);

ReactDOM.render(<App />, document.getElementById("root"));
