const sumAll = function (fromNum, toNum) {
    // if (arguments.length != 2) return "ERROR";
    // if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") return "ERROR";
    // if (Math.min(arguments[0], arguments[1]) < 0) return "ERROR";

    // const fromNum = Math.min(arguments[0], arguments[1]);
    // const toNum = Math.max(arguments[0], arguments[1]);

    if (!Number.isInteger(fromNum) || !Number.isInteger(toNum)) return "ERROR";
    if (Math.min(fromNum, toNum) < 0) return "ERROR";
    if (fromNum > toNum) [fromNum, toNum] = [toNum, fromNum];

    let sum = 0;
    for (let i = fromNum; i <= toNum; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
