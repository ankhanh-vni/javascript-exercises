const removeFromArray = function (array, ...args) {;
    // Straightforward, loop in args and splice the original

    // for (removeItem of args) {
    //     if (array.includes(removeItem)) {
    //         array.splice(array.indexOf(removeItem), 1);
    //     }
    // }

    // args.forEach(removeItem => {
    //     if (array.includes(removeItem)) {
    //         array.splice(array.indexOf(removeItem), 1);
    //     }
    // })

    // return array;



    // Method using forEach
    let retArr = [];
    array.forEach(item => {
        const itemStays = !args.includes(item);
        if (itemStays) {
            retArr.push(item);
        }
    });
    return retArr;



    //Method using filter
    // return array.filter(element => !args.includes(element));

};



// Do not edit below this line
module.exports = removeFromArray;
