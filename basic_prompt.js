function addNumbers(a, b) {
    return a + b;
}

/**
 * Converts a string to camelCase format.
 * 
 * @param {string} str - The string to convert
 * @returns {string} The camelCase version of the string
 * 
 * @example
 * toCamelCase('hello-world-example') // returns 'helloWorldExample'
 * toCamelCase('hello_world_example') // returns 'helloWorldExample'
 * toCamelCase('hello world example') // returns 'helloWorldExample'
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[-_\s](.)/g, (_, c) => c.toUpperCase())
        .replace(/^(.)/, c => c.toLowerCase());
}