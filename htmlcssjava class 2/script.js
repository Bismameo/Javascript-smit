
function signup() {
    var name = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var phone = document.getElementById("signup-phone").value;
    var pass = document.getElementById("signup-password").value;

    
    if (name == "" || email == "" || phone == "" || pass == "") {
        alert("All fields are required!");
    } else {
        localStorage.setItem("storedName", name);
        localStorage.setItem("storedEmail", email);
        localStorage.setItem("storedPhone", phone);
        localStorage.setItem("storedPass", pass);

        alert("Registration Successful!");
        window.location.href = "login.html";
    }
}


function login() {
    var user = document.getElementById("login-username").value;
    var pass = document.getElementById("login-password").value;

    var savedName = localStorage.getItem("storedName");
    var savedPass = localStorage.getItem("storedPass");
    if (user == savedName && pass == savedPass) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Name or Password!");
    }
}

function showData() {
    var name = localStorage.getItem("storedName");
    var email = localStorage.getItem("storedEmail")
    var nameTag = document.getElementById("username");
    var emailTag = document.getElementById("email");

    if (nameTag != null) {
        nameTag.innerHTML = name;
    }
    if (emailTag != null) {
        emailTag.innerHTML = email;
    }
}
window.onload = showData;
