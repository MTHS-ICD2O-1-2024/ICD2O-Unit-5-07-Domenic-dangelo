// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  // process
  let nValue = parseFloat(document.getElementById("nValue").value);
  let text = ""
  let number = 0;

  // input
  for (let naturalNumber = 1; naturalNumber <= nValue; naturalNumber++) {
    number += naturalNumber;
  }
  // output
  text += "The sum of natural numbers is " + number + "<br>";
  document.getElementById("result").innerHTML = text;
} 
