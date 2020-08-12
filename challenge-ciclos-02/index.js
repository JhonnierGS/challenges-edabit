function findLargestNums(arr) {
  var maxArr = []
  arr.map(function(e){
    maxArr.push(Math.max.apply(null, e));
  })
  return maxArr
}

findLargestNums([[7,2,3], [99,67,99]]);
