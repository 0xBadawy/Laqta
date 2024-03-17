

function loginGoogle() {
    var myWindow = window.open("", "MsgWindow", "width=600,height=600");
    myWindow.document.write("login with google");
}

function loginface() {
    var myWindow = window.open("", "MsgWindow", "width=600,height=600");
    myWindow.document.write("login with facebook");
}

function check() {
    var x = document.getElementById("email").value;
    var y = document.getElementById("password").value;
    if (x == "" || y == "") {
        alert("Please fill the details");
        return false;
    }
    else {
        return true;
    }
}

