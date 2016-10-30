// Object as Dictionary Exercises
//
// Histogram
//
// Write a function histogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object. Example:
//
// > histogram('bananas')
// { b: 1, a: 3, n: 2, s: 1 }
// Note: the order of the keys doesn't matter.

function histogram(word) {
  var counts = {};
  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char] += 1;
    }
  }
  return counts;
}

console.log(histogram('bananas'));
