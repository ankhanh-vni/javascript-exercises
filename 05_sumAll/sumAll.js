const sumAll = function () {
    if (arguments.length != 2) return "ERROR";
    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") return "ERROR";
    if (Math.min(arguments[0], arguments[1]) < 0) return "ERROR";

    const fromNum = Math.min(arguments[0], arguments[1]);
    const toNum = Math.max(arguments[0], arguments[1]);
    let sum = 0;
    for (let i = fromNum; i <= toNum; i++) {
        sum += i;
    }
    return sum;

};
const input = "123";

if (typeof input === "number" && !isNaN(input)) {
    console.log("Input is a number");
} else {
    console.log("Input is not a number");
}

// Do not edit below this line
module.exports = sumAll;
