// Object as Dictionary Exercises
// Exercise 1
//
// Given the following dictionary, representing a mapping from names to phone numbers:
//
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};
// Write code to do the following:
//
// Print Elizabeth's phone number.
// Method 1 using dot notation
console.log(phonebookDict.Elizabeth);
// Method 2 using subscript notation
console.log(phonebookDict['Elizabeth']);

// Add an entry to the dictionary: Kareem's number is 938-489-1234.
// Method 1 using dot notation
phonebookDict.Johnny = "404-555-1010";
// Method 2 using subscript notation
phonebookDict['Johnny'] = "404-555-0101";

// Delete Alice's phone entry.
// Method 1 using dot notation
delete phonebookDict.Alice;
// Method 2 using subscript notation
delete phonebookDict['Alice'];

// Change Bob's phone number to '968-345-2345'.
// Method 1 using dot notation
phonebookDict.Bob = "968-345-2345";
// Method 2 using subscript notation
phonebookDict['Bob'] = "968-345-2345";

// Print all the phone entries.
// Method 1 using dot notation cannot be used because dot notation does not allow for dynamic keys

// Method 2 using subscript notation
for (var entry in phonebookDict) {
  var phone = phonebookDict[entry];
  console.log(entry + ": " + phone);
}
