// Example 1
const foo = null ?? 'default';
console.log(foo); // Output: 'default'

// Example 2
const bar = undefined ?? 'default';
console.log(bar); // Output: 'default'

// Example 3
const baz = 0 ?? 'default';
console.log(baz); // Output: 0 (since 0 is not null or undefined)
