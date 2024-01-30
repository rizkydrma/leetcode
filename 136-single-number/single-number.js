/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const myMap = new Map();
    nums.forEach((num) => {
        if (myMap.has(num)) {
            myMap.delete(num);
        } else {
            myMap.set(num, 1);
        }
    });
    const isVal = [...myMap][0][0]
    // const isVal = [...myMap].find(([key, value]) => 1 === value)[0]

    return isVal;
};