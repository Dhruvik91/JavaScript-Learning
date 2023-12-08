/* Inventory Update */

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(currentInventory, newInventory) {
    // Check each item of new inventory
    for (let newItem of newInventory) {
      let found = false;
      // Check against current inventory
      for (let oldItem of currentInventory) {
        // Update value if new item is found
        if (newItem[1] === oldItem[1]) {
          oldItem[0] += newItem[0];
          found = true;
          break;
        }
      }
      // Otherwise add item to the old inventory
      if (!found) currentInventory.push([...newItem]);
    }
    // Alphabetize and put into original array format
    return currentInventory
      .sort((a, b) => {
          if (a[1] < b[1]) return -1;
          if (a[1] > b[1]) return 1;
          return 0;
      });
  }


updateInventory(curInv, newInv);