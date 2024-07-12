// Code your solution in this file!
// Declare and assign an anonymous function to returnFirstTwoDrivers
const returnFirstTwoDrivers = function(driversArray) {
  // Slice the first two elements from the driversArray and return them in a new array
  return driversArray.slice(0, 2);
};

// Test case
const drivers = ['John', 'Jane', 'Mike', 'Emily'];
console.log(returnFirstTwoDrivers(drivers)); // Output: ['John', 'Jane']

// Declare and assign an anonymous function to returnLastTwoDrivers
const returnLastTwoDrivers = function(driversArray) {
  // Check if the driversArray has at least two elements
  if (driversArray.length >= 2) {
      // Return a new array containing the last two drivers
      return [driversArray[driversArray.length - 2], driversArray[driversArray.length - 1]];
  } else {
      // Return the entire array if it has fewer than two elements
      return driversArray;
  }
};


// Test cases
const drivers1 = ['John', 'Jane', 'Mike', 'Emily'];
const drivers2 = ['John'];
console.log(returnLastTwoDrivers(drivers1)); // Output: ['Mike', 'Emily']
console.log(returnLastTwoDrivers(drivers2)); // Output: ['John']


// Declare and assign an array containing the two functions
const selectingDrivers = [
  function returnFirstTwoDrivers(driversArray) {
      return driversArray.slice(0, 2);
  },
  function returnLastTwoDrivers(driversArray) {
      if (driversArray.length >= 2) {
          return [driversArray[driversArray.length - 2], driversArray[driversArray.length - 1]];
      } else {
          return driversArray;
      }
  }
 ];

// Test cases
//const drivers = ['John', 'Jane', 'Mike', 'Emily'];
console.log(selectingDrivers[0](drivers)); // Output: ['John', 'Jane']
console.log(selectingDrivers[1](drivers)); // Output: ['Mike', 'Emily'}


// Define createFareMultiplier function
function createFareMultiplier(integer) {
  // Return a function that takes fare as an argument and multiplies it by integer
  return function(fare) {
      return fare * integer;
  };
}

// Test cases
const fareQuadrupler = createFareMultiplier(4);

console.log(fareQuadrupler(10)); // Output: 40 (10 * 4)
console.log(fareQuadrupler(5)); // Output: 20 (5 * 4)


// Define createFareMultiplier function
function createFareMultiplier(integer) {
  return function(fare) {
      return fare * integer;
  };
}

// Declare fareDoubler variable with const and assign the doubled fare function
const fareDoubler = createFareMultiplier(2);

// Declare fareTripler variable with const and assign the tripled fare function
const fareTripler = createFareMultiplier(3);


// Define selectDifferentDrivers function
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}

// Test cases for fareDoubler and fareTripler
console.log(fareDoubler(10)); // Output: 20 (10 * 2)
console.log(fareTripler(10)); // Output: 30 (10 * 3)

// Test cases for selectDifferentDrivers
//const drivers = ['John', 'Jane', 'Mike', 'Emily'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['John', 'Jane']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Mike', 'Emily']

  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];