function fname_validate(){//Validate First name

	var name = document.getElementById("fname").value;
	var rel = /^[a-zA-Z\s\'\-']{2,15}$/;

	if(rel.test(name)){
		document.getElementById("fname_war").style.color = "green";
		document.getElementById("fname_war").innerHTML = "Correct";
		return true;
	}
	else{
		document.getElementById("fname_war").style.color = "red";
		document.getElementById("fname_war").innerHTML = "Enter 2-15 characters"
		return false;
	}
	
}

function lname_validate(){//Validate last name
	var name = document.getElementById("lname").value;
	var rel = /^[a-zA-Z\s\'\-']{3,25}$/;

	if(rel.test(name)){
		document.getElementById("lname_war").style.color = "springgreen";
		document.getElementById("lname_war").innerHTML = "Correct";
		return true;
	}
	else{
		document.getElementById("lname_war").style.color = "tomato";
		document.getElementById("lname_war").innerHTML = "Enter 3-25 characters";
		return false;
	}
}

function password_confirm(){//See if the two passwords are same
	var pass1 = document.getElementById("password").value;
	var pass2 = document.getElementById("con_password").value;

	if(pass1 == pass2 && pass1.length > 0){
		document.getElementById("pass_war").style.color = "springgreen";
		document.getElementById("pass_war").innerHTML = "Correct";
		return true;
	}
	else{
		document.getElementById("pass_war").style.color = "tomato";
		document.getElementById("pass_war").innerHTML = "Password should match the previous one";
		return false;
	}
}

function length_check(){//Define length of password
	var password = document.getElementById("password").value;

	if(password.length < 6){
		document.getElementById("pass_war").style.color = "tomato";
		document.getElementById("pass_war").innerHTML = "Atleast 6 characters";
		return false;
	}
}