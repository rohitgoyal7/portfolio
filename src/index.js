var findLucky = function (arr) {
    let luckyNumber = -1;
    const obj = {};
    arr.forEach((item) => {
        obj[item] = obj[item] ? obj[item] + 1 : 1;
    });
    for (let i in obj) {
        if (i == obj[i]) {
            if (obj[i] > luckyNumber) {
                luckyNumber = obj[i];
            }
        }
    }
    return luckyNumber;
};

findLucky([
    5,
    8,
    10,
    9,
    8,
    10,
    9,
    6,
    6,
    7,
    10,
    8,
    10,
    10,
    9,
    4,
    6,
    2,
    10,
    3,
    5,
    10,
    2,
    6,
    4,
    8,
    7,
    3,
    9,
    9,
    5,
    7,
    8,
    7,
    11,
    9,
    3,
    1,
    5,
    11,
    9,
    5,
    8,
    10,
    8,
    4,
    9,
    7,
    6,
    7,
    10,
    9,
    7,
    8,
    6,
    10,
    4,
]);
