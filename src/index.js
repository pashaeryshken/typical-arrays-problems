Array.prototype.min = function() {
    return Math.min.apply(null, this)
};

Array.prototype.max = function() {
   return Math.max.apply(null, this)
};

Array.prototype.avg = function() {
    return this.reduce((sum , item) => {
        return sum += item
    }) / this.length
};

exports.min = function min (array = []) {
  return array.length !== 0 ?  array.min() : 0;
  return 0;
}

exports.max = function max (array = []) {
  return array.length !== 0 ?  array.max() : 0;
}

exports.avg = function avg (array = []) {
    return array.length !== 0 ?  array.avg() : 0;
}
