function memoize(func) {
	var cache = Object.create(null);
	return function () {
		var key = JSON.stringify(arguments);
		if (cache[key]) {
			return cache[key];
		}
		var val = func.apply(this, arguments);
		cache[key] = val;
		return val;
	};
}

var fib = memoize((n) => (n > 2 ? fib(n - 1) + fib(n - 2) : n));

function memoizewithDeps(func, depsFunc) {
	var cache = Object.create(null);
	return function () {
		var key = JSON.stringify([depsFunc(), arguments]);
		if (cache[key]) {
			return cache[key];
		} else {
			var val = func.apply(this, arguments);
			cache[key] = val;
			return val;
		}
	};
}

// A more functional memoizer

//We can beef up our module by adding functions later
var Memoizer = (function () {
	//Private data
	var map = new Map();
	//named functions are awesome!
	function cacher(func) {
		return function () {
			console.log('map', map);
			var val = map.get(arguments);
			console.log('val', val);
			if (val) {
				return val;
			} else {
				val = func.apply(this, arguments);
				console.log('In Else val', val);
				map.set(arguments, val);
				return val;
			}
		};
	}
	//Public data
	return {
		memo: function (func) {
			return cacher(func);
		},
	};
})();

var fib = Memoizer.memo((n) => (n > 2 ? fib(n - 1) + fib(n - 2) : n));
var factorial = Memoizer.memo((n) => (n < 2 ? 1 : n * factorial(n - 1)));
