// fizzBuzz
const FizzBuzz = () => {
    for(let i = 1; i<101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// convert celsius to farenheit function
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }

// reverse a string function
function reverseString(str) {
    var split = str.split("");
    var revSplit = split.reverse()
    var returnStr = revSplit.join("")
    
    return returnStr;
  }

// function to find longest word
  function findLongestWordLength(str) {
    var splitArr = str.split(" ");
    var sorted = splitArr.sort(
      function (a,b) {
        return b.length - a.length
      }
    )
    return sorted[0].length
  }

  //function to find longest number in sub arrays
  function largestOfFour(arr) {
    var returnArr = [];
      for (var i = 0; i < arr.length; i++) {
        var longest = arr[i][0];
        for (var j = 0;j<arr[i].length;j++) {
          if (arr[i][j]>longest) {
            longest = arr[i][j];
          }
        }
        returnArr[i]=longest;
      }
      return returnArr;
    }

////////////////////CODING BAT////////////////////////////

//When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. 
//Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.
let cigarParty = (cigars, isWeekend) => {
    if (isWeekend) {
        if (cigars < 40) {
            return false;
        } else {
            return true;
        }
    } else if (cigars < 60 && cigars > 40) {
        return true;
    } else {
        return false;
    }
}

//console.log(cigarParty(30, false)) // false
//console.log(cigarParty(50, false)) // true
//console.log(cigarParty(70, true)) // true

//You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is 
//the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 
//8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).

let dateFashion = (you, date) => {
    if(you >= 8 || date >= 8) {
        return 2;
    } else if (you <= 2 || date <= 2) {
        return 0;
    } else {
        return 1;
    }
}

//console.log(dateFashion(5, 10)) // 2
//console.log(dateFashion(5, 2)) // 0
//console.log(dateFashion(5, 5)) // 1


//The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, 
//then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

let squirrelPlay = (temp, isSummer) => {
    if (isSummer) {
        if (temp >= 60 && temp <= 100) {
            return true;
        } else {
            return false;
        }
    } else if (temp >= 60 && temp <= 90) {
        return true;
    } else {
        return false;
    }
}

//console.log(squirrelPlay(70, false)) // true
//console.log(squirrelPlay(95, false)) //false
//console.log(squirrelPlay(95, true)) // true


//You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. 
//If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- 
//on that day, your speed can be 5 higher in all cases.

let caughtSpeeding = (speed, isBirthday) => {
    if (isBirthday) {
        if (speed <= 65) {
            return 0;
        } else if (speed >= 66 && speed <= 85) {
            return 1;
        } else {
            return 2;
        }
    } else if (speed <= 60) {
        return 0;
    } else if (speed >= 61 && speed <= 80) {
        return 1;
    } else {
        return 2;
    }
}

//console.log(caughtSpeeding(60, false)) // 0
//console.log(caughtSpeeding(65, false)) // 1
//console.log(caughtSpeeding(65, true)) // 0
//console.log(caughtSpeeding(100, true)) // 2
//console.log(caughtSpeeding(82, false)) // 2

//Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

let sortaSum = (a,b) => {
    let sum = a+b;
    if (sum <= 19 && sum >= 10) {
        return 20;
    } else {
        return sum;
    }
}


//console.log(sortaSum(3, 4)) // 7
//console.log(sortaSum(9, 4)) // 20
//console.log(sortaSum(10, 11)) // 21

//Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" 
//indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- 
//then on weekdays it should be "10:00" and weekends it should be "off".

let alarmClock = (day, isVacation) => {
    if (isVacation) {
        return "10:00";
    } else if (day == 0 || day == 6) {
        return "10:00";
    } else {
        return "7:00"
    }
}

//console.log(alarmClock(1, false)) // "7:00"
//console.log(alarmClock(5, false)) // "7:00"
//console.log(alarmClock(0, false)) // "10:00"
//console.log(alarmClock(5, true)) // "10:00"

///////////////////MORE KATAS////////////////////

function findOdd(A) {
    var occurrences = { };
    for (var i = 0; i < A.length; i++) {
      var num = A[i];
      occurrences[num] = occurrences[num] ? occurrences[num] + 1 : 1;
    }
    for (num in occurrences) {
      let count = occurrences[num]
      if (count % 2 == 1) {
        return parseInt(num)
      }
    }
}

function highAndLow(numbers){
    let result = ''
    let split = numbers.split(" ")
    split.forEach(num => parseInt(num) )
    function compareNumbers(a, b) {
        return b - a;
      }
    split.sort(compareNumbers)
    let highest = split[0];
    let lowestPos = split.length - 1
    let lowest = split[lowestPos]
    return `${highest} ${lowest}`
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number){
    let i = number - 1
    let multiples = []
    while (i > 0) {
      if (i % 3 == 0 || i % 5 == 0) {
        multiples.push(i)
      }
      i--
    }
    let result = 0
    multiples.forEach(element => result = element + result)
    return result
  }

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
    return str.split(' ').map((word, index) => {
                if (word.length > 4) {
                    return word.split('').reverse().join('')
                } else {
                    return word
                }
            }).join(" ")
  }
  
