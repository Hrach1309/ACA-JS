// 1. Given a number. Write a recursive function that reverse the number. Return the new
// number.
function reverseNumber(num) {
    if (num < 10) {
      return num;
    }
    function buildReverse(currentNum, reversedNum) {
      if (currentNum === 0) {
        return reversedNum;
      }
      const lastDigit = currentNum % 10;
      reversedNum = (reversedNum * 10) + lastDigit;
      
      return buildReverse(Math.floor(currentNum / 10), reversedNum);
    }
    return buildReverse(num, 0);
  }

// 2. Given a number and an array. Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two. (recursive)

function findSecondOccurrence(arr, num, index = 0, count = 0) {
    if (index >= arr.length) {
      return -1;
    }
    if (arr[index] === num) {
      count++;
      if (count === 2) {
        return index;
      }
    }
    return findSecondOccurrence(arr, num, index + 1, count);
  }

// 3. Given a substring and a string. Find how many times the substring occurred in the string.
// (For getting substring of the string use str.substring(startIndex, endIndex),
// str.substr(startIndex, length) ) (recursive)

function countSubstring(str, sub, index = 0, count = 0) {
    if (index >= str.length) {
      return count;
    }
    if (str.substr(index, sub.length) === sub) {
      count++;
    }
    return countSubstring(str, sub, index + 1, count);
  }


// 4. Given a string, compute recursively (no loops) a new string where all appearances of &quot;pi&quot;
// have been replaced by &quot;3.14&quot;

function replacePi(str) {
    if (!str.includes("pi")) {
      return str;
    }
    return replacePi(str.replace("pi", "3.14"));
  }


// 5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).

function flattenArray(arr) {
    if (!Array.isArray(arr)) {
      return [arr];
    }
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
      flattened = flattened.concat(flattenArray(arr[i]));
    }
    return flattened;
  }


// 6. Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result. (recursive)

function sumOfDigits(num) {
    if (num < 10) {
      return num;
    }
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  
    if (sum >= 10) {
      return sumOfDigits(sum);
    }
  
    return sum;
  }