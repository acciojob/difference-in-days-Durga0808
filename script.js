var dateDiffInDays = function (date1, date2) {
  //   write your code here
	
	const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Get the UTC milliseconds for both dates
    const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
    const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
    
    // Calculate the difference in milliseconds
    const diffInMilliseconds = utc2 - utc1;
    
    // Convert the difference from milliseconds to days
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const diffInDays = diffInMilliseconds / millisecondsPerDay;
    
    // Return the difference in days
    return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
