//    Password Eye

function myLogPassword() {
    var x = document.getElementById('logPassword');
    var y = document.getElementById('eye');
    var z = document.getElementById('eye-slash');

    if(x.type === "password"){
        x.type = "text";
        y.style.opacity = "0";
        z.style.opacity = "1";
    }
    else{
        x.type = "password";
        y.style.opacity = "1";
        z.style.opacity = "0";
    }
}
function myRegPassword(){
    var x = document.getElementById('regPassword');
    var y = document.getElementById('eye-2');
    var z = document.getElementById('eye-slash-2');

    if(x.type === "password"){
        x.type = "text";
        y.style.opacity = "0";
        z.style.opacity = "1";
    }
    else{
        x.type = "password";
        y.style.opacity = "1";
        z.style.opacity = "0";
    }
}

//     Switch Animation

var a = document.getElementById('login');
var b = document.getElementById('reg');
var c = document.getElementById('btn');


function login(){
    a.style.top = '30px';
    b.style.top = '-620px';
    c.style.left = '0';
}

function register(){
    a.style.top = '-620px';
    b.style.top = '30px';
    c.style.left = '50%';
}