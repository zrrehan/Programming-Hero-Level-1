const allH1Tag = document.getElementsByTagName("h1");
console.log(allH1Tag); // [h1, h1, h1, h1, h1]

// iterating all H1 tag and seeing the inner Text
for(let text of allH1Tag) {
    console.log(text.innerText);
}

/*
 * Differences between Arrays and Array-like Objects (e.g., document.getElementsByTagName("h1")):
 *
 * 1. True Array vs. Object:
 *    - Arrays are true Array objects, created using [] or new Array(), and have all standard array methods.
 *    - Array-like objects have a 'length' property and indexed elements, but they are not full-fledged arrays.
 *
 * 2. Built-in Methods:
 *    - Arrays come with a suite of built-in methods (push, pop, forEach, map, filter, etc.) for easy manipulation.
 *    - Array-like objects do not have these array methods by default. To use them, you often need to convert the object into an array.
 *
 * 3. Inheritance:
 *    - Arrays inherit from Array.prototype, giving them access to many useful functionalities.
 *    - Array-like objects typically inherit from Object.prototype, lacking the specialized behaviors of arrays.
 *
 * 4. Common Usage:
 *    - Arrays are used for dynamic data storage and manipulation in JavaScript.
 *    - Array-like objects are usually returned by DOM methods (like document.getElementsByTagName) and represent collections of elements.
 */
