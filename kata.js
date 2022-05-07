// Simple function that determines if a plural is needed or not.
// It should take a number, and return true if a plural should be used with that number or false if not.
function plural(n) {
    if (n >= 0 && n < 1) {
      return true
    } else if (n > 1) {
      return true
    } else return false 
}

// OR
function plural(n) {
    return n !==1;
}

//create a function w two arguments that will return an array of the first(n) multiples of (x)
//assume both x and n will be greater than 0
//return as an array

function countBy(x,n) {
  let z = []
  for(i = 1; i <= n; i++) {
    z.push(x*i);
  }
  return z
}

//Create a function that converts USD to CNY
//return as a string '.... Chinese Yuan'

function usdcny(usd) {
  let con = usd * 6.75
  return `${con.toFixed(2)} Chinese Yuan`
}

//Create a function that takes in a string, reverses it, and returns it

function solution(str) {
  return str.split('').reverse().join('')
}

//Cat years and dog years given human years 
let humanYearsCatYearsDogYears = function(humanYears) {

  let arr = []
  let catYears
  let dogYears
  
  if (humanYears == 1) {
    catYears = 15
    dogYears = 15
  } else if (humanYears == 2) {
    catYears = 24
    dogYears = 24
  } else if (humanYears > 2) {
    catYears = 24 + (4 * (humanYears - 2)) 
    dogYears = 24 + (5 * (humanYears - 2))
  } else {
    catYears = 'human years cannot be 0'
    dogYears = 'human years cannot be 0'
  }
  
  arr.push(humanYears,catYears,dogYears)
  return arr
}

//function that determines if a plural is needed or not given a number
function plural(n) {
  if(n >= 0 && n < 1) {
   return true;
  }

  else if (n > 1){
    return true;
   }
   else {
   return false;
   }
}

//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0, n);
}

//DNA to RNA, DNA is composed of four acid bases(G,C,A,T) while RNA is composed of (G,C,A,U), write a method that, given a string, converts DNA to RNA
function DNAtoRNA(dna) {
  return dna.split('T').join('U')
}