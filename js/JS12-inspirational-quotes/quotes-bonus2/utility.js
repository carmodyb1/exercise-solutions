/** Returns a new array of each array item transformed by the given function. */
var map = function(arr, f) {
	var output = [];
	for(var i=0; i<arr.length; i++) {
		output.push(f(arr[i], i));
	}
	return output;
};

/** Returns a new array that only includes elements that pass the given evaluator function. */
var filter = function(arr, f) {
	var output = [];
	for(var i=0; i<arr.length; i++) {
		if(f(arr[i], i)) {
			output.push(arr[i]);
		}
	}
	return output;
};

/** Generates a sequence of integers from start (inclusive) to end (exclusive). If only one
	  argument is passed, it is treated as end and start is 0. */
var range = function(start, end) {
	if(end === undefined) {
		end = start;
		start = 0;
	}
	var output = [];
	for(var i=start; i<end; i++) {
		output.push(i);
	}
	return output;
};

/** A comparison function that can be used in Array.prototype.sort. Sorts objects by rating, high to low. */
var compareByReverseRating = function(a,b) {
	return a.rating < b.rating ? 1 :
				 a.rating > b.rating ? -1 :
				 0;
};

/** Performs string interpolation. */
if (!String.prototype.supplant) {
  String.prototype.supplant = function (o) {
    return this.replace(
      /\{([^{}]*)\}/g,
      function (a, b) {
        var r = o[b];
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      }
    );
  };
}