console.log('w007!!!1');


// Test to disble mobile redirect

Object.defineProperties(window, {
  myAgent: {
    value: '',
    enumerable: true
  }
});
