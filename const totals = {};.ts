const totals = {};

// Iterate over the items
items.forEach(item => {
    // If the code is already in the totals object, add the value to the existing total
    if (totals[item.code]) {
        totals[item.code] += item.value;
    } else {
        // If the code is not in the totals object, add it with the current value
        totals[item.code] = item.value;
    }
});

// Output the totals object to see the result
console.log(totals);