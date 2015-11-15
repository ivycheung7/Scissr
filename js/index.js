function register() {
    var email = document.getElementById("usermail").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
}

function logIn() {
    if (document.getElementById("usermail2").value == "abc@gmail.com" && document.getElementById("password2").value == "password") {
        window.location = "about.html";
    }
}
function scrollTo() {
            $('html, body').animate({ scrollTop: $('#reglog').offset().top }, 'slow');
            return false;
        }
