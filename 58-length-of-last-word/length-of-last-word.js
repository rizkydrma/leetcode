/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arrayS = s.split(' ').filter(word => word !== '').join(' ').split(" ");
    return arrayS[arrayS.length - 1].length;
};