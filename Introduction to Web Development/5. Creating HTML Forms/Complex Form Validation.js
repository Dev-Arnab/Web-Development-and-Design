function validate_first_name(){//Test input for 2-15 allowed characters
	var fname = document.getElementById("first_name").value;
	var rel = /^[a-zA-Z\s\'\-']{2,15}$/;

	if(rel.test(fname)){//If input is valid, update page to show successful entry
		document.getElementById("first_name_prompt").style.color = "green";
		document.getElementById("first_name_prompt").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else{//If input is invalid, update page to prompt for new input
		document.getElementById("first_name_prompt").style.color = "red";
		document.getElementById("first_name_prompt").innerHTML = "<strong>Enter 2-15 characters</strong>";
		return false;
	}
}


function validate_last_name(){
	var lname = document.getElementById("last_name").value;
	var rel = /^[a-zA-Z\s\'\-']{2,25}$/;

	if(rel.test(lname)){
		document.getElementById("last_name_prompt").style.color = "green";
		document.getElementById("last_name_prompt").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else{
		document.getElementById("last_name_prompt").style.color = "red";
		document.getElementById("last_name_prompt").innerHTML = "<strong>Enter 2-25 characters</strong>";
		return false;
	}
}

function validate_phone(){
	var phone = document.getElementById("phone").value;
	var rel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;     ///^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	///^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

	if(rel.test(phone)){
		document.getElementById("phone_prompt").style.color = "green";
		document.getElementById("phone_prompt").innerHTML = "<strong>Valid</strong>";
		return true;
		
	}
	else{
		document.getElementById("phone_prompt").style.color = "red";
		document.getElementById("phone_prompt").innerHTML = "<strong>Use xxx-xxx-xxxx format</strong>";
		return false;

	}
}

function calc_order(){
	var fname = document.getElementById("first_name").value;
	var lname = document.getElementById("last_name").value;
	var user_name = fname + " " + lname;
	var phone = document.getElementById("phone").value;
	var quantity = document.getElementById("quantity").value;
	var price = document.getElementById("price").value;


	document.getElementById("order_confirm").innerHTML = "<h2>Order Summary:<h2>";
	document.getElementById("order_confirm").innerHTML += "<p>" + user_name.toUpperCase() + "<br>" + phone + "</p>";
	document.getElementById("order_confirm").innerHTML += "<p>Order Total: $" + price * quantity + "</p>";
}