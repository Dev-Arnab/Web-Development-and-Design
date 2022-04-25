function name_and_color(){
	var name = prompt("What is your name? ");
	var color = prompt("What is your favourite color? ");

	document.write("Hello ");
	document.write(name);
	document.write("! Since your favourite color is ");
	document.write(color);
	document.write(", you have won a " + color + " phone case." + "<br>");

	document.write("Hello " + name + "! Since your favourite color is " + color + ", you have won a " + color + " phone case.");
}