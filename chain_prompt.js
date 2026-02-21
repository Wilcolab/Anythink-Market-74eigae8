function toKebabCase(str) {
    // Handle null or empty strings
    if (str === null || str === undefined || str.trim() === '') {
        return '';
    }

    // Convert to lowercase and replace spaces with hyphens
    return str.trim().toLowerCase().replace(/\s+/g, '-');
}

// Example usage:
console.log(toKebabCase('Hello World'));           // Output: 'hello-world'
console.log(toKebabCase('JavaScript Function'));   // Output: 'javascript-function'
console.log(toKebabCase('  spaces  around  '));    // Output: 'spaces-around'
console.log(toKebabCase(''));                      // Output: ''
console.log(toKebabCase(null));                    // Output: ''
console.log(toKebabCase(undefined));               // Output: ''