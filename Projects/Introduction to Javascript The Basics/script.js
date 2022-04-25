//Task 2 variables
/*
var my_variable = 7;
console.log(typeof my_variable);

var my_string = "Hello World!";
console.log(typeof my_string);

var my_bool = true;
console.log(typeof my_bool);

var animals = ["cat", "dog", "elephant"];
console.log(animals[1]);

var mix_array = [4, "cat", false];
console.log(mix_array);
console.log(typeof mix_array);

mix_array[1] = "dog";
console.log(mix_array);


var x = 5;
var y = 4;

var sum = x + y;
console.log(sum);

var mult = x * y;
console.log(mult);

var sub = x - y;
console.log(sub);

var mod_array = my_string + 1;
console.log(mod_array);

var z = "3";
var m = 4;

var new_sum = z + m;
console.log(new_sum);
*/

//task 4 conditionals
/*
var a = 10.0;
var b = 10;

if(a > b){
	console.log("a is greater than b");
}
else if(a == b){
	console.log("a equals b");
}
else{
	console.log("b is greater than a");
}

var score = 90;
var grade = "A";

if(score < 60){
	grade = "F";
}
else if(score >= 60 && score < 70){
	grade = "D";
}
else if(score >= 60 && score < 80){
	grade = "C";
}
else if(score >= 80 && score < 90){
	grade = "B";
}
else{
	grade = "A";
}

console.log(grade);
*/

//task 5 loops
/*
for(i = 0; i < 10; i ++){
	console.log(i);
}

var i = 0;
while(i < 10){
	console.log(i);
	i++;
}

var i = 0;
var sum = 0;

while(true){
	sum += i;
	console.log(i);
	console.log(sum);
	if(sum >= 200){
		break;
	}
	i++;
}
console.log(sum);

for(i = 0; i < 100; i++){
	if(i % 2 == 0){
		continue;
	}
	console.log(i);
}
*/

//Task 6 functions
function add(a, b){
	var sum = a + b;
	
	return sum;
}

var result = add(10, 5);
console.log(result);

var add_func = function(a, b){
	return (a + b);
}

console.log(add_func(10, 5));

var imm_function = (function(a, b){
	return (a + b);
})(10, 5);
console.log(imm_function);