var myModules = [
    // each file that gets imported into bundle.js has its own index
    // in the array
  function() {
    const sum = (a, b) => a + b;
    return sum;
  },
  function() {
    const sum = myModules[0]();
    const total = sum(10, 10);
    console.log(total);
  }
];

var entryPointIndex = 1;
// entry point was the index.js file, points to the index of the array that has the module
// that was designated to be our entry point 
// webpack then looks into the array at the entry point at the function that reprensets the index.js
// then it executes it
myModules[entryPointIndex]();
