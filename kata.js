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

//to sqr or not to sqr, write a method that will takes an array, processes all numbers, if the number has an int as a sqrt take it, otherwise sqr it.
function sqrOrSqrt(array) {
  return array.map(x => {
    const r = Math.sqrt(x)
    return (r % 1 == 0) ? r : (x*x)
  })
}
//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

//Determine if int is a square # 
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0
}

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheep(arrOfSheep) {
  const result = arrOfSheep.filter(x=> x === true)
  return result
}

//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
  //If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
  //If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount(n) {
  return (n < 10) ? 'Keep at it until you get it' : "Great, now move on to tricks"
}
  //or
function hoopCount(n) {
  const result1 = "Great now move on to tricks"
  const result2 = "Keep at it until you get it"
  if(n <=10) {
    return result1
  } else return result2
}