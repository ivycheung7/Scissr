function register() {
    var email = document.getElementById("usermail").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
}

function logIn() {
    var email = document.getElementById("usermail2").value;
    var password = document.getElementById("password2").value;
    if (email == "abc@gmail.com" && password == "password") {
        var valuationUrl = window.location.protocol + "//" + window.location.host + "/about.html";
        alert(valuationUrl);
    }
}
function scrollTo() {
            $('html, body').animate({ scrollTop: $('#reglog').offset().top }, 'slow');
            return false;
        }
