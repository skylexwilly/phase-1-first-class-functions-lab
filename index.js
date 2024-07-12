const returnFirstTwoDrivers = function(driversArray) {
  return driversArray.slice(0, 2);
};


const returnLastTwoDrivers = function(driversArray) {
  // Calculate the starting index to slice from the end of the array
  const startIndex = Math.max(driversArray.length - 2, 0);
  return driversArray.slice(startIndex);
};




const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier  = function(integer) {
  return function(fare) {
      return fare * integer;
  };
};


const fareTripler = createFareMultiplier(3);


const fareDoubler = createFareMultiplier(2);




const selectDifferentDrivers = function(driversArray, selectingFunction) {
  return selectingFunction(driversArray);
};


