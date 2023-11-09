/*
1. What does the following code return?
*/

new Set([1, 1, 2, 2, 3, 4]);

//returns [1,2,3,4]

/*
2. What does the following code return?
*/

[...new Set("referee")].join("");

// returns "ref"

/*
3. What does Map m look like after running the following code?
*/

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

/*
>> [1, 2, 3], false 
*/

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
  mySet = new Set(arr);
  return mySet.size != arr.length;
}


//Write a function called vowelCount which accepts a string and returns a map where the keys are vowels and the values are the count of the vowels in the string.

function vowelCount(str) {
  const vowel_list = "AEIOUaeiou";
  const myMap = new Map();

  for (let char of str) {
    if (vowels.includes(char)) {
      const lowercaseChar = char.toLowerCase();
      myMap.set(lowercaseChar, (result.get(lowercaseChar) || 0) + 1);
    }
  }

  return result;
}
