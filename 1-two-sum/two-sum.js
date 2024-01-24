/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     // Create an object to store the indices of elements
    let indices = {};

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        let complement = target - nums[i];

        // Check if the complement is already in the object
        if (indices.hasOwnProperty(complement)) {
            // If found, return the indices of the two numbers
            return [indices[complement], i];
        }

        // If not found, add the current number and its index to the object
        indices[nums[i]] = i;
    }

    // If no solution is found, return an empty array (this should not happen based on the problem constraints)
    return [];
};