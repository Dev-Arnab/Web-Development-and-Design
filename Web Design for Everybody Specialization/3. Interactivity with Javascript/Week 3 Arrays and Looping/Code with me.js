var cars=["Toyota", "Honda", "Tata"];

function prompt_car(){
	document.getElementById('name').innerHTML=cars;
}

function add_car(){
	var input=prompt("What is your favourite car?");
	cars[cars.length]=input;
	document.getElementById('name').innerHTML=cars;
}