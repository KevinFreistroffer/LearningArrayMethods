"use strict";


var array1 = ['mark', 'john', 'sue', 'brad'];

function log(w) {  console.log(w); }

function reset() { 
	array1 = ['mark', 'john', 'sue', 'brad']; 
	log('RESET: ' + array1);
}



// Array Stuff -----------------------------------

/*
map();
join();
shift();
unshift();
delete() ~~ use pop() or shift();
splice();
sort();
reverse();
concat();
slice();
*/

/* 
"join(): join each item in the array with whatever such as ' -- '"
shift(): shift off the first item in the array
unshift(): shift() removes the first item, unshift adds an item to the front of the array
delete(): converts item to undefined, just use pop();
splice(): add items to array and/or add items plus delete items after it. 
	parameters are index position to add items to the array, how many to delete after those added items, then the actual items to add
	arrayName.splice(3, 0, 'god', 'people', 'culture');
sort(): sorts the array alphabetically
reverse(): reverses the elements in the array
concat: concatinates different arrays into one array
slice: slices or copies a part of an array into a new array. the original array remains untouched.
*/

// map();
var map = (function(a) {
	var p = {
		run: function() {
			a.map((item, i, arr) => { console.log(i + ': ' + item)})
		}
	};

	return p;
})(array1);

map.run();
reset();




// pop();
var pop = (function(a) {
	var p = {
		run: () => {
			log('original array before popped: ' + a);
			var popped = a.pop();
			log('popped off: ' + popped);
			log('new array after pop: ' + a);
		}
	};

	return p;
})(array1);

pop.run();
reset();




// push(); pushes off the last item in the array
var push = (function(a) {
	var p = {
		run: () => {
			log('push()')
			a.push('terrence');
			log(a);
		}
	};

	return p;
})(array1);

push.run();
reset();




// shifting(); pushes off the first item in the array
var shift = (function(a) {
	var p = {
		run: () => {
			log('shift()');
			a.shift();
			log(a);
		}
	};

	return p;
})(array1);

shift.run();
reset();



// unshift() adds element to front of the array
var unshift = ((a) => {
	var p = {
		run: () => {
			log('unshift');
			a.unshift('purpose');
			log(a);
		}
	};

	return p;
})(array1);

unshift.run();
reset();



// delete() deletes item from array
// use pop() or shift() instead !!
var deleteItem = ((a) => {
	var p = {
		run: () => {
			log('delete()');
			delete a[0];
			log('deleted index [0]');
			log(a);
		}
	};

	return p;
})(array1);

deleteItem.run();
reset();



// splice() add new items to array
// first parameter is where to add in the array.
// second parameter is how many to delete
// third parameter and so on...the items to add to the array
// So you can add items and choose how many items to delete after the newly added items
var splice = ((a) => {
	var p = {
		run: () => {
			log('splice()');
			a.splice(2, 0, 'human', 'land');
			log(a);
			log('splice() ADDING 2 ITEMS, DELETING 1 ITEM');
			a.splice(2, 1, 'could', 'before');
			log(a);
		}
	};

	return p;
})(array1);

splice.run();
reset();



// sort(); sorts the elements in array alphabetically
var reverse = ((a) => {
	var p = {
		run: () => {
			log('reverse()');
			a.reverse();
			log(a);
		}
	};

	return p;
})(array1);

reverse.run();
reset();



// concat(); sorts the elements in array alphabetically
var concat = ((a) => {
	var p = {
		run: () => {
			var newA = ['CONCAT', 'CONCAT1', 'CONCAT2', 'CONCAT3'];
			log('concat()');
			var abc = a.concat(newA);
			log(abc);
		}
	};

	return p;
})(array1);

concat.run();
reset();




// slice(); copies a slice or part of an array into a new array. original array is left untouched
var slice = ((a) => {
	var p = {
		run: () => {
			log('slice()');
			log('slicing out 2nd and 3rd item')
			var sliced = a.slice(1,3);
			log(sliced);
		}
	};

	return p;
})(array1);

slice.run();
reset();