/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const myMap = new Map();
    nums.forEach((num) => {
        if (myMap.has(num)) {
            const currentVal = myMap.get(num);
            myMap.set(num, currentVal + 1);
        } else {
            myMap.set(num, 1);
        }
    });

    const isVal = [...myMap].find(([key, value]) => 1 === value)[0]

    return isVal;
};