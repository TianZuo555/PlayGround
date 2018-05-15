//basic algorisms from freecodecamp
//reverse a string 

let reverseString = (str) => {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//2. Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

let factorials = (num) => {
    if (isNaN(num)) {
        console.log("not a valid number")
    }
    else {
        if (num === 0) {
            return 1;
        }
        else {
            return num * factorials(num - 1);
        }
    }
}

console.log(factorials(5));

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
    // replace any non - english word to ""
    let parttern = /[\W_]/g;
    str = str.replace(parttern, "");
    let reverseString = str.split("").reverse().join("");
    if (reverseString === str)
        return true
    return false;
}

console.log(palindrome("as123#$%^&&$dsad"));
console.log(palindrome("eye"));


// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
    let length = 0;
    let word = "";
    arr = str.split(" ");
    arr.forEach(element => {
        if (element.length > length)
            length = element.length;
    });

    return length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("The quick brown fox jumped overaaaaaaaaaa the lazy dog"));

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

console.log(titleCase("test for title case"));

//Return Largest Numbers in Arrays

function findLargestNumber(...params) {
    let result = [];
    params.forEach(arr => {
        result.push(Math.max(...arr));
    });
    return result;
}

console.log(findLargestNumber([4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]));

function endWith(str, target) {
    // es6 str.endWith(target)
    return target == str.substring(str.length - 1, str.length);
}

console.log(endWith("test", "t"));

//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatString(str, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

console.log(repeatString("abc", 3));

