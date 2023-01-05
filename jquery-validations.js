$(document).ready(function(){
				$("#fullName").keypress(function(e){
					var keyCode = e.keyCode || e.which;
					var regex = /^[A-Za-z. ]+$/;
					var isValid = regex.test(String.fromCharCode(keyCode));
					if(!isValid){
						$("#fullNameError").text("Only Charcters are Allowed..");
						$("#fullNameError").css("color", "red");
					} else {
						$("#fullNameError").text("");
					}
					return isValid;
				});
				
				$("#phoneNumber").keypress(function(e){
					var keyCode = e.keyCode || e.which;
					var regex = /^[0-9]+$/;
					var isValid = regex.test(String.fromCharCode(keyCode));
					if(!isValid){
						$("#phoneNumberError").text("Only Number Allowed..");
						$("#phoneNumberError").css("color", "red");
					} else {
						$("#phoneNumberError").text("");
					}
					return isValid;
				});
			});