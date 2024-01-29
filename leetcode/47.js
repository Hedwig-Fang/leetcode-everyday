/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const strsMap = {};
  for(let str of strs) {
      const key = str.split('').sort().join('');
      const list = strsMap[key] ? [...strsMap[key], str] : [str];
      strsMap[key] = list
  }
 return  Object.values(strsMap)

};