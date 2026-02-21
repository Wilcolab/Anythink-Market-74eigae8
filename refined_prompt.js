const readline = require('readline');

/**
 * String case conversion utility module
 * 
 * This module provides functions to convert strings between different naming conventions.
 * It handles multiple delimiters (spaces, hyphens, underscores) and includes comprehensive
 * error handling for invalid inputs.
 * 
 * @module stringCaseConversion
 * @version 1.0.0
 * 
 * @example
 * // Convert to camelCase
 * const camelCased = toCamelCase('hello-world');
 * // Returns: 'helloWorld'
 * 
 * @example
 * // Convert to dot.case
 * const dotCased = toDotCase('hello_world');
 * // Returns: 'hello.world'
 */

/**
 * Converts a string to camelCase format
function toKebabCase(str) {
    // Validate input
        if (str === null || str === undefined) {
            throw new Error('Input cannot be null or undefined');
        }
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }
        if (str.trim() === '') {
            throw new Error('Input string cannot be empty');
        }
        if (str === null || str === undefined) {
            throw new Error('Input cannot be null or undefined');
        }
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }
        if (str.trim() === '') {
            throw new Error('Input string cannot be empty');
        }
        
        return str
            .split(/[\s\-_]+/)
            .map(word => word.toLowerCase())
            .join('-');
    }

    function multiplyIntegers(...numbers) {
        return numbers.reduce((product, num) => product * num, 1);
    }

    // Example with user input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter integers separated by spaces: ', (input) => {
        const numbers = input.split(/\s+/).map(Number);
        const result = multiplyIntegers(...numbers);
        console.log(`Result: ${result}`);
        rl.close();
    });
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    if (typeof str !== 'string') {
        function toCamelCase(str) {
            if (str === null || str === undefined) {
                throw new Error('Input cannot be null or undefined');
            }
            if (typeof str !== 'string') {
                throw new Error('Input must be a string');
            }
            if (str.trim() === '') {
                throw new Error('Input string cannot be empty');
            }
            
            return str
                .split(/[\s\-_]+/)
                .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('');
        }
        throw new Error('Input must be a string');
    }
    if (str.trim() === '') {
        throw new Error('Input string cannot be empty');
    }
    
    return str
        .split(/[\s\-_]+/)
        .map(word => word.toLowerCase())
        .join('-');
}
 * 
 * Transforms the input string by splitting on spaces, hyphens, or underscores,
 * then joins the words with the first word in lowercase and subsequent words
 * capitalized. This is commonly used for JavaScript variable and function names.
 * 
 * @function toCamelCase
 * @param {string} str - The input string to convert to camelCase format.
 *                       Can contain spaces, hyphens, or underscores as delimiters.
 * 
 * @returns {string} The converted camelCase string with the first word lowercase
 *                   and each subsequent word capitalized, with no delimiters.
 * 
 * @throws {Error} Throws an error if the input is null or undefined.
 * @throws {Error} Throws an error if the input is not a string type.
 * @throws {Error} Throws an error if the input string is empty.
 * 
 * @example
 * toCamelCase('hello world');        // Returns: 'helloWorld'
 * @example
 * toCamelCase('hello-world-example'); // Returns: 'helloWorldExample'
 * @example
 * toCamelCase('hello_world_test');   // Returns: 'helloWorldTest'
 */

/**
 * Converts a string to dot.case format
 * 
 * Transforms the input string by splitting on spaces, hyphens, or underscores,
 * converting all characters to lowercase, and joining the words with dots.
 * This naming convention is commonly used in configuration files and property names.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert to dot.case format.
 *                       Can contain spaces, hyphens, or underscores as delimiters.
 * 
 * @returns {string} The converted dot.case string with all words in lowercase
 *                   separated by dots, with no other delimiters.
 * 
 * @throws {Error} Throws an error if the input is null or undefined.
 * @throws {Error} Throws an error if the input is not a string type.
 * @throws {Error} Throws an error if the input string is empty.
 * 
 * @example
 * toDotCase('hello world');        // Returns: 'hello.world'
 * @example
 * toDotCase('hello-world-example'); // Returns: 'hello.world.example'
 * @example
 * toDotCase('hello_world_test');   // Returns: 'hello.world.test'
 */

    // Split by spaces, hyphens, or underscores and convert to dot.case
    return str
        .split(/[\s\-_]+/)
        .map(word => word.toLowerCase())
        .join('.');
}

// Test dot.case conversion
try {
    console.log(toDotCase('hello world'));           // Output: hello.world
    console.log(toDotCase('hello-world-example'));   // Output: hello.world.example
    console.log(toDotCase('hello_world_test'));      // Output: hello.world.test
} catch (error) {
    console.error(`Error: ${error.message}`);
}