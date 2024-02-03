import React from 'react'
import { data } from '../../constants/data'


const checkNumber = (inputNumber) => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const foundNumber = data.find(entry => entry.number === inputNumber);
      if (foundNumber) {
        resolve(foundNumber);
      } else {
        reject("Number not found");
      }
    }, 1000); // Simulating a delay of 1 second
  });
};

// Example usage:
const inputNumber = '43296633';

checkNumber(inputNumber)
  .then(result => {
    console.log("Number is true:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
