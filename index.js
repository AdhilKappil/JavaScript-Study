

console.log('Start');

setImmediate(() => {
  console.log('Callback executed');
});

console.log('End');