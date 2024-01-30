/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const myMap = new Map();
    nums.forEach((num) => {
        if (myMap.has(num)) {
            // every data appear more than one, for this challange "twice"
            // delete the data from myMap for minimize the size of myMap
            myMap.delete(num);
        } else {
            myMap.set(num, 1);
        }
    });

    // just get the first data from myMap cause every data appear more than one must be deleted
    const isVal = [...myMap][0][0]
    return isVal;
};
