

// check form and show notification at SignIn.html
function checkLogin (){
  var sUsername = document.getElementById("username").value;
  var reUsername = /^\w{5,12}$/;
      if(!reUsername.test(sUsername)){
          alert("Username cannot left blank! Username must be between 5-12 characters");
          document.getElementById("username").focus();
          return false;
      }
  var sPassword = document.getElementById("password").value;
  var rePassword = /^\w{5,30}$/;
      if(!rePassword.test(sPassword)){
          alert("Password is not empty! Password must have at least 5 characters.");
          document.getElementById("password").focus();
          return false;
      }    
  var message = new Array()
      message.push("Logged in successfully.");
      message.push("Welcome to Chic Lighting & Design.");
      
      alert(message.join("\n"));
}
// check form and show notification at SignUp.html
function checkRegister (){
    var sUsername = document.getElementById("username").value;
    var reUsername = /^\w{5,12}$/;
        if(!reUsername.test(sUsername)){
            alert("Username cannot left blank! Username must be between 5-12 characters");
            document.getElementById("username").focus();
            return false;
        }
    var sFullname = document.getElementById("fullname").value;
    var sPassword = document.getElementById("password").value;
    var rePassword = /^\w{5,30}$/;
        if(!rePassword.test(sPassword)){
            alert("Password is not empty! Password must have at least 5 characters.");
            document.getElementById("password").focus();
            return false;
        }    
    var sPassword1 = document.getElementById("password1").value;
    var rePassword1 = /^\w{5,30}$/;
        if(!rePassword1.test(sPassword1)){
            alert("Confirmed password and Password must be the same.");
            document.getElementById("password1").focus();
            return false;
        }
    var sMail = document.getElementById("email").value;
    var reMail = /^\w+[@]\w+[.]\w+$/;
        if(!reMail.test(sMail)){
            alert("Email is invalid. Email format is xxxx@xxx.xxx!");
            document.getElementById("email").focus();
            return false;
        }
    var message = new Array()
        message.push("Registered successfully.");
        message.push("--------------------------");
        message.push("Username: " +sUsername);
        message.push("Password: " +sPassword);
        alert(message.join("\n"));
}
// check form and show notification at cart.html
function checkOut (){
    var sName = document.getElementById("name").value;
    var sMail = document.getElementById("email").value;
    var reMail = /^\w+[@]\w+[.]\w+$/;
        if(!reMail.test(sMail)){
            alert("Email is invalid. Email format is xxxx@xxx.xxx!");
            document.getElementById("email").focus();
            return false;
        }
    var sPhone = document.getElementById("phone").value;
    var rePhone = /^\d{8,12}$/;
        if(!rePhone.test(sPhone)){
          alert("Phone cannot left blank! Phone must be between 8-12 numbers.");
          document.getElementById("phone").focus();
          return false;
        }    
    var message = new Array()
        message.push("Thanks for your order");
        alert(message.join("\n"));
  }
      
    