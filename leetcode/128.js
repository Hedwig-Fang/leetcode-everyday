/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set();
  let longestStreak = 0;
  for( const num of nums.sort((a, b) => a - b)) {
      set.add(num)
  }
  for(const num of set) {
      if(!set.has(num - 1)) {
          
          let currentNum = num;
          let currentStreek = 1;
          while(set.has(currentNum + 1)) {
              currentNum += 1;
              currentStreek += 1;
          }
          longestStreak = Math.max(longestStreak, currentStreek)
      }
  }
  return longestStreak;
};