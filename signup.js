function validateForm() {
	console.log("Validation started..");
	var errors = "";

	var fname = document.getElementById("fname").value;
	if(i=fname== '' || fname == undefined) {
		errors = errors + "Please enter first name <br>";
		}
		
	var lname = document.getElementById("lname").value;
	if(i=lname== '' || lname == undefined) {
		errors = errors + "Please enter last name <br>";
		}
	
	var dob = document.getElementById("dob").value;
	if(i=dob== '' || dob == undefined) {
		errors = errors + "Enter Date of Birth <br>";
		}
		
	var email = document.getElementById("email").value;
	if(i=email== '' || email == undefined) {
		errors = errors + "Enter Email <br>";
		}
		else {
			var emailIdFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(!email.match(emailIdFormat)) {
			errors = errors + "Enter valid email id <br>";
			}
		}
		
	var phone = document.getElementById("phone").value;
	if(phone== '' || phone == undefined) {
		errors = errors + "Enter your phone number. <br>";
	} else {
		var phoneNoFormat = /^\d{10}$/ ;
		if(!phone.match(phoneNoFormat)) {
			errors = errors + "Enter 10 digit valid phone number.<br>";
			}
		}
	
	var female = document.getElementById("female").checked;
	var male = document.getElementById("male").checked;
	if((female == '' || female == undefined) && (male == '' || male == undefined)) {
		errors = errors + "Select your Gender. <br>";
	}
	
	var cloths = document.getElementById("cloths").checked; 
	var electronics = document.getElementById("electronics").checked; 
	var books = document.getElementById("books").checked; 
	
	if( (cloths == '' || cloths == undefined) && 
		(electronics == '' || electronics == undefined) &&
		(books == '' || books == undefined)
	) {
		errors = errors + "Please Select Atleast one hobby.<br>";
	}
	
	var country = document.getElementById("country").value;
	if(country == '' || country == undefined) {
		errors = errors + "Please Select your Home Country.<br>";
	}
	
	var password = document.getElementById("password").value;
	if(password == '' || password == undefined) {
		errors = errors + "Please Enter Password.<br>";
	}
	
	var confirmPassword = document.getElementById("confirmpassword").value;
	if(confirmpassword == '' || confirmpassword == undefined) {
		errors = errors + "Please Enter Confirm Password.<br>";
	}
	
	if(password != '' && password != undefined 
	  && confirmPassword != '' && confirmPassword != undefined) {
		if(password != confirmPassword) {
			errors = errors + "Password and Confirm Passwords are not same.<br>";
		}
	}
	
	var shippingAddress = document.getElementById("shippingAddress").value;
	if(shippingAddress == '' || shippingAddress == undefined) {
		errors = errors + "Please Enter Shipping Address.<br>";
	}
	
	document.getElementById("errors").innerHTML = errors;
	console.log("Validation ended..");
	
	if(errors == "") {
		var successMessage = "Customer Signed Up Successfully...";
		alert(successMessage);
		document.getElementById("successMessage").innerHTML = successMessage;
		clearAllTheFields();
	}
}

function confirmClearFields() {
		if(confirm("Are you sure to delete all field values?")) {
		clearAllTheFields();
		} else {
		// All field remains same..
		}
	}

function clearAllTheFields() {
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("dob").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("female").checked = false;
	document.getElementById("male").checked = false;
	document.getElementById("cloths").checked = false;
	document.getElementById("electronics").checked = false;
	document.getElementById("books").checked = false;
	document.getElementById("country").value = "";
	document.getElementById("password").value = "";
	document.getElementById("confirmPassword").value = "";
	document.getElementById("shippingAddress").value = "";
}
		
		