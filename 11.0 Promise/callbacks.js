
// A function that takes a callback and calls it after a delay
function doSomethingAsync(callback) {
    console.log("Async task done!");
    setTimeout(function() {
     
      callback(); // Call the provided callback function
    }, 1000);
  }
  
  // A callback function that is passed to doSomethingAsync
  function afterAsyncTask() {
    console.log("Callback executed after async task");
  }
  
  // Calling the main function with the callback
  doSomethingAsync(afterAsyncTask);