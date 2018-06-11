function groupBy (arr, property) {
  return arr.reduce((memo, x) => {
    if (!memo[x[property]]) { memo[x[property]] = [] }
    memo[x[property]].push(x)
    return memo
  }, {})
}
module.exports = {
  groupBy: groupBy
}
module.exports.defaults = module.exports;
