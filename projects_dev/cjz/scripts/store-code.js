// Store Code





const date1 = new Date("November 12, 2026");
const date2 = new Date("November 18, 2026");
console.log(dateActive(date1, date2));



function dateActive(startDate, endDate) {
    let timestamp = Date.now();
    let currDate = new Date(timestamp);

    // TODO: This function does not work if the date crosses months or years!

    // Check Year
        if (currDate.getFullYear() < startDate.getFullYear()) return false;
        if (currDate.getFullYear() > endDate.getFullYear()) return false;

    // Check Month
        if (currDate.getMonth() < startDate.getMonth()) return false;
        if (currDate.getMonth() > endDate.getMonth()) return false;

    // Check Date
        if (currDate.getDate() < startDate.getDate()) return false;
        if (currDate.getDate() > endDate.getDate()) return false;

    return true;

};



const monthNames = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
]