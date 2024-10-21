// check login form and show notification
function checkLogin() {
	var sUsername = document.getElementById("username").value;
	var reUsername = /^\w{5,12}$/;
	if (!reUsername.test(sUsername)) {
		alert(
			"Username cannot left blank! Username must be between 5-12 characters"
		);
		document.getElementById("username").focus();
		return false;
	}
	var sPassword = document.getElementById("password").value;
	var rePassword = /^\w{5,30}$/;
	if (!rePassword.test(sPassword)) {
		alert("Password is not empty! Password must have at least 5 characters.");
		document.getElementById("password").focus();
		return false;
	}
	var message = new Array();
	message.push("Logged in successfully.");
	message.push("Welcome to Chic Lighting & Design.");

	alert(message.join("\n"));
}
// check register form and show notification
function checkRegister() {
	var sUsername = document.getElementById("username").value;
	var reUsername = /^\w{5,12}$/;
	if (!reUsername.test(sUsername)) {
		alert(
			"Username cannot left blank! Username must be between 5-12 characters"
		);
		document.getElementById("username").focus();
		return false;
	}
	var sFullname = document.getElementById("fullname").value;
	var sPassword = document.getElementById("password").value;
	var rePassword = /^\w{5,30}$/;
	if (!rePassword.test(sPassword)) {
		alert("Password is not empty! Password must have at least 5 characters.");
		document.getElementById("password").focus();
		return false;
	}
	var sPassword1 = document.getElementById("password1").value;
	var rePassword1 = /^\w{5,30}$/;
	if (!rePassword1.test(sPassword1)) {
		alert("Confirmed password and Password must be the same.");
		document.getElementById("password1").focus();
		return false;
	}
	var sMail = document.getElementById("email").value;
	var reMail = /^\w+[@]\w+[.]\w+$/;
	if (!reMail.test(sMail)) {
		alert("Email is invalid. Email format is xxxx@xxx.xxx!");
		document.getElementById("email").focus();
		return false;
	}
	var message = new Array();
	message.push("Registered successfully.");
	message.push("--------------------------");
	message.push("Username: " + sUsername);
	message.push("Password: " + sPassword);
	alert(message.join("\n"));
}

// check form and show notification at cart.html
function checkOut() {
	var sName = document.getElementById("name").value;
	var sMail = document.getElementById("email").value;
	var reMail = /^\w+[@]\w+[.]\w+$/;
	if (!reMail.test(sMail)) {
		alert("Email is invalid. Email format is xxxx@xxx.xxx!");
		document.getElementById("email").focus();
		return false;
	}
	var sPhone = document.getElementById("phone").value;
	var rePhone = /^\d{8,12}$/;
	if (!rePhone.test(sPhone)) {
		alert("Phone cannot left blank! Phone must be between 8-12 numbers.");
		document.getElementById("phone").focus();
		return false;
	}
	var message = new Array();
	message.push("Thanks for your order");
	alert(message.join("\n"));
}

// check contact form
function check() {
	var sMail = document.getElementById("mail").value;
	var reMail = /^\w+[@]\w+[.]\w+$/;
	if (!reMail.test(sMail)) {
		alert("Email is invalid. Email format is xxxx@xxx.xxx!");
		document.getElementById("mail").focus();
		return false;
	}
	var sPhone = document.getElementById("phone").value;
	var rePhone = /^\d{8,12}$/;
	if (!rePhone.test(sPhone)) {
		alert("Phone cannot left blank! Phone must be between 8-12 numbers.");
		document.getElementById("phone").focus();
		return false;
	}
	var message = new Array();
	message.push("Information has been sent successfully.");
	alert(message.join("\n"));
}

// Scroll to top
function scrollToTop(duration) {
	const start = document.documentElement.scrollTop || document.body.scrollTop;
	const startTime = performance.now();

	function scrollStep(currentTime) {
			const timeElapsed = currentTime - startTime;
			const progress = Math.min(timeElapsed / duration, 1); 

			// Tính toán vị trí cuộn mới
			const newScrollTop = start * (1 - progress);
			window.scrollTo(0, newScrollTop);

			if (progress < 1) {
					requestAnimationFrame(scrollStep); 
			}
	}

	requestAnimationFrame(scrollStep); 
}

// get product name slug
function getSlug(productName) {
  return productName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '') 
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
}

// get current time
function Time() {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let period = "";
	if (hour >= 12) {
		period = "PM";
	} else {
		period = "AM";
	}
	if (hour == 0) {
		hour = 12;
	} else {
		if (hour > 12) {
			hour = hour - 12;
		}
	}
	hour = update(hour);
	minute = update(minute);
	second = update(second);
	const clockElement = document.getElementById("digital-clock");
	if (clockElement) {
		clockElement.innerText = "" + hour + ":" + minute + ":" + second + " " + period;
	}
	setTimeout(Time, 1000);
}

function update(t) {
	if (t < 10) {
		return "0" + t;
	} else {
		return t;
	}
}

// Ensure Time function runs after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    Time();
});
function update(t) {
	if (t < 10) {
		return "0" + t;
	} else {
		return t;
	}
}
Time();
